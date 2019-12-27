import * as StableUnits from '../units/stable';
import {Unit, UnitType} from '../units/core';

export function isCavalry(unit: Unit): boolean {
  return unit.type.indexOf(UnitType.Cavalry) !== -1;
}

export function isCamelRiderLine(unit: Unit): boolean {
  return (
    [
      StableUnits.CamelRider.id,
      StableUnits.HeavyCamelRider.id,
      StableUnits.ImperialCamelRider.id,
    ].indexOf(unit.id) !== -1
  );
}

export function isKnightLine(unit: Unit): boolean {
  return (
    [StableUnits.Knight.id, StableUnits.Cavalier.id, StableUnits.Paladin.id].indexOf(unit.id) !== -1
  );
}

export function isScoutCavalryLine(unit: Unit): boolean {
  return (
    [
      StableUnits.ScoutCavalry.id,
      StableUnits.ScoutCavalryFeudalAge.id,
      StableUnits.ScoutCavalryCastleAge.id,
      StableUnits.ScoutCavalryImperialAge.id,
      StableUnits.LightCavalry.id,
      StableUnits.LightCavalryImperialAge.id,
      StableUnits.Hussar.id,
    ].indexOf(unit.id) !== -1
  );
}

export function isLightCavalry(unit: Unit): boolean {
  return (
    [StableUnits.LightCavalry.id, StableUnits.LightCavalryImperialAge.id].indexOf(unit.id) !== -1
  );
}

export function isHussar(unit: Unit): boolean {
  return unit.id === StableUnits.Hussar.id;
}
