import { SparepartInventory } from "@domain/models/sparepart/sparepart-inventory";

export interface SparepartInventoryRepository {
  get(): Promise<SparepartInventory[]>;
}
