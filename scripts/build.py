"""Pipeline completo de preparação e geração dos relatórios."""

from prepare_heroes import prepare_heroes
from export_user_data import generate_user_data
from summarize_materials import generate_materials_summary
from summarize_missing_outfits import generate_outfits_summary


def run_all_scripts() -> None:
    print("=== INICIANDO PIPELINE DE RASTREAMENTO (7DS ORIGINS) ===")
    prepare_heroes()
    generate_user_data()
    generate_materials_summary()
    generate_outfits_summary()
    print("=== PIPELINE FINALIZADO COM SUCESSO ===")


if __name__ == "__main__":
    run_all_scripts()
