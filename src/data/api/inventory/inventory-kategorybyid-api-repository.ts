import { InventoryKategoryById } from "@domain/models/inventory/inventory-kategorybyid";
import { InventoryKategoryByIdRepository } from "@domain/repositories/inventory/inventory-kategorybyid-repository";
import { api } from "../_api";

export class InventoryKategoryByIdApiRepository
  implements InventoryKategoryByIdRepository
{
  async getDataById(id: string): Promise<InventoryKategoryById[]> {
    const { data } = await api.get(`sparepart/inventory/category/${id}`);
    return data?.data?.map((item: InventoryKategoryById ) =>
      InventoryKategoryById.create({
        id: item?.id,
        name: item?.name,
        no: item?.no,
        availability: item?.availability,
        stock: item?.stock
      })
    );
  }
}
