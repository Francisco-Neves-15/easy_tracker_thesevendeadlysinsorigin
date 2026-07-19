"""Strict reading of the TypeScript data files used by the project."""

import json
import re
from pathlib import Path


def _remove_line_comments(source: str) -> str:
    # Remove line comments without affecting content within quotes.
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
        raise ValueError(f"The declaration '{declaration_name}' was not found.")

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

    raise ValueError(f"The list '{declaration_name}' is missing a closing ']'.")


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
    # Converts simple TypeScript keys into quoted JSON keys.
    result = re.sub(r'([,{]\s*)([A-Za-z_$][A-Za-z0-9_$]*)\s*:', r'\1"\2":', source)
    return result, len(re.findall(r'([,{]\s*)([A-Za-z_$][A-Za-z0-9_$]*)\s*:', source))


def parse_ts_array(file_path: Path, declaration_name: str) -> list[dict]:
    # Converts a TypeScript list of literal values into a valid JSON list.
    source = Path(file_path).read_text(encoding="utf-8")
    array_source = _extract_array(_remove_line_comments(source), declaration_name)
    json_source, quoted_keys = _quote_unquoted_keys(array_source)
    json_source, removed_trailing_commas = _remove_trailing_commas(json_source)

    if quoted_keys:
        print(
            f"Warning: {quoted_keys} unquoted key(s) converted when preparing '{Path(file_path).name}'."
        )
    if removed_trailing_commas:
        print(
            f"Warning: {removed_trailing_commas} trailing comma(s) removed while preparing '{Path(file_path).name}'."
        )

    try:
        parsed = json.loads(json_source)
    except json.JSONDecodeError as error:
        raise ValueError(
            f"'{Path(file_path).name}' cannot be converted to valid JSON: "
            f"line {error.lineno}, column {error.colno}: {error.msg}"
        ) from error

    if not isinstance(parsed, list):
        raise ValueError(f"'{declaration_name}' must be a list.")
    return parsed


def parse_heroes_ts(heroes_path: Path) -> list[dict]:
    return parse_ts_array(heroes_path, "all_heroes")


def parse_materials_names(materials_path: Path) -> dict[str, str]:
    # Maps material IDs to their friendly names.
    names = {}
    for declaration in ("all_recipeKits", "all_seals", "all_metals"):
        for material in parse_ts_array(materials_path, declaration):
            material_id = material.get("id")
            material_name = material.get("name")
            if material_id and material_name:
                names[material_id] = material_name
    return names
