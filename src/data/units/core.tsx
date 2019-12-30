import {CivilizationRange} from '../civilizations/registry';
import {Age} from '../ages/core';
import {Building} from '../buildings';
import {Cost} from '../resource';
import {Attack, Armor} from '../damage';
import {InterpolationString} from '../core';

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
  sharedUnit?: boolean;
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
