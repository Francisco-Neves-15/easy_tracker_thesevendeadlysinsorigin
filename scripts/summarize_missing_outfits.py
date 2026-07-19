import os
import json

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

    with open(output_txt, 'w', encoding='utf-8') as f:
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
