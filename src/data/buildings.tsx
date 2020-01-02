/* eslint-disable no-magic-numbers */
import {Age} from './ages/core';
import {Cost, Resource} from './resource';
import {ArmorType, RangeAttack, Armor, AttackType} from './damage';
import {Ageable, AllAge, makeAgeable} from './core';
import {CivilizationId, Ids} from './civilizations/ids';

export enum BuildingType {
  Economic,
  Military,
  DefensiveStructure,
  Special,
  Research,
}

export enum BuildingAbility {
  AdvanceAges,
  AttackEnemies,
  CreateAndImproveVillagers,
  DropOffResources,
  ResearchTechnologies,
  TrainAndImproveInfantry,
  TrainAndImproveArchers,
  TrainAndImproveCavalry,
  TrainAndImproveSiegeUnits,
  TrainAndImproveMonks,
  TrainUniqueUnit,
  TrainSiegeWeapons,
  ExchangeAndSendResources,
  TradeWithTradeCarts,
  ResearchTradeImprovements,
  BuildAndImproveShips,
  ImproveBuildingsAndRangeUnits,
  DropOffWood,
  DropOffFood,
  DropOffGoldAndStone,
  ResearchLoggingTechnologies,
  UpgradeAndQueueFarms,
  ResearchMiningTechnologies,
  ImproveInfantry,
  ImproveArchers,
  ImproveCavalry,
}

export interface Overridable<T> {
  default: T;
  overrides?: Map<CivilizationId, T>;
}

export interface Building {
  id: string;
  name: string;
  types: BuildingType[];
  age: Overridable<Age>;
  population?: number;
  use: BuildingAbility[];
  cost: Cost;
  constructionTime: Overridable<number>;
  size: [number, number];
  health: Ageable<number>;
  garrison: number;
  attack?: RangeAttack;
  armor: Ageable<Armor>;
  lineOfSight: number;
}

export const TownCenter: Building = {
  id: 'town-center',
  name: 'Forum',
  types: [BuildingType.Economic],
  age: {
    default: Age.CastleAge,
    overrides: new Map([[Ids.CumansId, Age.FeudalAge]]),
  },
  population: 5,
  use: [
    BuildingAbility.CreateAndImproveVillagers,
    BuildingAbility.AdvanceAges,
    BuildingAbility.DropOffResources,
  ],
  cost: {
    [Resource.Wood]: 275,
    [Resource.Stone]: 100,
  },
  constructionTime: {
    default: 150,
    overrides: new Map([[Ids.CumansId, 275]]),
  },
  size: [4, 4],
  health: AllAge(2400),
  garrison: 15,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 0, pierce: 5},
    bonuses: new Map([
      [ArmorType.Ship, 5],
      [ArmorType.Building, 5],
      [ArmorType.Camel, 1],
    ]),
    rateOfFire: 2.03,
    range: 6,
    accuracy: 1,
    projectileSpeed: 7,
  },
  armor: makeAgeable(
    {melee: 3, pierce: 5, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 4, pierce: 6, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 5, pierce: 7, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 6, pierce: 8, types: [ArmorType.Building, ArmorType.StandardBuilding]}
  ),
  lineOfSight: 8,
};

export const Dock: Building = {
  id: 'dock',
  name: 'Port',
  types: [BuildingType.Economic, BuildingType.Military],
  age: {default: Age.DarkAge},
  use: [BuildingAbility.BuildAndImproveShips],
  cost: {
    [Resource.Wood]: 150,
  },
  constructionTime: {default: 35},
  size: [3, 3],
  health: AllAge(1800),
  garrison: 10,
  armor: makeAgeable(
    {melee: 0, pierce: 7, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 1, pierce: 8, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 2, pierce: 9, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 3, pierce: 10, types: [ArmorType.Building, ArmorType.StandardBuilding]}
  ),
  lineOfSight: 6,
};

export const Barrack: Building = {
  id: 'barrack',
  name: 'Caserne',
  types: [BuildingType.Military],
  age: {default: Age.DarkAge},
  use: [BuildingAbility.TrainAndImproveInfantry],
  cost: {
    [Resource.Wood]: 175,
  },
  constructionTime: {default: 50},
  size: [3, 3],
  health: makeAgeable(1200, 1500, 1800, 2100),
  garrison: 10,
  armor: makeAgeable(
    {melee: 0, pierce: 7, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 1, pierce: 8, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 2, pierce: 9, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 3, pierce: 10, types: [ArmorType.Building, ArmorType.StandardBuilding]}
  ),
  lineOfSight: 6,
};

export const Archery: Building = {
  id: 'archery',
  name: 'Archerie',
  types: [BuildingType.Military],
  age: {default: Age.FeudalAge},
  use: [BuildingAbility.TrainAndImproveArchers],
  cost: {
    [Resource.Wood]: 175,
  },
  constructionTime: {default: 50},
  size: [3, 3],
  health: makeAgeable(undefined, 1500, 1800, 2100),
  garrison: 10,
  armor: makeAgeable(
    undefined,
    {melee: 1, pierce: 8, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 2, pierce: 9, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 3, pierce: 10, types: [ArmorType.Building, ArmorType.StandardBuilding]}
  ),
  lineOfSight: 6,
};

export const Stable: Building = {
  id: 'stable',
  name: 'Écurie',
  types: [BuildingType.Military],
  age: {default: Age.FeudalAge},
  use: [BuildingAbility.TrainAndImproveCavalry],
  cost: {
    [Resource.Wood]: 175,
  },
  constructionTime: {default: 50},
  size: [3, 3],
  health: makeAgeable(undefined, 1500, 1800, 2100),
  garrison: 10,
  armor: makeAgeable(
    undefined,
    {melee: 1, pierce: 8, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 2, pierce: 9, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 3, pierce: 10, types: [ArmorType.Building, ArmorType.StandardBuilding]}
  ),
  lineOfSight: 6,
};

export const SiegeWorkshop: Building = {
  id: 'siege-workshop',
  name: 'Atelier de siège',
  types: [BuildingType.Military],
  age: {default: Age.CastleAge, overrides: new Map([[Ids.CumansId, Age.FeudalAge]])},
  use: [BuildingAbility.TrainAndImproveSiegeUnits],
  cost: {
    [Resource.Wood]: 200,
  },
  constructionTime: {default: 40},
  size: [4, 4],
  health: makeAgeable(undefined, 1500, 1800, 2100),
  garrison: 10,
  armor: makeAgeable(
    undefined,
    {melee: 1, pierce: 8, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 2, pierce: 9, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 3, pierce: 10, types: [ArmorType.Building, ArmorType.StandardBuilding]}
  ),
  lineOfSight: 6,
};

export const Castle: Building = {
  id: 'castle',
  name: 'Château',
  types: [BuildingType.Military, BuildingType.DefensiveStructure],
  age: {default: Age.CastleAge},
  use: [
    BuildingAbility.TrainUniqueUnit,
    BuildingAbility.TrainSiegeWeapons,
    BuildingAbility.ResearchTechnologies,
    BuildingAbility.AttackEnemies,
  ],
  cost: {
    [Resource.Stone]: 650,
  },
  constructionTime: {default: 200},
  size: [4, 4],
  health: AllAge(4800),
  garrison: 20,
  attack: {
    type: AttackType.Range,
    dommage: {melee: 0, pierce: 11},
    bonuses: new Map([[ArmorType.Spearman, 2]]),
    rateOfFire: 2.03,
    range: 8,
    minimumRange: 1,
    accuracy: 1,
    projectileSpeed: 7,
  },
  armor: AllAge({
    melee: 8,
    pierce: 11,
    types: [ArmorType.Building, ArmorType.StandardBuilding, ArmorType.Castle],
    bonuses: new Map([[ArmorType.Building, 8]]),
  }),
  lineOfSight: 11,
};

export const Monastery: Building = {
  id: 'monastery',
  name: 'Monastère',
  types: [BuildingType.Special],
  age: {default: Age.CastleAge},
  use: [BuildingAbility.TrainAndImproveMonks],
  cost: {
    [Resource.Wood]: 175,
  },
  constructionTime: {default: 40},
  size: [3, 3],
  health: AllAge(2100),
  garrison: 10,
  armor: makeAgeable(
    undefined,
    undefined,
    {melee: 2, pierce: 9, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 3, pierce: 10, types: [ArmorType.Building, ArmorType.StandardBuilding]}
  ),
  lineOfSight: 6,
};

export const Market: Building = {
  id: 'market',
  name: 'Marché',
  types: [BuildingType.Economic],
  age: {default: Age.FeudalAge},
  use: [
    BuildingAbility.ExchangeAndSendResources,
    BuildingAbility.TradeWithTradeCarts,
    BuildingAbility.ResearchTradeImprovements,
  ],
  cost: {
    [Resource.Wood]: 175,
  },
  constructionTime: {default: 60},
  size: [4, 4],
  health: makeAgeable(undefined, 1800, 2100, 2100),
  garrison: 0,
  armor: makeAgeable(
    undefined,
    {melee: 1, pierce: 8, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 2, pierce: 9, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 3, pierce: 10, types: [ArmorType.Building, ArmorType.StandardBuilding]}
  ),
  lineOfSight: 6,
};

export const University: Building = {
  id: 'university',
  name: 'Université',
  types: [BuildingType.Research],
  age: {default: Age.CastleAge},
  use: [BuildingAbility.ImproveBuildingsAndRangeUnits],
  cost: {
    [Resource.Wood]: 200,
  },
  constructionTime: {default: 60},
  size: [4, 4],
  health: AllAge(2100),
  garrison: 0,
  armor: makeAgeable(
    undefined,
    undefined,
    {melee: 2, pierce: 9, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 3, pierce: 10, types: [ArmorType.Building, ArmorType.StandardBuilding]}
  ),
  lineOfSight: 6,
};

export const LumberCamp: Building = {
  id: 'lumber-camp',
  name: 'Camp de bûcheron',
  types: [BuildingType.Economic],
  age: {default: Age.DarkAge},
  use: [BuildingAbility.DropOffWood, BuildingAbility.ResearchLoggingTechnologies],
  cost: {
    [Resource.Wood]: 100,
  },
  constructionTime: {default: 35},
  size: [2, 2],
  health: makeAgeable(600, 800, 1000, 1000),
  garrison: 0,
  armor: makeAgeable(
    {melee: 0, pierce: 7, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 1, pierce: 8, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 2, pierce: 9, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 3, pierce: 10, types: [ArmorType.Building, ArmorType.StandardBuilding]}
  ),
  lineOfSight: 6,
};

export const MiningCamp: Building = {
  id: 'mining-camp',
  name: 'Camp de mineurs',
  types: [BuildingType.Economic],
  age: {default: Age.DarkAge},
  use: [BuildingAbility.DropOffGoldAndStone, BuildingAbility.ResearchMiningTechnologies],
  cost: {
    [Resource.Wood]: 100,
  },
  constructionTime: {default: 35},
  size: [2, 2],
  health: makeAgeable(600, 800, 1000, 1000),
  garrison: 0,
  armor: makeAgeable(
    {melee: 0, pierce: 7, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 1, pierce: 8, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 2, pierce: 9, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 3, pierce: 10, types: [ArmorType.Building, ArmorType.StandardBuilding]}
  ),
  lineOfSight: 6,
};

export const Mill: Building = {
  id: 'mill',
  name: 'Moulin',
  types: [BuildingType.Economic],
  age: {default: Age.DarkAge},
  use: [BuildingAbility.DropOffFood, BuildingAbility.UpgradeAndQueueFarms],
  cost: {
    [Resource.Wood]: 100,
  },
  constructionTime: {default: 35},
  size: [2, 2],
  health: makeAgeable(600, 800, 1000, 1000),
  garrison: 0,
  armor: makeAgeable(
    {melee: 0, pierce: 7, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 1, pierce: 8, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 2, pierce: 9, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 3, pierce: 10, types: [ArmorType.Building, ArmorType.StandardBuilding]}
  ),
  lineOfSight: 6,
};

export const Blacksmith: Building = {
  id: 'blacksmith',
  name: 'Forge',
  types: [BuildingType.Research],
  age: {default: Age.FeudalAge},
  use: [
    BuildingAbility.ImproveInfantry,
    BuildingAbility.ImproveArchers,
    BuildingAbility.ImproveCavalry,
  ],
  cost: {
    [Resource.Wood]: 150,
  },
  constructionTime: {default: 40},
  size: [3, 3],
  health: makeAgeable(undefined, 1800, 2100, 2100),
  garrison: 0,
  armor: makeAgeable(
    undefined,
    {melee: 1, pierce: 8, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 2, pierce: 9, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 3, pierce: 10, types: [ArmorType.Building, ArmorType.StandardBuilding]}
  ),
  lineOfSight: 6,
};
