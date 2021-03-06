import {Unit, UnitType} from '../units/core';
import * as ArcheryUnits from '../units/archery';
import {Archery, Barrack, SiegeWorkshop, Stable, Monastery, Castle} from '../buildings';
import * as StableUnits from '../units/stable';
import * as MonasteryUnits from '../units/monastery';
import * as BarrackUnits from '../units/barrack';
import * as DockUnits from '../units/dock';
import * as SiegeWorkshopUnits from '../units/siege_workshop';
import {Villager} from '../units/town_center';
import {ArmorType, AttackType} from '../damage';
import {Petard, TrebuchetUnpacked} from '../units/castle';
import {TradeCart} from '../units/market';

export function isSiegeUnit(unit: Unit): boolean {
  return unit.type.indexOf(UnitType.SiegeUnit) !== -1;
}

export function isBombardCanon(unit: Unit): boolean {
  return unit.id === SiegeWorkshopUnits.BombardCanon.id;
}

export function isInSiegeWorkshop(unit: Unit): boolean {
  return unit.training.map(t => t.building.id).indexOf(SiegeWorkshop.id) !== -1;
}

export function isMangonel(unit: Unit): boolean {
  return unit.id === SiegeWorkshopUnits.Mangonel.id;
}

export function isMangonelLine(unit: Unit): boolean {
  return (
    [
      SiegeWorkshopUnits.Mangonel.id,
      SiegeWorkshopUnits.Onager.id,
      SiegeWorkshopUnits.SiegeOnager.id,
    ].indexOf(unit.id) !== -1
  );
}

export function isScorpionLine(unit: Unit): boolean {
  return (
    [SiegeWorkshopUnits.Scorpion.id, SiegeWorkshopUnits.HeavyScorpion.id].indexOf(unit.id) !== -1
  );
}

export function isBatteringRamLine(unit: Unit): boolean {
  return (
    [
      SiegeWorkshopUnits.BatteringRam.id,
      SiegeWorkshopUnits.CappedRam.id,
      SiegeWorkshopUnits.SiegeRam.id,
    ].indexOf(unit.id) !== -1
  );
}

export function isBatteringRam(unit: Unit): boolean {
  return unit.id === SiegeWorkshopUnits.BatteringRam.id;
}

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

export function isLongboatLine(unit: Unit): boolean {
  return [DockUnits.Longboat.id, DockUnits.EliteLongboat.id].indexOf(unit.id) !== -1;
}

export function isTurtleShip(unit: Unit): boolean {
  return [DockUnits.TurtleShip.id, DockUnits.EliteTurtleShip.id].indexOf(unit.id) !== -1;
}

export function isFishingShip(unit: Unit): boolean {
  return unit.id === DockUnits.FishingShip.id;
}

export function isTransportShip(unit: Unit): boolean {
  return unit.id === DockUnits.TransportShip.id;
}

export function isCannonGalleonLine(unit: Unit): boolean {
  return [DockUnits.CannonGalleon.id, DockUnits.EliteCannonGalleon.id].indexOf(unit.id) !== -1;
}

export function isShip(unit: Unit): boolean {
  return unit.type.indexOf(UnitType.NavalVessel) !== -1;
}

export function isWarShip(unit: Unit): boolean {
  return (
    unit.type.indexOf(UnitType.NavalVessel) !== -1 && unit.type.indexOf(UnitType.Civilian) === -1
  );
}

export function isInfantry(unit: Unit): boolean {
  return unit.type.indexOf(UnitType.Infantry) !== -1;
}

export function isMilitiaLine(unit: Unit): boolean {
  return (
    [
      BarrackUnits.Militia.id,
      BarrackUnits.ManAtArms.id,
      BarrackUnits.LongSwordsman.id,
      BarrackUnits.TwoHandedSwordsman.id,
      BarrackUnits.Champion.id,
    ].indexOf(unit.id) !== -1
  );
}

export function isSpearmanLine(unit: Unit): boolean {
  return (
    [BarrackUnits.Spearman.id, BarrackUnits.Pikeman.id, BarrackUnits.Halberdier.id].indexOf(
      unit.id
    ) !== -1
  );
}

export function isEagleWarriorLine(unit: Unit): boolean {
  return (
    [
      BarrackUnits.EagleScout.id,
      BarrackUnits.EagleScoutFeudalAge.id,
      BarrackUnits.EagleScoutCastleAge.id,
      BarrackUnits.EagleWarrior.id,
      BarrackUnits.EilteEagleWarrior.id,
    ].indexOf(unit.id) !== -1
  );
}

export function isInBarrack(unit: Unit): boolean {
  return unit.training.map(t => t.building.id).indexOf(Barrack.id) !== -1;
}

export function isInMonastery(unit: Unit): boolean {
  return unit.training.map(t => t.building.id).indexOf(Monastery.id) !== -1;
}

export function isMonk(unit: Unit): boolean {
  return unit.id === MonasteryUnits.Monk.id;
}

export function isCavalry(unit: Unit): boolean {
  return unit.type.indexOf(UnitType.Cavalry) !== -1;
}

export function isInStable(unit: Unit): boolean {
  return unit.training.map(t => t.building.id).indexOf(Stable.id) !== -1;
}

export function isCamel(unit: Unit): boolean {
  return unit.armor.types.indexOf(ArmorType.Camel) !== -1;
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

export function isBattleElephantLine(unit: Unit): boolean {
  return (
    [StableUnits.BattleElephant.id, StableUnits.EliteBattleElephant.id].indexOf(unit.id) !== -1
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

export function isArcher(unit: Unit): boolean {
  return unit.type.indexOf(UnitType.Archer) !== -1;
}

export function isWarWagonLine(unit: Unit): boolean {
  return false;
}

export function isGenoeseLine(unit: Unit): boolean {
  return false;
}

export function isArcherLine(unit: Unit): boolean {
  return (
    [ArcheryUnits.Archer.id, ArcheryUnits.Crossbowman.id, ArcheryUnits.Arbalester.id].indexOf(
      unit.id
    ) !== -1
  );
}

export function isMountedArcher(unit: Unit): boolean {
  return (
    isCavalryArcherLine(unit) ||
    isMangudaiLine(unit) ||
    isBattleElephantLine(unit) ||
    isCamelArcherLine(unit) ||
    isKipchakLine(unit)
  );
}

export function isLongbowLine(unit: Unit): boolean {
  return false;
}

export function isMangudaiLine(unit: Unit): boolean {
  return false;
}

export function isPlumedArcherLine(unit: Unit): boolean {
  return false;
}

export function isRattanLine(unit: Unit): boolean {
  return false;
}

export function isChuKoNuLine(unit: Unit): boolean {
  return false;
}

export function isCamelArcherLine(unit: Unit): boolean {
  return false;
}

export function isKipchakLine(unit: Unit): boolean {
  return false;
}

export function isArambai(unit: Unit): boolean {
  return false;
}

export function isCataphract(unit: Unit): boolean {
  return false;
}

export function isThrowingAxemen(unit: Unit): boolean {
  return false;
}

export function isKamayuk(unit: Unit): boolean {
  return false;
}

export function isBallistaElephantLine(unit: Unit): boolean {
  return false;
}

export function isSlinger(unit: Unit): boolean {
  return unit.id === ArcheryUnits.Slinger.id;
}

export function isGenitourLine(unit: Unit): boolean {
  return [ArcheryUnits.Genitour.id, ArcheryUnits.EliteGenitour.id].indexOf(unit.id) !== -1;
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

export function isHandCannoneer(unit: Unit): boolean {
  return unit.id === ArcheryUnits.HandCannoneer.id;
}

export function isVillager(unit: Unit): boolean {
  return unit.id === Villager.id;
}

export function isTradeCart(unit: Unit): boolean {
  return unit.id === TradeCart.id;
}

export function isTradeCog(unit: Unit): boolean {
  return unit.id === DockUnits.TradeCog.id;
}

export function isGunpowderUnit(unit: Unit): boolean {
  return unit.type.indexOf(UnitType.GunpowderUnit) !== -1;
}

export function isPetard(unit: Unit): boolean {
  return unit.id === Petard.id;
}

export function isTrebuchetUnpacked(unit: Unit): boolean {
  return unit.id === TrebuchetUnpacked.id;
}

export function isInCastle(unit: Unit): boolean {
  return unit.training.map(t => t.building.id).indexOf(Castle.id) !== -1;
}

export function isKonniksLine(unit: Unit): boolean {
  return false;
}

export function isShotelWarriorLine(unit: Unit): boolean {
  return false;
}

export function isHuskarlLine(unit: Unit): boolean {
  return false;
}

export function isTarkanLine(unit: Unit): boolean {
  return false;
}

export function isWarElephantLine(unit: Unit): boolean {
  return false;
}

export function isBerzerkLine(unit: Unit): boolean {
  return false;
}

export function isRange(unit: Unit): boolean {
  return unit.attack.type === AttackType.Range;
}

export function isMounted(unit: Unit): boolean {
  return unit.armor.types.indexOf(ArmorType.Cavalry) !== -1;
}

export function isMilitary(unit: Unit): boolean {
  return unit.type.indexOf(UnitType.Civilian) === -1;
}

export function allUnits(): boolean {
  return true;
}

export function noUnits(): boolean {
  return false;
}
