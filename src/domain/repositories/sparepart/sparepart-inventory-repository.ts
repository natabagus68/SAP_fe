import { SparepartInventory } from "@domain/models/sparepart/sparepart-inventory";

export interface SparepartInventoryRepository {
  get(): Promise<SparepartInventory[]>;
  create(inventory: SparepartInventory): Promise<void>;
  getDataById(id: string): Promise<SparepartInventory>;
  edit(inventory: SparepartInventory): Promise<void>;
  delete(id: string): Promise<void>;
}
