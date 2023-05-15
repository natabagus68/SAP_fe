import { SparepartKategory } from "@domain/models/sparepart/sparepart-kategory";
import { SparepartKategoryRepository } from "@domain/repositories/sparepart/sparepart-kategory-repository";
import { api } from "../_api";

export class SparepartKategoryApiRepository
  implements SparepartKategoryRepository
{
  async get(): Promise<SparepartKategory[]> {
    const { data } = await api.get(`sparepart-category`);
    return data?.data?.map((item) =>
      SparepartKategory.create({
        id: item?.id,
        name: item?.name || "-",
      })
    );
  }
}
