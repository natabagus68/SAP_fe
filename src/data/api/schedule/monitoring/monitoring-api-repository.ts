import { Monitoring } from "@domain/models/schedule/monitoring/monitoring";
import { MonitoringRepository } from "@domain/repositories/schedule/monitoring/monitoring-repository";
import { api } from "@data/api/_api";
import { MetaPagination } from "@domain/models/meta-pagination";
import { DefaultResponse } from "@domain/models/default-response";

export class MonitoringApiRepository implements MonitoringRepository {
  async get(page: number, limit: number, q: string): Promise<DefaultResponse> {
    try {
      const { data } = await api.get(`monitoring?page=${page || 1}&limit=${limit || 10}&q=${q || ""}`);
      return DefaultResponse.create({
        success: true,
        message: data.message,
        pagination: MetaPagination.create({
          page: data?.pagination?.page,
          limit: data?.pagination?.limit,
          totalRows: data?.pagination?.totalRows,
          totalPages: data?.pagination?.totalPages,
          prevPage: data?.pagination?.prevPage,
          nextPage: data?.pagination?.nextPage,
        }),
        data: data.data?.map((item) =>
          Monitoring.create({
            success: true,
            message: "Message success",
            date: item?.expired_at,
            range: item?.range,
            machine_name: item?.machine_name,
            section_name: item?.section,
            type: item.type,
          })
        )
      })
      
    } catch (error) {
      return DefaultResponse.create({
        success: false,
        message: "error",
        data: [],
      });
    }
  }
}
