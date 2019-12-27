import * as DockUnits from '../units/dock';
import {Unit} from '../units/core';

export function isGalleyLine(unit: Unit): boolean {
  return (
    [DockUnits.Galley.id, DockUnits.WarGalley.id, DockUnits.Galleon.id].indexOf(unit.id) !== -1
  );
}

export function isFireGalleyLine(unit: Unit): boolean {
  return (
    [DockUnits.FireGalley.id, DockUnits.FireShip.id, DockUnits.FastFireShip.id].indexOf(unit.id) !==
    -1
  );
}

export function isDemolitionShipLine(unit: Unit): boolean {
  return (
    [
      DockUnits.DemolitionRaft.id,
      DockUnits.DemolitionShip.id,
      DockUnits.HeavyDemolitionShip.id,
    ].indexOf(unit.id) !== -1
  );
}

export function isFishingShip(unit: Unit): boolean {
  return unit.id === DockUnits.FishingShip.id;
}
