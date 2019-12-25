/* eslint-disable no-magic-numbers */
import {Age} from './age';
import {Cost} from './resource';
import {Civilization, Cumans} from './civilizations';
import {ArmorType, RangeAttack, Armor, AttackType, DommageType} from './damage';

export enum BuildingType {
  Economic,
  Military,
  DefensiveStructure,
  Special,
}

export enum BuildingAbility {
  AdvanceAges,
  AttackEnemies,
  CreateAndImproveVillagers,
  DropOffResources,
  ResearchTechnologies,
  TrainAndImproveInfantry,
  TrainAndImproveArchers,
  TrainAndImproveSiegeUnits,
  TrainAndImproveMonks,
  TrainUniqueUnit,
  TrainSiegeWeapons,
}

export interface Overridable<T> {
  default: T;
  overrides?: Map<Civilization, T>;
}

export interface Ageable<T> {
  [Age.DarkAge]?: T;
  [Age.FeudalAge]?: T;
  [Age.CastleAge]?: T;
  [Age.ImperialAge]?: T;
}
function AllAge<T>(value: T): Ageable<T> {
  return {
    [Age.DarkAge]: value,
    [Age.FeudalAge]: value,
    [Age.CastleAge]: value,
    [Age.ImperialAge]: value,
  };
}
function makeAgeable<T>(
  dark: T | undefined,
  feudal: T | undefined,
  castle: T | undefined,
  imperial: T | undefined
): Ageable<T> {
  return {
    [Age.DarkAge]: dark,
    [Age.FeudalAge]: feudal,
    [Age.CastleAge]: castle,
    [Age.ImperialAge]: imperial,
  };
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
    overrides: new Map([[Cumans, Age.FeudalAge]]),
  },
  population: 5,
  use: [
    BuildingAbility.CreateAndImproveVillagers,
    BuildingAbility.AdvanceAges,
    BuildingAbility.DropOffResources,
  ],
  cost: {
    wood: 275,
    stone: 100,
  },
  constructionTime: {
    default: 150,
    overrides: new Map([[Cumans, 275]]),
  },
  size: [4, 4],
  health: AllAge(2400),
  garrison: 15,
  attack: {
    type: AttackType.Range,
    dommage: {type: DommageType.Pierce, value: 5},
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

export const Barrack: Building = {
  id: 'barrack',
  name: 'Caserne',
  types: [BuildingType.Military],
  age: {default: Age.DarkAge},
  use: [BuildingAbility.TrainAndImproveInfantry],
  cost: {
    wood: 175,
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
    wood: 175,
  },
  constructionTime: {default: 50},
  size: [3, 3],
  health: makeAgeable(undefined, 1500, 1800, 2100), // TODO - Verify Feudal value for Cumans
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
    stone: 650,
  },
  constructionTime: {default: 200},
  size: [4, 4],
  health: AllAge(4800),
  garrison: 20,
  attack: {
    type: AttackType.Range,
    dommage: {type: DommageType.Pierce, value: 11},
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

export const SiegeWorkshop: Building = {
  id: 'siege-workshop',
  name: 'Atelier de siège',
  types: [BuildingType.Military],
  age: {default: Age.CastleAge, overrides: new Map([[Cumans, Age.FeudalAge]])},
  use: [BuildingAbility.TrainAndImproveSiegeUnits],
  cost: {
    wood: 200,
  },
  constructionTime: {default: 40},
  size: [4, 4],
  health: makeAgeable(undefined, 1500, 1800, 2100),
  garrison: 10,
  armor: makeAgeable(
    undefined,
    {melee: 1, pierce: 8, types: [ArmorType.Building, ArmorType.StandardBuilding]}, // TODO - Verify value for Cumans
    {melee: 2, pierce: 9, types: [ArmorType.Building, ArmorType.StandardBuilding]},
    {melee: 3, pierce: 10, types: [ArmorType.Building, ArmorType.StandardBuilding]}
  ),
  lineOfSight: 6,
};

export const Monastery: Building = {
  id: 'monastery',
  name: 'Monastère',
  types: [BuildingType.Special],
  age: {default: Age.CastleAge},
  use: [BuildingAbility.TrainAndImproveMonks],
  cost: {
    wood: 175,
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
