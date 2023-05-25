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
        section_name: item?.section.name || "-",
        section_id: item?.section_id || "-",
        photo: item?.photo || "-",
      })
    );
  }

  async getDataById(id: string): Promise<Mesin> {
    try {
      const { data } = await api.get(`machine/${id}`);
      return Mesin.create({
        machine_no: data.data?.no || "-",
        name: data.data?.name || "-",
        section_id: data.data?.section?.id || "-",
        photo: data.data?.image || "-",
        subMachines: data.data.subMachines || "[]"
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(mesin: Mesin): Promise<void> {
    try {
      const formData = new FormData();
      formData.append("name", mesin.name);
      formData.append("machine_no", mesin.machine_no);
      formData.append("section_id", mesin.section_id);
      formData.append("subMachines", mesin.subMachines);
      formData.append("image", mesin.photo[0]);
      const { data } = await api.post(`machine`, formData);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async edit(mesin): Promise<void> {
    try {
      const formData = new FormData();
      if (typeof mesin.photo == "string" || mesin.photo.length == 0) {
        formData.append("photo", "");
      } else {
        formData.append("photo", mesin.photo[0]);
      }
      formData.append("machine_no", mesin.machine_no);
      formData.append("name", mesin.name);
      formData.append("section", mesin.section_id);
      const { data } = await api.post(`machine/${mesin.id}`, formData);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const { data } = await api.delete(`machine/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
