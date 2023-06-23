import { DefaultResponse } from "@domain/models/default-response";
import { Monitoring } from "@domain/models/monitoring/monitoring";

export interface MonitoringRepository {
  getDataMonitoring(): Promise<Monitoring[]>;
  getDataByFilter(
    page?: string | undefined,
    limit?: string | undefined,
    order?: string | undefined
  ): Promise<DefaultResponse>;
}
