import { Corrective } from "@domain/models/report/corrective";
import { CorrectiveRepository } from "@domain/repositories/report/corrective-repository";
import { api } from "../_api";
import { CorrectiveReport } from "@domain/models/report/corrective-report";

export class CorrectiveApiRepository implements CorrectiveRepository {
  async get(
    date: string,
    status: string,
    section_id: string
  ): Promise<Corrective[]> {
    try {
      const { data } = await api.get(
        `report/corrective?date=${date || ""}&status=${
          status || ""
        }&section_id=${section_id || ""}`
      );
      return data.data?.map((item) =>
        Corrective.create({
          success: true,
          message: "Message success",
          //id: item.id,
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

  async getDataById(id: string): Promise<Corrective> {
    try {
      const { data } = await api.get(`report/corrective/${id}`);
      return Corrective.create({
        machine_no: data.data?.detail?.machine?.no || "-",
        machine_name: data.data?.detail?.machine?.name || "-",
        pic: data.data?.detail?.pic || "-",
        status: data.data?.detail?.status || "-",
        date: data.data?.detail?.date || "-",
        section: data.data?.detail?.section || "-",
        department: data.data?.detail?.department || "-",
        damage_time: data.data?.detail?.damage_time || "-",

        report: data.data?.report.map((item) =>
          CorrectiveReport.create({
            repairing_type: item.repairing_type || "-",
            lifetime_estimate: item.lifetime_estimate || "-",
            damage_type: item.damage_type || "-",
            deskripsi: item.deskripsi || "-",
          })
        ),
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
