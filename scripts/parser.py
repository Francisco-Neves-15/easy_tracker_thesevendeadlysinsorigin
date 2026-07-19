"""Leitura estrita dos arquivos de dados TypeScript usados pelo projeto."""

import json
import re
from pathlib import Path


def _remove_line_comments(source: str) -> str:
    """Remove comentários de linha sem tocar em conteúdo entre aspas."""
    result = []
    in_string = False
    escaped = False
    index = 0

    while index < len(source):
        character = source[index]
        next_character = source[index + 1] if index + 1 < len(source) else ""

        if in_string:
            result.append(character)
            if escaped:
                escaped = False
            elif character == "\\":
                escaped = True
            elif character == '"':
                in_string = False
            index += 1
            continue

        if character == '"':
            in_string = True
            result.append(character)
        elif character == "/" and next_character == "/":
            index = source.find("\n", index)
            if index == -1:
                break
            result.append("\n")
        else:
            result.append(character)
        index += 1

    return "".join(result)


def _extract_array(source: str, declaration_name: str) -> str:
    declaration = re.search(rf"\b{re.escape(declaration_name)}\b[^=]*=\s*\[", source)
    if not declaration:
        raise ValueError(f"Não foi encontrada a declaração '{declaration_name}'.")

    start = declaration.end() - 1
    depth = 0
    in_string = False
    escaped = False

    for index in range(start, len(source)):
        character = source[index]
        if in_string:
            if escaped:
                escaped = False
            elif character == "\\":
                escaped = True
            elif character == '"':
                in_string = False
            continue

        if character == '"':
            in_string = True
        elif character == "[":
            depth += 1
        elif character == "]":
            depth -= 1
            if depth == 0:
                return source[start : index + 1]

    raise ValueError(f"A lista '{declaration_name}' não possui fechamento ']'.")


def _remove_trailing_commas(source: str) -> tuple[str, int]:
    result = []
    in_string = False
    escaped = False
    removed = 0
    index = 0

    while index < len(source):
        character = source[index]
        if in_string:
            result.append(character)
            if escaped:
                escaped = False
            elif character == "\\":
                escaped = True
            elif character == '"':
                in_string = False
            index += 1
            continue

        if character == '"':
            in_string = True
            result.append(character)
            index += 1
            continue

        if character == ",":
            next_index = index + 1
            while next_index < len(source) and source[next_index].isspace():
                next_index += 1
            if next_index < len(source) and source[next_index] in "}]":
                removed += 1
                index += 1
                continue

        result.append(character)
        index += 1

    return "".join(result), removed


def _quote_unquoted_keys(source: str) -> tuple[str, int]:
    """Converte chaves TypeScript simples em chaves JSON entre aspas."""
    result = re.sub(r'([,{]\s*)([A-Za-z_$][A-Za-z0-9_$]*)\s*:', r'\1"\2":', source)
    return result, len(re.findall(r'([,{]\s*)([A-Za-z_$][A-Za-z0-9_$]*)\s*:', source))


def parse_ts_array(file_path: Path, declaration_name: str) -> list[dict]:
    """Converte uma lista TypeScript com valores literais em uma lista JSON válida."""
    source = Path(file_path).read_text(encoding="utf-8")
    array_source = _extract_array(_remove_line_comments(source), declaration_name)
    json_source, quoted_keys = _quote_unquoted_keys(array_source)
    json_source, removed_trailing_commas = _remove_trailing_commas(json_source)

    if quoted_keys:
        print(
            f"Aviso: {quoted_keys} chave(s) sem aspas convertida(s) "
            f"ao preparar '{Path(file_path).name}'."
        )
    if removed_trailing_commas:
        print(
            f"Aviso: {removed_trailing_commas} vírgula(s) final(is) removida(s) "
            f"ao preparar '{Path(file_path).name}'."
        )

    try:
        parsed = json.loads(json_source)
    except json.JSONDecodeError as error:
        raise ValueError(
            f"'{Path(file_path).name}' não pode ser convertido em JSON válido: "
            f"linha {error.lineno}, coluna {error.colno}: {error.msg}"
        ) from error

    if not isinstance(parsed, list):
        raise ValueError(f"'{declaration_name}' deve ser uma lista.")
    return parsed


def parse_heroes_ts(heroes_path: Path) -> list[dict]:
    return parse_ts_array(heroes_path, "all_heroes")


def parse_materials_names(materials_path: Path) -> dict[str, str]:
    """Mapeia os IDs dos materiais para seus nomes amigáveis."""
    names = {}
    for declaration in ("all_recipeKits", "all_seals", "all_metals"):
        for material in parse_ts_array(materials_path, declaration):
            material_id = material.get("id")
            material_name = material.get("name")
            if material_id and material_name:
                names[material_id] = material_name
    return names
