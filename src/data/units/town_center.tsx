import {Age} from '../ages/core';
import {TownCenter} from '../buildings';
import {ArmorType, AttackType} from '../damage';
import {allCivilizations} from '../civilizations/ids';
import {Resource} from '../resource';

import {Unit, UnitAbility, UnitType} from './core';

export const Villager: Unit = {
  id: 'villager',
  name: 'Villageois',
  civilizations: allCivilizations(),
  type: [UnitType.Civilian],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Villager_(Age_of_Empires_II)',
  age: Age.DarkAge,
  abilities: [
    UnitAbility.GatherRessources,
    UnitAbility.ConstructBuilding,
    UnitAbility.RepairBuildings,
    UnitAbility.RepairShips,
    UnitAbility.RepairSiegeWeapons,
  ],
  training: [{building: TownCenter, time: 25}],
  cost: {
    [Resource.Food]: 50,
  },
  health: 25,
  attack: {
    type: AttackType.CaC,
    dommage: {melee: 3, pierce: 0},
    bonuses: new Map([[ArmorType.StoneDefense, ArmorType.Building]]),
    rateOfFire: 2.03,
  },
  armor: {melee: 0, pierce: 0, types: []},
  speed: 0.8,
  lineOfSight: 4,
  comments: [],
};
