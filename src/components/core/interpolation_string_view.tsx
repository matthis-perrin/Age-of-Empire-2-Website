import * as React from 'react';
import styled from 'styled-components';

import {
  InterpolationString,
  InterpolationVariable,
  InterpolationVariableType,
} from '../../data/core';

import {AgeName} from './age_name';
import {ArmorTypeName} from './armor_type_name';
import {BuildingName} from './building_name';
import {TechnologyName} from './technology_name';
import {UnitName} from './unit_name';
import {UnitTypeName} from './unit_type_name';
import {CostView} from './cost_view';

export function InterpolationStringView(props: {
  interpolationString: InterpolationString;
}): JSX.Element {
  const {template, variables} = props.interpolationString;
  const elements: JSX.Element[] = [];
  let current = template;
  let index = 0;
  while (current.length > 0) {
    const variableIndex = current.search(/%[0-9]/);
    if (variableIndex === -1) {
      elements.push(<PlainText key={index}>{current}</PlainText>);
      index++;
      current = '';
    } else {
      if (variableIndex > 0) {
        elements.push(<PlainText>{current.slice(0, variableIndex)}</PlainText>);
        index++;
      }
      const variableValue = parseFloat(current.slice(variableIndex + 1, variableIndex + 2));
      if (!isNaN(variableValue)) {
        const variable = variables[variableValue - 1] as InterpolationVariable | undefined;
        if (variable !== undefined) {
          elements.push(<InterpolationVariableView variable={variable} />);
          index++;
        } else {
          console.error('No variable associated with the index', variableValue, props.interpolationString)
        }
      } else {
        console.error('Invalid interpolation variable index', variableValue, props.interpolationString)
      }
      current = current.substring(variableIndex + 2);
    }
  }
  return <React.Fragment>{elements}</React.Fragment>;
}
InterpolationStringView.displayName = 'InterpolationStringView';

const PlainText = styled.span``;

export function InterpolationVariableView(props: {variable: InterpolationVariable}): JSX.Element {
  const {variable} = props;
  if (variable.type === InterpolationVariableType.Age) {
    return <AgeName age={variable.age} />;
  }
  if (variable.type === InterpolationVariableType.ArmorType) {
    return <ArmorTypeName armorType={variable.armorType} />;
  }
  if (variable.type === InterpolationVariableType.Building) {
    return <BuildingName building={variable.building} />;
  }
  if (variable.type === InterpolationVariableType.Cost) {
    return <CostView cost={variable.cost} />;
  }
  if (variable.type === InterpolationVariableType.Technology) {
    return <TechnologyName technology={variable.technology} />;
  }
  if (variable.type === InterpolationVariableType.Unit) {
    return <UnitName unit={variable.unit} />;
  }
  if (variable.type === InterpolationVariableType.UnitType) {
    return <UnitTypeName unitType={variable.unitType} />;
  }
  return <React.Fragment />;
}
InterpolationVariableView.displayName = 'InterpolationVariableView';
