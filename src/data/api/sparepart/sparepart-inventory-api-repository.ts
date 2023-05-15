import { SparepartInventory } from "@domain/models/sparepart/saprepart-inventory";
import { SparepartInventoryRepository } from "@domain/repositories/sparepart/sparepart-inventory-repository";
import { api } from "../_api";

export class SparepartInventoryApiRepository
  implements SparepartInventoryRepository
{
  async get(): Promise<SparepartInventory[]> {
    const { data } = await api.get(`inventory-category`);
    return data?.data?.map((item) =>
      SparepartInventory.create({
        id: item?.id,
        name: item?.name || "-",
        icon: item?.icon || "",
        status: item?.status || "-",
      })
    );
  }
}
