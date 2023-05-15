import { SubMesin } from "@domain/models/mesin/sub-mesin";
import { SubMesinRepository } from "@domain/repositories/mesin/submesin-repository";
import { api } from "../_api";

export class SubMesinApiRepository implements SubMesinRepository {
  async get(): Promise<SubMesin[]> {
    const { data } = await api.get(`sub-machine`);
    return data?.data?.map((item) =>
      SubMesin.create({
        id: item?.id,
        sub_machine_no: item?.sub_machine_no || "-",
        name: item?.name || "-",
      })
    );
  }
}
