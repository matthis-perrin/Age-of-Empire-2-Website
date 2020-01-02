export enum Resource {
  Wood,
  Food,
  Gold,
  Stone,
}

export interface Cost {
  [Resource.Wood]?: number;
  [Resource.Food]?: number;
  [Resource.Gold]?: number;
  [Resource.Stone]?: number;
}
