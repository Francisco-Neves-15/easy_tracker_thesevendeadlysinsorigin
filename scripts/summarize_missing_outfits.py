import os
import json

STAR_FRAGMENTS_PER_OUTFIT = 500


def _format_number(value):
    return f"{value:,}".replace(",", ".")


def _calculate_star_fragments(base_dir, user_heroes):
    heroes_json_path = os.path.join(base_dir, "data", "all_heroes.json")
    if not os.path.exists(heroes_json_path):
        raise FileNotFoundError("all_heroes.json not found. Run prepare_heroes.py first.")

    with open(heroes_json_path, 'r', encoding='utf-8') as f:
        all_heroes = json.load(f)

    outfits_by_id = {
        outfit["id"]: outfit
        for hero in all_heroes
        for outfit in hero.get("outfits", [])
    }
    categories = {
        "Engraved": {"total": 0, "acquired": 0},
        "Exclusive": {"total": 0, "acquired": 0},
    }

    for hero in user_heroes:
        hero_acquired = hero.get("acquired", False)
        for outfit in hero.get("outfits", []):
            source_outfit = outfits_by_id.get(outfit.get("id"))
            if not source_outfit:
                continue

            acquired = hero_acquired and outfit.get("acquired", False)
            for category, field in (("Engraved", "isEngraved"), ("Exclusive", "isExclusive")):
                if source_outfit.get(field):
                    categories[category]["total"] += STAR_FRAGMENTS_PER_OUTFIT
                    if acquired:
                        categories[category]["acquired"] += STAR_FRAGMENTS_PER_OUTFIT

    return categories


def _write_star_fragments_summary(file_handle, categories):
    total = {
        "total": sum(category["total"] for category in categories.values()),
        "acquired": sum(category["acquired"] for category in categories.values()),
    }

    file_handle.write("==================================================\n")
    file_handle.write("                 Star Fragments                    \n")
    file_handle.write("==================================================\n\n")
    file_handle.write("===========================================================================\n")
    file_handle.write("Star Fragments from Outfits | Total       | Acquired    | Remaining\n")
    file_handle.write("===========================================================================\n")

    for label, category in (*categories.items(), ("Total", total)):
        remaining = category["total"] - category["acquired"]
        file_handle.write(
            f"{label:<27} | {_format_number(category['total']):>11} | "
            f"{_format_number(category['acquired']):>11} | {_format_number(remaining):>11}\n"
        )
    file_handle.write("===========================================================================\n\n")


def generate_outfits_summary():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    user_json_path = os.path.join(base_dir, "user_data.json")
    output_txt = os.path.join(base_dir, "outfits_summary.txt")

    if not os.path.exists(user_json_path):
        print("Error: user_data.json not found.")
        return

    with open(user_json_path, 'r', encoding='utf-8') as f:
        try:
            user_heroes = json.load(f)
        except json.JSONDecodeError as error:
            raise ValueError(f"user_data.json inválido: {error}") from error

    star_fragments = _calculate_star_fragments(base_dir, user_heroes)

    with open(output_txt, 'w', encoding='utf-8') as f:
        _write_star_fragments_summary(f, star_fragments)
        f.write("==================================================\n")
        f.write("        PENDING OUTFITS AND CHARACTERS            \n")
        f.write("==================================================\n\n")

        for hero in user_heroes:
            hero_name = hero.get("name")
            hero_acquired = hero.get("acquired", False)
            
            # Filtering of unacquired clothing items
            missing_outfits = [o for o in hero.get("outfits", []) if not o.get("acquired")]
            
            if not hero_acquired or missing_outfits:
                f.write(f"[Hero]: {hero_name} " + ("(Not Acquired)" if not hero_acquired else "(Acquired)") + "\n")
                if missing_outfits:
                    f.write("  Clothing Pending:\n")
                    for outfit in missing_outfits:
                        recipe = outfit.get("recipe", {})
                        if recipe is not None:
                          kit_info = f" (Kit: {recipe.get('kit')}, Seal: {recipe.get('seal')})"
                        else:
                          kit_info = f" (Appearance Only)"
                        f.write(f"    - {outfit.get('name')}{kit_info}\n")
                else:
                    f.write("  [x] All of this hero's outfits have been acquired.\n")
                f.write("-" * 50 + "\n")

    print(f"-> To-do list generated in: {output_txt}")

if __name__ == "__main__":
    generate_outfits_summary()
