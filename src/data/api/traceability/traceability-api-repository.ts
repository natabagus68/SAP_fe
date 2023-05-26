import { Traceability } from "@domain/models/traceability/traceability";
import { TraceabilityRepository } from "@domain/repositories/traceability/traceability-repository";
import { api } from "../_api";

export default class TraceabilityApiRepository
  implements TraceabilityRepository
{
  async get(): Promise<Traceability[]> {
    const { data } = await api.get(`trace`);
    return data?.data?.map((item) =>
      Traceability.create({
        id: item.id,
        department: item.department,
        type: item.type,
        section: item.section,
        machine_no: item.machine_no,
        pic: item.pic
      })
    );
  }
}