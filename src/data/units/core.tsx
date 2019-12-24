import {CivilizationRange} from '../civilizations';
import {Age} from '../age';
import {Building} from '../buildings';
import {Cost} from '../resource';
import {Attack, Armor} from '../damage';

export enum UnitType {
  Civilian,
}

export enum UnitAbility {
  GatherRessources,
  ConstructBuilding,
  RepairBuildings,
  RepairShips,
  RepairSiegeWeapons,
}

export interface Unit {
  id: string;
  name: string;
  civilizations: CivilizationRange;
  age: Age;
  abilities: UnitAbility[];
  training: UnitTraining[];
  cost: Cost;
  health: number;
  attack: Attack;
  armor: Armor;
  speed: number;
  lineOfSight: number;
}

export interface UnitTraining {
  building: Building;
  time: number;
}
