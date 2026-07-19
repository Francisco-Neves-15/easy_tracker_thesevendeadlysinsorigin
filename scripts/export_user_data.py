"""Cria ou atualiza o progresso do usuário sem perder aquisições existentes."""

import json
from pathlib import Path

from parser import parse_heroes_ts


def _load_existing_data(file_path: Path) -> dict[str, dict]:
    if not file_path.exists():
        return {}
    try:
        heroes = json.loads(file_path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as error:
        raise ValueError(f"'{file_path.name}' é inválido: {error}") from error
    return {hero.get("id") or hero["name"]: hero for hero in heroes}


def generate_user_data(base_dir: Path | None = None) -> Path:
    base_dir = base_dir or Path(__file__).resolve().parents[1]
    heroes_path = base_dir / "data" / "heroes.ts"
    output_path = base_dir / "user_data.json"
    existing_data = _load_existing_data(output_path)
    user_heroes = []

    for hero in parse_heroes_ts(heroes_path):
        hero_id = hero.get("id")
        hero_name = hero.get("name")
        if not hero_id or not hero_name:
            raise ValueError("Todo herói precisa de 'id' e 'name'. Execute prepare_heroes.py.")
        old_hero = existing_data.get(hero_id, existing_data.get(hero_name, {}))
        old_outfits = {
            outfit.get("id") or outfit["name"]: outfit
            for outfit in old_hero.get("outfits", [])
        }
        outfits = []

        for outfit in hero.get("outfits") or []:
            if not (outfit.get("isEngraved") and outfit.get("recipe")):
                continue
            outfit_id = outfit.get("id")
            outfit_name = outfit.get("name")
            if not outfit_id or not outfit_name:
                raise ValueError("Toda roupa gravável precisa de 'id' e 'name'.")
            old_outfit = old_outfits.get(outfit_id, old_outfits.get(outfit_name, {}))
            outfits.append({
                "id": outfit_id,
                "name": outfit_name,
                "recipe": outfit["recipe"],
                "acquired": old_outfit.get("acquired", False),
            })

        if outfits:
            user_heroes.append({
                "id": hero_id,
                "name": hero_name,
                "acquired": old_hero.get("acquired", False),
                "outfits": outfits,
            })

    output_path.write_text(json.dumps(user_heroes, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"-> user_data.json atualizado: {output_path}")
    return output_path


if __name__ == "__main__":
    generate_user_data()
