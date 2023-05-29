import { DefaultResponse } from "@domain/models/default-response";
import { SparepartInventory } from "@domain/models/sparepart/sparepart-inventory";

export interface SparepartInventoryRepository {
  get(): Promise<SparepartInventory[]>;
  getDataWithFilter(
    page?: string | undefined,
    limit?: string | undefined,
    q?: string | undefined
  ): Promise<DefaultResponse>;
  create(inventory: SparepartInventory): Promise<void>;
  getDataById(id: string): Promise<SparepartInventory>;
  edit(inventory: SparepartInventory): Promise<void>;
  editStatus(id: string): Promise<void>;
  delete(id: string): Promise<void>;
}
