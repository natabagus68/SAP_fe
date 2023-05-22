import { api } from "@data/api/_api";
import { Checklist } from "@domain/models/report/checklist";
import { ChecklistRepository } from "@domain/repositories/report/checklist-repository";

export class ChecklistApiRepository implements ChecklistRepository {
  async get(
    date: string,
    status: string,
    section_id: string
  ): Promise<Checklist[]> {
    try {
      const { data } = await api.get(
        `report/checklist?date=${date || ""}&status=${
          status || ""
        }&section_id=${section_id || ""}`
      );
      return data.data?.map((item) =>
        Checklist.create({
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
