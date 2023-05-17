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

  async getDataById(id: string): Promise<SubMesin> {
    try {
      const { data } = await api.get(`sub-machine/${id}`);
      return SubMesin.create({
        id: data.data?.id || "-",
        name: data.data?.name || "-",
        sub_machine_no: data.data?.sub_machine_no || "-",
      });
    } catch (error) {}
  }

  async create(submesin: SubMesin): Promise<void> {
    try {
      const { data } = await api.post(`sub-machine`, {
        name: submesin.name,
        sub_machine_no: submesin.sub_machine_no,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async edit(submesin: SubMesin): Promise<void> {
    try {
      const { data } = await api.put(`sub-machine/${submesin.id}`, {
        name: submesin.name,
        sub_machine_no: submesin.sub_machine_no,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const { data } = await api.delete(`sub-machine/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
