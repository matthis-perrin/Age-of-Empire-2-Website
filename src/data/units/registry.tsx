import * as ArcheryUnits from './archery';
import * as BarrackUnits from './barrack';
import * as CastleUnits from './castle';
import * as DockUnits from './dock';
import * as MarketUnits from './market';
import * as MonasteryUnits from './monastery';
import * as SiegeWorkshopUnits from './siege_workshop';
import * as StableUnits from './stable';
import * as TownCenterUnits from './town_center';
import {Unit} from './core';

export interface UnitInfo extends Unit {
  searchName: string;
}

export const unitRegistry: UnitInfo[] = [
  ArcheryUnits.Archer,
  ArcheryUnits.Crossbowman,
  ArcheryUnits.Arbalester,
  ArcheryUnits.Skirmisher,
  ArcheryUnits.EliteSkirmisher,
  ArcheryUnits.ImperialSkirmisher,
  ArcheryUnits.CavalryArcher,
  ArcheryUnits.HeavyCavalryArcher,
  ArcheryUnits.HandCannoneer,
  ArcheryUnits.Slinger,
  ArcheryUnits.Genitour,
  ArcheryUnits.EliteGenitour,

  BarrackUnits.Militia,
  BarrackUnits.ManAtArms,
  BarrackUnits.LongSwordsman,
  BarrackUnits.TwoHandedSwordsman,
  BarrackUnits.Champion,
  BarrackUnits.Spearman,
  BarrackUnits.Pikeman,
  BarrackUnits.Halberdier,
  BarrackUnits.EagleScout,
  BarrackUnits.EagleWarrior,
  BarrackUnits.EilteEagleWarrior,
  BarrackUnits.Condottiero,
  BarrackUnits.Huskarl,
  BarrackUnits.EliteHuskarl,

  CastleUnits.Petard,
  CastleUnits.TrebuchetPacked,
  CastleUnits.TrebuchetUnpacked,

  DockUnits.FishingShip,
  DockUnits.TransportShip,
  DockUnits.TradeCog,
  DockUnits.Galley,
  DockUnits.WarGalley,
  DockUnits.Galleon,
  DockUnits.FireGalley,
  DockUnits.FireShip,
  DockUnits.FastFireShip,
  DockUnits.DemolitionRaft,
  DockUnits.DemolitionShip,
  DockUnits.HeavyDemolitionShip,
  DockUnits.CannonGalleon,
  DockUnits.EliteCannonGalleon,
  DockUnits.Longboat,
  DockUnits.EliteLongboat,
  DockUnits.TurtleShip,
  DockUnits.EliteTurtleShip,
  DockUnits.Caravel,
  DockUnits.EliteCaravel,

  MarketUnits.TradeCart,

  MonasteryUnits.Monk,
  MonasteryUnits.Missionary,

  SiegeWorkshopUnits.BatteringRam,
  SiegeWorkshopUnits.CappedRam,
  SiegeWorkshopUnits.SiegeRam,
  SiegeWorkshopUnits.Mangonel,
  SiegeWorkshopUnits.Onager,
  SiegeWorkshopUnits.SiegeOnager,
  SiegeWorkshopUnits.Scorpion,
  SiegeWorkshopUnits.HeavyScorpion,
  SiegeWorkshopUnits.BombardCanon,

  StableUnits.ScoutCavalry,
  StableUnits.ScoutCavalryFeudalAge,
  StableUnits.ScoutCavalryCastleAge,
  StableUnits.ScoutCavalryImperialAge,
  StableUnits.LightCavalry,
  StableUnits.LightCavalryImperialAge,
  StableUnits.Hussar,
  StableUnits.Knight,
  StableUnits.Cavalier,
  StableUnits.Paladin,
  StableUnits.CamelRider,
  StableUnits.HeavyCamelRider,
  StableUnits.ImperialCamelRider,
  StableUnits.BattleElephant,
  StableUnits.EliteBattleElephant,
  StableUnits.Tarkan,
  StableUnits.EliteTarkan,
  StableUnits.SteppeLancer,
  StableUnits.EliteSteppeLancer,

  TownCenterUnits.Villager,
].map(u => ({...u, searchName: u.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')}));
