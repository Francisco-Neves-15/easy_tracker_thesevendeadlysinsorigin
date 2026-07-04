import {
  HeroRarity,
  OutfitRarity,
  RecipeKits,
  RecipeKitRarity,
  Seals,
  SealsRarity,
  Metals,
  MetalsRarity
} from "./infos";

// Recipe Kit's ==================================================

export interface Model_RecipeKit {
	abbreviation: RecipeKits,
	rarity: RecipeKitRarity,
	name: string,
}

// Seals ==================================================

export interface Model_Seals {
	abbreviation: Seals,
	rarity: SealsRarity,
	name: string,
}

// Metals ==================================================

export interface Model_Metals {
	abbreviation: Metals,
	rarity: MetalsRarity,
	name: string,
}

// Hero ==================================================

export interface Model_Hero {
	name: string,
	rarity: HeroRarity,
	observation: string,
	acquired: boolean,
	outfits: [
		{
			name: string,
			rarity: OutfitRarity,
			observation: string,
			isDefault: boolean,
			isPaid: boolean,
			isEngraved: boolean,
			recipe: {
				kit: RecipeKits,
				seal: Seals,
				metal: Metals,
			}
		}
	]
}
