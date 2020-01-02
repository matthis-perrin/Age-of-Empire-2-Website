/* eslint-disable no-magic-numbers */
import {
  InterpolationString,
  InterpolationVariableType,
  makeAgeable,
  Ageable,
  AllAge,
  Bonus,
  BonusConstraint,
  CivilizationBonus,
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

import {Ids} from './ids';

export const AztecsBonuses: CivilizationBonus[] = [
  {
    id: 'aztecs-bonus-1',
    civilization: Ids.AztecsId,
    bonus: {
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
  },
  {
    id: 'aztecs-bonus-2',
    civilization: Ids.AztecsId,
    bonus: {
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
  },
];

export const BerbersBonuses: CivilizationBonus[] = [
  {
    id: 'berbers-bonus-1',
    civilization: Ids.BerbersId,
    bonus: {
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
  },
  {
    id: 'berbers-bonus-2',
    civilization: Ids.BerbersId,
    bonus: {
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
  },
  {
    id: 'berbers-bonus-3',
    civilization: Ids.BerbersId,
    bonus: {
      description: {
        template: 'Les %1 se déplacent 10% plus vite.',
        variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.NavalVessel}],
      },
      effects: [
        {
          teamBonus: false,
          units: isShip,
          speedBonus: AllAge(0.1),
        },
      ],
    },
  },
];

export const BritonsBonuses: CivilizationBonus[] = [
  {
    id: 'britons-bonus-1',
    civilization: Ids.BritonsId,
    bonus: {
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
  },
  {
    id: 'britons-bonus-2',
    civilization: Ids.BritonsId,
    bonus: {
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
  },
];

export const BulgariansBonuses: CivilizationBonus[] = [];

export const BurmeseBonuses: CivilizationBonus[] = [
  {
    id: 'burmese-bonus-1',
    civilization: Ids.BurmeseId,
    bonus: {
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
  },
];

export const ByzantinesBonuses: CivilizationBonus[] = [
  {
    id: 'byzantines-bonus-1',
    civilization: Ids.ByzantinesId,
    bonus: {
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
  },
  {
    id: 'byzantines-bonus-2',
    civilization: Ids.ByzantinesId,
    bonus: {
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
  },
];

export const CeltsBonuses: CivilizationBonus[] = [
  {
    id: 'celts-bonus-1',
    civilization: Ids.CeltsId,
    bonus: {
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
  },
  {
    id: 'celts-bonus-2',
    civilization: Ids.CeltsId,
    bonus: {
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
  },
  {
    id: 'celts-bonus-3',
    civilization: Ids.CeltsId,
    bonus: {
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
  },
];

export const ChineseBonuses: CivilizationBonus[] = [
  {
    id: 'chinese-bonus-1',
    civilization: Ids.ChineseId,
    bonus: {
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
  },
];

export const CumansBonuses: CivilizationBonus[] = [
  {
    id: 'cumans-bonus-1',
    civilization: Ids.CumansId,
    bonus: {
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
  },
  {
    id: 'cumans-bonus-2',
    civilization: Ids.CumansId,
    bonus: {
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
  },
];

export const EthiopiansBonuses: CivilizationBonus[] = [
  {
    id: 'ethiopians-bonus-1',
    civilization: Ids.EthiopiansId,
    bonus: {
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
  },
];

export const FranksBonuses: CivilizationBonus[] = [
  {
    id: 'franks-bonus-1',
    civilization: Ids.FranksId,
    bonus: {
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
  },
  {
    id: 'franks-bonus-2',
    civilization: Ids.FranksId,
    bonus: {
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
  },
];

export const GothsBonuses: CivilizationBonus[] = [
  {
    id: 'goths-bonus-1',
    civilization: Ids.GothsId,
    bonus: {
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
  },
  {
    id: 'goths-bonus-2',
    civilization: Ids.GothsId,
    bonus: {
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
  },
  {
    id: 'goths-bonus-3',
    civilization: Ids.GothsId,
    bonus: {
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
  },
];

export const HunsBonuses: CivilizationBonus[] = [
  {
    id: 'huns-bonus-1',
    civilization: Ids.HunsId,
    bonus: {
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
          costBonus: makeAgeable(undefined, undefined, 0.1, 0.2),
        },
      ],
    },
  },
  {
    id: 'huns-bonus-2',
    civilization: Ids.HunsId,
    bonus: {
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
  },
];

export const IncasBonuses: CivilizationBonus[] = [];

export const IndiansBonuses: CivilizationBonus[] = [
  {
    id: 'indians-bonus-1',
    civilization: Ids.IndiansId,
    bonus: {
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
  },
  {
    id: 'indians-bonus-2',
    civilization: Ids.IndiansId,
    bonus: {
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
  },
  {
    id: 'indians-bonus-3',
    civilization: Ids.IndiansId,
    bonus: {
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
  },
];

export const ItaliansBonuses: CivilizationBonus[] = [
  {
    id: 'italians-bonus-1',
    civilization: Ids.ItaliansId,
    bonus: {
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
  },
  {
    id: 'italians-bonus-2',
    civilization: Ids.ItaliansId,
    bonus: {
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
  },
];

export const JapaneseBonuses: CivilizationBonus[] = [
  {
    id: 'japanese-bonus-1',
    civilization: Ids.JapaneseId,
    bonus: {
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
  },
  {
    id: 'japanese-bonus-2',
    civilization: Ids.JapaneseId,
    bonus: {
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
  },
  {
    id: 'japanese-bonus-3',
    civilization: Ids.JapaneseId,
    bonus: {
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
  },
  {
    id: 'japanese-bonus-4',
    civilization: Ids.JapaneseId,
    bonus: {
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
  },
];

export const KhmerBonuses: CivilizationBonus[] = [
  {
    id: 'khmer-bonus-1',
    civilization: Ids.KhmerId,
    bonus: {
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
  },
  {
    id: 'khmer-bonus-2',
    civilization: Ids.KhmerId,
    bonus: {
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
  },
];

export const KoreansBonuses: CivilizationBonus[] = [
  {
    id: 'koreans-bonus-1',
    civilization: Ids.KoreansId,
    bonus: {
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
  },
  {
    id: 'koreans-bonus-2',
    civilization: Ids.KoreansId,
    bonus: {
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
  },
];

export const LithuaniansBonuses: CivilizationBonus[] = [
  {
    id: 'lithuanians-bonus-1',
    civilization: Ids.LithuaniansId,
    bonus: {
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
  },
  {
    id: 'lithuanians-bonus-2',
    civilization: Ids.LithuaniansId,
    bonus: {
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
  },
  {
    id: 'lithuanians-bonus-3',
    civilization: Ids.LithuaniansId,
    bonus: {
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
  },
];

export const MagyarsBonuses: CivilizationBonus[] = [
  {
    id: 'magyars-bonus-1',
    civilization: Ids.MagyarsId,
    bonus: {
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
  },
  {
    id: 'magyars-bonus-2',
    civilization: Ids.MagyarsId,
    bonus: {
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
  },
];

export const MalayBonuses: CivilizationBonus[] = [
  {
    id: 'malay-bonus-1',
    civilization: Ids.MalayId,
    bonus: {
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
  },
];

export const MaliansBonuses: CivilizationBonus[] = [];

export const MayansBonuses: CivilizationBonus[] = [
  {
    id: 'mayans-bonus-1',
    civilization: Ids.MayansId,
    bonus: {
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
  },
];

export const MongolsBonuses: CivilizationBonus[] = [
  {
    id: 'mongols-bonus-1',
    civilization: Ids.MongolsId,
    bonus: {
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
  },
  {
    id: 'mongols-bonus-2',
    civilization: Ids.MongolsId,
    bonus: {
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
  },
  {
    id: 'mongols-bonus-3',
    civilization: Ids.MongolsId,
    bonus: {
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
  },
];

export const PersiansBonuses: CivilizationBonus[] = [
  {
    id: 'persians-bonus-1',
    civilization: Ids.PersiansId,
    bonus: {
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
  },
];

export const PortugueseBonuses: CivilizationBonus[] = [
  {
    id: 'portuguese-bonus-1',
    civilization: Ids.PortugueseId,
    bonus: {
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
  },
  {
    id: 'portuguese-bonus-2',
    civilization: Ids.PortugueseId,
    bonus: {
      description: {
        template: 'Tout les %1 ont 10% plus de PDV.',
        variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.NavalVessel}],
      },
      effects: [
        {
          teamBonus: false,
          units: isShip,
          healthBonus: AllAge(0.1),
        },
      ],
    },
  },
];

export const SaracensBonuses: CivilizationBonus[] = [
  {
    id: 'saracens-bonus-1',
    civilization: Ids.SaracensId,
    bonus: {
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
  },
  {
    id: 'saracens-bonus-2',
    civilization: Ids.SaracensId,
    bonus: {
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
  },
  {
    id: 'saracens-bonus-3',
    civilization: Ids.SaracensId,
    bonus: {
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
  },
  {
    id: 'saracens-bonus-4',
    civilization: Ids.SaracensId,
    bonus: {
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
  },
  {
    id: 'saracens-bonus-5',
    civilization: Ids.SaracensId,
    bonus: {
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
  },
];

export const SlavsBonuses: CivilizationBonus[] = [
  {
    id: 'slavs-bonus-1',
    civilization: Ids.SlavsId,
    bonus: {
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
  },
];

export const SpanishBonuses: CivilizationBonus[] = [
  {
    id: 'spanish-bonus-1',
    civilization: Ids.SpanishId,
    bonus: {
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
  },
];

export const TatarsBonuses: CivilizationBonus[] = [
  {
    id: 'tatars-bonus-1',
    civilization: Ids.TatarsId,
    bonus: {
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
  },
];

export const TeutonsBonuses: CivilizationBonus[] = [
  {
    id: 'teutons-bonus-1',
    civilization: Ids.TeutonsId,
    bonus: {
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
  },
];

export const TurksBonuses: CivilizationBonus[] = [
  {
    id: 'turks-bonus-1',
    civilization: Ids.TurksId,
    bonus: {
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
  },
  {
    id: 'turks-bonus-2',
    civilization: Ids.TurksId,
    bonus: {
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
  },
];

export const VietnameseBonuses: CivilizationBonus[] = [
  {
    id: 'vietnamese-bonus-1',
    civilization: Ids.VietnameseId,
    bonus: {
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
  },
];

export const VikingsBonuses: CivilizationBonus[] = [
  {
    id: 'vikings-bonus-1',
    civilization: Ids.VikingsId,
    bonus: {
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
  },
  {
    id: 'vikings-bonus-2',
    civilization: Ids.VikingsId,
    bonus: {
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
  },
];
