/* eslint-disable no-magic-numbers */
import {Age} from '../ages/core';
import {
  TownCenter,
  University,
  Castle,
  LumberCamp,
  MiningCamp,
  Mill,
  Monastery,
  Market,
  Dock,
  Barrack,
  Blacksmith,
  Archery,
  Stable,
} from '../buildings';
import {ArmorType} from '../damage';
import {
  noUnits,
  isVillager,
  isInfantry,
  isCavalry,
  isArcher,
  isInStable,
  isShip,
  isFishingShip,
  isInBarrack,
  isInArchery,
  isInCastle,
  isMonk,
  isBattleElephantLine,
  isCavalryArcherLine,
  isLongboatLine,
  isSkirmisherLine,
  isWarWagonLine,
  isGenoeseLine,
  isArcherLine,
  isMangudaiLine,
  isLongbowLine,
  isPlumedArcherLine,
  isRattanLine,
  isChuKoNuLine,
  isSlinger,
  isGenitourLine,
  isCamelArcherLine,
  isMountedArcher,
  isGalleyLine,
  isGunpowderUnit,
  isRange,
  isSiegeUnit,
  isBatteringRamLine,
  isPetard,
  isMounted,
} from '../lib/unit_groups';
import {InterpolationVariableType, AllAge} from '../core';
import {Villager} from '../units/town_center';
import {TradeCart} from '../units/market';
import {TradeCog, FishingShip, Galley, Longboat, TransportShip} from '../units/dock';
import {Monk, Missionary} from '../units/monastery';
import {UnitType} from '../units/core';
import {Pikeman} from '../units/barrack';
import {BatteringRam} from '../units/siege_workshop';
import {Petard} from '../units/castle';

import {TechnologyType, Technology} from './core';

export const TownWatch: Technology = {
  type: TechnologyType.Building,
  id: 'Townwatch',
  englishName: 'Town Watch',
  frenchName: 'Tour de guet',
  age: Age.FeudalAge,
  building: TownCenter,
  cost: {food: 75},
  bonus: {
    description: {template: 'Les batiments ont +4 de ligne de vue.', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const TownPatrol: Technology = {
  type: TechnologyType.Building,
  id: 'Townpatrol',
  englishName: 'Town Patrol',
  frenchName: 'Patrouille de ville',
  age: Age.CastleAge,
  building: TownCenter,
  cost: {food: 300, gold: 100},
  bonus: {
    description: {template: 'Les batiments ont +4 de ligne de vue.', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const TreadmillCrane: Technology = {
  type: TechnologyType.Building,
  id: 'Treadmillcrane',
  englishName: 'Treadmill Crane',
  frenchName: 'Grue à poulie',
  age: Age.CastleAge,
  building: University,
  cost: {food: 300, wood: 200},
  bonus: {
    description: {
      template: 'Les %1 sont créés 20% plus vite.',
      variables: [{type: InterpolationVariableType.Unit, unit: Villager}],
    },
    effects: [{teamBonus: false, units: isVillager, trainingSpeedBonus: AllAge(0.2)}],
  },
};
export const Masonry: Technology = {
  type: TechnologyType.Building,
  id: 'Masonry',
  englishName: 'Masonry',
  frenchName: 'Maçonnerie',
  age: Age.CastleAge,
  building: University,
  cost: {food: 150, wood: 175},
  bonus: {
    description: {template: "Les batiments ont +10% de PDV et +1/+1 d'armure", variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const Architecture: Technology = {
  type: TechnologyType.Building,
  id: 'Architecture',
  englishName: 'Architecture',
  frenchName: 'Architecture',
  age: Age.ImperialAge,
  building: University,
  cost: {food: 300, wood: 200},
  bonus: {
    description: {template: "Les batiments ont +10% de PDV et +1/+1 d'armure", variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const Hoardings: Technology = {
  type: TechnologyType.Building,
  id: 'Hoardings',
  englishName: 'Hoardings',
  frenchName: 'Palissades',
  age: Age.ImperialAge,
  building: Castle,
  cost: {food: 400, wood: 400},
  bonus: {
    description: {
      template: 'Les %1 ont +21% de PDV.',
      variables: [{type: InterpolationVariableType.Building, building: Castle}],
    },
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const Conscription: Technology = {
  type: TechnologyType.Building,
  id: 'Conscription',
  englishName: 'Conscription',
  frenchName: 'Conscription',
  age: Age.ImperialAge,
  building: Castle,
  cost: {food: 150, gold: 150},
  bonus: {
    description: {
      template: 'Les %1, %2, %3, et %4 fonctionnent 33% plus vite.',
      variables: [
        {type: InterpolationVariableType.Building, building: Barrack},
        {type: InterpolationVariableType.Building, building: Archery},
        {type: InterpolationVariableType.Building, building: Stable},
        {type: InterpolationVariableType.Building, building: Castle},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u => isInBarrack(u) || isInArchery(u) || isInStable(u) || isInCastle(u),
        trainingSpeedBonus: AllAge(0.33),
      },
    ],
  },
};
export const Wheelbarrow: Technology = {
  type: TechnologyType.Economy,
  id: 'Wheelbarrow',
  englishName: 'Wheelbarrow',
  frenchName: 'Brouette',
  age: Age.FeudalAge,
  building: TownCenter,
  cost: {food: 175, wood: 50},
  bonus: {
    description: {
      template: 'Les %1 se déplacent +10% plus vite et transportent 25% plus de ressources.',
      variables: [{type: InterpolationVariableType.Unit, unit: Villager}],
    },
    effects: [{teamBonus: false, units: isVillager, speedBonus: AllAge(0.1)}],
  },
};
export const HandCart: Technology = {
  type: TechnologyType.Economy,
  id: 'Handcart',
  englishName: 'Hand Cart',
  frenchName: 'Charrette à bras',
  age: Age.CastleAge,
  building: TownCenter,
  cost: {food: 300, wood: 200},
  bonus: {
    description: {
      template: 'Les %1 se déplacent +10% plus vite et transportent 50% plus de ressources.',
      variables: [{type: InterpolationVariableType.Unit, unit: Villager}],
    },
    effects: [{teamBonus: false, units: isVillager, speedBonus: AllAge(0.1)}],
  },
};
export const DoubleBitAxe: Technology = {
  type: TechnologyType.Economy,
  id: 'Doublebitaxe',
  englishName: 'Double-Bit Axe',
  frenchName: 'Hache à double tranchant',
  age: Age.FeudalAge,
  building: LumberCamp,
  cost: {food: 100, wood: 50},
  bonus: {
    description: {
      template: 'Les %1 coupent du bois 20% plus rapidement.',
      variables: [{type: InterpolationVariableType.Unit, unit: Villager}],
    },
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const BowSaw: Technology = {
  type: TechnologyType.Economy,
  id: 'BowSaw',
  englishName: 'Bow Saw',
  frenchName: 'Scie à archer',
  age: Age.CastleAge,
  building: LumberCamp,
  cost: {food: 150, wood: 100},
  bonus: {
    description: {
      template: 'Les %1 coupent du bois 20% plus rapidement.',
      variables: [{type: InterpolationVariableType.Unit, unit: Villager}],
    },
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const TwoManSaw: Technology = {
  type: TechnologyType.Economy,
  id: 'Twomansaw',
  englishName: 'Two-Man Saw',
  frenchName: 'Scie à deux bras',
  age: Age.ImperialAge,
  building: LumberCamp,
  cost: {food: 300, wood: 200},
  bonus: {
    description: {
      template: 'Les %1 coupent du bois 10% plus rapidement.',
      variables: [{type: InterpolationVariableType.Unit, unit: Villager}],
    },
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const HorseCollar: Technology = {
  type: TechnologyType.Economy,
  id: 'Horsecollar',
  englishName: 'Horse Collar',
  frenchName: 'Harnais de cheval',
  age: Age.FeudalAge,
  building: Mill,
  cost: {food: 75, wood: 75},
  bonus: {
    description: {template: 'Les fermes ont +75 de nourriture.', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const HeavyPlow: Technology = {
  type: TechnologyType.Economy,
  id: 'Heavyplow',
  englishName: 'Heavy Plow',
  frenchName: 'Labourage lourd',
  age: Age.CastleAge,
  building: Mill,
  cost: {food: 125, wood: 125},
  bonus: {
    description: {
      template: 'Les fermes ont +125 de nourriture et les %1 transportent +1 de nourriture.',
      variables: [{type: InterpolationVariableType.Unit, unit: Villager}],
    },
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const CropRotation: Technology = {
  type: TechnologyType.Economy,
  id: 'Croprotation',
  englishName: 'Crop Rotation',
  frenchName: 'Alternance des cultures',
  age: Age.ImperialAge,
  building: Mill,
  cost: {food: 250, wood: 250},
  bonus: {
    description: {template: 'Les fermes ont +175 de nourriture.', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const GoldMining: Technology = {
  type: TechnologyType.Economy,
  id: 'Goldmining',
  englishName: 'Gold Mining',
  frenchName: "Mine d'or",
  age: Age.FeudalAge,
  building: MiningCamp,
  cost: {food: 100, wood: 75},
  bonus: {
    description: {
      template: "Les %1 extraient l'or 15% plus rapidement",
      variables: [{type: InterpolationVariableType.Unit, unit: Villager}],
    },
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const GoldShaftMining: Technology = {
  type: TechnologyType.Economy,
  id: 'Goldshaftmining',
  englishName: 'Gold Shaft Mining',
  frenchName: "Puits de forage d'or",
  age: Age.CastleAge,
  building: MiningCamp,
  cost: {food: 200, wood: 150},
  bonus: {
    description: {
      template: "Les %1 extraient l'or 15% plus rapidement",
      variables: [{type: InterpolationVariableType.Unit, unit: Villager}],
    },
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const StoneMining: Technology = {
  type: TechnologyType.Economy,
  id: 'Stonemining',
  englishName: 'Stone Mining',
  frenchName: 'Carrière',
  age: Age.FeudalAge,
  building: MiningCamp,
  cost: {food: 100, wood: 75},
  bonus: {
    description: {
      template: 'Les %1 extraient la pierre 15% plus rapidement',
      variables: [{type: InterpolationVariableType.Unit, unit: Villager}],
    },
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const ShaftMiningStone: Technology = {
  type: TechnologyType.Economy,
  id: 'Shaft-Mining-Stone',
  englishName: 'Shaft Mining Stone',
  frenchName: 'Puits de forage de pierre',
  age: Age.CastleAge,
  building: MiningCamp,
  cost: {food: 200, wood: 150},
  bonus: {
    description: {
      template: 'Les %1 extraient la pierre 15% plus rapidement',
      variables: [{type: InterpolationVariableType.Unit, unit: Villager}],
    },
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const Caravan: Technology = {
  type: TechnologyType.Economy,
  id: 'Caravan',
  englishName: 'Caravan',
  frenchName: 'Caravane',
  age: Age.CastleAge,
  building: Market,
  cost: {food: 200, gold: 200},
  bonus: {
    description: {
      template: 'Les %1 et %2 se délacent 50% plus rapidement',
      variables: [
        {type: InterpolationVariableType.Unit, unit: TradeCart},
        {type: InterpolationVariableType.Unit, unit: TradeCog},
      ],
    },
    effects: [{teamBonus: false, units: noUnits, speedBonus: AllAge(0.5)}],
  },
};
export const Coinage: Technology = {
  type: TechnologyType.Economy,
  id: 'Coinage',
  englishName: 'Coinage',
  frenchName: 'Frappe de monnaie',
  age: Age.CastleAge,
  building: Market,
  cost: {food: 200, gold: 100},
  bonus: {
    description: {template: 'Réduit les taxes pour les tributs à 20%.', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const Banking: Technology = {
  type: TechnologyType.Economy,
  id: 'Banking',
  englishName: 'Banking',
  frenchName: 'Banque',
  age: Age.ImperialAge,
  building: Market,
  cost: {food: 300, gold: 200},
  bonus: {
    description: {template: 'Pas de tributs à payer.', variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const Guilds: Technology = {
  type: TechnologyType.Economy,
  id: 'Guilds',
  englishName: 'Guilds',
  frenchName: 'Guildes',
  age: Age.ImperialAge,
  building: Market,
  cost: {food: 300, gold: 200},
  bonus: {
    description: {template: "Réduit la taxe d'échange de marchandises de 15%.", variables: []},
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const Gillnets: Technology = {
  type: TechnologyType.Economy,
  id: 'Gillnetsicon',
  englishName: 'Gillnets',
  frenchName: 'Filets maillants',
  age: Age.CastleAge,
  building: Dock,
  cost: {food: 150, gold: 200},
  bonus: {
    description: {
      template: 'Les %1 travaillent 25% plus vite.',
      variables: [{type: InterpolationVariableType.Unit, unit: FishingShip}],
    },
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const Redemption: Technology = {
  type: TechnologyType.Religious,
  id: 'Redemption',
  englishName: 'Redemption',
  frenchName: 'Redemption',
  age: Age.CastleAge,
  building: Monastery,
  cost: {gold: 475},
  bonus: {
    description: {
      template: '%1 peuvent convertir la plupart des batiments ennemis et les %2.',
      variables: [
        {type: InterpolationVariableType.Unit, unit: Monk},
        {type: InterpolationVariableType.UnitType, unitType: UnitType.SiegeUnit},
      ],
    },
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const Atonement: Technology = {
  type: TechnologyType.Religious,
  id: 'Atonement',
  englishName: 'Atonement',
  frenchName: 'Expiation',
  age: Age.CastleAge,
  building: Monastery,
  cost: {gold: 325},
  bonus: {
    description: {
      template: 'Les %1 peuvent convertir les autres %1.',
      variables: [{type: InterpolationVariableType.Unit, unit: Monk}],
    },
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const HerbalMedicine: Technology = {
  type: TechnologyType.Religious,
  id: 'Herbal-medicine',
  englishName: 'Herbal Medicine',
  frenchName: 'Plantes médicinales',
  age: Age.CastleAge,
  building: Monastery,
  cost: {gold: 350},
  bonus: {
    description: {
      template: 'Les unités de garnison dans les batiments guérissent 6x plus vite.',
      variables: [],
    },
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const Heresy: Technology = {
  type: TechnologyType.Religious,
  id: 'Heresy',
  englishName: 'Heresy',
  frenchName: 'Hérésie',
  age: Age.CastleAge,
  building: Monastery,
  cost: {gold: 1000},
  bonus: {
    description: {
      template:
        "Les unités converties par un %1 ennemi (ou %2) meurent au lieu de prendre les couleurs de l'ennmie.",
      variables: [
        {type: InterpolationVariableType.Unit, unit: Monk},
        {type: InterpolationVariableType.Unit, unit: Missionary},
      ],
    },
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const Sanctity: Technology = {
  type: TechnologyType.Religious,
  id: 'Sanctity',
  englishName: 'Sanctity',
  frenchName: 'Sainteté',
  age: Age.CastleAge,
  building: Monastery,
  cost: {gold: 120},
  bonus: {
    description: {
      template: 'Les %1 ont +15 de PDV.',
      variables: [{type: InterpolationVariableType.Unit, unit: Monk}],
    },
    effects: [{teamBonus: false, units: isMonk, healthBonus: AllAge(0.15)}],
  },
};
export const Fervor: Technology = {
  type: TechnologyType.Religious,
  id: 'Fervor',
  englishName: 'Fervor',
  frenchName: 'Ferveur',
  age: Age.CastleAge,
  building: Monastery,
  cost: {gold: 140},
  bonus: {
    description: {
      template: 'Les %1 se déplacent +15% plus vite.',
      variables: [{type: InterpolationVariableType.Unit, unit: Monk}],
    },
    effects: [{teamBonus: false, units: isMonk, speedBonus: AllAge(0.15)}],
  },
};
export const Faith: Technology = {
  type: TechnologyType.Religious,
  id: 'Faith',
  englishName: 'Faith',
  frenchName: 'Foi',
  age: Age.ImperialAge,
  building: Monastery,
  cost: {food: 750, gold: 1000},
  bonus: {
    description: {
      template: 'Les unités sont 50% plus difficiles à convertir par les %1 ennemis.',
      variables: [{type: InterpolationVariableType.Unit, unit: Monk}],
    },
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const Illumination: Technology = {
  type: TechnologyType.Religious,
  id: 'Illumination',
  englishName: 'Illumination',
  frenchName: 'Illumination',
  age: Age.ImperialAge,
  building: Monastery,
  cost: {gold: 120},
  bonus: {
    description: {
      template: 'Les %1 récupèrent leur foi 50% plus vite après une conversion réussie.',
      variables: [{type: InterpolationVariableType.Unit, unit: Monk}],
    },
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const BlockPrinting: Technology = {
  type: TechnologyType.Religious,
  id: 'Blockprinting',
  englishName: 'Block Printing',
  frenchName: 'Imprimerie',
  age: Age.ImperialAge,
  building: Monastery,
  cost: {gold: 200},
  bonus: {
    description: {
      template: 'Les %1 on +3 de portée de conversion.',
      variables: [{type: InterpolationVariableType.Unit, unit: Monk}],
    },
    effects: [{teamBonus: false, units: isMonk, conversionRangeBonus: AllAge(3)}],
  },
};
export const Theocracy: Technology = {
  type: TechnologyType.Religious,
  id: 'Theocracy',
  englishName: 'Theocracy',
  frenchName: 'Théocratie',
  age: Age.ImperialAge,
  building: Monastery,
  cost: {gold: 200},
  bonus: {
    description: {
      template:
        "Lorsqu'un groupe de %1 convertit une unité ennemie, un seuld d'entre eux doit se reposer.",
      variables: [{type: InterpolationVariableType.Unit, unit: Monk}],
    },
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const Squires: Technology = {
  type: TechnologyType.Infantry,
  id: 'Squires',
  englishName: 'Squires',
  frenchName: 'Écuyers',
  age: Age.CastleAge,
  building: Barrack,
  cost: {food: 100},
  bonus: {
    description: {
      template: "L'%1 se déplacent +10% plus rapidement",
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Infantry}],
    },
    effects: [{teamBonus: false, units: isInfantry, speedBonus: AllAge(0.1)}],
  },
};
export const Arson: Technology = {
  type: TechnologyType.Infantry,
  id: 'Arson',
  englishName: 'Arson',
  frenchName: 'Brasier',
  age: Age.CastleAge,
  building: Barrack,
  cost: {food: 150, gold: 50},
  bonus: {
    description: {
      template: "L'%1 a +2 d'attaque contre les batiments.",
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Infantry}],
    },
    effects: [
      {teamBonus: false, units: isInfantry, attackBonusBonus: AllAge([ArmorType.Building, 2])},
    ],
  },
};
export const ScaleMailArmor: Technology = {
  type: TechnologyType.Infantry,
  id: 'Scalemailarmor',
  englishName: 'Scale Mail Armor',
  frenchName: 'Cotte de mailles écaillée',
  age: Age.FeudalAge,
  building: Blacksmith,
  cost: {food: 100},
  bonus: {
    description: {
      template: "L'%1 gagne +1 d'armure et +1 de protection perçage",
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Infantry}],
    },
    effects: [{teamBonus: false, units: isInfantry, armorBonus: AllAge({melee: 1, pierce: 1})}],
  },
};
export const ChainMailArmor: Technology = {
  type: TechnologyType.Infantry,
  id: 'Chainmailarmor',
  englishName: 'Chain Mail Armor',
  frenchName: 'Cotte de mailles chainée',
  age: Age.CastleAge,
  building: Blacksmith,
  cost: {food: 200, gold: 100},
  bonus: {
    description: {
      template: "L'%1 gagne +1 d'armure et +1 de protection perçage",
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Infantry}],
    },
    effects: [{teamBonus: false, units: isInfantry, armorBonus: AllAge({melee: 1, pierce: 1})}],
  },
};
export const PlateMailArmor: Technology = {
  type: TechnologyType.Infantry,
  id: 'Platemailarmor',
  englishName: 'Plate Mail Armor',
  frenchName: 'Cotte de maiiles plaquées',
  age: Age.ImperialAge,
  building: Blacksmith,
  cost: {food: 300, gold: 150},
  bonus: {
    description: {
      template: "L'%1 gagne +1 d'armure et +1 de protection perçage",
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Infantry}],
    },
    effects: [{teamBonus: false, units: isInfantry, armorBonus: AllAge({melee: 1, pierce: 2})}],
  },
};
export const ThumbRing: Technology = {
  type: TechnologyType.MissileAndSiege,
  id: 'Ring-Thumb',
  englishName: 'Thumb Ring',
  frenchName: 'Bague de pouce',
  age: Age.CastleAge,
  building: Archery,
  cost: {food: 300, wood: 250},
  bonus: {
    description: {
      template: 'Les %1 tire plus vite avec une précision de 100%',
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Archer}],
    },
    effects: [
      {teamBonus: false, units: isWarWagonLine, rateOfFireBonus: AllAge(0.11)},
      {
        teamBonus: false,
        units: u => isBattleElephantLine(u) || isGenoeseLine(u),
        rateOfFireBonus: AllAge(0.18),
      },
      {
        teamBonus: false,
        units: isCavalryArcherLine,
        rateOfFireBonus: AllAge(0.11),
        fullAccuracyBonus: AllAge(true),
      },
      {
        teamBonus: false,
        units: u =>
          isArcherLine(u) ||
          isLongbowLine(u) ||
          isMangudaiLine(u) ||
          isPlumedArcherLine(u) ||
          isCamelArcherLine(u) ||
          isRattanLine(u),
        rateOfFireBonus: AllAge(0.18),
        fullAccuracyBonus: AllAge(true),
      },
      {
        teamBonus: false,
        units: isChuKoNuLine,
        rateOfFireBonus: AllAge(0.25),
        fullAccuracyBonus: AllAge(true),
      },
      {
        teamBonus: false,
        units: u => isSkirmisherLine(u) || isSlinger(u) || isGenitourLine(u),
        fullAccuracyBonus: AllAge(true),
      },
    ],
  },
};
export const ParthianTactics: Technology = {
  type: TechnologyType.MissileAndSiege,
  id: 'Parthian-Tactics',
  englishName: 'Parthian Tactics',
  frenchName: 'Tactiques parthes',
  age: Age.ImperialAge,
  building: Archery,
  cost: {food: 200, gold: 250},
  bonus: {
    description: {
      template:
        "Les archers montés gagnent +1 d'armure, +2 de protection perçage et on un bonus d'attaque de +2 contre les archers montés uniques et +2 contre les %2",
      variables: [{type: InterpolationVariableType.Unit, unit: Pikeman}],
    },
    effects: [
      {teamBonus: false, units: isMountedArcher, armorBonus: AllAge({melee: 1, pierce: 2})},
      {
        teamBonus: false,
        units: u => isMountedArcher(u) && !isCavalryArcherLine(u),
        attackBonusBonus: AllAge([ArmorType.Spearman, 2]),
      },
      {
        teamBonus: false,
        units: isCavalryArcherLine,
        attackBonusBonus: AllAge([ArmorType.Spearman, 4]),
      },
    ],
  },
};
export const Fletching: Technology = {
  type: TechnologyType.MissileAndSiege,
  id: 'Fletching',
  englishName: 'Fletching',
  frenchName: 'Empennage',
  age: Age.FeudalAge,
  building: Blacksmith,
  cost: {food: 100, gold: 50},
  bonus: {
    description: {
      template: "Les %1, %2, %3, %4, %5 et tours ont +1 d'attaque et +1 de portée (sauf %4).",
      variables: [
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Archer},
        {type: InterpolationVariableType.Unit, unit: Galley},
        {type: InterpolationVariableType.Unit, unit: Longboat},
        {type: InterpolationVariableType.Building, building: TownCenter},
        {type: InterpolationVariableType.Building, building: Castle},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u => isArcher(u) || isGalleyLine(u) || isLongboatLine(u),
        rangeBonus: AllAge(1),
        attackBonus: AllAge(1),
      },
    ],
  },
};
export const BodkinArrow: Technology = {
  type: TechnologyType.MissileAndSiege,
  id: 'Bodkinarrow',
  englishName: 'Bodkin Arrow',
  frenchName: 'Flèche à poinçon',
  age: Age.CastleAge,
  building: Blacksmith,
  cost: {food: 200, gold: 100},
  bonus: {
    description: {
      template: "Les %1, %2, %3, %4, %5 et tours ont +1 d'attaque et +1 de portée (sauf %4).",
      variables: [
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Archer},
        {type: InterpolationVariableType.Unit, unit: Galley},
        {type: InterpolationVariableType.Unit, unit: Longboat},
        {type: InterpolationVariableType.Building, building: TownCenter},
        {type: InterpolationVariableType.Building, building: Castle},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u => isArcher(u) || isGalleyLine(u) || isLongboatLine(u),
        rangeBonus: AllAge(1),
        attackBonus: AllAge(1),
      },
    ],
  },
};
export const Bracer: Technology = {
  type: TechnologyType.MissileAndSiege,
  id: 'Bracer',
  englishName: 'Bracer',
  frenchName: 'Brassard',
  age: Age.ImperialAge,
  building: Blacksmith,
  cost: {food: 300, gold: 200},
  bonus: {
    description: {
      template: "Les %1, %2, %3, %4, %5 et tours ont +1 d'attaque et +1 de portée (sauf %4).",
      variables: [
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Archer},
        {type: InterpolationVariableType.Unit, unit: Galley},
        {type: InterpolationVariableType.Unit, unit: Longboat},
        {type: InterpolationVariableType.Building, building: TownCenter},
        {type: InterpolationVariableType.Building, building: Castle},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u => isArcher(u) || isGalleyLine(u) || isLongboatLine(u),
        rangeBonus: AllAge(1),
        attackBonus: AllAge(1),
      },
    ],
  },
};
export const PaddedArcherArmor: Technology = {
  type: TechnologyType.MissileAndSiege,
  id: 'Paddedarcherarmor',
  englishName: 'Padded Archer Armor',
  frenchName: "Armure d'archer matelassée",
  age: Age.FeudalAge,
  building: Blacksmith,
  cost: {food: 100},
  bonus: {
    description: {
      template: "Les %1 ont +1 d'armure et +1 de protection perçage.",
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Archer}],
    },
    effects: [{teamBonus: false, units: isArcher, armorBonus: AllAge({melee: 1, pierce: 1})}],
  },
};
export const LeatherArcherArmor: Technology = {
  type: TechnologyType.MissileAndSiege,
  id: 'Leatherarcherarmor',
  englishName: 'Leather Archer Armor',
  frenchName: "Armure d'archer en cuir",
  age: Age.CastleAge,
  building: Blacksmith,
  cost: {food: 150, gold: 150},
  bonus: {
    description: {
      template: "Les %1 ont +1 d'armure et +1 de protection perçage.",
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Archer}],
    },
    effects: [{teamBonus: false, units: isArcher, armorBonus: AllAge({melee: 1, pierce: 1})}],
  },
};
export const RingArcherArmor: Technology = {
  type: TechnologyType.MissileAndSiege,
  id: 'Ringarcherarmor',
  englishName: 'Ring Archer Armor',
  frenchName: "Armure d'archer chainée",
  age: Age.ImperialAge,
  building: Blacksmith,
  cost: {food: 250, gold: 250},
  bonus: {
    description: {
      template: "Les %1 ont +1 d'armure et +2 de protection perçage.",
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Archer}],
    },
    effects: [{teamBonus: false, units: isArcher, armorBonus: AllAge({melee: 1, pierce: 2})}],
  },
};
export const Ballistics: Technology = {
  type: TechnologyType.MissileAndSiege,
  id: 'Ballistics',
  englishName: 'Ballistics',
  frenchName: 'Balistique',
  age: Age.CastleAge,
  building: University,
  cost: {wood: 300, gold: 175},
  bonus: {
    description: {
      template:
        'Les %1, %2, %3, %4, et tours tirent avec plus de précision sur les cibles mobiles.',
      variables: [
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Archer},
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Ship},
        {type: InterpolationVariableType.Building, building: Castle},
        {type: InterpolationVariableType.Building, building: TownCenter},
      ],
    },
    effects: [{teamBonus: false, units: isArcher}],
  },
};
export const HeatedShot: Technology = {
  type: TechnologyType.MissileAndSiege,
  id: 'Heatedshot',
  englishName: 'Heated Shot',
  frenchName: 'Projectiles en feu',
  age: Age.CastleAge,
  building: University,
  cost: {food: 350, gold: 100},
  bonus: {
    description: {
      template:
        "Les tours ont +125% d'attaque contre les %1. Les %2, Capitainerie et Krepost ont +4 d'attaque contre les %1.",
      variables: [
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Ship},
        {type: InterpolationVariableType.Building, building: Castle},
      ],
    },
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const MurderHoles: Technology = {
  type: TechnologyType.MissileAndSiege,
  id: 'Murderholes',
  englishName: 'Murder Holes',
  frenchName: 'Meurtrières',
  age: Age.CastleAge,
  building: University,
  cost: {food: 200, stone: 100},
  bonus: {
    description: {
      template: 'Élimine la portée minimum des structure défensive.',
      variables: [],
    },
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const Arrowslits: Technology = {
  type: TechnologyType.MissileAndSiege,
  id: 'Arrowlits',
  englishName: 'Arrowslits',
  frenchName: 'Archières',
  age: Age.ImperialAge,
  building: University,
  cost: {food: 250, wood: 250},
  bonus: {
    description: {
      template: "Les Tour de guet ont +1 d'attaque, les Tour de guarde + 2 et les Donjon +3.",
      variables: [],
    },
    effects: [{teamBonus: false, units: noUnits}],
  },
};
export const Chemistry: Technology = {
  type: TechnologyType.MissileAndSiege,
  id: 'Chemistry',
  englishName: 'Chemistry',
  frenchName: 'Chimie',
  age: Age.ImperialAge,
  building: University,
  cost: {food: 300, gold: 200},
  bonus: {
    description: {
      template: "Les attaques à distance (sauf les attaques des %1) ont +1 d'attaque.",
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.GunpowderUnit}],
    },
    effects: [{teamBonus: false, units: u => isRange(u) && !isGunpowderUnit(u)}],
  },
};
export const Engineers: Technology = {
  type: TechnologyType.MissileAndSiege,
  id: 'Siege',
  englishName: 'Engineers',
  frenchName: 'Ingénieurs de siège',
  age: Age.ImperialAge,
  building: University,
  cost: {food: 500, wood: 600},
  bonus: {
    description: {
      template:
        "Les %1 ont +1 de portée (sauf les %2) et un bonus d'attaque de 20% contre les batiments (40% pour les %3).",
      variables: [
        {type: InterpolationVariableType.UnitType, unitType: UnitType.SiegeUnit},
        {type: InterpolationVariableType.Unit, unit: BatteringRam},
        {type: InterpolationVariableType.Unit, unit: Petard},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u => isSiegeUnit(u) && !isBatteringRamLine(u),
        rangeBonus: AllAge(1),
      },
      {
        teamBonus: false,
        units: u => isSiegeUnit(u) && !isPetard(u),
        rangeBonus: AllAge(0.2),
      },
      {
        teamBonus: false,
        units: isPetard,
        rangeBonus: AllAge(0.4),
      },
    ],
  },
};
export const Bloodlines: Technology = {
  type: TechnologyType.Cavalry,
  id: 'Bloodlines',
  englishName: 'Bloodlines',
  frenchName: 'Lignes de sang',
  age: Age.FeudalAge,
  building: Stable,
  cost: {food: 150, gold: 100},
  bonus: {
    description: {template: 'Les unités montées ont +20 PDV.', variables: []},
    effects: [{teamBonus: false, units: isMounted, healthFixedBonus: AllAge(20)}],
  },
};
export const Husbandry: Technology = {
  type: TechnologyType.Cavalry,
  id: 'Husbandry',
  englishName: 'Husbandry',
  frenchName: 'Husbandry',
  age: Age.CastleAge,
  building: Stable,
  cost: {food: 150},
  bonus: {
    description: {
      template: 'Les %1 se déplacent 10% plus vite.',
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Cavalry}],
    },
    effects: [{teamBonus: false, units: isCavalry, speedBonus: AllAge(0.1)}],
  },
};
export const Forging: Technology = {
  type: TechnologyType.Cavalry,
  id: 'Forging',
  englishName: 'Forging',
  frenchName: 'Forge',
  age: Age.FeudalAge,
  building: Blacksmith,
  cost: {food: 150},
  bonus: {
    description: {
      template: "L'%1 et la %2 ont un bonus d'attaque de +1.",
      variables: [
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Infantry},
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Cavalry},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u => !isArcher(u) && (isCavalry(u) || isInfantry(u)),
        attackBonus: AllAge(1),
      },
    ],
  },
};
export const IronCasting: Technology = {
  type: TechnologyType.Cavalry,
  id: 'Ironcasting',
  englishName: 'Iron Casting',
  frenchName: 'Fonderie',
  age: Age.CastleAge,
  building: Blacksmith,
  cost: {food: 220, gold: 120},
  bonus: {
    description: {
      template: "L'%1 et la %2 ont un bonus d'attaque de +1.",
      variables: [
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Infantry},
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Cavalry},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u => !isArcher(u) && (isCavalry(u) || isInfantry(u)),
        attackBonus: AllAge(1),
      },
    ],
  },
};
export const BlastFurnace: Technology = {
  type: TechnologyType.Cavalry,
  id: 'Blastfurnace',
  englishName: 'Blast Furnace',
  frenchName: 'Haut fourneau',
  age: Age.ImperialAge,
  building: Blacksmith,
  cost: {food: 275, gold: 225},
  bonus: {
    description: {
      template: "L'%1 et la %2 ont un bonus d'attaque de +2.",
      variables: [
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Infantry},
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Cavalry},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u => !isArcher(u) && (isCavalry(u) || isInfantry(u)),
        attackBonus: AllAge(2),
      },
    ],
  },
};
export const ScaleBardingArmor: Technology = {
  type: TechnologyType.Cavalry,
  id: 'Scalebardingarmor',
  englishName: 'Scale Barding Armor',
  frenchName: 'Barde écaillée',
  age: Age.FeudalAge,
  building: Blacksmith,
  cost: {food: 150},
  bonus: {
    description: {
      template: "La %1 a +1 d'armure et +1 de protection perçage.",
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Cavalry}],
    },
    effects: [
      {
        teamBonus: false,
        units: u => !isArcher(u) && isCavalry(u),
        armorBonus: AllAge({melee: 1, pierce: 1}),
      },
    ],
  },
};
export const ChainBardingArmor: Technology = {
  type: TechnologyType.Cavalry,
  id: 'Chainbardingarmor',
  englishName: 'Chain Barding Armor',
  frenchName: 'Barde chainée',
  age: Age.CastleAge,
  building: Blacksmith,
  cost: {food: 250, gold: 150},
  bonus: {
    description: {
      template: "La %1 a +1 d'armure et +1 de protection perçage.",
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Cavalry}],
    },
    effects: [
      {
        teamBonus: false,
        units: u => !isArcher(u) && isCavalry(u),
        armorBonus: AllAge({melee: 1, pierce: 1}),
      },
    ],
  },
};
export const PlateBardingArmor: Technology = {
  type: TechnologyType.Cavalry,
  id: 'Platebardingarmor',
  englishName: 'Plate Barding Armor',
  frenchName: 'Barde plaquée',
  age: Age.ImperialAge,
  building: Blacksmith,
  cost: {food: 350, gold: 200},
  bonus: {
    description: {
      template: "La %1 a +1 d'armure et +2 de protection perçage.",
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Cavalry}],
    },
    effects: [
      {
        teamBonus: false,
        units: u => !isArcher(u) && isCavalry(u),
        armorBonus: AllAge({melee: 1, pierce: 2}),
      },
    ],
  },
};
export const Careening: Technology = {
  type: TechnologyType.Naval,
  id: 'Careening',
  englishName: 'Careening',
  frenchName: 'Carénage',
  age: Age.CastleAge,
  building: Dock,
  cost: {food: 250, gold: 150},
  bonus: {
    description: {
      template: 'Les %1 ont +1 de protection perçage. Les %2 ont +5 de capacité de transport.',
      variables: [
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Ship},
        {type: InterpolationVariableType.Unit, unit: TransportShip},
      ],
    },
    effects: [
      {teamBonus: false, units: isShip, armorBonus: AllAge({melee: 0, pierce: 1})},
      {teamBonus: false, units: isFishingShip, garrisonBonus: AllAge(5)},
    ],
  },
};
export const DryDock: Technology = {
  type: TechnologyType.Naval,
  id: 'Drydock',
  englishName: 'Dry Dock',
  frenchName: 'Cale sèche',
  age: Age.ImperialAge,
  building: Dock,
  cost: {food: 600, gold: 400},
  bonus: {
    description: {
      template: 'Les %1 se déplacent 15% plus vite. Les %2 ont +10 de capacité de transport.',
      variables: [
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Ship},
        {type: InterpolationVariableType.Unit, unit: TransportShip},
      ],
    },
    effects: [
      {teamBonus: false, units: isShip, speedBonus: AllAge(0.15)},
      {teamBonus: false, units: isFishingShip, garrisonBonus: AllAge(10)},
    ],
  },
};
export const Shipwright: Technology = {
  type: TechnologyType.Naval,
  id: 'Shipwright',
  englishName: 'Shipwright',
  frenchName: 'Shipwright',
  age: Age.ImperialAge,
  building: Dock,
  cost: {food: 1000, gold: 300},
  bonus: {
    description: {
      template: 'Les %1 coutent 20% de moins de bois et sont crées 35% plus vite.',
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Ship}],
    },
    effects: [
      {
        teamBonus: false,
        units: isShip,
        woodCostBonus: AllAge(0.2),
        trainingSpeedBonus: AllAge(0.35),
      },
    ],
  },
};
export const Loom: Technology = {
  type: TechnologyType.Miscellaneous,
  id: 'Loom',
  englishName: 'Loom',
  frenchName: 'Métier à tisser',
  age: Age.DarkAge,
  building: TownCenter,
  cost: {gold: 50},
  bonus: {
    description: {
      template: "Les %1 ont +15 PDV, +1 d'armure et +2 de protection perçage.",
      variables: [{type: InterpolationVariableType.Unit, unit: Villager}],
    },
    effects: [
      {
        teamBonus: false,
        units: isVillager,
        healthFixedBonus: AllAge(15),
        armorBonus: AllAge({melee: 1, pierce: 2}),
      },
    ],
  },
};
export const Sappers: Technology = {
  type: TechnologyType.Miscellaneous,
  id: 'Sappers',
  englishName: 'Sappers',
  frenchName: 'Artificiers',
  age: Age.ImperialAge,
  building: Castle,
  cost: {food: 400, gold: 200},
  bonus: {
    description: {
      template: "Les %1 ont un bonus d'attaque de +15 contre les %2",
      variables: [
        {type: InterpolationVariableType.Unit, unit: Villager},
        {type: InterpolationVariableType.ArmorType, armorType: ArmorType.Building},
      ],
    },
    effects: [
      {teamBonus: false, units: isVillager, attackBonusBonus: AllAge([ArmorType.Building, 15])},
    ],
  },
};

export const technologyRegistry: Technology[] = [
  Architecture,
  Arrowslits,
  Arson,
  Atonement,
  Ballistics,
  Banking,
  BlastFurnace,
  BlockPrinting,
  Bloodlines,
  BodkinArrow,
  BowSaw,
  Bracer,
  Caravan,
  Careening,
  ChainBardingArmor,
  ChainMailArmor,
  Chemistry,
  Coinage,
  Conscription,
  CropRotation,
  DoubleBitAxe,
  DryDock,
  Engineers,
  Faith,
  Fervor,
  Fletching,
  Forging,
  Gillnets,
  GoldMining,
  GoldShaftMining,
  Guilds,
  HandCart,
  HeatedShot,
  HeavyPlow,
  HerbalMedicine,
  Heresy,
  Hoardings,
  HorseCollar,
  Husbandry,
  Illumination,
  IronCasting,
  LeatherArcherArmor,
  Loom,
  Masonry,
  MurderHoles,
  PaddedArcherArmor,
  ParthianTactics,
  PlateBardingArmor,
  PlateMailArmor,
  Redemption,
  RingArcherArmor,
  Sanctity,
  Sappers,
  ScaleBardingArmor,
  ScaleMailArmor,
  ShaftMiningStone,
  Shipwright,
  Squires,
  StoneMining,
  Theocracy,
  ThumbRing,
  TownPatrol,
  TownWatch,
  TreadmillCrane,
  TwoManSaw,
  Wheelbarrow,
];
