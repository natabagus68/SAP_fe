import { SparepartAvailability } from "@domain/models/sparepart/sparepart-availability";
import { SparepartAvailabilityRepository } from "@domain/repositories/sparepart/sparepart-availability-repository";
import { api } from "../_api";

export default class SparepartAvailabilityApiRepository
  implements SparepartAvailabilityRepository
{
  async get(): Promise<SparepartAvailability[]> {
    const { data } = await api.get(`availability-sparepart`);
    return data?.data?.map((item) =>
      SparepartAvailability.create({
        id: item.id,
        rak: item?.rack_code || "-",
        section: item?.section?.name || "-",
      })
    );
  }
  async create(inventory: SparepartAvailability): Promise<void> {
    try {
      const { data } = await api.post("availability-sparepart", {
        rak: inventory?.rak,
        section: inventory?.section,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getDataById(id: string): Promise<SparepartAvailability> {
    try {
      const { data } = await api.get(`availability-sparepart/${id}`);
      return SparepartAvailability.create({
        rak: "",
        section: "",
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  async edit(inventory: SparepartAvailability): Promise<void> {
    try {
      const { data } = await api.put(`availability-sparepart/${inventory.id}`, {
        rak: "",
        section: "",
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async delete(id: string): Promise<void> {
    try {
      const { data } = await api.delete(`availability-sparepart/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
