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

export enum AttackType {
  Melee,
  Pierce,
}

export interface Armor {
  melee: number;
  pierce: number;
  types: ArmorType[];
  bonuses?: Map<ArmorType, number>;
}

interface AttackBase {
  type: AttackType;
  bonuses: Map<ArmorType, number>;
  frameDelay?: number;
  rateOfFire: number;
}

export interface MeleeAttack extends AttackBase {
  type: AttackType.Melee;
  meleeDommage: number;
}

export interface RangeAttack extends AttackBase {
  type: AttackType.Pierce;
  pierceDommage: number;
  range: number;
  minimumRange?: number;
  accuracy: number;
  projectileSpeed: number;
}

export type Attack = MeleeAttack | RangeAttack;
