import {Bonus} from '../core';

export enum Age {
  DarkAge = 1,
  FeudalAge = 2,
  CastleAge = 3,
  ImperialAge = 4,
}

export interface AgeBonus {
  age: Age;
  bonus: Bonus;
}
