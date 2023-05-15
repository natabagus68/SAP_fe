import { Mesin } from "@domain/models/mesin/mesin";

export interface MesinRepository {
  get(): Promise<Mesin[]>;
}
