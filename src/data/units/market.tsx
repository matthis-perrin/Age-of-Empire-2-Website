import {allCivilizations} from '../civilizations';
import {Age} from '../age';
import {Market} from '../buildings';
import {AttackType} from '../damage';

import {Unit, UnitAbility, UnitType} from './core';

export const TradeCart: Unit = {
  id: 'trade-cart',
  name: 'Charette de commerce',
  type: [UnitType.Civilian],
  wikiUrl: 'https://ageofempires.fandom.com/wiki/Trade_Cart',
  civilizations: allCivilizations(),
  age: Age.FeudalAge,
  abilities: [UnitAbility.GenerateGoldByTrading],
  training: [{building: Market, time: 51}],
  cost: {
    wood: 100,
    gold: 50,
  },
  health: 70,
  attack: {type: AttackType.None},
  armor: {melee: 0, pierce: 0, types: []},
  speed: 1,
  lineOfSight: 7,
  comments: [],
};
