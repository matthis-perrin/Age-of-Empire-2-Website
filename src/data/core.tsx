import {Cost} from './resource';
import {Technology} from './technologies/core';

export interface InterpolationString {
  template: string;
  variables: InterpolationVariables[];
}

enum InterpolationVariableType {
  Cost,
  Technology,
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

type InterpolationVariables = InterpolationVariableCost | InterpolationVariableTechnology;
