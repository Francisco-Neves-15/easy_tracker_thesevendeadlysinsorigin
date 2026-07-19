import {
  Model_RecipeKit,
  Model_Seals,
  Model_Metals
} from "./models"

export const all_recipeKits: Model_RecipeKit[] = [
	{
		"id": "liones",
		"rarity": "fine",
		"name": "Liones"
	},
	{
		"id": "thunderous",
		"rarity": "hero",
		"name": "Thunderous (Finest)"
	},
	{
		"id": "fiery-essence",
		"rarity": "hero",
		"name": "Fiery Essence (Finest)"
	},
	{
		"id": "star-guardian",
		"rarity": "legendary",
		"name": "Star Guardian"
	},
	{
		"id": "revived-nightmare",
		"rarity": "legendary",
		"name": "Revived Nightmare"
	},
	{
		"id": "twisted-wish",
		"rarity": "legendary",
		"name": "Twisted Wish"
	},
	{
		"id": "ferocius-watchers",
		"rarity": "legendary",
		"name": "Ferocius Watcher's"
	},
	{
		"id": "corroded-desire",
		"rarity": "legendary",
		"name": "Corroded Desire"
	}
]

export const all_seals: Model_Seals[] = [
	{
		"id": "worm",
		"rarity": "general",
		"name": "Worn Engraving Seal"
	},
	{
		"id": "sturdy",
		"rarity": "hero",
		"name": "Sturdy Engraving Seal"
	},
	{
		"id": "brilliant",
		"rarity": "legendary",
		"name": "Brilliant Engraving Seal"
	}
]

export const all_metals: Model_Metals[] = [
	{
		"id": "enhanced",
		"rarity": "hero",
		"name": "Magic-infused Enhanced Metal"
	}
]
