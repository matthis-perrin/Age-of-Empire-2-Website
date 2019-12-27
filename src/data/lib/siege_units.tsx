import * as SiegeUnits from '../units/siege_workshop';
import {Unit, UnitType} from '../units/core';
import {SiegeWorkshop} from '../buildings';

export function isSiegeUnit(unit: Unit): boolean {
  return unit.type.indexOf(UnitType.SiegeUnit) !== -1;
}

export function isInSiegeWorkshop(unit: Unit): boolean {
  return unit.training.map(t => t.building.id).indexOf(SiegeWorkshop.id) !== -1;
}
