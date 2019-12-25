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
  Conversion,
}

interface AttackBase {
  type: AttackType;
  rateOfFire: number;
}

interface DommageAttack extends AttackBase {
  frameDelay?: number;
  areaOfDamage?: number;
  dommage: Dommage;
  bonuses: Map<ArmorType, number>;
}

export interface CaCAttack extends DommageAttack {
  type: AttackType.CaC;
}

export interface RangeAttack extends DommageAttack {
  type: AttackType.Range;
  range: number;
  minimumRange?: number;
  accuracy: number;
  projectileSpeed: number;
}

export interface ConversionAttack extends AttackBase {
  type: AttackType.Conversion;
  conversion: number;
}

export type Attack = CaCAttack | RangeAttack | ConversionAttack;
