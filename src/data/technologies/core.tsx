import {Age} from '../ages/core';
import {Building} from '../buildings';
import {Cost} from '../resource';
import {Bonus} from '../core';

export enum TechnologyType {
  Building,
  Economy,
  Religious,
  Infantry,
  MissileAndSiege,
  Cavalry,
  Naval,
  Miscellaneous,
}

export interface Technology {
  type: TechnologyType;
  id: string;
  englishName: string;
  frenchName: string;
  age: Age;
  building: Building;
  cost: Cost;
  bonus: Bonus;
}
