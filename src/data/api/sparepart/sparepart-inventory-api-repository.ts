import { SparepartInventory } from "@domain/models/sparepart/sparepart-inventory";
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
  async create(inventory: SparepartInventory): Promise<void> {
    try {
      const { data } = await api.post("inventory-category", {
        name: inventory.name,
        icon: inventory.icon,
        status: inventory.status,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getDataById(id: string): Promise<SparepartInventory> {
    try {
      const { data } = await api.get(`inventory-category/${id}`);
      return SparepartInventory.create({
        name: data.data.name,
        icon: data.data.icon,
        status: data.data.status,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  async edit(inventory: SparepartInventory): Promise<void> {
    try {
      const { data } = await api.put(`inventory-category/${inventory.id}`, {
        name: inventory.name,
        icon: inventory.icon,
        status: inventory.status,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async editStatus(id: string): Promise<void> {
    try {
      const { data } = await api.put(`inventory-category/${id}/status`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async delete(id: string): Promise<void> {
    try {
      const { data } = await api.delete(`inventory-category/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
