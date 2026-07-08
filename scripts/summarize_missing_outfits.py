import os
import json

def generate_outfits_summary():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    user_json_path = os.path.join(base_dir, "user_data.json")
    output_txt = os.path.join(base_dir, "outfits_summary.txt")

    if not os.path.exists(user_json_path):
        print("Erro: user_data.json não encontrado.")
        return

    with open(user_json_path, 'r', encoding='utf-8') as f:
        user_heroes = json.load(f)

    with open(output_txt, 'w', encoding='utf-8') as f:
        f.write("==================================================\n")
        f.write("        ROUPAS E PERSONAGENS PENDENTES            \n")
        f.write("==================================================\n\n")

        for hero in user_heroes:
            hero_name = hero.get("name")
            hero_acquired = hero.get("acquired", False)
            
            # Filtragem de roupas não adquiridas
            missing_outfits = [o for o in hero.get("outfits", []) if not o.get("acquired")]
            
            if not hero_acquired or missing_outfits:
                f.write(f"[Herói]: {hero_name} " + ("(Não Adquirido)" if not hero_acquired else "(Adquirido)") + "\n")
                if missing_outfits:
                    f.write("  Roupas Pendentes de Gravação:\n")
                    for outfit in missing_outfits:
                        recipe = outfit.get("recipe", {})
                        kit_info = f" (Kit: {recipe.get('kit')}, Seal: {recipe.get('seal')})"
                        f.write(f"    - {outfit.get('name')}{kit_info}\n")
                else:
                    f.write("  [x] Todas as roupas gravadas deste herói foram adquiridas!\n")
                f.write("-" * 50 + "\n")

    print(f"-> Lista de pendências gerada em: {output_txt}")

if __name__ == "__main__":
    generate_outfits_summary()