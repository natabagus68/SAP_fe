import { SparepartKategory } from "@domain/models/sparepart/sparepart-kategory";

export interface SparepartKategoryRepository {
  get(): Promise<SparepartKategory[]>;
  create(availability: SparepartKategory): Promise<void>;
  getDataById(id: string): Promise<SparepartKategory>;
  edit(availability: SparepartKategory): Promise<void>;
  delete(id: string): Promise<void>;
}
