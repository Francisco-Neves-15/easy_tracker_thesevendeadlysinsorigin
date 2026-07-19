"""Exporta all_heroes como JSON válido e normaliza os IDs em heroes.ts."""

import json
import re
import unicodedata
from pathlib import Path

from parser import parse_heroes_ts


def resolve_name(value: str) -> str:
    normalized = unicodedata.normalize("NFKD", value)
    normalized = "".join(character for character in normalized if not unicodedata.combining(character))
    normalized = normalized.lower()
    normalized = re.sub(r"[^a-z0-9]+", "_", normalized)
    return normalized.strip("_")


def normalize_hero_ids(heroes: list[dict]) -> None:
    for hero_index, hero in enumerate(heroes):
        hero_name = hero.get("name")
        resolved_hero_name = resolve_name(hero_name or "")
        if not resolved_hero_name:
            raise ValueError("Há um herói sem nome; não é possível gerar seu ID.")
        hero_id = f"hero-{resolved_hero_name}"

        normalized_outfits = []
        for position, outfit in enumerate(hero.get("outfits") or [], start=1):
            outfit_name = outfit.get("name")
            resolved_outfit_name = resolve_name(outfit_name or "")
            if not resolved_outfit_name:
                if outfit.get("isDefault"):
                    resolved_outfit_name = "default"
                    print(
                        f"Aviso: a roupa padrão #{position} de '{hero_name}' não possui nome; "
                        "foi usado 'default' no ID."
                    )
                else:
                    raise ValueError(
                        f"A roupa #{position} de '{hero_name}' não possui nome; não é possível gerar seu ID."
                    )
            outfit_id = f"outfit-{resolved_hero_name}-{resolved_outfit_name}"
            normalized_outfits.append({
                "id": outfit_id,
                **{key: value for key, value in outfit.items() if key != "id"},
            })

        heroes[hero_index] = {
            "id": hero_id,
            **{
                key: value
                for key, value in hero.items()
                if key not in {"id", "outfits"}
            },
            "outfits": normalized_outfits,
        }


def write_heroes_ts(file_path: Path, heroes: list[dict]) -> None:
    contents = 'import { Model_Hero } from "./models";\n\n'
    contents += "export const all_heroes: Model_Hero[] = "
    contents += json.dumps(heroes, indent=2, ensure_ascii=False)
    contents += ";\n"
    file_path.write_text(contents, encoding="utf-8")


def prepare_heroes(base_dir: Path | None = None) -> Path:
    base_dir = base_dir or Path(__file__).resolve().parents[1]
    heroes_path = base_dir / "data" / "heroes.ts"
    output_path = base_dir / "data" / "all_heroes.json"
    heroes = parse_heroes_ts(heroes_path)
    normalize_hero_ids(heroes)
    write_heroes_ts(heroes_path, heroes)
    output_path.write_text(json.dumps(heroes, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    # Reabre o arquivo produzido para garantir que o artefato é JSON válido.
    json.loads(output_path.read_text(encoding="utf-8"))
    print(f"-> all_heroes.json validado e salvo: {output_path}")
    return output_path


if __name__ == "__main__":
    prepare_heroes()
