import { HeroRarity, OutfitRarity, RecipeKits, Seals, Metals } from "./infos";

const all_heroes = [
  {
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
]