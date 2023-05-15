import { SparepartInventory } from "@domain/models/sparepart/saprepart-inventory";

export interface SparepartInventoryRepository {
  get(): Promise<SparepartInventory[]>;
}
