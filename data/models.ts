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

export type ObtainingType = "event" | "banner"
export type ObtainingTypeEvent = "fixedMissions" | "recurringMissions"

// Recipe Kit's ==================================================

export interface Model_RecipeKit {
	id: RecipeKits,
	rarity: RecipeKitRarity,
	name: string,
}

// Seals ==================================================

export interface Model_Seals {
	id: Seals,
	rarity: SealsRarity,
	name: string,
}

// Metals ==================================================

export interface Model_Metals {
	id: Metals,
	rarity: MetalsRarity,
	name: string,
}

// Hero ==================================================

interface Model_InfoExclusive {
  title: string,
  description: string,
  type: ObtainingType,
  typeEvent: ObtainingTypeEvent | null,
}

interface Model_Outfit_Recipe {
  kit: RecipeKits,
  seal: Seals,
  metal: Metals | null,
}

export interface Model_Hero_Outfit {
  id: string,
  name: string,
  rarity: OutfitRarity,
  observation: string | null,
  isDefault: boolean,
  isAppearance: boolean,
  isExclusive: boolean,
  infoExclusive: Model_InfoExclusive | null,
  isEngraved: boolean,
  recipe: Model_Outfit_Recipe | null
}

export interface Model_Hero {
	id: string,
	name: string,
	rarity: HeroRarity,
	observation: string | null,
	outfits: Model_Hero_Outfit[] | null
}

// User
export interface User_Model_Hero_Outfit {
  id: string,
  name: string,
  recipe: Model_Outfit_Recipe,
  acquired: boolean
}

export interface User_Model_Hero {
  id: string,
  name: string,
  acquired: boolean,
  outfits: User_Model_Hero_Outfit[]
}
