import * as BarrackUnits from '../units/barrack';
import {Unit, UnitType} from '../units/core';
import {Barrack} from '../buildings';

export function isInfantry(unit: Unit): boolean {
  return unit.type.indexOf(UnitType.Infantry) !== -1;
}

export function isSpearmanLine(unit: Unit): boolean {
  return (
    [BarrackUnits.Spearman.id, BarrackUnits.Pikeman.id, BarrackUnits.Halberdier.id].indexOf(
      unit.id
    ) !== -1
  );
}

export function isInBarrack(unit: Unit): boolean {
  return unit.training.map(t => t.building.id).indexOf(Barrack.id) !== -1;
}
