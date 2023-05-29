import { api } from "@data/api/_api";
import { Checklist } from "@domain/models/report/checklist";
import { ChecklistReport } from "@domain/models/report/checklist-report";
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

  async getDataById(id: string): Promise<Checklist> {
    try {
      const { data } = await api.get(`report/checklist/${id}`);

      return Checklist.create({
        //detail report
        machine_no: data.data?.detail?.machine?.no || "-",
        machine_name: data.data?.detail?.machine?.name || "-",
        pic: data.data?.detail?.pic || "-",
        status: data.data?.detail?.status || "-",
        date: data.data?.detail?.date || "-",
        working_time: data.data?.detail?.working_time || "-",
        department: data.data?.detail?.department || "-",
        approveBy: data.data?.detail?.approval?.approved_by || "-",
        checkedBy: data.data?.detail?.approval?.checked_by || "-",
        section: data.data?.detail?.section || "-",

        report: data.data?.report.map((item) =>
          ChecklistReport.create({
            submesin_name: item?.sub_machine_name || "-",
            parameter: item?.parameter.map((item) =>
              ChecklistReport.create({
                parameter_name: item?.name,
                indikator: item?.indicator,
                status_report: item?.status,
                deskripsi: item?.description,
              })
            ),
          })
        ),
        ng: data.data?.total?.ng || "-",
        ok: data.data?.total?.ok || "-",
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
