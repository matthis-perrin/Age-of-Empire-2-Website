import {Cost} from './resource';
import {Technology} from './technologies/core';
import {ArmorType} from './damage';
import {UnitType, Unit} from './units/core';
import {Age} from './ages/core';
import {Building} from './buildings';
import {CivilizationId} from './civilizations/ids';
import {Civilization} from './civilizations/registry';

export interface InterpolationString {
  template: string;
  variables: InterpolationVariable[];
}

export enum InterpolationVariableType {
  Cost,
  Technology,
  ArmorType,
  UnitType,
  Unit,
  Age,
  Building,
  Civilization,
}

interface InterpolationVariableBase {
  type: InterpolationVariableType;
}

interface InterpolationVariableCost extends InterpolationVariableBase {
  type: InterpolationVariableType.Cost;
  cost: Cost;
}

interface InterpolationVariableTechnology extends InterpolationVariableBase {
  type: InterpolationVariableType.Technology;
  technology: Technology;
}

interface InterpolationVariableArmorType extends InterpolationVariableBase {
  type: InterpolationVariableType.ArmorType;
  armorType: ArmorType;
}

interface InterpolationVariableUnitType extends InterpolationVariableBase {
  type: InterpolationVariableType.UnitType;
  unitType: UnitType;
}

interface InterpolationVariableUnit extends InterpolationVariableBase {
  type: InterpolationVariableType.Unit;
  unit: Unit;
}

interface InterpolationVariableAge extends InterpolationVariableBase {
  type: InterpolationVariableType.Age;
  age: Age;
}

interface InterpolationVariableBuilding extends InterpolationVariableBase {
  type: InterpolationVariableType.Building;
  building: Building;
}

interface InterpolationVariableCivilization extends InterpolationVariableBase {
  type: InterpolationVariableType.Civilization;
  civilizationId: CivilizationId;
}

export type InterpolationVariable =
  | InterpolationVariableCost
  | InterpolationVariableTechnology
  | InterpolationVariableArmorType
  | InterpolationVariableUnitType
  | InterpolationVariableUnit
  | InterpolationVariableAge
  | InterpolationVariableBuilding
  | InterpolationVariableCivilization;

export interface Ageable<T> {
  [Age.DarkAge]?: T;
  [Age.FeudalAge]?: T;
  [Age.CastleAge]?: T;
  [Age.ImperialAge]?: T;
}
export function AllAge<T>(value: T): Ageable<T> {
  return {
    [Age.DarkAge]: value,
    [Age.FeudalAge]: value,
    [Age.CastleAge]: value,
    [Age.ImperialAge]: value,
  };
}
export function makeAgeable<T>(
  dark: T | undefined,
  feudal: T | undefined,
  castle: T | undefined,
  imperial: T | undefined
): Ageable<T> {
  return {
    [Age.DarkAge]: dark,
    [Age.FeudalAge]: feudal,
    [Age.CastleAge]: castle,
    [Age.ImperialAge]: imperial,
  };
}

export function mergeAgeable2<T1, T2, Res>(
  ageable1: Ageable<T1> | undefined,
  ageable2: Ageable<T2> | undefined,
  merger: (v1: T1 | undefined, v2: T2 | undefined) => Res
): Ageable<Res> {
  return {
    [Age.DarkAge]: merger(ageable1 && ageable1[Age.DarkAge], ageable2 && ageable2[Age.DarkAge]),
    [Age.FeudalAge]: merger(
      ageable1 && ageable1[Age.FeudalAge],
      ageable2 && ageable2[Age.FeudalAge]
    ),
    [Age.CastleAge]: merger(
      ageable1 && ageable1[Age.CastleAge],
      ageable2 && ageable2[Age.CastleAge]
    ),
    [Age.ImperialAge]: merger(
      ageable1 && ageable1[Age.ImperialAge],
      ageable2 && ageable2[Age.ImperialAge]
    ),
  };
}

export function mergeAgeable3<T1, T2, T3, Res>(
  ageable1: Ageable<T1> | undefined,
  ageable2: Ageable<T2> | undefined,
  ageable3: Ageable<T3> | undefined,
  merger: (v1: T1 | undefined, v2: T2 | undefined, v3: T3 | undefined) => Res
): Ageable<Res> {
  return {
    [Age.DarkAge]: merger(
      ageable1 && ageable1[Age.DarkAge],
      ageable2 && ageable2[Age.DarkAge],
      ageable3 && ageable3[Age.DarkAge]
    ),
    [Age.FeudalAge]: merger(
      ageable1 && ageable1[Age.FeudalAge],
      ageable2 && ageable2[Age.FeudalAge],
      ageable3 && ageable3[Age.FeudalAge]
    ),
    [Age.CastleAge]: merger(
      ageable1 && ageable1[Age.CastleAge],
      ageable2 && ageable2[Age.CastleAge],
      ageable3 && ageable3[Age.CastleAge]
    ),
    [Age.ImperialAge]: merger(
      ageable1 && ageable1[Age.ImperialAge],
      ageable2 && ageable2[Age.ImperialAge],
      ageable3 && ageable3[Age.ImperialAge]
    ),
  };
}

export enum BonusConstraint {
  AllMonasteryTechResearched,
  AtLeast5RelicGarrisoned,
}

export interface BonusEffect {
  teamBonus: boolean;
  units(unit: Unit): boolean;
  extraConstraint?: BonusConstraint;
  rangeBonus?: Ageable<number>;
  trainingSpeedBonus?: Ageable<number>;
  costBonus?: Ageable<number>;
  goldCostBonus?: Ageable<number>;
  woodCostBonus?: Ageable<number>;
  foodCostBonus?: Ageable<number>;
  woodCostFixedBonus?: Ageable<number>;
  foodCostFixedBonus?: Ageable<number>;
  rateOfFireBonus?: Ageable<number>;
  speedBonus?: Ageable<number>;
  healthBonus?: Ageable<number>;
  healthFixedBonus?: Ageable<number>;
  lineOfSightBonus?: Ageable<number>;
  lineOfSightPercentBonus?: Ageable<number>;
  attackBonus?: Ageable<number>;
  attackBonusBonus?: Ageable<[ArmorType, number]>;
  armorBonus?: Ageable<{melee: number; pierce: number}>;
  garrisonBonus?: Ageable<number>;
  healingRangeBonus?: Ageable<number>;
  minimumRangeBonus?: Ageable<number>;
  removeMinimumRange?: Ageable<boolean>;
  conversionRangeBonus?: Ageable<number>;
  areaOfDamageBonus?: Ageable<number>;
  projectileSpeedBonus?: Ageable<number>;
  fullAccuracyBonus?: Ageable<boolean>;
  ageAvailability?: Age;
}

export interface Bonus {
  description: InterpolationString;
  effects: BonusEffect[];
}

export interface CivilizationBonus {
  id: string;
  civilization: CivilizationId;
  bonus: Bonus;
}
