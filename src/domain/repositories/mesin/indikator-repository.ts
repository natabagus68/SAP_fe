import { Indikator } from "@domain/models/mesin/indikator";

export interface IndikatorRepository {
  get(): Promise<Indikator[]>;
  getDataById(id: string): Promise<Indikator>;
  create(indikator: Indikator): Promise<void>;
  edit(indikator: Indikator): Promise<void>;
  delete(id: string): Promise<void>;
}
