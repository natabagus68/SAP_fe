import { InventoryKategory } from "@domain/models/inventory/inventory-kategory";
import { InventoryKategoryRepository } from "@domain/repositories/inventory/inventory-kategory-repository";
import { api } from "../_api";

export class InventoryKategoryApiRepository
  implements InventoryKategoryRepository
{
  async get(): Promise<InventoryKategory[]> {
    const { data } = await api.get(`sparepart/inventory/category`);
    return data?.data?.map((item) =>
      InventoryKategory.create({
        id: item?.id,
        name: item?.name,
        icon: item?.icon
      })
    );
  }
}
