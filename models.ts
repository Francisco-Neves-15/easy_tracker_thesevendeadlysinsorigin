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

// Infos

export enum ObtainingType { event, banner }
export enum ObtainingTypeEvent { fixedMissions, recurringMissions }

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

export interface Model_Hero_Outfit {
  name: string,
  rarity: OutfitRarity,
  observation: string | null,
  isDefault: boolean,
  isAppearance: boolean,
  isExclusive: boolean,
  infoExclusive: {
    title: string,
    description: string,
    type: ObtainingType,
    typeEvent: ObtainingTypeEvent | null,
  } | null,
  isEngraved: boolean,
  recipe: {
    kit: RecipeKits,
    seal: Seals,
    metal: Metals | null,
  } | null
}

export interface Model_Hero {
	name: string,
	rarity: HeroRarity,
	observation: string | null,
	outfits: Model_Hero_Outfit[] | null
}

// User
// 	acquired: boolean
