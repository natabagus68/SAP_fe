import { Posisi } from "@domain/models/manpower/posisi";
import { api } from "../_api";
import { PosisiRepository } from "@domain/repositories/manpower/posisi-repository";

export class PosisiApiRepository implements PosisiRepository {
  async get(): Promise<Posisi[]> {
    const { data } = await api.get(`employee`);
    return data?.data?.map((item) =>
      Posisi.create({
        id: item?.id,
        name: item?.name || "-",
      })
    );
  }
}
