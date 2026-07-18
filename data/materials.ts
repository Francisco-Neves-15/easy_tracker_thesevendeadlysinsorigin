import {
  Model_RecipeKit,
  Model_Seals,
  Model_Metals
} from "./models"

import {
  RecipeKits,
  RecipeKitRarity,
  Seals,
  SealsRarity,
  Metals,
  MetalsRarity
} from "./infos";

export const all_recipeKits: Model_RecipeKit[] = [
	{
		abbreviation: RecipeKits.l,
		rarity: RecipeKitRarity.fine,
		name: "Liones",
	},
	{
		abbreviation: RecipeKits.th,
		rarity: RecipeKitRarity.hero,
		name: "Thunderous (Finest)",
	},
	{
		abbreviation: RecipeKits.fe,
		rarity: RecipeKitRarity.hero,
		name: "Fiery Essence (Finest)",
	},
	{
		abbreviation: RecipeKits.sg,
		rarity: RecipeKitRarity.legendary,
		name: "Star Guardian",
	},
	{
		abbreviation: RecipeKits.rn,
		rarity: RecipeKitRarity.legendary,
		name: "Revived Nightmare",
	},
	{
		abbreviation: RecipeKits.tw,
		rarity: RecipeKitRarity.legendary,
		name: "Twisted Wish",
	},
	{
		abbreviation: RecipeKits.fw,
		rarity: RecipeKitRarity.legendary,
		name: "Ferocius Watcher's",
	},
	{
		abbreviation: RecipeKits.cd,
		rarity: RecipeKitRarity.legendary,
		name: "Corroded Desire",
	}
]

export const all_seals: Model_Seals[] = [
	{
		abbreviation: Seals.we,
		rarity: SealsRarity.general,
		name: "Worn Engraving Seal",
	},
	{
		abbreviation: Seals.ss,
		rarity: SealsRarity.hero,
		name: "Sturdy Engraving Seal",
	},
	{
		abbreviation: Seals.bs,
		rarity: SealsRarity.legendary,
		name: "Brilliant Engraving Seal",
	}
]

export const all_metals: Model_Metals[] = [
	{
		abbreviation: Metals.em,
		rarity: MetalsRarity.hero,
		name: "Magic-infused Enhanced Metal",
	}
]
