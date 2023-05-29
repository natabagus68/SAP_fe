import { DefaultResponse } from "@domain/models/default-response";
import { SparepartKategory } from "@domain/models/sparepart/sparepart-kategory";

export interface SparepartKategoryRepository {
  get(): Promise<SparepartKategory[]>;
  getDataWithFilter(
    page?: string | undefined,
    limit?: string | undefined,
    q?: string | undefined
  ): Promise<DefaultResponse>;
  create(availability: SparepartKategory): Promise<void>;
  getDataById(id: string): Promise<SparepartKategory>;
  edit(availability: SparepartKategory): Promise<void>;
  delete(id: string): Promise<void>;
}
