import { Monitoring } from "@domain/models/schedule/monitoring/monitoring";
import { DefaultResponse } from "@domain/models/default-response";

export interface MonitoringRepository {
  get(page: number, limit: number, q: string): Promise<DefaultResponse>;
}
