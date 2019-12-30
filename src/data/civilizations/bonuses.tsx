/* eslint-disable no-magic-numbers */
import {
  InterpolationString,
  InterpolationVariableType,
  makeAgeable,
  Ageable,
  AllAge,
  Bonus,
  BonusConstraint,
} from '../core';
import {Unit, UnitType} from '../units/core';
import {Archery, SiegeWorkshop, Barrack, Stable, Monastery} from '../buildings';
import {Skirmisher, CavalryArcher, HandCannoneer} from '../units/archery';
import {Age} from '../ages/core';
import {
  CamelRider,
  Knight,
  LightCavalry,
  Hussar,
  ScoutCavalry,
  BattleElephant,
} from '../units/stable';
import {Spearman} from '../units/barrack';
import {
  isBombardCanon,
  isByFootArcher,
  isCamel,
  isCamelRiderLine,
  isCavalry,
  isCavalryArcherLine,
  isDemolitionShipLine,
  isFireGalleyLine,
  isFishingShip,
  isGalleyLine,
  isGunpowderUnit,
  isHandCannoneer,
  isHussar,
  isInArchery,
  isInBarrack,
  isInfantry,
  isInSiegeWorkshop,
  isInStable,
  isKnightLine,
  isLightCavalry,
  isMangonel,
  isMilitary,
  isMonk,
  isScoutCavalryLine,
  isShip,
  isSiegeUnit,
  isSkirmisherLine,
  isSpearmanLine,
  isTransportShip,
  isVillager,
  isWarShip,
  isArcher,
  allUnits,
  isBattleElephantLine,
  isScorpionLine,
  isBatteringRam,
  isInMonastery,
} from '../lib/unit_groups';
import {FireGalley, DemolitionShip, FishingShip, Galley, TransportShip} from '../units/dock';
import {ArmorType} from '../damage';
import {Monk} from '../units/monastery';
import {Villager} from '../units/town_center';
import {Mangonel, BombardCanon, Scorpion, BatteringRam} from '../units/siege_workshop';

export const AztecsBonuses: Bonus[] = [
  {
    description: {
      template: 'Les unités militaires sont créées 15% plus vite.',
      variables: [],
    },
    effects: [
      {
        teamBonus: false,
        units: isMilitary,
        trainingSpeedBonus: AllAge(0.15),
      },
    ],
  },
  {
    description: {
      template: 'Les %1 ont +5 PDV par technologie développées dans le %2',
      variables: [
        {type: InterpolationVariableType.Unit, unit: Monk},
        {type: InterpolationVariableType.Building, building: Monastery},
      ],
    },
    effects: [
      {
        extraConstraint: BonusConstraint.AllMonasteryTechResearched,
        teamBonus: false,
        units: isMonk,
        healthFixedBonus: AllAge(50), // Aztechs have 10 monastery techs
      },
    ],
  },
];

export const BerbersBonuses: Bonus[] = [
  {
    description: {
      template: "L'%1 se déplace 10% plus vite.",
      variables: [{type: InterpolationVariableType.Unit, unit: Villager}],
    },
    effects: [
      {
        teamBonus: false,
        units: isVillager,
        speedBonus: AllAge(0.1),
      },
    ],
  },
  {
    description: {
      template: 'Les unités de %1 coutent 15% de moins à %2 et 20% à %3.',
      variables: [
        {type: InterpolationVariableType.Building, building: Stable},
        {type: InterpolationVariableType.Age, age: Age.CastleAge},
        {type: InterpolationVariableType.Age, age: Age.ImperialAge},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: isInStable,
        costBonus: makeAgeable(undefined, undefined, 0.15, 0.2),
      },
    ],
  },
  {
    description: {
      template: 'Les %1 se déplacent 10% plus vite.',
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Ship}],
    },
    effects: [
      {
        teamBonus: false,
        units: isShip,
        speedBonus: AllAge(0.1),
      },
    ],
  },
];

export const BritonsBonuses: Bonus[] = [
  {
    description: {
      template: 'Les archers à pieds (sauf %1) ont +1 de porté à %2 et +2 à %3.',
      variables: [
        {type: InterpolationVariableType.Unit, unit: Skirmisher},
        {type: InterpolationVariableType.Age, age: Age.CastleAge},
        {type: InterpolationVariableType.Age, age: Age.ImperialAge},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: unit => isByFootArcher(unit) && !isSkirmisherLine(unit),
        rangeBonus: makeAgeable(undefined, undefined, 1, 2),
      },
    ],
  },
  {
    description: {
      template: 'Les %1 fonctionnent 20% plus vite.',
      variables: [{type: InterpolationVariableType.Building, building: Archery}],
    },
    effects: [
      {
        teamBonus: true,
        units: isInArchery,
        trainingSpeedBonus: AllAge(0.2),
      },
    ],
  },
];

export const BulgariansBonuses: Bonus[] = [];

export const BurmeseBonuses: Bonus[] = [
  {
    description: {
      template: "L'%1 a +1 d'attaque à %2, +2 à %3 et +3 à %4.",
      variables: [
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Infantry},
        {type: InterpolationVariableType.Age, age: Age.FeudalAge},
        {type: InterpolationVariableType.Age, age: Age.CastleAge},
        {type: InterpolationVariableType.Age, age: Age.ImperialAge},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: isInfantry,
        attackBonus: makeAgeable(undefined, 1, 2, 3),
      },
    ],
  },
];

export const ByzantinesBonuses: Bonus[] = [
  {
    description: {
      template: 'Les %1, %2 et %3 coutent 25% de moins.',
      variables: [
        {type: InterpolationVariableType.Unit, unit: CamelRider},
        {type: InterpolationVariableType.Unit, unit: Skirmisher},
        {type: InterpolationVariableType.Unit, unit: Spearman},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: unit => isCamelRiderLine(unit) || isSkirmisherLine(unit) || isSpearmanLine(unit),
        costBonus: AllAge(0.25),
      },
    ],
  },
  {
    description: {
      template: 'Les %1 attaquent 25% plus vite.',
      variables: [{type: InterpolationVariableType.Unit, unit: FireGalley}],
    },
    effects: [
      {
        teamBonus: false,
        units: isFireGalleyLine,
        rateOfFireBonus: AllAge(0.25),
      },
    ],
  },
];

export const CeltsBonuses: Bonus[] = [
  {
    description: {
      template: "L'%1 se déplace 15% plus vite.",
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Infantry}],
    },
    effects: [
      {
        teamBonus: false,
        units: isInfantry,
        speedBonus: AllAge(0.15),
      },
    ],
  },
  {
    description: {
      template: 'Les %1 tire 20% plus vite.',
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.SiegeUnit}],
    },
    effects: [
      {
        teamBonus: false,
        units: isSiegeUnit,
        rateOfFireBonus: AllAge(0.25),
      },
    ],
  },
  {
    description: {
      template: 'Les %1 fonctionnent 20% plus vite.',
      variables: [{type: InterpolationVariableType.Building, building: SiegeWorkshop}],
    },
    effects: [
      {
        teamBonus: true,
        units: isInSiegeWorkshop,
        trainingSpeedBonus: AllAge(0.2),
      },
    ],
  },
];

export const ChineseBonuses: Bonus[] = [
  {
    description: {
      template: 'Les %1 ont +50% PDV.',
      variables: [{type: InterpolationVariableType.Unit, unit: DemolitionShip}],
    },
    effects: [
      {
        teamBonus: false,
        units: isDemolitionShipLine,
        healthBonus: AllAge(0.5),
      },
    ],
  },
];

export const CumansBonuses: Bonus[] = [
  {
    description: {
      template: 'Les %1 et %2 peuvent être construient à %3.',
      variables: [
        {type: InterpolationVariableType.Building, building: SiegeWorkshop},
        {type: InterpolationVariableType.Unit, unit: BatteringRam},
        {type: InterpolationVariableType.Age, age: Age.FeudalAge},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: isBatteringRam,
        ageAvailability: Age.FeudalAge,
      },
    ],
  },
  {
    description: {
      template: 'La %1 se déplace 10% plus vite à partir de %2.',
      variables: [
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Cavalry},
        {type: InterpolationVariableType.Age, age: Age.FeudalAge},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: isCavalry,
        speedBonus: makeAgeable(undefined, 0.1, 0.1, 0.1),
      },
    ],
  },
];

export const EthiopiansBonuses: Bonus[] = [
  {
    description: {
      template: 'Les %1 tirent 15% plus vite.',
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Archer}],
    },
    effects: [
      {
        teamBonus: false,
        units: isArcher,
        healthBonus: AllAge(0.5),
      },
    ],
  },
];

export const FranksBonuses: Bonus[] = [
  {
    description: {
      template: 'La %1 a +20% PDV.',
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Cavalry}],
    },
    effects: [
      {
        teamBonus: false,
        units: isInStable,
        healthBonus: AllAge(0.2),
      },
    ],
  },
  {
    description: {
      template: 'Les %1 ont +2 de ligne de vue.',
      variables: [{type: InterpolationVariableType.Unit, unit: Knight}],
    },
    effects: [
      {
        teamBonus: true,
        units: isKnightLine,
        lineOfSightBonus: AllAge(2),
      },
    ],
  },
];

export const GothsBonuses: Bonus[] = [
  {
    description: {
      template: "L'%1 est 35% moins cher à partir de %2",
      variables: [
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Infantry},
        {type: InterpolationVariableType.Age, age: Age.FeudalAge},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: isInfantry,
        costBonus: makeAgeable(undefined, 0.35, 0.35, 0.35),
      },
    ],
  },
  {
    description: {
      template: "L'%1 a un bonus d'attaque de +1 contre les %2",
      variables: [
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Infantry},
        {type: InterpolationVariableType.ArmorType, armorType: ArmorType.StandardBuilding},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: isInfantry,
        attackBonusBonus: AllAge([ArmorType.StandardBuilding, 1]),
      },
    ],
  },
  {
    description: {
      template: 'Les %1 fonctionnent 20% plus vite.',
      variables: [{type: InterpolationVariableType.Building, building: Barrack}],
    },
    effects: [
      {
        teamBonus: true,
        units: isInBarrack,
        trainingSpeedBonus: AllAge(0.2),
      },
    ],
  },
];

export const HunsBonuses: Bonus[] = [
  {
    description: {
      template: 'Les %1 sont 10% moins cher à %2 et 20% à %3.',
      variables: [
        {type: InterpolationVariableType.Unit, unit: CavalryArcher},
        {type: InterpolationVariableType.Age, age: Age.CastleAge},
        {type: InterpolationVariableType.Age, age: Age.ImperialAge},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: isCavalryArcherLine,
        trainingSpeedBonus: makeAgeable(undefined, undefined, 0.1, 0.2),
      },
    ],
  },
  {
    description: {
      template: 'Les %1 fonctionnent 20% plus vite.',
      variables: [{type: InterpolationVariableType.Building, building: Stable}],
    },
    effects: [
      {
        teamBonus: true,
        units: isInStable,
        trainingSpeedBonus: AllAge(0.2),
      },
    ],
  },
];

export const IncasBonuses: Bonus[] = [];

export const IndiansBonuses: Bonus[] = [
  {
    description: {
      template: 'Les %1 coutent 10% de moins à %2, 15% à %3, 20% à %4 et 25% à %5.',
      variables: [
        {type: InterpolationVariableType.Unit, unit: Villager},
        {type: InterpolationVariableType.Age, age: Age.DarkAge},
        {type: InterpolationVariableType.Age, age: Age.FeudalAge},
        {type: InterpolationVariableType.Age, age: Age.CastleAge},
        {type: InterpolationVariableType.Age, age: Age.ImperialAge},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: isVillager,
        costBonus: makeAgeable(0.1, 0.15, 0.2, 0.25),
      },
    ],
  },
  {
    description: {
      template: 'Les %1 ont +1 de protection perçage.',
      variables: [{type: InterpolationVariableType.Unit, unit: CamelRider}],
    },
    effects: [
      {
        teamBonus: false,
        units: isCamelRiderLine,
        armorBonus: AllAge({melee: 0, pierce: 1}),
      },
    ],
  },
  {
    description: {
      template: "Les chameaux ont +6 d'attaque contre les batiments.",
      variables: [],
    },
    effects: [
      {
        teamBonus: true,
        units: isCamel,
        attackBonusBonus: AllAge([ArmorType.Building, 6]),
      },
    ],
  },
];

export const ItaliansBonuses: Bonus[] = [
  {
    description: {
      template: 'Les %1 coutent 20% de moins.',
      variables: [{type: InterpolationVariableType.Unit, unit: FishingShip}],
    },
    effects: [
      {
        teamBonus: false,
        units: isFishingShip,
        costBonus: AllAge(0.2),
      },
    ],
  },
  {
    description: {
      template: 'Les %1 coutent 20% de moins.',
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.GunpowderUnit}],
    },
    effects: [
      {
        teamBonus: false,
        units: isGunpowderUnit,
        costBonus: AllAge(0.2),
      },
    ],
  },
];

export const JapaneseBonuses: Bonus[] = [
  {
    description: {
      template: 'Les %1 ont 2x plus de PDV.',
      variables: [{type: InterpolationVariableType.Unit, unit: FishingShip}],
    },
    effects: [
      {
        teamBonus: false,
        units: isFishingShip,
        healthBonus: AllAge(1),
      },
    ],
  },
  {
    description: {
      template: 'Les %1 ont +2 de protection perçage.',
      variables: [{type: InterpolationVariableType.Unit, unit: FishingShip}],
    },
    effects: [
      {
        teamBonus: false,
        units: isFishingShip,
        armorBonus: AllAge({melee: 0, pierce: 2}),
      },
    ],
  },
  {
    description: {
      template: "L'%1 attaque 25% plus vite à partir de %2.",
      variables: [
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Infantry},
        {type: InterpolationVariableType.Age, age: Age.FeudalAge},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: isInfantry,
        rateOfFireBonus: makeAgeable(undefined, 0.25, 0.25, 0.25),
      },
    ],
  },
  {
    description: {
      template: 'Les %1 ont +50% de ligne de vue.',
      variables: [{type: InterpolationVariableType.Unit, unit: Galley}],
    },
    effects: [
      {
        teamBonus: true,
        units: isGalleyLine,
        lineOfSightPercentBonus: AllAge(0.5),
      },
    ],
  },
];

export const KhmerBonuses: Bonus[] = [
  {
    description: {
      template: 'Les %1 se déplacent 15% plus vite.',
      variables: [{type: InterpolationVariableType.Unit, unit: BattleElephant}],
    },
    effects: [
      {
        teamBonus: false,
        units: isBattleElephantLine,
        speedBonus: AllAge(0.15),
      },
    ],
  },
  {
    description: {
      template: 'Les %1 ont +1 de ligne de vue.',
      variables: [{type: InterpolationVariableType.Unit, unit: Scorpion}],
    },
    effects: [
      {
        teamBonus: true,
        units: isScorpionLine,
        lineOfSightBonus: AllAge(1),
      },
    ],
  },
];

export const KoreansBonuses: Bonus[] = [
  {
    description: {
      template: 'Les %1 ont +3 de ligne de vue.',
      variables: [{type: InterpolationVariableType.Unit, unit: Villager}],
    },
    effects: [
      {
        teamBonus: false,
        units: isVillager,
        lineOfSightBonus: AllAge(3),
      },
    ],
  },
  {
    description: {
      template: 'Les %1 ont leurs porté minimum reduite de 2.',
      variables: [{type: InterpolationVariableType.Unit, unit: Mangonel}],
    },
    effects: [
      {
        teamBonus: true,
        units: isMangonel,
        minimumRangeBonus: AllAge(2),
      },
    ],
  },
];

export const LithuaniansBonuses: Bonus[] = [
  {
    description: {
      template: 'Les %1 et %2 se déplacent 10% plus vite.',
      variables: [
        {type: InterpolationVariableType.Unit, unit: Spearman},
        {type: InterpolationVariableType.Unit, unit: Skirmisher},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u => isSpearmanLine(u) || isSkirmisherLine(u),
        speedBonus: AllAge(0.1),
      },
    ],
  },
  {
    description: {
      template: 'Les %1 fonctionnent 20% plus vite.',
      variables: [{type: InterpolationVariableType.Building, building: Monastery}],
    },
    effects: [
      {
        teamBonus: true,
        units: isInMonastery,
        trainingSpeedBonus: AllAge(0.2),
      },
    ],
  },
  {
    description: {
      template: "La %1 a +1 d'attaque pour chaque reliques en garnison (max +5).",
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Cavalry}],
    },
    effects: [
      {
        extraConstraint: BonusConstraint.AtLeast5RelicGarrisoned,
        teamBonus: false,
        units: isInStable,
        attackBonus: AllAge(5),
      },
    ],
  },
];

export const MagyarsBonuses: Bonus[] = [
  {
    description: {
      template: 'Les %1 coutent 15% de moins.',
      variables: [{type: InterpolationVariableType.Unit, unit: ScoutCavalry}],
    },
    effects: [
      {
        teamBonus: false,
        units: isScoutCavalryLine,
        costBonus: AllAge(0.15),
      },
    ],
  },
  {
    description: {
      template: 'Les archers à pied ont +2 de ligne de vue.',
      variables: [],
    },
    effects: [
      {
        teamBonus: true,
        units: isByFootArcher,
        lineOfSightBonus: AllAge(2),
      },
    ],
  },
];

export const MalayBonuses: Bonus[] = [
  {
    description: {
      template: 'Les %1 coutent 30% de moins.',
      variables: [{type: InterpolationVariableType.Unit, unit: BattleElephant}],
    },
    effects: [
      {
        teamBonus: false,
        units: isBattleElephantLine,
        costBonus: AllAge(0.3),
      },
    ],
  },
];

export const MaliansBonuses: Bonus[] = [];

export const MayansBonuses: Bonus[] = [
  {
    description: {
      template: 'Les archers à pied coutent 10% de moins à %1, 20% à %2 et 30% à %3.',
      variables: [
        {type: InterpolationVariableType.Age, age: Age.FeudalAge},
        {type: InterpolationVariableType.Age, age: Age.CastleAge},
        {type: InterpolationVariableType.Age, age: Age.ImperialAge},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: isByFootArcher,
        costBonus: makeAgeable(undefined, 0.1, 0.2, 0.3),
      },
    ],
  },
];

export const MongolsBonuses: Bonus[] = [
  {
    description: {
      template: 'Les %1 tire 25% plus vite.',
      variables: [{type: InterpolationVariableType.Unit, unit: CavalryArcher}],
    },
    effects: [
      {
        teamBonus: false,
        units: isCavalryArcherLine,
        rateOfFireBonus: AllAge(0.25),
      },
    ],
  },
  {
    description: {
      template: 'Les %1 et %2 ont 30% plus de PDV.',
      variables: [
        {type: InterpolationVariableType.Unit, unit: LightCavalry},
        {type: InterpolationVariableType.Unit, unit: Hussar},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u => isLightCavalry(u) || isHussar(u),
        healthBonus: AllAge(0.3),
      },
    ],
  },
  {
    description: {
      template: 'Les %1 ont +2 de ligne de vue.',
      variables: [{type: InterpolationVariableType.Unit, unit: ScoutCavalry}],
    },
    effects: [
      {
        teamBonus: true,
        units: isScoutCavalryLine,
        lineOfSightBonus: AllAge(2),
      },
    ],
  },
];

export const PersiansBonuses: Bonus[] = [
  {
    description: {
      template: "Les %1 ont un bonus d'attaque de +2 contre les %2.",
      variables: [
        {type: InterpolationVariableType.Unit, unit: Knight},
        {type: InterpolationVariableType.ArmorType, armorType: ArmorType.Archer},
      ],
    },
    effects: [
      {
        teamBonus: true,
        units: isKnightLine,
        attackBonusBonus: AllAge([ArmorType.Archer, 2]),
      },
    ],
  },
];

export const PortugueseBonuses: Bonus[] = [
  {
    description: {
      template: "Toutes les unités coutent 15% de moins d'or.",
      variables: [],
    },
    effects: [
      {
        teamBonus: false,
        units: allUnits,
        goldCostBonus: AllAge(0.15),
      },
    ],
  },
  {
    description: {
      template: 'Tout les %1 ont 10% plus de PDV.',
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Ship}],
    },
    effects: [
      {
        teamBonus: false,
        units: isShip,
        healthBonus: AllAge(0.1),
      },
    ],
  },
];

export const SaracensBonuses: Bonus[] = [
  {
    description: {
      template: 'Les %1 ont 2x plus de PDV.',
      variables: [{type: InterpolationVariableType.Unit, unit: TransportShip}],
    },
    effects: [
      {
        teamBonus: false,
        units: isTransportShip,
        healthBonus: AllAge(0.5),
      },
    ],
  },
  {
    description: {
      template: 'Les %1 ont +5 de capacité de transport.',
      variables: [{type: InterpolationVariableType.Unit, unit: TransportShip}],
    },
    effects: [
      {
        teamBonus: false,
        units: isTransportShip,
        garrisonBonus: AllAge(5),
      },
    ],
  },
  {
    description: {
      template: 'Les %1 attaquent 20% plus vite.',
      variables: [{type: InterpolationVariableType.Unit, unit: Galley}],
    },
    effects: [
      {
        teamBonus: false,
        units: isGalleyLine,
        rateOfFireBonus: AllAge(0.2),
      },
    ],
  },
  {
    description: {
      template: "Les %1 ont un bonus d'attaque de +4 contre les %2.",
      variables: [
        {type: InterpolationVariableType.Unit, unit: CavalryArcher},
        {type: InterpolationVariableType.ArmorType, armorType: ArmorType.StandardBuilding},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: isCavalryArcherLine,
        attackBonusBonus: AllAge([ArmorType.StandardBuilding, 4]),
      },
    ],
  },
  {
    description: {
      template: "Les archers à pieds ont un bonus d'attaque de +2 contre les %2.",
      variables: [
        {type: InterpolationVariableType.ArmorType, armorType: ArmorType.StandardBuilding},
      ],
    },
    effects: [
      {
        teamBonus: true,
        units: isByFootArcher,
        attackBonusBonus: AllAge([ArmorType.StandardBuilding, 2]),
      },
    ],
  },
];

export const SlavsBonuses: Bonus[] = [
  {
    description: {
      template: 'Les unité de %1 coutent 15% de moins.',
      variables: [{type: InterpolationVariableType.Building, building: SiegeWorkshop}],
    },
    effects: [
      {
        teamBonus: false,
        units: isInSiegeWorkshop,
        costBonus: AllAge(0.15),
      },
    ],
  },
];

export const SpanishBonuses: Bonus[] = [
  {
    description: {
      template: 'Les %1 et %2 tirent 15% plus vite.',
      variables: [
        {type: InterpolationVariableType.Unit, unit: HandCannoneer},
        {type: InterpolationVariableType.Unit, unit: BombardCanon},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: u => isHandCannoneer(u) || isBombardCanon(u),
        rateOfFireBonus: AllAge(0.15),
      },
    ],
  },
];

export const TatarsBonuses: Bonus[] = [
  {
    description: {
      template: 'Les %1 ont +2 de ligne de vue.',
      variables: [{type: InterpolationVariableType.Unit, unit: CavalryArcher}],
    },
    effects: [
      {
        teamBonus: true,
        units: isCavalryArcherLine,
        lineOfSightBonus: AllAge(2),
      },
    ],
  },
];

export const TeutonsBonuses: Bonus[] = [
  {
    description: {
      template: 'Les %1 2x plus de porté de soin.',
      variables: [{type: InterpolationVariableType.Unit, unit: Monk}],
    },
    effects: [
      {
        teamBonus: false,
        units: isMonk,
        healingRangeBonus: AllAge(1),
      },
    ],
  },
];

export const TurksBonuses: Bonus[] = [
  {
    description: {
      template: 'Les %1 on +25% de PDV.',
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.GunpowderUnit}],
    },
    effects: [
      {
        teamBonus: false,
        units: isGunpowderUnit,
        healthBonus: AllAge(0.25),
      },
    ],
  },
  {
    description: {
      template: 'Les %1 sont créé 20% plus vite.',
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.GunpowderUnit}],
    },
    effects: [
      {
        teamBonus: true,
        units: isGunpowderUnit,
        trainingSpeedBonus: AllAge(0.2),
      },
    ],
  },
];

export const VietnameseBonuses: Bonus[] = [
  {
    description: {
      template: 'Les unités de %1 ont 20% de plus de vie.',
      variables: [{type: InterpolationVariableType.Building, building: Archery}],
    },
    effects: [
      {
        teamBonus: false,
        units: isInArchery,
        healthBonus: AllAge(0.2),
      },
    ],
  },
];

export const VikingsBonuses: Bonus[] = [
  {
    description: {
      template: 'Les vaisseaux de guerre sont 15% moins cher à %1 %2 et 20% à %3.',
      variables: [
        {type: InterpolationVariableType.Age, age: Age.FeudalAge},
        {type: InterpolationVariableType.Age, age: Age.CastleAge},
        {type: InterpolationVariableType.Age, age: Age.ImperialAge},
      ],
    },
    effects: [
      {
        teamBonus: false,
        units: isWarShip,
        costBonus: makeAgeable(undefined, 0.15, 0.15, 0.2),
      },
    ],
  },
  {
    description: {
      template: "L'%1 à +10% de PDV à %2, +15% à %3 et +20% à %4.",
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Infantry}],
    },
    effects: [
      {
        teamBonus: false,
        units: isInfantry,
        healthBonus: makeAgeable(undefined, 0.1, 0.15, 0.2),
      },
    ],
  },
];
