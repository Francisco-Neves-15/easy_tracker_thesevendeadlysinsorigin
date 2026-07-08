import re
import os
import json

def parse_ts_enum_mapping(file_path):
    """
    Lê o arquivo infos.ts e mapeia os enums para seus nomes lógicos.
    Exemplo: RecipeKits.l -> 'l'
    """
    mapping = {}
    if not os.path.exists(file_path):
        return mapping
        
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Encontra blocos de enum
    enums = re.findall(r'export\s+enum\s+(\w+)\s*\{([^}]+)\}', content)
    for enum_name, enum_body in enums:
        # Encontra os campos do enum, limpando comentários e espaços
        # Captura padrões como /** Liones */ l, ou apenas l
        lines = enum_body.split(',')
        for line in lines:
            line = re.sub(r'/\*.*?\*/', '', line).strip() # Remove comentários de bloco
            if not line:
                continue
            
            # Se tiver atribuição explícita (ex: x = 1), pega a chave
            parts = line.split('=')
            key = parts[0].strip()
            if key:
                mapping[f"{enum_name}.{key}"] = key
    return mapping

def clean_js_object_string(js_str):
    """
    Transforma uma string que representa um objeto/array JS em um formato
    mais próximo de um JSON para facilitar a conversão secundária.
    """
    # Remove comentários de linha (// Tristan)
    js_str = re.sub(r'//.*', '', js_str)
    
    # Adiciona aspas nas chaves não quotadas (ex: name: -> "name":)
    js_str = re.sub(r'(\w+)\s*:', r'"\1":', js_str)
    
    # Substitui null por null do json (compatível)
    # Garante que booleanos fiquem em lowercase para o JSON
    js_str = re.sub(r':\s*true', ': true', js_str)
    js_str = re.sub(r':\s*false', ': false', js_str)
    
    return js_str

def parse_heroes_ts(heroes_path, enum_mapping):
    """
    Faz o parse do arquivo heroes.ts substituindo as chamadas de Enum e estruturando os dados.
    """
    with open(heroes_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Captura tudo dentro de all_heroes = [ ... ]
    match = re.search(r'all_heroes\s*:\s*\w+\[\]\s*=\s*\[(.*)\]', content, re.DOTALL)
    if not match:
        raise ValueError("Não foi possível encontrar a constante all_heroes no formato esperado.")
        
    heroes_data_str = match.group(1)
    
    # Substitui os Enums mapeados por strings puras para virar um JSON válido
    # Exemplo: RecipeKits.l vira "l"
    for enum_full_path, enum_value in enum_mapping.items():
        # Captura o enum isolado evitando substituições parciais
        heroes_data_str = re.sub(rf'\b{re.escape(enum_full_path)}\b', f'"{enum_value}"', heroes_data_str)
        
    # Trata a string para adequar chaves e formatação ao padrão JSON
    cleaned_str = clean_js_object_string(heroes_data_str)
    
    # Envolve em um array válido de JSON para carregar
    try:
        heroes_list = json.loads(f"[{cleaned_str}]")
        return heroes_list
    except json.JSONDecodeError as e:
        print(f"Erro ao decodificar a estrutura tratada dos Heróis: {e}")
        # Retorna um fallback manual via regex caso o JSON falhe por sintaxes complexas do TS
        return parse_heroes_fallback(heroes_data_str)

def parse_heroes_fallback(data_str):
    """
    Fallback robusto baseado em blocos para extrair os heróis se o json.loads falhar 
    devido a trailing commas ou formatações específicas do arquivo .ts.
    """
    heroes = []
    # Divide por blocos de heróis principais (assumindo a estrutura base que você enviou)
    hero_blocks = re.findall(r'\{\s*name:\s*"([^"]+)",\s*rarity:\s*([^,\s]+),.*?outfits:\s*\[(.*?)\]\s*\}', data_str, re.DOTALL)
    
    for h_name, h_rarity, outfits_block in hero_blocks:
        hero = {
            "name": h_name,
            "rarity": h_rarity.replace('"', ''),
            "outfits": []
        }
        
        # Encontra os blocos de roupas dentro do herói
        outfit_matches = re.findall(r'\{\s*name:\s*"([^"]+)",.*?isEngraved:\s*(true|false),.*?recipe:\s*(\{.*?\}|null)', outfits_block, re.DOTALL)
        
        for o_name, is_engraved, recipe_block in outfit_matches:
            outfit = {
                "name": o_name,
                "isEngraved": is_engraved == "true",
                "recipe": None
            }
            
            if "null" not in recipe_block and recipe_block.strip():
                # Extrai os dados internos do recipe kit, seal, metal
                kit_m = re.search(r'kit:\s*"([^"]+)"', recipe_block)
                seal_m = re.search(r'seal:\s*"([^"]+)"', recipe_block)
                metal_m = re.search(r'metal:\s*"([^"]+)"', recipe_block)
                
                outfit["recipe"] = {
                    "kit": kit_m.group(1) if kit_m else None,
                    "seal": seal_m.group(1) if seal_m else None,
                    "metal": metal_m.group(1) if metal_m and metal_m.group(1) != "null" else None
                }
            hero["outfits"].append(outfit)
            
        heroes.append(hero)
    return heroes

def parse_materials_names(materials_path):
    """
    Mapeia as abreviações dos kits (ex: 'l', 'th') para os nomes reais (ex: 'Liones')
    lendo o arquivo materials.ts.
    """
    mapping = {}
    if not os.path.exists(materials_path):
        return mapping
        
    with open(materials_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Encontra blocos de objetos contendo abbreviation e name
    blocks = re.findall(r'\{\s*abbreviation:\s*([^,\s]+),\s*.*?name:\s*"([^"]+)"', content, re.DOTALL)
    for abbr, name in blocks:
        # Limpa possíveis chamadas de enum residuais do parser de strings (ex: RecipeKits.l -> l)
        clean_abbr = abbr.split('.')[-1]
        mapping[clean_abbr] = name
    return mapping

if __name__ == "__main__":
    print("Módulo de parser pronto para ser importado pelos demais scripts.")