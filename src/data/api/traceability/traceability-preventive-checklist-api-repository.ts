import { TraceabilityPreventiveChecklist } from "@domain/models/traceability/traceability-preventive-checklist";
import { TraceabilityPreventiveChecklistRepository } from "@domain/repositories/traceability/traceability-preventive-checklist-repository";
import { PreventiveReport } from "@domain/models/report/preventive-report";
import { ChecklistReport } from "@domain/models/report/checklist-report";

import { api } from "../_api";

export default class TraceabilityPreventiveChecklistApiRepository
  implements TraceabilityPreventiveChecklistRepository
{
  async getById(id:string, type: string): Promise<TraceabilityPreventiveChecklist> {
    const response = await api.get(`trace/${type}/${id}`);    
    const { data } = response.data
    return TraceabilityPreventiveChecklist.create({
        machine_name: data?.detail?.machine?.name,
        machine_no: data?.detail?.machine?.no,
        department: data?.detail?.department,
        section: data?.detail?.section,
        pic: data?.detail?.pic,
        date: data?.detail?.date,
        interval: data?.detail?.interval,
        status: data?.detail?.status,
        working_time: data?.detail?.working_time,
        approval_checked_by: data?.detail?.approval?.checked_by,
        approval_approved_by: data?.detail?.approval?.approved_by,
        report: data?.report.map((item) =>
          type === 'preventive' ?
            PreventiveReport.create({
              submesin_name: item?.sub_machine_name,
              parameter: item?.parameter.map((item) =>
                PreventiveReport.create({
                  parameter_name: item?.name,
                  status_report: item?.status || "-",
                })
              ),
            })
          :
            ChecklistReport.create({
              submesin_name: item?.sub_machine_name,
              parameter: item?.parameter.map((item) =>
                ChecklistReport.create({
                  parameter_name: item?.name,
                  deskripsi: item?.description,
                  status_report: item?.status || "-"
                })
              ),
            })
        ),
        total_ng: data?.total?.ng,
        total_ok: data?.total?.ok
    })
  }
}