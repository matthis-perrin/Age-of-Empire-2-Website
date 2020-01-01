import {Age} from '../ages/core';
import {Building} from '../buildings';
import {Cost} from '../resource';
import {Attack, Armor} from '../damage';
import {InterpolationString} from '../core';
import {CivilizationRange} from '../civilizations/ids';

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

export interface UnitCarac {
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

export interface Unit extends UnitCarac {
  id: string;
  name: string;
  type: UnitType[];
  wikiUrl: string;
  civilizations: CivilizationRange;
  sharedUnit?: boolean;
  age: Age;
}

export interface UnitTraining {
  building: Building;
  time: number;
}
