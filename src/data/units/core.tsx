import {CivilizationRange} from '../civilizations';
import {Age} from '../age';
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
}

export enum UnitAbility {
  GatherRessources,
  ConstructBuilding,
  RepairBuildings,
  RepairShips,
  RepairSiegeWeapons,
  KillTree,
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
  speed: number;
  garrison?: number;
  lineOfSight: number;
  comments: InterpolationString[];
}

export interface UnitTraining {
  building: Building;
  time: number;
}
