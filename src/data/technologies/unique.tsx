/* eslint-disable no-magic-numbers */
import {Age} from '../ages/core';
import {Castle, Stable, Barrack, TownCenter, Dock, SiegeWorkshop} from '../buildings';
import {
  isArambai,
  isArcher,
  isArcherLine,
  isBallistaElephantLine,
  isBatteringRam,
  isBattleElephantLine,
  isBerzerkLine,
  isBombardCanon,
  isByFootArcher,
  isCamel,
  isCamelArcherLine,
  isCamelRiderLine,
  isCannonGalleonLine,
  isCataphract,
  isCavalry,
  isCavalryArcherLine,
  isChuKoNuLine,
  isEagleWarriorLine,
  isFireGalleyLine,
  isGenitourLine,
  isGunpowderUnit,
  isHandCannoneer,
  isHuskarlLine,
  isInBarrack,
  isInCastle,
  isInfantry,
  isInSiegeWorkshop,
  isInStable,
  isKamayuk,
  isKipchakLine,
  isKnightLine,
  isKonniksLine,
  isMangonelLine,
  isMilitiaLine,
  isMonk,
  isScorpionLine,
  isScoutCavalryLine,
  isShip,
  isShotelWarriorLine,
  isSiegeUnit,
  isSkirmisherLine,
  isSlinger,
  isSpearmanLine,
  isTarkanLine,
  isThrowingAxemen,
  isTradeCart,
  isTradeCog,
  isTrebuchetUnpacked,
  isTurtleShip,
  isVillager,
  isWarElephantLine,
  noUnits,
} from '../lib/unit_groups';
import {InterpolationVariableType, AllAge} from '../core';
import {
  Skirmisher,
  Genitour,
  CavalryArcher,
  Slinger,
  Archer,
  HandCannoneer,
} from '../units/archery';
import {
  ScoutCavalry,
  BattleElephant,
  Hussar,
  CamelRider,
  Knight,
  LightCavalry,
} from '../units/stable';
import {FireGalley, TurtleShip, TradeCog, CannonGalleon} from '../units/dock';
import {ArmorType} from '../damage';
import {UnitType} from '../units/core';
import {Monk} from '../units/monastery';
import {TrebuchetUnpacked} from '../units/castle';
import {Militia, EagleWarrior, Spearman} from '../units/barrack';
import {Scorpion, BatteringRam, Mangonel, BombardCanon} from '../units/siege_workshop';
import {TradeCart} from '../units/market';
import {Villager} from '../units/town_center';
import {Ids} from '../civilizations/ids';
import {Resource} from '../resource';

import {TechnologyType, UniqueTechnology} from './core';

export const Atlatl: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.AztecsId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Atlatl',
  englishName: 'Atlatl',
  frenchName: 'Propulseur',
  cost: {[Resource.Food]: 400, [Resource.Gold]: 350},
  bonus: {
    description: {
      template: "Les %1 et %2 ont +1 de portée et +1 d'attaque.",
      variables: [
        {type: InterpolationVariableType.Unit, unit: Skirmisher},
        {type: InterpolationVariableType.Unit, unit: Genitour},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u => isSkirmisherLine(u) || isGenitourLine(u),
        rangeBonus: AllAge(1),
        attackBonus: AllAge(1),
      },
    ],
  },
};
export const Kasbah: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.BerbersId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Kasbah',
  englishName: 'Kasbah',
  frenchName: 'Kasbah',
  cost: {[Resource.Food]: 250, [Resource.Gold]: 250},
  bonus: {
    description: {
      template: 'Les %1 fonctionnent 25% plus vite.',
      variables: [{type: InterpolationVariableType.Building, building: Castle}],
    },
    effects: [{teamBonus: true, units: isInCastle, trainingSpeedBonus: AllAge(0.25)}],
  },
};
export const Yeomen: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.BritonsId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Yeomen',
  englishName: 'Yeomen',
  frenchName: 'Yeomen',
  cost: {[Resource.Wood]: 750, [Resource.Gold]: 450},
  bonus: {
    description: {
      template: "Les archers à pied ont +1 de portée. Les tours ont +2 d'attaque.",
      variables: [],
    },
    effects: [{teamBonus: false, units: isByFootArcher, rangeBonus: AllAge(1)}],
  },
};
export const Stirrups: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.BulgariansId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Stirrups',
  englishName: 'Stirrups',
  frenchName: 'Étriers',
  cost: {[Resource.Food]: 400, [Resource.Gold]: 200},
  bonus: {
    description: {
      template: 'Les %1 et Konniks attaquent 25% plus vite.',
      variables: [
        {type: InterpolationVariableType.Unit, unit: ScoutCavalry},
        // {type: InterpolationVariableType.Unit, unit: Konniks},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u => isScoutCavalryLine(u) || isKonniksLine(u),
        rateOfFireBonus: AllAge(0.25),
      },
    ],
  },
};
export const Howdah: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.BurmeseId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Howdah',
  englishName: 'Howdah',
  frenchName: 'Howdah',
  cost: {[Resource.Food]: 400, [Resource.Wood]: 300},
  bonus: {
    description: {
      template: "Les %1 ont +1 d'armure et +1 de protection perçage.",
      variables: [{type: InterpolationVariableType.Unit, unit: BattleElephant}],
    },
    effects: [
      {teamBonus: false, units: isBattleElephantLine, armorBonus: AllAge({melee: 1, pierce: 1})},
    ],
  },
};
export const GreekFire: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.ByzantinesId,
  age: Age.CastleAge,
  building: Castle,
  id: 'GreekFire',
  englishName: 'Greek Fire',
  frenchName: 'Feu grégeois',
  cost: {[Resource.Food]: 250, [Resource.Gold]: 300},
  bonus: {
    description: {
      template: 'Les %1 ont +1 de portée.',
      variables: [{type: InterpolationVariableType.Unit, unit: FireGalley}],
    },
    effects: [{teamBonus: false, units: isFireGalleyLine, rangeBonus: AllAge(1)}],
  },
};
export const Stronghold: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.CeltsId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Stronghold',
  englishName: 'Stronghold',
  frenchName: 'Citadelle',
  cost: {[Resource.Food]: 250, [Resource.Gold]: 200},
  bonus: {
    description: {
      template: 'Les %1 et tours tirent 25% plus vite.',
      variables: [{type: InterpolationVariableType.Building, building: Castle}],
    },
    effects: [],
  },
};
export const GreatWall: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.ChineseId,
  age: Age.CastleAge,
  building: Castle,
  id: 'GreatWall',
  englishName: 'Great Wall',
  frenchName: 'Grande muraille',
  cost: {[Resource.Wood]: 400, [Resource.Stone]: 200},
  bonus: {
    description: {template: 'Les murs et tours ont +30% de PDV.', variables: []},
    effects: [],
  },
};
export const SteppeHusbandry: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.CumansId,
  age: Age.CastleAge,
  building: Castle,
  id: 'SteppeHusbandry',
  englishName: 'Steppe Husbandry',
  frenchName: 'Élevage des steppes',
  cost: {[Resource.Food]: 200, [Resource.Wood]: 300},
  bonus: {
    description: {
      template: 'Les %1, %2 et Kipchak sont créés 80% plus vite.',
      variables: [
        {type: InterpolationVariableType.Unit, unit: ScoutCavalry},
        {type: InterpolationVariableType.Unit, unit: CavalryArcher},
        // {type: InterpolationVariableType.Unit, unit: Kipchak},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u => isScoutCavalryLine(u) || isCavalryArcherLine(u) || isKipchakLine(u),
        trainingSpeedBonus: AllAge(0.8),
      },
    ],
  },
};
export const RoyalHeirs: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.EthiopiansId,
  age: Age.CastleAge,
  building: Castle,
  id: 'RoyalHeirs',
  englishName: 'Royal Heirs',
  frenchName: 'Héritiers royaux',
  cost: {[Resource.Food]: 300, [Resource.Gold]: 300},
  bonus: {
    description: {template: 'Les Guerrier à shotel sont créés 2x plus vite.', variables: []},
    effects: [{teamBonus: false, units: isShotelWarriorLine, trainingSpeedBonus: AllAge(1)}],
  },
};
export const Chivalry: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.FranksId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Chivalry',
  englishName: 'Chivalry',
  frenchName: 'Chevalerie',
  cost: {[Resource.Wood]: 400, [Resource.Gold]: 400},
  bonus: {
    description: {
      template: 'Les %1 fonctionnent 40% plus vite',
      variables: [{type: InterpolationVariableType.Building, building: Stable}],
    },
    effects: [{teamBonus: false, units: isInStable, trainingSpeedBonus: AllAge(0.4)}],
  },
};
export const Anarchy: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.GothsId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Anarchy',
  englishName: 'Anarchy',
  frenchName: 'Anarchie',
  cost: {[Resource.Food]: 450, [Resource.Gold]: 250},
  bonus: {
    description: {
      template: 'Les Huskarls peuvent être créés dans %1',
      variables: [{type: InterpolationVariableType.Building, building: Barrack}],
    },
    effects: [{teamBonus: false, units: isHuskarlLine}],
  },
};
export const Marauders: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.HunsId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Marauders',
  englishName: 'Marauders',
  frenchName: 'Maraudeurs',
  cost: {[Resource.Wood]: 300, [Resource.Gold]: 200},
  bonus: {
    description: {
      template: 'Les Tarkans peuvent être créés dans %1',
      variables: [{type: InterpolationVariableType.Building, building: Stable}],
    },
    effects: [{teamBonus: false, units: isTarkanLine}],
  },
};
export const AndeanSling: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.IncasId,
  age: Age.CastleAge,
  building: Castle,
  id: 'AndeanSling',
  englishName: 'Andean Sling',
  frenchName: 'Fronde des Andes',
  cost: {[Resource.Food]: 200, [Resource.Gold]: 300},
  bonus: {
    description: {
      template: "Les %1, %2 et %3 n'ont plus de portée minimum.",
      variables: [
        {type: InterpolationVariableType.Unit, unit: Skirmisher},
        {type: InterpolationVariableType.Unit, unit: Slinger},
        {type: InterpolationVariableType.Unit, unit: Genitour},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u => isSkirmisherLine(u) || isSlinger(u) || isGenitourLine(u),
        removeMinimumRange: AllAge(true),
      },
    ],
  },
};
export const Sultans: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.IndiansId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Sultans',
  englishName: 'Sultans',
  frenchName: 'Sultans',
  cost: {[Resource.Food]: 400, [Resource.Wood]: 400},
  bonus: {
    description: {
      template: "Augmentent tout les revenus d'or (mine, commerce et reliques) de 10%",
      variables: [],
    },
    effects: [],
  },
};
export const Pavise: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.ItaliansId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Pavise',
  englishName: 'Pavise',
  frenchName: 'Pavois',
  cost: {[Resource.Food]: 300, [Resource.Gold]: 150},
  bonus: {
    description: {
      template: "Les archers à pied ont +1 d'armure et +1 de protection perçage.",
      variables: [],
    },
    effects: [{teamBonus: false, units: isByFootArcher, armorBonus: AllAge({melee: 1, pierce: 1})}],
  },
};
export const Yasama: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.JapaneseId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Yasama',
  englishName: 'Yasama',
  frenchName: 'Yasama',
  cost: {[Resource.Food]: 300, [Resource.Wood]: 300},
  bonus: {
    description: {template: 'Les tours tirent 2 flèches de plus.', variables: []},
    effects: [],
  },
};
export const TuskSwords: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.KhmerId,
  age: Age.CastleAge,
  building: Castle,
  id: 'TuskSwords',
  englishName: 'Tusk Swords',
  frenchName: 'Épées de défenses',
  cost: {[Resource.Wood]: 200, [Resource.Gold]: 300},
  bonus: {
    description: {
      template: "Les %1 ont +3 d'attaque.",
      variables: [{type: InterpolationVariableType.Unit, unit: BattleElephant}],
    },
    effects: [{teamBonus: false, units: isBattleElephantLine, attackBonus: AllAge(3)}],
  },
};
export const Panokseon: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.KoreansId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Panokseon',
  englishName: 'Panokseon',
  frenchName: 'Panokseon',
  cost: {[Resource.Food]: 300, [Resource.Wood]: 300},
  bonus: {
    description: {
      template: 'Les %1 se déplacent 15% plus vite.',
      variables: [{type: InterpolationVariableType.Unit, unit: TurtleShip}],
    },
    effects: [{teamBonus: false, units: isTurtleShip, speedBonus: AllAge(0.15)}],
  },
};
export const HillForts: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.LithuaniansId,
  age: Age.CastleAge,
  building: Castle,
  id: 'HillForts',
  englishName: 'Hill Forts',
  frenchName: 'Collines fortifiées',
  cost: {[Resource.Food]: 250, [Resource.Gold]: 250},
  bonus: {
    description: {
      template: 'Les %1 ont +3 de portée.',
      variables: [{type: InterpolationVariableType.Building, building: TownCenter}],
    },
    effects: [],
  },
};
export const Mercenaries: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.MagyarsId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Mercenaries',
  englishName: 'Mercenaries',
  frenchName: 'Armée corvinienne',
  cost: {[Resource.Food]: 200, [Resource.Gold]: 300},
  bonus: {
    description: {
      template: "Les %1 ne coutent plus d'or.",
      variables: [{type: InterpolationVariableType.Unit, unit: Hussar}],
    },
    effects: [{teamBonus: false, units: isHuskarlLine, goldCostBonus: AllAge(1)}],
  },
};
export const Thalassocracy: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.MalayId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Thalassocracy',
  englishName: 'Thalassocracy',
  frenchName: 'Thalassocratie',
  cost: {[Resource.Food]: 300, [Resource.Gold]: 300},
  bonus: {
    description: {
      template: 'Transforme les %1 en Harbor.',
      variables: [
        {type: InterpolationVariableType.Building, building: Dock},
        // {type: InterpolationVariableType.Building, building: Harbor},
      ],
    },
    effects: [],
  },
};
export const Tigui: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.MaliansId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Tigui',
  englishName: 'Tigui',
  frenchName: 'Tigui',
  cost: {[Resource.Food]: 200, [Resource.Wood]: 300},
  bonus: {
    description: {
      template: 'Les %1 peuvent tirer des flèches sans unités en garnison.',
      variables: [{type: InterpolationVariableType.Building, building: TownCenter}],
    },
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const ObsidianArrows: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.MayansId,
  age: Age.CastleAge,
  building: Castle,
  id: 'ObsidianArrows',
  englishName: 'Obsidian Arrows',
  frenchName: "Flècge d'obsidienne",
  cost: {[Resource.Food]: 300, [Resource.Gold]: 300},
  bonus: {
    description: {
      template: "Les %1 ont un bonuse d'attaque de +6 contre les %1 et %2.",
      variables: [
        {type: InterpolationVariableType.ArmorType, armorType: ArmorType.Building},
        {type: InterpolationVariableType.ArmorType, armorType: ArmorType.StoneDefense},
      ],
    },
    effects: [
      {teamBonus: false, units: isArcher, attackBonusBonus: AllAge([ArmorType.Building, 6])},
      {teamBonus: false, units: isArcher, attackBonusBonus: AllAge([ArmorType.StoneDefense, 6])},
    ],
  },
};
export const Nomads: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.MongolsId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Nomads',
  englishName: 'Nomads',
  frenchName: 'Nomades',
  cost: {[Resource.Wood]: 300, [Resource.Gold]: 150},
  bonus: {
    description: {
      template: "Les habitations perdues n'influent pas sur la limite de population.",
      variables: [],
    },
    effects: [],
  },
};
export const Kamandaran: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.PersiansId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Kamandaran',
  englishName: 'Kamandaran',
  frenchName: 'Kamandaran',
  cost: {[Resource.Wood]: 200, [Resource.Stone]: 100},
  bonus: {
    description: {
      template: 'Change le cout en or des %1 en bois.',
      variables: [{type: InterpolationVariableType.Unit, unit: Archer}],
    },
    effects: [
      {
        teamBonus: false,
        units: isArcherLine,
        goldCostBonus: AllAge(1),
        woodCostFixedBonus: AllAge(-45),
      },
    ],
  },
};
export const Carrack: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.PortugueseId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Carrack',
  englishName: 'Carrack',
  frenchName: 'Carraque',
  cost: {[Resource.Wood]: 200, [Resource.Gold]: 300},
  bonus: {
    description: {
      template: "Les %1 ont +1 d'armure et +1 de protection perçage.",
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.NavalVessel}],
    },
    effects: [{teamBonus: false, units: isShip, armorBonus: AllAge({melee: 1, pierce: 1})}],
  },
};
export const Madrasah: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.SaracensId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Madrasah',
  englishName: 'Madrasah',
  frenchName: 'Madrasa',
  cost: {[Resource.Food]: 200, [Resource.Gold]: 100},
  bonus: {
    description: {
      template: 'Lorsque un %1 est tué, 33% du cout en or revient au joueur.',
      variables: [{type: InterpolationVariableType.Unit, unit: Monk}],
    },
    effects: [{teamBonus: false, units: isMonk}],
  },
};
export const Orthodoxy: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.SlavsId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Orthodoxy',
  englishName: 'Orthodoxy',
  frenchName: 'Orthodoxie',
  cost: {[Resource.Food]: 200, [Resource.Gold]: 300},
  bonus: {
    description: {
      template: "Les %1 ont +3 d'armure et +3 de protection perçage.",
      variables: [{type: InterpolationVariableType.Unit, unit: Monk}],
    },
    effects: [{teamBonus: false, units: isMonk, armorBonus: AllAge({melee: 3, pierce: 3})}],
  },
};
export const Inquisition: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.SpanishId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Inquisition',
  englishName: 'Inquisition',
  frenchName: 'Inquisition',
  cost: {[Resource.Food]: 100, [Resource.Gold]: 300},
  bonus: {
    description: {
      template:
        'Le temps minimum et maximum requis pour une conversion est réduit de 1 seconde pour les unités et de 7 secondes pour les batiments.',
      variables: [],
    },
    effects: [{teamBonus: false, units: isMonk}],
  },
};
export const SilkArmor: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.TatarsId,
  age: Age.CastleAge,
  building: Castle,
  id: 'SilkArmor',
  englishName: 'Silk Armor',
  frenchName: 'Armure de soie',
  cost: {[Resource.Wood]: 400, [Resource.Gold]: 300},
  bonus: {
    description: {
      template: 'Les %1, %2, %3 et Kipchak on +1 de protection perçage.',
      variables: [
        {type: InterpolationVariableType.Unit, unit: ScoutCavalry},
        {type: InterpolationVariableType.Unit, unit: CavalryArcher},
        {type: InterpolationVariableType.Unit, unit: Genitour},
        // {type: InterpolationVariableType.Unit, unit: Kipchaks},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u =>
          isScoutCavalryLine(u) || isCavalryArcherLine(u) || isGenitourLine(u) || isKipchakLine(u),
        armorBonus: AllAge({melee: 0, pierce: 1}),
      },
    ],
  },
};
export const Ironclad: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.TeutonsId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Ironclad',
  englishName: 'Ironclad',
  frenchName: 'Cuirasse',
  cost: {[Resource.Wood]: 400, [Resource.Gold]: 350},
  bonus: {
    description: {
      template: "Les %1 ont +4 d'armure",
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.SiegeUnit}],
    },
    effects: [{teamBonus: false, units: isSiegeUnit, armorBonus: AllAge({melee: 4, pierce: 0})}],
  },
};
export const Sipahi: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.TurksId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Sipahi',
  englishName: 'Sipahi',
  frenchName: 'Sipahi',
  cost: {[Resource.Food]: 350, [Resource.Gold]: 150},
  bonus: {
    description: {
      template: 'Les %1 et %2 ont +20 de PDV.',
      variables: [
        {type: InterpolationVariableType.Unit, unit: CavalryArcher},
        {type: InterpolationVariableType.Unit, unit: Genitour},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u => isCavalryArcherLine(u) || isGenitourLine(u),
        healthFixedBonus: AllAge(20),
      },
    ],
  },
};
export const Chatras: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.VietnameseId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Chatras',
  englishName: 'Chatras',
  frenchName: 'Chatras',
  cost: {[Resource.Food]: 250, [Resource.Gold]: 250},
  bonus: {
    description: {
      template: 'Les %1 ont +50 de PDV.',
      variables: [{type: InterpolationVariableType.Unit, unit: BattleElephant}],
    },
    effects: [{teamBonus: false, units: isBattleElephantLine, healthFixedBonus: AllAge(50)}],
  },
};
export const Chieftains: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.VikingsId,
  age: Age.CastleAge,
  building: Castle,
  id: 'Chieftains',
  englishName: 'Chieftains',
  frenchName: 'Chefs de tribu',
  cost: {[Resource.Food]: 400, [Resource.Gold]: 300},
  bonus: {
    description: {
      template: "L'%1 a un bonus d'attaque de +5 contre la %2 et de +4 contre les %3",
      variables: [
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Infantry},
        {type: InterpolationVariableType.ArmorType, armorType: ArmorType.Cavalry},
        {type: InterpolationVariableType.ArmorType, armorType: ArmorType.Camel},
      ],
    },
    effects: [
      {teamBonus: false, units: isInfantry, attackBonusBonus: AllAge([ArmorType.Cavalry, 5])},
      {teamBonus: false, units: isInfantry, attackBonusBonus: AllAge([ArmorType.Camel, 4])},
    ],
  },
};

export const GarlandWars: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.AztecsId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'GarlandWars',
  englishName: 'Garland Wars',
  frenchName: 'Guerres glorieuses',
  cost: {[Resource.Food]: 450, [Resource.Gold]: 750},
  bonus: {
    description: {
      template: "L'%1 a +4 d'attaque.",
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Infantry}],
    },
    effects: [{teamBonus: false, units: isInfantry, attackBonus: AllAge(4)}],
  },
};
export const MaghrabiCamels: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.BerbersId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'MaghrabiCamels',
  englishName: 'Maghrabi Camels',
  frenchName: 'Chameaux du Maghreb',
  cost: {[Resource.Food]: 700, [Resource.Gold]: 300},
  bonus: {
    description: {
      template: 'Les %1 et les Archer de chamellerie se regénèrent 10 PDV par minute.',
      variables: [
        {type: InterpolationVariableType.Unit, unit: CamelRider},
        // {type: InterpolationVariableType.Unit, unit: CamelArcher},
      ],
    },
    effects: [{teamBonus: false, units: u => isCamelRiderLine(u) || isCamelArcherLine(u)}],
  },
};
export const Warwolf: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.BritonsId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Warwolf',
  englishName: 'Warwolf',
  frenchName: 'Loup de guerre',
  cost: {[Resource.Wood]: 500, [Resource.Gold]: 250},
  bonus: {
    description: {
      template:
        'Les trébuchets font des dégats de zone et ont 100% de précision contre les unités immobiles.',
      variables: [{type: InterpolationVariableType.Unit, unit: TrebuchetUnpacked}],
    },
    effects: [{teamBonus: false, units: isTrebuchetUnpacked, areaOfDamageBonus: AllAge(0.5)}],
  },
};
export const Bagains: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.BulgariansId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Bagains',
  englishName: 'Bagains',
  frenchName: 'Bagains',
  cost: {[Resource.Food]: 900, [Resource.Gold]: 450},
  bonus: {
    description: {
      template: "Les %1 ont +5 d'armure",
      variables: [{type: InterpolationVariableType.Unit, unit: Militia}],
    },
    effects: [{teamBonus: false, units: isMilitiaLine, armorBonus: AllAge({melee: 5, pierce: 0})}],
  },
};
export const ManipurCavalry: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.BurmeseId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'ManipurCavalry',
  englishName: 'Manipur Cavalry',
  frenchName: 'Cavalerie du Manipur',
  cost: {[Resource.Food]: 650, [Resource.Gold]: 400},
  bonus: {
    description: {
      template: "Les Arambai et la %2 ont +3 d'attaque contre les %1 et %2",
      variables: [
        // {type: InterpolationVariableType.Unit, unit: Arambai},
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Cavalry},
        {type: InterpolationVariableType.ArmorType, armorType: ArmorType.Building},
        {type: InterpolationVariableType.ArmorType, armorType: ArmorType.StandardBuilding},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u => isArambai(u) || isCavalry(u),
        attackBonusBonus: AllAge([ArmorType.Building, 3]),
      },
      {
        teamBonus: false,
        units: u => isArambai(u) || isCavalry(u),
        attackBonusBonus: AllAge([ArmorType.StandardBuilding, 3]),
      },
    ],
  },
};
export const Logistica: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.ByzantinesId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Logistica',
  englishName: 'Logistica',
  frenchName: 'Logistique',
  cost: {[Resource.Food]: 1000, [Resource.Gold]: 600},
  bonus: {
    description: {
      template: "Les Cataphract font des dégats de piétinement et ont +6 d'attaque contre %1.",
      variables: [
        // {type: InterpolationVariableType.Unit, unit: Cataphract},
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Infantry},
      ],
    },
    effects: [{teamBonus: false, units: isCataphract}],
  },
};
export const FurorCeltica: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.CeltsId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'FurorCeltica',
  englishName: 'Furor Celtica',
  frenchName: 'Fureur celte',
  cost: {[Resource.Food]: 750, [Resource.Gold]: 450},
  bonus: {
    description: {
      template: 'Les unités de %1 ont +40% de PDV.',
      variables: [{type: InterpolationVariableType.Building, building: SiegeWorkshop}],
    },
    effects: [{teamBonus: false, units: isInSiegeWorkshop, healthBonus: AllAge(0.4)}],
  },
};
export const Rocketry: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.ChineseId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Rocketry',
  englishName: 'Rocketry',
  frenchName: 'Propulsion',
  cost: {[Resource.Wood]: 600, [Resource.Gold]: 600},
  bonus: {
    description: {
      template: "Les Chu Ko Nu ont +2 d'attaque et les %1 ont +4 d'attaque",
      variables: [
        // {type: InterpolationVariableType.Unit, unit: ChuKoNu},
        {type: InterpolationVariableType.Unit, unit: Scorpion},
      ],
    },
    effects: [
      {teamBonus: false, units: isChuKoNuLine, attackBonus: AllAge(2)},
      {teamBonus: false, units: isScorpionLine, attackBonus: AllAge(4)},
    ],
  },
};
export const CumanMercenaries: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.CumansId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'CumanMercenaries',
  englishName: 'Cuman Mercenaries',
  frenchName: 'Mercenaires coumans',
  cost: {[Resource.Food]: 650, [Resource.Gold]: 400},
  bonus: {
    description: {
      template: "Les membres de l'équipe peuvent créer 10 Kipchaks d'élite gratuits au chateau",
      variables: [],
    },
    effects: [{teamBonus: true, units: isKipchakLine}],
  },
};
export const TorsionEngines: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.EthiopiansId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'TorsionEngines',
  englishName: 'Torsion Engines',
  frenchName: 'Mécanique à torsion',
  cost: {[Resource.Food]: 1000, [Resource.Gold]: 600},
  bonus: {
    description: {
      template: 'Les %1 ont une zone de dégats augmenté (sauf les tour de siège et %2).',
      variables: [
        {type: InterpolationVariableType.UnitType, unitType: UnitType.SiegeUnit},
        {type: InterpolationVariableType.Unit, unit: BatteringRam},
      ],
    },
    effects: [{teamBonus: false, units: u => isSiegeUnit(u) && !isBatteringRam(u)}],
  },
};
export const BeardedAxe: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.FranksId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'BeardedAxe',
  englishName: 'Bearded Axe',
  frenchName: 'Hache francisque',
  cost: {[Resource.Food]: 400, [Resource.Gold]: 400},
  bonus: {
    description: {
      template: 'Les lanceurs de hache ont +1 de portée.',
      variables: [
        // {type: InterpolationVariableType.Unit, unit: ThrowingAxemen},
      ],
    },
    effects: [{teamBonus: false, units: isThrowingAxemen, rangeBonus: AllAge(1)}],
  },
};
export const Perfusion: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.GothsId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Perfusion',
  englishName: 'Perfusion',
  frenchName: 'Perfusion',
  cost: {[Resource.Wood]: 400, [Resource.Gold]: 600},
  bonus: {
    description: {
      template: 'Les %1 fonctionnent 2x plus vite.',
      variables: [{type: InterpolationVariableType.Building, building: Barrack}],
    },
    effects: [{teamBonus: false, units: isInBarrack, trainingSpeedBonus: AllAge(1)}],
  },
};
export const Atheism: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.HunsId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Atheism',
  englishName: 'Atheism',
  frenchName: 'Athéisme',
  cost: {[Resource.Food]: 500, [Resource.Gold]: 500},
  bonus: {
    description: {
      template:
        'La victoire par reliques ou merveilles prend 100 ans de plus. Le cout de Espions et Trahison est réduit de 50%.',
      variables: [
        // {type: InterpolationVariableType.Technology, technology: Spies},
        // {type: InterpolationVariableType.Technology, technology: Treason},
      ],
    },
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const Couriers: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.IncasId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Couriers',
  englishName: 'Couriers',
  frenchName: 'Coursiers',
  cost: {[Resource.Food]: 600, [Resource.Gold]: 600},
  bonus: {
    description: {
      template: "Les Kamayuks, %1 et %2 ont +1 d'armure et +2 protection perçage.",
      variables: [
        // {type: InterpolationVariableType.Unit, unit: Kamayuk},
        {type: InterpolationVariableType.Unit, unit: Slinger},
        {type: InterpolationVariableType.Unit, unit: EagleWarrior},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u => isKamayuk(u) || isSlinger(u) || isEagleWarriorLine(u),
        armorBonus: AllAge({melee: 1, pierce: 2}),
      },
    ],
  },
};
export const Shatagni: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.IndiansId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Shatagni',
  englishName: 'Shatagni',
  frenchName: 'Shatagni',
  cost: {[Resource.Food]: 500, [Resource.Gold]: 300},
  bonus: {
    description: {
      template: 'Les %1 ont +1 de portée.',
      variables: [{type: InterpolationVariableType.Unit, unit: HandCannoneer}],
    },
    effects: [{teamBonus: false, units: isHandCannoneer, rangeBonus: AllAge(1)}],
  },
};
export const SilkRoad: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.ItaliansId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'SilkRoad',
  englishName: 'Silk Road',
  frenchName: 'Route de la soie.',
  cost: {[Resource.Food]: 500, [Resource.Gold]: 250},
  bonus: {
    description: {
      template: 'Les %1 et %2 coutent 2x fois moins.',
      variables: [
        {type: InterpolationVariableType.Unit, unit: TradeCart},
        {type: InterpolationVariableType.Unit, unit: TradeCog},
      ],
    },
    effects: [
      {teamBonus: false, units: u => isTradeCart(u) || isTradeCog(u), costBonus: AllAge(0.5)},
    ],
  },
};
export const Kataparuto: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.JapaneseId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Kataparuto',
  englishName: 'Kataparuto',
  frenchName: 'Kataparuto',
  cost: {[Resource.Wood]: 750, [Resource.Gold]: 400},
  bonus: {
    description: {
      template: 'Les %1 se montent et démontent 4x plus vite et tirent 33% plus vite.',
      variables: [{type: InterpolationVariableType.Unit, unit: TrebuchetUnpacked}],
    },
    effects: [{teamBonus: false, units: isTrebuchetUnpacked, rateOfFireBonus: AllAge(0.33)}],
  },
};
export const DoubleCrossbow: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.KhmerId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'DoubleCrossbow',
  englishName: 'Double Crossbow',
  frenchName: 'Double arbalète',
  cost: {[Resource.Food]: 700, [Resource.Gold]: 400},
  bonus: {
    description: {
      template:
        'Les Élephant à arbalète et %1 tire 2 projectiles (le 2ème projectiles à des dommages et une zone de dégat légèrement plus faible).',
      variables: [
        // {type: InterpolationVariableType.Unit, unit: BallistaElephant},
        {type: InterpolationVariableType.Unit, unit: Scorpion},
      ],
    },
    effects: [{teamBonus: false, units: u => isScorpionLine(u) || isBallistaElephantLine(u)}],
  },
};
export const Shinkichon: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.KoreansId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Shinkichon',
  englishName: 'Shinkichon',
  frenchName: 'Shinkichon',
  cost: {[Resource.Wood]: 800, [Resource.Gold]: 500},
  bonus: {
    description: {
      template: 'Les %1 ont +1 de portée.',
      variables: [{type: InterpolationVariableType.Unit, unit: Mangonel}],
    },
    effects: [{teamBonus: false, units: isMangonelLine, rangeBonus: AllAge(1)}],
  },
};
export const TowerShields: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.LithuaniansId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'TowerShields',
  englishName: 'Tower Shields',
  frenchName: 'Boucliers rectangulaires',
  cost: {[Resource.Food]: 800, [Resource.Gold]: 200},
  bonus: {
    description: {
      template: 'Les %1 et %2 ont +1 de protection perçage.',
      variables: [
        {type: InterpolationVariableType.Unit, unit: Spearman},
        {type: InterpolationVariableType.Unit, unit: Skirmisher},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u => isSpearmanLine(u) || isSkirmisherLine(u),
        armorBonus: AllAge({melee: 0, pierce: 1}),
      },
    ],
  },
};
export const RecurveBow: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.MagyarsId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'RecurveBow',
  englishName: 'Recurve Bow',
  frenchName: 'Arc recourbé',
  cost: {[Resource.Wood]: 600, [Resource.Gold]: 400},
  bonus: {
    description: {
      template: "Les %1 ont +1 d'attaque et +1 de portée.",
      variables: [{type: InterpolationVariableType.Unit, unit: CavalryArcher}],
    },
    effects: [
      {teamBonus: false, units: isCavalryArcherLine, attackBonus: AllAge(1)},
      {teamBonus: false, units: isCavalryArcherLine, rangeBonus: AllAge(1)},
    ],
  },
};
export const ForcedLevy: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.MalayId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'ForcedLevy',
  englishName: 'Forced Levy',
  frenchName: 'Enrolement de force',
  cost: {[Resource.Food]: 1000, [Resource.Gold]: 600},
  bonus: {
    description: {
      template: 'Change le cout en or des %1 en nourriture.',
      variables: [{type: InterpolationVariableType.Unit, unit: Militia}],
    },
    effects: [
      {
        teamBonus: false,
        units: isMilitiaLine,
        goldCostBonus: AllAge(1),
        foodCostFixedBonus: AllAge(-20),
      },
    ],
  },
};
export const Farimba: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.MaliansId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Farimba',
  englishName: 'Farimba',
  frenchName: 'Farimba',
  cost: {[Resource.Food]: 650, [Resource.Gold]: 400},
  bonus: {
    description: {
      template: "Les %1, %2 et %3 ont +5 d'attaque.",
      variables: [
        {type: InterpolationVariableType.Unit, unit: CamelRider},
        {type: InterpolationVariableType.Unit, unit: Knight},
        {type: InterpolationVariableType.Unit, unit: LightCavalry},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u => isCamelRiderLine(u) || isKnightLine(u) || isScoutCavalryLine(u),
        attackBonus: AllAge(5),
      },
    ],
  },
};
export const ElDorado: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.MayansId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'ElDorado',
  englishName: 'El Dorado',
  frenchName: 'El Dorado',
  cost: {[Resource.Food]: 750, [Resource.Gold]: 450},
  bonus: {
    description: {
      template: 'Les %1 ont +40 PDV.',
      variables: [{type: InterpolationVariableType.Unit, unit: EagleWarrior}],
    },
    effects: [{teamBonus: false, units: isEagleWarriorLine, healthFixedBonus: AllAge(40)}],
  },
};
export const Drill: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.MongolsId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Drill',
  englishName: 'Drill',
  frenchName: 'Manoeuvres',
  cost: {[Resource.Food]: 500, [Resource.Gold]: 450},
  bonus: {
    description: {
      template: 'Les unités de %1 se déplacent 50% plus vite.',
      variables: [{type: InterpolationVariableType.Building, building: SiegeWorkshop}],
    },
    effects: [{teamBonus: false, units: isInSiegeWorkshop, speedBonus: AllAge(0.5)}],
  },
};
export const Mahouts: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.PersiansId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Mahouts',
  englishName: 'Mahouts',
  frenchName: 'Cornacs',
  cost: {[Resource.Food]: 300, [Resource.Gold]: 300},
  bonus: {
    description: {
      template: 'Les Éléphants de guerre se déplacent 30% plus vite.',
      variables: [
        //   {type: InterpolationVariableType.Unit, unit: WarElephant}
      ],
    },
    effects: [{teamBonus: false, units: isWarElephantLine, speedBonus: AllAge(0.3)}],
  },
};
export const Arquebus: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.PortugueseId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Arquebus',
  englishName: 'Arquebus',
  frenchName: 'Arquebuse',
  cost: {[Resource.Food]: 700, [Resource.Gold]: 400},
  bonus: {
    description: {
      template:
        'Les %1 tirent avec plus de précision sur les cibles mobiles. Les %2, %3 et tours de bombardes on +0.2 en vitesse de projectiles.',
      variables: [
        {type: InterpolationVariableType.UnitType, unitType: UnitType.GunpowderUnit},
        {type: InterpolationVariableType.Unit, unit: BombardCanon},
        {type: InterpolationVariableType.Unit, unit: CannonGalleon},
      ],
    },
    effects: [
      {teamBonus: false, units: isGunpowderUnit},
      {
        teamBonus: false,
        units: u => isBombardCanon(u) || isCannonGalleonLine(u),
        projectileSpeedBonus: AllAge(0.2),
      },
    ],
  },
};
export const Zealotry: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.SaracensId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Zealotry',
  englishName: 'Zealotry',
  frenchName: 'Fanatisme',
  cost: {[Resource.Food]: 750, [Resource.Gold]: 800},
  bonus: {
    description: {
      template: 'Les %1 ont +30 de PDV.',
      variables: [{type: InterpolationVariableType.ArmorType, armorType: ArmorType.Camel}],
    },
    effects: [{teamBonus: false, units: isCamel, healthFixedBonus: AllAge(30)}],
  },
};
export const Druzhina: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.SlavsId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Druzhina',
  englishName: 'Druzhina',
  frenchName: 'Druzhina',
  cost: {[Resource.Food]: 1200, [Resource.Gold]: 500},
  bonus: {
    description: {
      template: "L'%1 infligent 5 dommages (non affecté par l'armure) de zone (rayon 0.5).",
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Infantry}],
    },
    effects: [{teamBonus: false, units: isInfantry, areaOfDamageBonus: AllAge(0.5)}],
  },
};
export const Supremacy: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.SpanishId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Supremacy',
  englishName: 'Supremacy',
  frenchName: 'Suprématie',
  cost: {[Resource.Food]: 450, [Resource.Gold]: 250},
  bonus: {
    description: {
      template: "Les %1 ont +6 d'attaque, +2 d'armure, +2 de protection perçage et +40 PDV.",
      variables: [{type: InterpolationVariableType.Unit, unit: Villager}],
    },
    effects: [
      {teamBonus: false, units: isVillager, attackBonus: AllAge(6)},
      {teamBonus: false, units: isVillager, armorBonus: AllAge({melee: 2, pierce: 2})},
      {teamBonus: false, units: isVillager, healthFixedBonus: AllAge(40)},
    ],
  },
};
export const TimuridSiegecraft: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.TatarsId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'TimuridSiegecraft',
  englishName: 'Timurid Siegecraft',
  frenchName: 'Arme de siège timuride',
  cost: {[Resource.Wood]: 400, [Resource.Gold]: 500},
  bonus: {
    description: {
      template: 'Les %1 ont +1 de portée.',
      variables: [{type: InterpolationVariableType.Unit, unit: TrebuchetUnpacked}],
    },
    effects: [{teamBonus: false, units: isTrebuchetUnpacked, rangeBonus: AllAge(1)}],
  },
};
export const Crenellations: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.TeutonsId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Crenellations',
  englishName: 'Crenellations',
  frenchName: 'Crénelures',
  cost: {[Resource.Food]: 600, [Resource.Stone]: 400},
  bonus: {
    description: {
      template: "Les %1 ont +3 de portée et l'%1 en garnison peut tirer des flèches.",
      variables: [
        {type: InterpolationVariableType.Unit, unit: TrebuchetUnpacked},
        {type: InterpolationVariableType.Building, building: Castle},
      ],
    },
    effects: [],
  },
};
export const Artillery: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.TurksId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Artillery',
  englishName: 'Artillery',
  frenchName: 'Artillerie',
  cost: {[Resource.Gold]: 500, [Resource.Stone]: 450},
  bonus: {
    description: {
      template: 'Les %1, %2 et tours de bombardent ont +2 de portée.',
      variables: [
        {type: InterpolationVariableType.Unit, unit: BombardCanon},
        {type: InterpolationVariableType.Unit, unit: CannonGalleon},
      ],
    },
    effects: [{teamBonus: false, units: u => isBombardCanon(u) || isCannonGalleonLine(u)}],
  },
};
export const PaperMoney: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.VietnameseId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'PaperMoney',
  englishName: 'Paper Money',
  frenchName: 'Monnaie de papier',
  cost: {[Resource.Food]: 800, [Resource.Gold]: 200},
  bonus: {
    description: {template: "Chaque membre de l'équipe reçoit 500 d'or.", variables: []},
    effects: [{teamBonus: true, units: noUnits}],
  },
};
export const Berserkergang: UniqueTechnology = {
  type: TechnologyType.Unique,
  civilization: Ids.VikingsId,
  age: Age.ImperialAge,
  building: Castle,
  id: 'Berserkergang',
  englishName: 'Berserkergang',
  frenchName: 'Gang de fou',
  cost: {[Resource.Food]: 850, [Resource.Gold]: 400},
  bonus: {
    description: {
      template: 'Les Fou de guerre se regénèrent 2x plus vite.',
      variables: [
        // {type: InterpolationVariableType.Unit, unit: Berserk},
      ],
    },
    effects: [{teamBonus: false, units: isBerzerkLine}],
  },
};

export const uniqueTechnologyRegistry: UniqueTechnology[] = [
  // Castle
  Atlatl,
  Kasbah,
  Yeomen,
  Stirrups,
  Howdah,
  GreekFire,
  Stronghold,
  GreatWall,
  SteppeHusbandry,
  RoyalHeirs,
  Chivalry,
  Anarchy,
  Marauders,
  AndeanSling,
  Sultans,
  Pavise,
  Yasama,
  TuskSwords,
  Panokseon,
  HillForts,
  Mercenaries,
  Thalassocracy,
  Tigui,
  ObsidianArrows,
  Nomads,
  Kamandaran,
  Carrack,
  Madrasah,
  Orthodoxy,
  Inquisition,
  SilkArmor,
  Ironclad,
  Sipahi,
  Chatras,
  Chieftains,
  // Imperial
  GarlandWars,
  MaghrabiCamels,
  Warwolf,
  Bagains,
  ManipurCavalry,
  Logistica,
  FurorCeltica,
  Rocketry,
  CumanMercenaries,
  TorsionEngines,
  BeardedAxe,
  Perfusion,
  Atheism,
  Couriers,
  Shatagni,
  SilkRoad,
  Kataparuto,
  DoubleCrossbow,
  Shinkichon,
  TowerShields,
  RecurveBow,
  ForcedLevy,
  Farimba,
  ElDorado,
  Drill,
  Mahouts,
  Arquebus,
  Zealotry,
  Druzhina,
  Supremacy,
  TimuridSiegecraft,
  Crenellations,
  Artillery,
  PaperMoney,
  Berserkergang,
];
