import { CarMakes } from "../enums/car-make.enum";

export interface ICar {
  id: string;
  make: CarMakes;
  model: string;
  year: number;
  color: string;
  doorCount: number;
  wheelCount: number;
}
