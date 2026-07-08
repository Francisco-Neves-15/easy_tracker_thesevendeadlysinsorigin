import subprocess
import os

def run_all_scripts():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Ordem cronológica ideal de execução
    scripts_to_run = [
        "export_user_data.py",
        "summarize_materials.py",
        "summarize_missing_outfits.py"
    ]    

    print("=== INICIANDO PIPELINE DE RASTREAMENTO (7DS ORIGINS) ===")
    for script in scripts_to_run:
        script_path = os.path.join(current_dir, script)
        print(f"Executando {script}...")
        
        result = subprocess.run(["python", script_path], capture_output=True, text=True)
        
        if result.returncode == 0:
            print(result.stdout.strip())
        else:
            print(f"❌ Erro ao rodar {script}:")
            print(result.stderr)
            break
    print("=== PIPELINE FINALIZADO CONCLUÍDO ===")

if __name__ == "__main__":
    run_all_scripts()