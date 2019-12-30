import {Bonus} from '../core';

export enum Age {
  DarkAge,
  FeudalAge,
  CastleAge,
  ImperialAge,
}

export interface AgeBonus {
  age: Age;
  bonus: Bonus;
}
