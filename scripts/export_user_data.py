import os
import json
from parser import parse_ts_enum_mapping, parse_heroes_ts

def generate_user_data():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    infos_path = os.path.join(base_dir, "data", "infos.ts")
    heroes_path = os.path.join(base_dir, "data", "heroes.ts")
    output_json = os.path.join(base_dir, "user_data.json")

    # 1. Carrega dados estruturados do TS
    enum_mapping = parse_ts_enum_mapping(infos_path)
    raw_heroes = parse_heroes_ts(heroes_path, enum_mapping)

    # 2. Se já existir um progresso salvo, carrega para não sobrescrever o que já foi marcado
    existing_data = {}
    if os.path.exists(output_json):
        with open(output_json, 'r', encoding='utf-8') as f:
            try:
                old_list = json.load(f)
                existing_data = {h["name"]: h for h in old_list}
            except json.JSONDecodeError:
                pass

    user_heroes = []

    # 3. Monta a nova estrutura filtrada
    for hero in raw_heroes:
        hero_name = hero.get("name")
        # Verifica se o herói já existia no progresso anterior
        old_hero = existing_data.get(hero_name, {})
        
        # Filtra apenas outfits gravadas (isEngraved) e que têm receita
        user_outfits = []
        for outfit in hero.get("outfits", []):
            if outfit.get("isEngraved") and outfit.get("recipe"):
                outfit_name = outfit.get("name")
                
                # Resgata o status antigo se existir, senão define como false
                old_outfits_dict = {o["name"]: o for o in old_hero.get("outfits", [])}
                was_acquired = old_outfits_dict.get(outfit_name, {}).get("acquired", False)

                user_outfits.append({
                    "name": outfit_name,
                    "recipe": outfit.get("recipe"),
                    "acquired": was_acquired
                })

        # Só adiciona o herói se ele tiver alguma outfit gravada para monitorar
        if user_outfits:
            user_heroes.append({
                "name": hero_name,
                "acquired": old_hero.get("acquired", False),
                "outfits": user_outfits
            })

    # 4. Salva o arquivo JSON atualizado
    with open(output_json, 'w', encoding='utf-8') as f:
        json.dump(user_heroes, f, indent=2, ensure_ascii=False)
    print(f"-> user_data.json atualizado com sucesso em: {output_json}")

if __name__ == "__main__":
    generate_user_data()