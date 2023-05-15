import { Indikator } from "@domain/models/mesin/indikator";

export interface IndikatorRepository {
  get(): Promise<Indikator[]>;
}
