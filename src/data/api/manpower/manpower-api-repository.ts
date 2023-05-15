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
          section_name: item?.section?.name || "-",
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
        section_name: data.data?.section?.name || "-",
        position_name: data.data?.position?.name || "-",
        departemen_name: data.data?.section?.departemen?.name || "-",
        avatar: data.data?.avatar || ""
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  async create(manpower: Manpower): Promise<void> {
    try {
      const { data } = await api.post("employee", {
        name: manpower.name,
        employee_no: manpower.employee_no,
        section_id: manpower.section_id,
        position_id: manpower.position_id,
        departemen_id: manpower.departemen_id,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
