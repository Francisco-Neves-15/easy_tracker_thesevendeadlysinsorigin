import os
import json
from parser import parse_materials_names

def generate_materials_summary():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    materials_path = os.path.join(base_dir, "data", "materials.ts")
    user_json_path = os.path.join(base_dir, "user_data.json")
    output_txt = os.path.join(base_dir, "materials_summary.txt")

    if not os.path.exists(user_json_path):
        print("Erro: user_data.json não encontrado. Execute o export_user_data.py primeiro.")
        return

    # 1. Carrega os nomes reais mapeados
    mat_names = parse_materials_names(materials_path)
    
    with open(user_json_path, 'r', encoding='utf-8') as f:
        try:
            user_heroes = json.load(f)
        except json.JSONDecodeError as error:
            raise ValueError(f"user_data.json inválido: {error}") from error

    # Estrutura para consolidação: { 'key': {'total': 0, 'missing': 0} }
    summary = {}

    def add_to_summary(mat_type, key, is_missing):
        if not key or key == "null": return
        # Usa o nome amigável do item se houver, caso contrário mantém o ID.
        display_name = mat_names.get(key, key)
        
        if display_name not in summary:
            summary[display_name] = {"total": 0, "missing": 0}
        
        summary[display_name]["total"] += 1
        if is_missing:
            summary[display_name]["missing"] += 1

    # 2. Varre o JSON calculando os totais e restantes
    for hero in user_heroes:
        # Se o próprio herói não foi adquirido, suas roupas contam como faltantes
        hero_acquired = hero.get("acquired", False)
        
        for outfit in hero.get("outfits", []):
            outfit_acquired = outfit.get("acquired", False)
            
            # Falta se o herói não foi pego OU se a roupa em si não foi pega
            is_missing = not (hero_acquired and outfit_acquired)
            
            recipe = outfit.get("recipe", {})
            if recipe:
                add_to_summary("RecipeKits", recipe.get("kit"), is_missing)
                add_to_summary("Seals", recipe.get("seal"), is_missing)
                add_to_summary("Metals", recipe.get("metal"), is_missing)

    # 3. Escreve o relatório formatado em TXT
    with open(output_txt, 'w', encoding='utf-8') as f:
        f.write("==================================================\n")
        f.write("        RESUMO GERAL DE MATERIAIS - 7DS ORIGINS   \n")
        f.write("==================================================\n\n")
        
        f.write(f"{'Item (Material)':<40} | {'Total':<6} | {'Adquiridos':<10} | {'Restantes':<9}\n")
        f.write("-" * 75 + "\n")
        
        for name, counts in sorted(summary.items()):
            total = counts["total"]
            remaining = counts["missing"]
            acquired = total - remaining
            f.write(f"{name:<40} | {total:<6} | {acquired:<10} | {remaining:<9}\n")

    print(f"-> Relatório gerado com sucesso em: {output_txt}")

if __name__ == "__main__":
    generate_materials_summary()
