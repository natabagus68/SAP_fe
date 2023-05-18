import { InventoryKategory } from "@domain/models/inventory/inventory-kategory";

export interface InventoryKategoryRepository {
  get(): Promise<InventoryKategory[]>;
}
