import { Mesin } from "@domain/models/mesin/mesin";

export interface MesinRepository {
  get(): Promise<Mesin[]>;
  getDataById(id: string): Promise<Mesin>;
  create(mesin: Mesin): Promise<void>;
  edit(mesin: Mesin): Promise<void>;
  delete(id: string): Promise<void>;
}
