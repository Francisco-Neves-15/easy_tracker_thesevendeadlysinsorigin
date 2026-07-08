import { Model_Hero, ObtainingType, ObtainingTypeEvent } from "./models";
import { HeroRarity, OutfitRarity, RecipeKits, Seals, Metals } from "./infos";

export const all_heroes: Model_Hero[] = [
  {
    "name": "Tristan",
    "rarity": HeroRarity.hero,
    "observation": null,
    "outfits": [
      {
        "name": "Little Prince",
        "rarity": OutfitRarity.rare,
        "observation": null,
        "isDefault": true,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "Prince's Training Outfit",
        "rarity": OutfitRarity.hero,
        "observation": "Tutorial Outfit",
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.l,
          "seal": Seals.we,
          "metal": null
        }
      },
      {
        "name": "Formal Attire",
        "rarity": OutfitRarity.hero,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.fe,
          "seal": Seals.ss,
          "metal": null
        }
      },
      {
        "name": "Royal Dignity",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.sg,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Prince's Adventure",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.rn,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Prince's Vow",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.tw,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      }
    ]
  },
  {
    "name": "Tioreh",
    "rarity": HeroRarity.hero,
    "observation": null,
    "outfits": [
      {
        "name": "Adorable Fairy",
        "rarity": OutfitRarity.rare,
        "observation": null,
        "isDefault": true,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "Casual Outing",
        "rarity": OutfitRarity.hero,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.fe,
          "seal": Seals.ss,
          "metal": null
        }
      },
      {
        "name": "Daughter of the Forest and Earth",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.sg,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Adventure's Beginning",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.rn,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Fairy's Protection",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.tw,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      }
    ]
  },
  {
    "name": "Gilthunder",
    "rarity": HeroRarity.hero,
    "observation": null,
    "outfits": [
      {
        "name": "Young Holy Knight",
        "rarity": OutfitRarity.rare,
        "observation": null,
        "isDefault": true,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "Exemplary Holy Knight",
        "rarity": OutfitRarity.hero,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.fe,
          "seal": Seals.ss,
          "metal": null
        }
      },
      {
        "name": "Holy Knight of Lightning",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.sg,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Exemplary Adventure",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.rn,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      }
    ]
  },
  {
    "name": "Howzer",
    "rarity": HeroRarity.hero,
    "observation": null,
    "outfits": [
      {
        "name": "Trusted Grandmaster",
        "rarity": OutfitRarity.rare,
        "observation": null,
        "isDefault": true,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "End-of-Day Mug of Ale",
        "rarity": OutfitRarity.hero,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.fe,
          "seal": Seals.ss,
          "metal": null
        }
      },
      {
        "name": "Holy Knight of Storms",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.sg,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Secure Adventure",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.rn,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      }
    ]
  },
  {
    "name": "Dredrin",
    "rarity": HeroRarity.hero,
    "observation": null,
    "outfits": [
      {
        "name": "Friendly Apprentice Holy Knight",
        "rarity": OutfitRarity.rare,
        "observation": null,
        "isDefault": true,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "A Nice Day Off",
        "rarity": OutfitRarity.hero,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.fe,
          "seal": Seals.ss,
          "metal": null
        }
      },
      {
        "name": "Descendant of Royalty",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.sg,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Thorough Preparation",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.rn,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Solid Defense",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.tw,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      }
    ]
  },
  {
    "name": "Bug",
    "rarity": HeroRarity.hero,
    "observation": null,
    "outfits": [
      {
        "name": "Shy Demon",
        "rarity": OutfitRarity.rare,
        "observation": null,
        "isDefault": true,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "Demon's Outing",
        "rarity": OutfitRarity.hero,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.fe,
          "seal": Seals.ss,
          "metal": null
        }
      },
      {
        "name": "Shadow Walk",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.sg,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Demon's Stealth",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.rn,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      }
    ]
  },
  {
    "name": "Elaine",
    "rarity": HeroRarity.legendary,
    "observation": null,
    "outfits": [
      {
        "name": "Guardian Saint of the Fountain of Youth",
        "rarity": OutfitRarity.rare,
        "observation": null,
        "isDefault": true,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "Temp Employee",
        "rarity": OutfitRarity.hero,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.th,
          "seal": Seals.ss,
          "metal": null
        }
      },
      {
        "name": "Guiding Light",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.sg,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Cheerful Outing",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.rn,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      }
    ]
  },
  {
    "name": "Dreyfus",
    "rarity": HeroRarity.hero,
    "observation": null,
    "outfits": [
      {
        "name": "Kingdom Sword Art Instructor",
        "rarity": OutfitRarity.rare,
        "observation": null,
        "isDefault": true,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "Royal Butler",
        "rarity": OutfitRarity.hero,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.fe,
          "seal": Seals.ss,
          "metal": null
        }
      },
      {
        "name": "Old Soldier's Honor",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.sg,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Simple Attire",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.rn,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Honorable Knight",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.fw,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      }
    ]
  },
  {
    "name": "Hendrickson",
    "rarity": HeroRarity.hero,
    "observation": null,
    "outfits": [
      {
        "name": "Liones Apothecary",
        "rarity": OutfitRarity.rare,
        "observation": null,
        "isDefault": true,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "Romantic Gray",
        "rarity": OutfitRarity.hero,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.fe,
          "seal": Seals.ss,
          "metal": null
        }
      },
      {
        "name": "A Suit From Younger Days",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.sg,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Apothecary's Workwear",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.rn,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Returned Holy Knight",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.fw,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      }
    ]
  },
  {
    "name": "Slater",
    "rarity": HeroRarity.hero,
    "observation": null,
    "outfits": [
      {
        "name": "Veteran Holy Knight",
        "rarity": OutfitRarity.rare,
        "observation": null,
        "isDefault": true,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "Loyal Friend",
        "rarity": OutfitRarity.hero,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.fe,
          "seal": Seals.ss,
          "metal": null
        }
      },
      {
        "name": "Sword of the Old King",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.sg,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Secret Mission",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.rn,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Total Readiness",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.tw,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      }
    ]
  },
  {
    "name": "Guila",
    "rarity": HeroRarity.legendary,
    "observation": null,
    "outfits": [
      {
        "name": "One and Only Holy Knight",
        "rarity": OutfitRarity.rare,
        "observation": null,
        "isDefault": true,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "Family Time",
        "rarity": OutfitRarity.hero,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.th,
          "seal": Seals.ss,
          "metal": null
        }
      },
      {
        "name": "Holy Knight of Explosions",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.sg,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Light Footsteps",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.rn,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Crimson Flame's Trail",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.tw,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      }
    ]
  },
  {
    "name": "Griamore",
    "rarity": HeroRarity.hero,
    "observation": null,
    "outfits": [
      {
        "name": "",
        "rarity": OutfitRarity.rare,
        "observation": null,
        "isDefault": true,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "Casual Outing",
        "rarity": OutfitRarity.hero,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.fe,
          "seal": Seals.ss,
          "metal": null
        }
      },
      {
        "name": "Holy Knight of the Iron Wall",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.sg,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Makeshift Barricade",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.rn,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      }
    ]
  },
  {
    "name": "Jericho",
    "rarity": HeroRarity.legendary,
    "observation": null,
    "outfits": [
      {
        "name": "Runaway Holy Knight",
        "rarity": OutfitRarity.rare,
        "observation": null,
        "isDefault": true,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "Leisurely Moment",
        "rarity": OutfitRarity.hero,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.th,
          "seal": Seals.ss,
          "metal": null
        }
      },
      {
        "name": "Holy Knight With the Star-Shaped Visor",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.sg,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Secretive Traveler",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.rn,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Trace of Memories",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.fw,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      }
    ]
  },
  {
    "name": "King",
    "rarity": HeroRarity.legendary,
    "observation": null,
    "outfits": [
      {
        "name": "Inexperienced Fairy King",
        "rarity": OutfitRarity.rare,
        "observation": null,
        "isDefault": true,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "Forest's Footsteps",
        "rarity": OutfitRarity.hero,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.th,
          "seal": Seals.ss,
          "metal": null
        }
      },
      {
        "name": "<The Grizzly Sin of Sloth>",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.sg,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Shadow of the Deep Forest",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.rn,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      }
    ]
  },
  {
    "name": "Diane",
    "rarity": HeroRarity.legendary,
    "observation": null,
    "outfits": [
      {
        "name": "Giant Girl in Love",
        "rarity": OutfitRarity.rare,
        "observation": null,
        "isDefault": true,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "Tavern Hostess",
        "rarity": OutfitRarity.hero,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.th,
          "seal": Seals.ss,
          "metal": null
        }
      },
      {
        "name": "<The Serpent Sin of Envy>",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.sg,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Cheerful Girl",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.rn,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      }
    ]
  },
  {
    "name": "Drake",
    "rarity": HeroRarity.legendary,
    "observation": null,
    "outfits": [
      {
        "name": "Dragon Descendent",
        "rarity": OutfitRarity.rare,
        "observation": null,
        "isDefault": true,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "Oath of the Throne",
        "rarity": OutfitRarity.hero,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.th,
          "seal": Seals.ss,
          "metal": null
        }
      },
      {
        "name": "Glory of the Past",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.sg,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Shadow Lord",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.rn,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      }
    ]
  },
  {
    "name": "Mannie",
    "rarity": HeroRarity.legendary,
    "observation": null,
    "outfits": [
      {
        "name": "Exalted Priestess",
        "rarity": OutfitRarity.rare,
        "observation": null,
        "isDefault": true,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "Heart of Prayer",
        "rarity": OutfitRarity.hero,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.th,
          "seal": Seals.ss,
          "metal": null
        }
      },
      {
        "name": "Arch Priestess's Prestige",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.sg,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Exploration of the Unknown",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.rn,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Holy Ritual",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.fw,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Azure Coral Reef",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": true,
        "isExclusive": true,
        "infoExclusive": {
          "title": "A midsummer Day's Dream",
          "description": "Core Reward",
          "type": ObtainingType.event,
          "typeEvent": ObtainingTypeEvent.recurringMissions
        },
        "isEngraved": false,
        "recipe": null
      }
    ]
  },
  {
    "name": "Meliodas",
    "rarity": HeroRarity.legendary,
    "observation": null,
    "outfits": [
      {
        "name": "",
        "rarity": OutfitRarity.rare,
        "observation": null,
        "isDefault": true,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "A New Adventure",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.sg,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Simple Defense",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.rn,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Most Malevolent Majesty",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.tw,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "<The Dragon Sin of Wrath>",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": true,
        "isExclusive": true,
        "infoExclusive": {
          "title": "Sacred Treasure: Demon Sword Lostvayne",
          "description": "Top Tier Reward",
          "type": ObtainingType.banner,
          "typeEvent": null
        },
        "isEngraved": false,
        "recipe": null
      }
    ]
  },
  {
    "name": "Daisy",
    "rarity": HeroRarity.legendary,
    "observation": null,
    "outfits": [
      {
        "name": "Fairy of the Past",
        "rarity": OutfitRarity.rare,
        "observation": null,
        "isDefault": true,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "Small Explorer",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.sg,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Spirit of Exploration",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.rn,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Spring Robe",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.tw,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Autumn Scent",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": true,
        "isExclusive": true,
        "infoExclusive": {
          "title": "The Fresh Scent of Autumn",
          "description": "Top Tier Reward",
          "type": ObtainingType.banner,
          "typeEvent": null
        },
        "isEngraved": false,
        "recipe": null
      }
    ]
  },
  {
    "name": "Escanor",
    "rarity": HeroRarity.legendary,
    "observation": null,
    "outfits": [
      {
        "name": "Arrogant Poet",
        "rarity": OutfitRarity.rare,
        "observation": null,
        "isDefault": true,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "Northern Wildness",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.tw,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Sufficient Arrogance",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.rn,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Golden Dignity",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.fw,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "<The Lion Sin of Pride>",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": true,
        "isExclusive": true,
        "infoExclusive": {
          "title": "Sacred Treasure: Sacred Axe Rhitta",
          "description": "Top Tier Reward",
          "type": ObtainingType.banner,
          "typeEvent": null
        },
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "Epitome of Pride",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": true,
        "isExclusive": true,
        "infoExclusive": {
          "title": "Promise of Hope",
          "description": "Purchased from the Event Shop for: 150 Shiny Gold Tokens.",
          "type": ObtainingType.event,
          "typeEvent": ObtainingTypeEvent.fixedMissions
        },
        "isEngraved": false,
        "recipe": null
      }
    ]
  },
  {
    "name": "Clotho",
    "rarity": HeroRarity.legendary,
    "observation": null,
    "outfits": [
      {
        "name": "Explorer's Uniform",
        "rarity": OutfitRarity.rare,
        "observation": null,
        "isDefault": true,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "Explorer's Activewear",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.tw,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Head Scholar's Formality",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.fw,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Light Party Outfit",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.rn,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Dawn Moon's Play",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": true,
        "isExclusive": true,
        "infoExclusive": {
          "title": "Moonlight Across the Dawn",
          "description": "Top Tier Reward",
          "type": ObtainingType.banner,
          "typeEvent": null
        },
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "Starlight Shadow",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": true,
        "isExclusive": true,
        "infoExclusive": {
          "title": "Vision of the Azure Waves",
          "description": "Top Tier Reward",
          "type": ObtainingType.banner,
          "typeEvent": null
        },
        "isEngraved": false,
        "recipe": null
      }
    ]
  },
  {
    "name": "Merlin",
    "rarity": HeroRarity.legendary,
    "observation": null,
    "outfits": [
      {
        "name": "Esoteric Great Mage",
        "rarity": OutfitRarity.rare,
        "observation": null,
        "isDefault": true,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "Light Formalwear",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.fw,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "The Boar Sin of Gluttony",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.tw,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Witch's Banquet",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": true,
        "isExclusive": true,
        "infoExclusive": {
          "title": "Sacred Treasure: Morning Star Aldan",
          "description": "Top Tier Reward",
          "type": ObtainingType.banner,
          "typeEvent": null
        },
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "Seaside Frolic",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": true,
        "isExclusive": true,
        "infoExclusive": {
          "title": "Vision of the Azure Waves",
          "description": "Top Tier Reward",
          "type": ObtainingType.banner,
          "typeEvent": null
        },
        "isEngraved": false,
        "recipe": null
      }
    ]
  },
  {
    "name": "Elizabeth",
    "rarity": HeroRarity.legendary,
    "observation": null,
    "outfits": [
      {
        "name": "Midsummer Reverie",
        "rarity": OutfitRarity.rare,
        "observation": null,
        "isDefault": true,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": false,
        "recipe": null
      },
      {
        "name": "Hero of Liones",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.fw,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "Star of the Tavern",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": false,
        "isExclusive": false,
        "infoExclusive": null,
        "isEngraved": true,
        "recipe": {
          "kit": RecipeKits.tw,
          "seal": Seals.bs,
          "metal": Metals.em
        }
      },
      {
        "name": "The Princess Who Regained Her Memory",
        "rarity": OutfitRarity.legendary,
        "observation": null,
        "isDefault": false,
        "isAppearance": true,
        "isExclusive": true,
        "infoExclusive": {
          "title": "The Resonance of a Noble Heart",
          "description": "Top Tier Reward",
          "type": ObtainingType.banner,
          "typeEvent": null
        },
        "isEngraved": false,
        "recipe": null
      }
    ]
  }
]
