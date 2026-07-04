```ts

enum HeroRarity = { legendary, hero }
enum OutfitRarity = { legendary, hero, rare }
enum RecipeKitRarity = { legendary, hero, rare, fine }
enum RecipeKits = { l, tt, fe, sg, rn, tw, fw }
enum Seals = { we, ss, bs }
enum Metals = { em }

// recipe kits info
interface model_RecipeKit = [
	{
		abbreviation: OutfitRarity,
		name: string,
		rarity: RecipeKitRarity,
	}
]

interface model_Hero = {
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
			rarity: OutfitRarity.rare,
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
				seal: Seals,
				metal: Metals,
			}
		},
	]
}

```

Tristan
-  , Formal Attire, Royal Dignity, Prince's Adventure, Prince's Vow