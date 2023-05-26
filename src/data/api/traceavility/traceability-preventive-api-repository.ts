import { TraceabilityPreventive } from "@domain/models/traceability/traceability-preventive";
import { TraceabilityPreventiveRepository } from "@domain/repositories/traceability/traceability-preventive-repository";
import { PreventiveReport } from "@domain/models/report/preventive-report";

import { api } from "../_api";

export default class TraceabilityPreventiveApiRepository
  implements TraceabilityPreventiveRepository
{
  async getById(id:string): Promise<TraceabilityPreventive> {
    const response = await api.get(`trace/preventive/${id}`);    
    const { detail, report } = response.data.data
    return TraceabilityPreventive.create({
        machine_name: detail?.machine?.name,
        machine_no: detail?.machine?.no,
        department: detail?.department,
        section: detail?.section,
        pic: detail?.pic,
        date: detail?.date,
        interval: detail?.interval,
        status: detail?.status,
        working_time: detail?.working_time,
        approval_checked_by: detail?.approval?.checked_by,
        approval_approved_by: detail?.approval?.approved_by,
        report: report.map((item) =>
          PreventiveReport.create({
            submesin_name: item?.sub_machine_name,
            parameter: item?.parameter.map((item) =>
              PreventiveReport.create({
                parameter_name: item?.name,
                status_report: item?.status,
              })
            ),
          })
        ),
    })
  }
}