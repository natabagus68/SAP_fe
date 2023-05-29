import { DefaultResponse } from "@domain/models/default-response";
import { Indikator } from "@domain/models/mesin/indikator";

export interface IndikatorRepository {
  get(): Promise<Indikator[]>;
  getDataWithFilter(
    page?: string | undefined,
    limit?: string | undefined,
    q?: string | undefined
  ): Promise<DefaultResponse>;
  getDataById(id: string): Promise<Indikator>;
  create(indikator: Indikator): Promise<void>;
  edit(indikator: Indikator): Promise<void>;
  delete(id: string): Promise<void>;
}
