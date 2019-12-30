import {Cost} from './resource';
import {Technology} from './technologies/core';
import {ArmorType} from './damage';
import {UnitType, Unit} from './units/core';
import {Age} from './ages/core';
import {Building} from './buildings';

export interface InterpolationString {
  template: string;
  variables: InterpolationVariables[];
}

export enum InterpolationVariableType {
  Cost,
  Technology,
  ArmorType,
  UnitType,
  Unit,
  Age,
  Building,
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

type InterpolationVariables =
  | InterpolationVariableCost
  | InterpolationVariableTechnology
  | InterpolationVariableArmorType
  | InterpolationVariableUnitType
  | InterpolationVariableUnit
  | InterpolationVariableAge
  | InterpolationVariableBuilding;

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

export enum BonusConstraint {
  AllMonasteryTechResearched,
  AtLeast5RelicGarrisoned,
}

export interface Bonus {
  description: InterpolationString;
  effects: {
    teamBonus: boolean;
    units(unit: Unit): boolean;
    extraConstraint?: BonusConstraint;
    rangeBonus?: Ageable<number>;
    trainingSpeedBonus?: Ageable<number>;
    costBonus?: Ageable<number>;
    goldCostBonus?: Ageable<number>;
    woodCostBonus?: Ageable<number>;
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
    conversionRangeBonus?: Ageable<number>;
    fullAccuracyBonus?: Ageable<boolean>;
    ageAvailability?: Age;
  }[];
}
