"""Complete pipeline for report preparation and generation."""

from prepare_heroes import prepare_heroes
from export_user_data import generate_user_data
from summarize_materials import generate_materials_summary
from summarize_missing_outfits import generate_outfits_summary


def run_all_scripts() -> None:
    print("=== STARTING TRACKING PIPELINE (7DS ORIGINS) ===")
    prepare_heroes()
    generate_user_data()
    generate_materials_summary()
    generate_outfits_summary()
    print("=== PIPELINE SUCCESSFULLY COMPLETED ===")


if __name__ == "__main__":
    run_all_scripts()
