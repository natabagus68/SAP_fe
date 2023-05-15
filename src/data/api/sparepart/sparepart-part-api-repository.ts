import { SparepartPart } from "@domain/models/sparepart/sparepart-part";
import { SparepartPartRepository } from "@domain/repositories/sparepart/sparepart-part-repository";
import { api } from "../_api";

export class SparepartApiRpository implements SparepartPartRepository {
  async get(): Promise<SparepartPart[]> {
    const { data } = await api.get(`sparepart`);
    return data?.data?.map((item) =>
      SparepartPart.create({
        id: item?.id,
        kategory: item?.kategory || "-",
        item_code: item?.item_code || "-",
        part_name: item?.part_name || "-",
        availability: item?.availability || "-",
        stock: item?.stock || "-",
      })
    );
  }
}
