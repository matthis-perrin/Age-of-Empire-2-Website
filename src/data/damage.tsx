export enum ArmorType {
  Infantry,
  Archer,
  Cavalry,
  SiegeWeapon,
  GunPowderUnit,
  Ship,
  FishingShip,
  Building,
  StandardBuilding,
  Castle,
  UniqueUnit,
  CavalryArcher,
  WarElephant,
  Camel,
  Mameluke,
  StoneDefense,
  EagleWarrior,
  Spearman,
  Monk,
  Condottiero,
  Ram,
}

export interface Armor {
  melee: number;
  pierce: number;
  types: ArmorType[];
  bonuses?: Map<ArmorType, number>;
}

export enum DommageType {
  Melee,
  Pierce,
}

export interface Dommage {
  type: DommageType;
  value: number;
}

export enum AttackType {
  CaC,
  Range,
}

interface AttackBase {
  type: AttackType;
  bonuses: Map<ArmorType, number>;
  frameDelay?: number;
  areaOfDamage?: number;
  rateOfFire: number;
  dommage: Dommage;
}

export interface CaCAttack extends AttackBase {
  type: AttackType.CaC;
}

export interface RangeAttack extends AttackBase {
  type: AttackType.Range;
  range: number;
  minimumRange?: number;
  accuracy: number;
  projectileSpeed: number;
}

export type Attack = CaCAttack | RangeAttack;
