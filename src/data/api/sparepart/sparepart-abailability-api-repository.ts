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
        id: item?.id,
        rak: item?.rak || "-",
        section: item?.section || "-",
      })
    );
  }
}
