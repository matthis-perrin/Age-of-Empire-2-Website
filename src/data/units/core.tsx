import {CivilizationRange} from '../civilizations';
import {Age} from '../age';
import {Building, Monastery, SiegeWorkshop} from '../buildings';
import {Cost} from '../resource';
import {Attack, Armor} from '../damage';
import {InterpolationString} from '../core';
import * as ArcheryUnits from './archery';
import * as BarrackUnits from './barrack';
import * as CastleUnits from './castle';
import * as DockUnits from './dock';
import * as MarketUnits from './market';
import * as MonasteryUnits from './monastery';
import * as SiegeWorkshopUnits from './siege_workshop';
import * as StableUnits from './stable';
import * as TownCenterUnits from './town_center';

export enum UnitType {
  Civilian,
  Infantry,
  Archer,
  Cavalry,
  GunpowderUnit,
  SiegeUnit,
  SuicideUnit,
  Monk,
  Healer,
  Ship,
  NavalVessel,
}

export enum UnitAbility {
  GatherRessources,
  GatherFood,
  ConstructBuilding,
  RepairBuildings,
  RepairShips,
  RepairSiegeWeapons,
  KillTree,
  HealUnits,
  ConvertUnits,
  CarryRelics,
  GenerateGoldByTrading,
}

export interface Unit {
  id: string;
  name: string;
  type: UnitType[];
  wikiUrl: string;
  civilizations: CivilizationRange;
  age: Age;
  abilities: UnitAbility[];
  training: UnitTraining[];
  cost: Cost;
  health: number;
  attack: Attack;
  armor: Armor;
  healing?: number;
  speed: number;
  garrison?: number;
  lineOfSight: number;
  comments: InterpolationString[];
}

export interface UnitTraining {
  building: Building;
  time: number;
}

export const unitRegistry: Unit[] = [
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

  StableUnits.ScoutCavalryDarkAge,
  StableUnits.ScoutCavalryFeudalAge,
  StableUnits.ScoutCavalryCastleAge,
  StableUnits.ScoutCavalryImperialAge,
  StableUnits.LightCavalryCastleAge,
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
];
