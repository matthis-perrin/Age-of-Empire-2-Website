/* eslint-disable no-magic-numbers */
import {InterpolationString, InterpolationVariableType, makeAgeable, Ageable, AllAge} from './core';
import {Unit, UnitType} from './units/core';
import {Archery, SiegeWorkshop, Barrack} from './buildings';
import {Skirmisher, CavalryArcher} from './units/archery';
import {Age} from './age';
import {isByFootArcher, isCavalryArcherLine, isInArchery, isSkirmisherLine} from './lib/archers';
import {CamelRider, Knight, LightCavalry, Hussar, ScoutCavalry} from './units/stable';
import {Spearman} from './units/barrack';
import {
  isCamelRiderLine,
  isCavalry,
  isKnightLine,
  isLightCavalry,
  isHussar,
  isScoutCavalryLine,
} from './lib/cavalry';
import {isFireGalleyLine, isDemolitionShipLine, isFishingShip, isGalleyLine} from './lib/ship';
import {isSpearmanLine, isInfantry, isInBarrack} from './lib/infantry';
import {FireGalley, DemolitionShip, FishingShip, Galley} from './units/dock';
import {isSiegeUnit, isInSiegeWorkshop} from './lib/siege_units';
import {ArmorType} from './damage';

interface CivilizationBonus {
  description: InterpolationString;
  teamBonus: boolean;
  units(unit: Unit): boolean;
  rangeBonus?: Ageable<number>;
  trainingSpeedBonus?: Ageable<number>;
  costBonus?: Ageable<number>;
  rateOfFireBonus?: Ageable<number>;
  speedBonus?: Ageable<number>;
  healthBonus?: Ageable<number>;
  lineOfSightBonus?: Ageable<number>;
  lineOfSightPercentBonus?: Ageable<number>;
  attackBonusBonus?: Ageable<[ArmorType, number]>;
  armorBonus?: Ageable<{melee: number; pierce: number}>;
}

export const BritonsBonuses: CivilizationBonus[] = [
  {
    description: {
      template: 'Les archers à pieds (sauf %1) ont +1 de porté à %2 et +2 à %3.',
      variables: [
        {type: InterpolationVariableType.Unit, unit: Skirmisher},
        {type: InterpolationVariableType.Age, age: Age.CastleAge},
        {type: InterpolationVariableType.Age, age: Age.ImperialAge},
      ],
    },
    teamBonus: false,
    units: unit => isByFootArcher(unit) && !isSkirmisherLine(unit),
    rangeBonus: makeAgeable(undefined, undefined, 1, 2),
  },
  {
    description: {
      template: 'Les %1 fonctionnent 20% plus vite.',
      variables: [{type: InterpolationVariableType.Building, building: Archery}],
    },
    teamBonus: true,
    units: isInArchery,
    trainingSpeedBonus: AllAge(0.2),
  },
];

export const ByzantinesBonuses: CivilizationBonus[] = [
  {
    description: {
      template: 'Les %1, %2 et %3 coutent 25% de moins.',
      variables: [
        {type: InterpolationVariableType.Unit, unit: CamelRider},
        {type: InterpolationVariableType.Unit, unit: Skirmisher},
        {type: InterpolationVariableType.Unit, unit: Spearman},
      ],
    },
    teamBonus: false,
    units: unit => isCamelRiderLine(unit) || isSkirmisherLine(unit) || isSpearmanLine(unit),
    costBonus: AllAge(0.25),
  },
  {
    description: {
      template: 'Les %1 attaquent 25% plus vite.',
      variables: [{type: InterpolationVariableType.Unit, unit: FireGalley}],
    },
    teamBonus: false,
    units: isFireGalleyLine,
    rateOfFireBonus: AllAge(0.25),
  },
];

export const CeltsBonuses: CivilizationBonus[] = [
  {
    description: {
      template: "L'%1 se déplace 15% plus vite.",
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Infantry}],
    },
    teamBonus: false,
    units: isInfantry,
    speedBonus: AllAge(0.15),
  },
  {
    description: {
      template: 'Les %1 tire 20% plus vite.',
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.SiegeUnit}],
    },
    teamBonus: false,
    units: isSiegeUnit,
    rateOfFireBonus: AllAge(0.25),
  },
  {
    description: {
      template: 'Les %1 fonctionnent 20% plus vite.',
      variables: [{type: InterpolationVariableType.Building, building: SiegeWorkshop}],
    },
    teamBonus: true,
    units: isInSiegeWorkshop,
    trainingSpeedBonus: AllAge(0.2),
  },
];

export const ChineseBonuses: CivilizationBonus[] = [
  {
    description: {
      template: 'Les %1 ont +50% PDV.',
      variables: [{type: InterpolationVariableType.Unit, unit: DemolitionShip}],
    },
    teamBonus: false,
    units: isDemolitionShipLine,
    healthBonus: AllAge(0.5),
  },
];

export const FranksBonuses: CivilizationBonus[] = [
  {
    description: {
      template: 'La %1 a +20% PDV.',
      variables: [{type: InterpolationVariableType.UnitType, unitType: UnitType.Cavalry}],
    },
    teamBonus: false,
    units: isCavalry,
    healthBonus: AllAge(0.2),
  },
  {
    description: {
      template: 'Les %1 ont +2 de ligne de vue.',
      variables: [{type: InterpolationVariableType.Unit, unit: Knight}],
    },
    teamBonus: true,
    units: isKnightLine,
    lineOfSightBonus: AllAge(2),
  },
];

export const GothsBonuses: CivilizationBonus[] = [
  {
    description: {
      template: "L'%1 est 35% moins cher à partir de %2",
      variables: [
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Infantry},
        {type: InterpolationVariableType.Age, age: Age.FeudalAge},
      ],
    },
    teamBonus: false,
    units: isInfantry,
    costBonus: makeAgeable(undefined, 0.35, 0.35, 0.35),
  },
  {
    description: {
      template: "L'%1 a un bonus d'attaque de +1 contre les %2",
      variables: [
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Infantry},
        {type: InterpolationVariableType.ArmorType, armorType: ArmorType.StandardBuilding},
      ],
    },
    teamBonus: false,
    units: isInfantry,
    attackBonusBonus: AllAge([ArmorType.StandardBuilding, 1]),
  },
  {
    description: {
      template: 'Les %1 fonctionnent 20% plus vite.',
      variables: [{type: InterpolationVariableType.Building, building: Barrack}],
    },
    teamBonus: true,
    units: isInBarrack,
    trainingSpeedBonus: AllAge(0.2),
  },
];

export const JapaneseBonuses: CivilizationBonus[] = [
  {
    description: {
      template: 'Les %1 ont 2x plus de PDV.',
      variables: [{type: InterpolationVariableType.Unit, unit: FishingShip}],
    },
    teamBonus: false,
    units: isFishingShip,
    healthBonus: AllAge(1),
  },
  {
    description: {
      template: "Les %1 ont +2 d'armure anti-percage.",
      variables: [{type: InterpolationVariableType.Unit, unit: FishingShip}],
    },
    teamBonus: false,
    units: isFishingShip,
    armorBonus: AllAge({melee: 0, pierce: 2}),
  },
  {
    description: {
      template: "L'%1 attaque 25% plus vite à partir de %2.",
      variables: [
        {type: InterpolationVariableType.UnitType, unitType: UnitType.Infantry},
        {type: InterpolationVariableType.Age, age: Age.FeudalAge},
      ],
    },
    teamBonus: false,
    units: isInfantry,
    rateOfFireBonus: makeAgeable(undefined, 0.25, 0.25, 0.25),
  },
  {
    description: {
      template: 'Les %1 ont +50% de ligne de vue.',
      variables: [{type: InterpolationVariableType.Unit, unit: Galley}],
    },
    teamBonus: true,
    units: isGalleyLine,
    lineOfSightPercentBonus: AllAge(0.5),
  },
];

export const MongolsBonuses: CivilizationBonus[] = [
  {
    description: {
      template: 'Les %1 tire 25% plus vite.',
      variables: [{type: InterpolationVariableType.Unit, unit: CavalryArcher}],
    },
    teamBonus: false,
    units: isCavalryArcherLine,
    rateOfFireBonus: AllAge(0.25),
  },
  {
    description: {
      template: 'Les %1 et %2 ont 30% plus de PDV.',
      variables: [
        {type: InterpolationVariableType.Unit, unit: LightCavalry},
        {type: InterpolationVariableType.Unit, unit: Hussar},
      ],
    },
    teamBonus: false,
    units: u => isLightCavalry(u) || isHussar(u),
    healthBonus: AllAge(0.3),
  },
  {
    description: {
      template: 'Les %1 ont +2 de ligne de vue.',
      variables: [{type: InterpolationVariableType.Unit, unit: ScoutCavalry}],
    },
    teamBonus: true,
    units: isScoutCavalryLine,
    lineOfSightBonus: AllAge(2),
  },
];
