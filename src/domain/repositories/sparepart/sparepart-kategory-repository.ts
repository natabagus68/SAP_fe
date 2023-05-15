import { SparepartKategory } from "@domain/models/sparepart/sparepart-kategory";

export interface SparepartKategoryRepository {
  get(): Promise<SparepartKategory[]>;
}
