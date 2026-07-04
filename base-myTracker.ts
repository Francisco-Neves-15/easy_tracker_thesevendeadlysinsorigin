enum GameRaritys { legendary, hero, rare, fine, general }

enum HeroRarity { legendary, hero }
enum OutfitRarity { legendary, hero, other }

enum RecipeKitsParts { top, bottoms, belt, boots }
enum RecipeKits {
	/** Liones */ l,
	/** Thunderous (Finest) */ th,
	/** Fiery Essence (Finest) */ fe,
	/** Star Guardian */ sg,
	/** Revived Nightmare */ rn,
	/** Twisted Wish */ tw,
	/** Ferocius Watcher's */ fw
}
enum RecipeKitRarity { legendary, hero, fine }

enum Seals {
	/** Worn Engraving Seal */ we,
	/** Sturdy Engraving Seal */ ss,
	/** Brilliant Engraving */ bs
}
enum SealsRarity { legendary, hero, general }

enum Metals {
  /** Enhanced Metal */ em,
}
enum MetalsRarity { hero }

// Recipe Kit's ==================================================

interface Model_RecipeKit {
	abbreviation: RecipeKits,
	rarity: RecipeKitRarity,
	name: string,
}
const all_recipeKits: Model_RecipeKit[] = [
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
]


// Seals ==================================================

interface Model_Seals {
	abbreviation: Seals,
	rarity: SealsRarity,
	name: string,
}
const all_seals: Model_Seals[] = [
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

// Metals ==================================================

interface Model_Metals {
	abbreviation: Metals,
	rarity: MetalsRarity,
	name: string,
}
const all_metals: Model_Metals[] = [
	{
		abbreviation: Metals.em,
		rarity: MetalsRarity.hero,
		name: "Magic-infused Enhanced Metal",
	}
]

// Hero ==================================================

interface model_Hero {
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

// E.g:

const hero = {
	name: "Tristan",
	rarity: HeroRarity.hero,
	observation: null,
	acquired: true,
	outfits: [
		{
			name: "Little Prince",
			rarity: OutfitRarity.other,
			observation: null,
			isDefault: true,
			isPaid: false,
			isEngraved: true,
			recipe: null
		},
		{
			name: "Prince's Training Outfit",
			rarity: OutfitRarity.hero,
			observation: "Tutorial Outfit",
			isDefault: false,
			isPaid: false,
			isEngraved: true,
			recipe: {
				kit: RecipeKits.l,
				seal: Seals.we,
				metal: null,
			}
		},
		{
			name: "Formal Attire",
			rarity: OutfitRarity.hero,
			observation: null,
			isDefault: false,
			isPaid: false,
			isEngraved: true,
			recipe: {
				kit: RecipeKits.fe,
				seal: Seals.ss,
				metal: null,
			}
		},
		{
			name: "Royal Dignity",
			rarity: OutfitRarity.legendary,
			observation: null,
			isDefault: false,
			isPaid: false,
			isEngraved: true,
			recipe: {
				kit: RecipeKits.sg,
				seal: Seals.bs,
				metal: Metals.em,
			}
		},
		{
			name: "Prince's Adventure",
			rarity: OutfitRarity.legendary,
			observation: null,
			isDefault: false,
			isPaid: false,
			isEngraved: true,
			recipe: {
				kit: RecipeKits.rn,
				seal: Seals.bs,
				metal: Metals.em,
			}
		},
		{
			name: "Prince's Vow",
			rarity: OutfitRarity.legendary,
			observation: null,
			isDefault: false,
			isPaid: false,
			isEngraved: true,
			recipe: {
				kit: RecipeKits.tw,
				seal: Seals.bs,
				metal: Metals.em,
			}
		},
		{
			name: "Test Paid Outfit",
			rarity: OutfitRarity.other,
			observation: null,
			isDefault: false,
			isPaid: true,
			isEngraved: false,
			recipe: null
		},
	]
}
