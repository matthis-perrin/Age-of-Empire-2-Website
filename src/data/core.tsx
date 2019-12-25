import {Cost} from './resource';
import {Technology} from './technologies/core';
import {ArmorType} from './damage';
import {UnitType, Unit} from './units/core';

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

type InterpolationVariables =
  | InterpolationVariableCost
  | InterpolationVariableTechnology
  | InterpolationVariableArmorType
  | InterpolationVariableUnitType
  | InterpolationVariableUnit;
