import { InventoryKategoryById } from "@domain/models/inventory/inventory-kategorybyid";

export interface InventoryKategoryByIdRepository {
  getDataById(id: string): Promise<InventoryKategoryById[]>;
}
