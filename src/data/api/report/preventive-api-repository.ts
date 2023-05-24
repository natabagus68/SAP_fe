import { api } from "@data/api/_api";
import { Preventive } from "@domain/models/report/preventive";
import { PreventiveReport } from "@domain/models/report/preventive-report";
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

  async getDataById(id: string): Promise<Preventive> {
    try {
      const { data } = await api.get(`report/preventive/${id}`);
      console.log(data);

      return Preventive.create({
        machine_no: data.data?.detail?.machine?.no || "-",
        machine_name: data.data?.detail?.machine?.name || "-",
        date: data.data?.detail?.date || "-",
        pic: data.data?.detail?.pic || "-",
        status: data.data?.detail?.status || "-",
        section: data.data?.detail?.section || "-",
        department: data.data?.detail?.department || "-",
        interval: data.data?.detail?.interval || "-",
        working_time: data.data?.detail?.working_time || "-",
        approvedBy: data.data?.detail?.approval?.approved_by || "-",
        checkedBy: data.data?.detail?.approval?.checked_by || "-",

        report: data.data?.report.map((item) =>
          PreventiveReport.create({
            submesin_name: item?.sub_machine_name || "-",
            parameter: item?.parameter.map((item) =>
              PreventiveReport.create({
                parameter_name: item?.name,
                status_report: item?.status,
              })
            ),
          })
        ),
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
