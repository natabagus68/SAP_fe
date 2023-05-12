import { Manpower } from "@domain/models/manpower/manpower";
import { ManpowerRepository } from "@domain/repositories/manpower/manpower-repository";
import { api } from "../_api";

export class ManpowerApiRepository implements ManpowerRepository {
  async get(): Promise<Manpower[]> {
    const { data } = await api.get(`employee`);
    return data?.data?.map((item) =>
      Manpower.create({
        id: item?.id,
        name: item?.name || "-",
        employee_no: item?.employee_no || "-",
        section_name: item?.section?.name || "-",
        position_name: item?.position?.name || "-",
        avatar: item?.avatar || "",
        departemen: item?.section?.departemen?.name || "-",
      })
    );
  }
}
