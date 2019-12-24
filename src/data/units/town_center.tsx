import {allCivilizations} from '../civilizations';
import {Age} from '../age';
import {TownCenter} from '../buildings';
import {ArmorType, AttackType} from '../damage';

import {Unit, UnitAbility} from './core';

export const Villager: Unit = {
  id: 'villager',
  name: 'Villageois',
  civilizations: allCivilizations(),
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
    food: 50,
  },
  health: 25,
  attack: {
    type: AttackType.Melee,
    meleeDommage: 3,
    bonuses: new Map([[ArmorType.StoneDefense, ArmorType.Building]]),
    rateOfFire: 2.03,
  },
  armor: {melee: 0, pierce: 0, types: []},
  speed: 0.8,
  lineOfSight: 4,
};