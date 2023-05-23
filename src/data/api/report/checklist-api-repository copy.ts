import { api } from "@data/api/_api";
import { Preventive } from "@domain/models/report/preventive";
import { PreventiveRepository } from "@domain/repositories/report/preventive-repository";

export class PreventiveApiRepository implements PreventiveRepository {
  async get(
    date: string,
    status: string,
    section_id: string
  ): Promise<Preventive[]> {
    try {
      const { data } = await api.get(
        `report/Preventive?date=${date || ""}&status=${
          status || ""
        }&section_id=${section_id || ""}`
      );
      return data.data?.map((item) =>
        Preventive.create({
          success: true,
          message: "Message success",
          id: item.id,
          date: item.date,
          machine_no: item.machine_no,
          pic: item.pic,
          status: item.status,
        })
      );
    } catch (error) {
      return [];
    }
  }
}
