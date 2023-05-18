import { InventoryKategorySparepart } from "@domain/models/inventory/inventory-kategory-sparepart";

export interface InventoryKategorySparepartRepository {
  getDetail(id: string): Promise<InventoryKategorySparepart>;
}
