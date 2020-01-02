import * as React from 'react';

import {UnitType} from '../../data/units/core';

import {Linky} from './linky';

export function UnitTypeName(props: {unitType: UnitType}): JSX.Element {
  let label = 'Inconnu';
  if (props.unitType === UnitType.Archer) {
    label = 'Archers';
  } else if (props.unitType === UnitType.Cavalry) {
    label = 'Cavalerie';
  } else if (props.unitType === UnitType.Civilian) {
    label = 'Unités civiles';
  } else if (props.unitType === UnitType.GunpowderUnit) {
    label = 'Unités de poudre à canon';
  } else if (props.unitType === UnitType.Healer) {
    label = 'Soigneur';
  } else if (props.unitType === UnitType.Infantry) {
    label = 'Infanterie';
  } else if (props.unitType === UnitType.Monk) {
    label = 'Moines';
  } else if (props.unitType === UnitType.Ship) {
    label = 'Bateaux';
  } else if (props.unitType === UnitType.NavalVessel) {
    label = 'Navires';
  } else if (props.unitType === UnitType.SiegeUnit) {
    label = 'Unités de siège';
  } else if (props.unitType === UnitType.SuicideUnit) {
    label = 'Unités kamikaze';
  }
  return <Linky text={label} />;
}
UnitTypeName.displayName = 'UnitTypeName';
