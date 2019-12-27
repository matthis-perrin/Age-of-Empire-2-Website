import {Unit, UnitType} from '../units/core';
import * as ArcheryUnits from '../units/archery';
import {Archery} from '../buildings';

export function isByFootArcher(unit: Unit): boolean {
  if (unit.type.indexOf(UnitType.Archer) === -1) {
    return false;
  }
  if (
    [
      ArcheryUnits.Archer.id,
      ArcheryUnits.Crossbowman.id,
      ArcheryUnits.Arbalester.id,
      ArcheryUnits.Skirmisher.id,
      ArcheryUnits.EliteSkirmisher.id,
      ArcheryUnits.ImperialSkirmisher.id,
      ArcheryUnits.HandCannoneer.id,
      ArcheryUnits.Slinger.id,
    ].indexOf(unit.id) !== -1
  ) {
    return true;
  }
  if (
    [
      ArcheryUnits.CavalryArcher.id,
      ArcheryUnits.HeavyCavalryArcher.id,
      ArcheryUnits.Genitour.id,
      ArcheryUnits.EliteGenitour.id,
    ].indexOf(unit.id) !== -1
  ) {
    return false;
  }
  throw new Error(`Unknown archer ${unit.id}`);
}

export function isInArchery(unit: Unit): boolean {
  return unit.training.map(t => t.building.id).indexOf(Archery.id) !== -1;
}

export function isSkirmisherLine(unit: Unit): boolean {
  return (
    [
      ArcheryUnits.Skirmisher.id,
      ArcheryUnits.EliteSkirmisher.id,
      ArcheryUnits.ImperialSkirmisher.id,
    ].indexOf(unit.id) !== -1
  );
}

export function isCavalryArcherLine(unit: Unit): boolean {
  return (
    [ArcheryUnits.CavalryArcher.id, ArcheryUnits.HeavyCavalryArcher.id].indexOf(unit.id) !== -1
  );
}
