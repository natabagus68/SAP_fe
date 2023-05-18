import { Manpower } from "@domain/models/manpower/manpower";
import { ManpowerRepository } from "@domain/repositories/manpower/manpower-repository";
import { api } from "../_api";

export class ManpowerApiRepository implements ManpowerRepository {
  async get(): Promise<Manpower[]> {
    try {
      const { data } = await api.get(`employee`);
      return data?.data?.map((item) =>
        Manpower.create({
          id: item?.id,
          name: item?.name || "-",
          employee_no: item?.employee_no || "-",
          section_id: item?.section?.id || "-",
          section_name: item?.section?.name || "-",
          position_id: item?.position?.id || "-",
          position_name: item?.position?.name || "-",
          departemen_name: item?.section?.departemen?.name || "-",
          avatar: item?.avatar || "",
        })
      );
    } catch (error) {
      return [];
    }
  }
  async getDataById(id: string): Promise<Manpower> {
    try {
      const { data } = await api.get(`employee/${id}`);
      return Manpower.create({
        name: data.data?.name || "-",
        employee_no: data.data?.employee_no || "-",
        section_id: data.data?.section?.id || "-",
        section_name: data.data?.section?.name || "-",
        position_id: data.data?.position?.id || "-",
        position_name: data.data?.position?.name || "-",
        avatar: data.data?.avatar || "",
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  async create(manpower: Manpower): Promise<void> {
    try {
      const formData = new FormData();
      formData.append("avatar", manpower.avatar[0]);
      formData.append("employee_no", manpower.employee_no);
      formData.append("name", manpower.name);
      formData.append("section_id", manpower.section_id);
      formData.append("position_id", manpower.position_id);
      const { data } = await api.post("employee", formData);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async edit(manpower): Promise<void> {
    try {
      const formData = new FormData();
      formData.append("employee_no", manpower.employee_no);
      formData.append("name", manpower.name);
      formData.append("section_id", manpower.section_id);
      formData.append("position_id", manpower.position_id);
      if (typeof manpower.avatar == "string" || manpower.avatar.length == 0) {
        formData.append("avatar", "");
      } else {
        formData.append("avatar", manpower.avatar[0]);
      }
      const { data } = await api.put(`employee/${manpower.id}`, formData);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async delete(id: string): Promise<void> {
    try {
      const { data } = await api.delete(`employee/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
