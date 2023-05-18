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
        rack_code: item?.rack_code || "-",
        section_name: item?.section?.name || "-",
      })
    );
  }
  async create(availability: SparepartAvailability): Promise<void> {
    try {
      const { data } = await api.post("availability-sparepart", {
        rack_code: availability?.rack_code,
        section_id: availability?.section_id,
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
        rack_code: data.data?.rack_code,
        section_id: data.data?.section?.id,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  async edit(inventory: SparepartAvailability): Promise<void> {
    try {
      const { data } = await api.put(`availability-sparepart/${inventory.id}`, {
        rack_code: inventory?.rack_code,
        section_id: inventory?.section_id,
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
