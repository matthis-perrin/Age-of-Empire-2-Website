import {Cost} from './resource';
import {Technology} from './technologies/core';
import {ArmorType} from './damage';
import {UnitType, Unit} from './units/core';
import {Age} from './age';
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
