import re
import os
import json

def parse_ts_enum_mapping(file_path):
    """Lê o arquivo infos.ts e mapeia dinamicamente TODOS os enums para suas chaves lógicas."""
    mapping = {}
    if not os.path.exists(file_path):
        return mapping
        
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Captura qualquer declaração de enum no arquivo
    enums = re.findall(r'export\s+enum\s+(\w+)\s*\{([^}]+)\}', content)
    for enum_name, enum_body in enums:
        lines = enum_body.split(',')
        for line in lines:
            line = re.sub(r'/\*.*?\*/', '', line).strip()  # Remove comentários JSDoc
            if not line:
                continue
            parts = line.split('=')
            key = parts[0].strip()
            if key:
                mapping[f"{enum_name}.{key}"] = key
    return mapping

def sanitize_internal_quotes(match):
    """
    Função auxiliar para limpar aspas duplas inválidas de dentro dos valores de texto.
    Exemplo: "Sacred "Treasure": Sacred Axe" -> "Sacred 'Treasure': Sacred Axe"
    """
    full_field = match.group(0)  # Ex: "title": "Sacred "Treasure": Sacred Axe"
    key_part, value_part = full_field.split(':', 1)
    
    value_part = value_part.strip()
    # Pega o que está dentro das aspas extremas do valor
    if value_part.startswith('"') and value_part.endswith('"'):
        inner_content = value_part[1:-1]
        # Substitui aspas duplas internas por aspas simples para não quebrar o JSON
        inner_content = inner_content.replace('"', "'")
        return f"{key_part}: \"{inner_content}\""
    
    return full_field

def clean_js_object_string(js_str):
    """Transforma a string do TS em um formato JSON 100% válido, tratando aspas e vírgulas."""
    # 1. Remove comentários de linha
    js_str = re.sub(r'//.*', '', js_str)
    
    # 2. Corrige aspas internas conflitantes em campos de texto (como "Sacred "Treasure"")
    # Captura padrões de chave/valor string: "chave": "valor"
    js_str = re.re_sub = re.sub(r'"\w+"\s*:\s*".*?"(?=\s*[,}\n])', sanitize_internal_quotes, js_str)
    
    # 3. Garante aspas em chaves que por acaso esqueceram (sem duplicar)
    js_str = re.sub(r'(?<!")\b(\w+)\b\s*:', r'"\1":', js_str)
    
    # 4. Remove trailing commas (vírgulas sobressalentes) antes de fechar chaves/colchetes
    js_str = re.sub(r',\s*\}', '}', js_str)
    js_str = re.sub(r',\s*\]', ']', js_str)
    
    return js_str

def parse_heroes_ts(heroes_path, enum_mapping):
    """Faz o parse completo do arquivo heroes.ts substituindo enums e limpando strings."""
    with open(heroes_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Captura a array all_heroes completa
    match = re.search(r'all_heroes\s*:\s*\w+\[\]\s*=\s*\[(.*)\]', content, re.DOTALL)
    if not match:
        raise ValueError("Não foi possível encontrar a constante all_heroes no formato esperado.")
        
    heroes_data_str = match.group(1)
    
    # Substitui TODOS os Enums mapeados por strings puras (incluindo ObtainingType e Raridades)
    # Ordena pelo tamanho da chave decrescente para evitar substituir partes de enums compostos
    for enum_full_path, enum_value in sorted(enum_mapping.items(), key=lambda x: len(x[0]), reverse=True):
        heroes_data_str = re.sub(rf'\b{re.escape(enum_full_path)}\b', f'"{enum_value}"', heroes_data_str)
        
    cleaned_str = clean_js_object_string(heroes_data_str)

    # --- DEBUG: Salva a string tratada em um arquivo para análise antes de tentar o parse ---
    try:
        with open("debug_heroes_output.json", 'w', encoding='utf-8') as debug_file:
            # Envolvemos em colchetes para simular exatamente o que vai para o json.loads
            debug_file.write(f"[{cleaned_str}]")
        print("Arquivo de debug 'debug_heroes_output.json' salvo com sucesso.")
    except Exception as debug_error:
        print(f"Não foi possível salvar o arquivo de debug: {debug_error}")
    # -------------------------------------------------------------------------------------
    
    try:
        # Agora com as aspas internas limpas, o carregamento nativo deve voar!
        return json.loads(f"[{cleaned_str}]")
    except json.JSONDecodeError as e:
        print(f"<> Erro ao converter JSON nativo: {e}. Usando modo de segurança (Fallback)...")
        return parse_heroes_fallback(heroes_data_str)

def parse_heroes_fallback(data_str):
    """Fallback robusto baseado em Regex para objetos complexos com chaves mistas."""
    heroes = []
    
    # Encontra os blocos dos heróis isolando seus respectivos arrays de outfits
    hero_blocks = re.findall(r'\{\s*"?name"?:\s*"([^"]+)"(.*?"outfits"|.*?outfits)\s*:\s*\[(.*?)\]\s*\}', data_str, re.DOTALL)

    for h_name, _, outfits_block in hero_blocks:
        hero = {
            "name": h_name,
            "outfits": []
        }
        
        # Expressão regular para isolar os objetos das roupas respeitando os sub-objetos de infoExclusive/recipe
        outfit_contents = re.findall(r'\{(?:[^{}]|\{[^{}]*\})*\}', outfits_block)
        
        for content in outfit_contents:
            name_m = re.search(r'"?name"?:\s*"([^"]+)"', content)
            if not name_m:
                continue
                
            o_name = name_m.group(1)
            
            # Formatação compacta para achar booleanos sem estresse de espaços
            compact_content = content.replace(" ", "").replace('"', '')
            is_engraved = "isEngraved:true" in compact_content
            
            recipe = None
            if "recipe:null" not in compact_content:
                kit_m = re.search(r'"?kit"?:\s*([^,\s}]+)', content)
                seal_m = re.search(r'"?seal"?:\s*([^,\s}]+)', content)
                metal_m = re.search(r'"?metal"?:\s*([^,\s}]+)', content)
                
                if kit_m or seal_m:
                    recipe = {
                        "kit": kit_m.group(1).replace('"', '').strip() if kit_m else None,
                        "seal": seal_m.group(1).replace('"', '').strip() if seal_m else None,
                        "metal": metal_m.group(1).replace('"', '').strip() if metal_m and metal_m.group(1) != "null" else None
                    }
            
            hero["outfits"].append({
                "name": o_name,
                "isEngraved": is_engraved,
                "recipe": recipe
            })
            
        heroes.append(hero)
    return heroes

def parse_materials_names(materials_path):
    """Mapeia as siglas dos materiais para os nomes reais do materials.ts"""
    mapping = {}
    if not os.path.exists(materials_path):
        return mapping
        
    with open(materials_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    blocks = re.findall(r'\{\s*"?abbreviation"?:\s*([^,\s]+),\s*.*?"?name"?:\s*"([^"]+)"', content, re.DOTALL)
    for abbr, name in blocks:
        clean_abbr = abbr.split('.')[-1].replace('"', '').strip()
        mapping[clean_abbr] = name
    return mapping

if __name__ == "__main__":
    print("Módulo de parser pronto para ser importado pelos demais scripts.")