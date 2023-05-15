import { Mesin } from "@domain/models/mesin/mesin";
import { MesinRepository } from "@domain/repositories/mesin/mesin-repository";
import { api } from "../_api";

export class MesinApiRepository implements MesinRepository {
  async get(): Promise<Mesin[]> {
    const { data } = await api.get(`machine`);
    return data?.data?.map((item) =>
      Mesin.create({
        id: item?.id,
        machine_no: item?.machine_no || "-",
        name: item?.name || "-",
        section: item?.section.name || "-",
      })
    );
  }
}
