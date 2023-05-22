import { Monitoring } from "@domain/models/schedule/monitoring/monitoring";

export interface MonitoringRepository {
  get(): Promise<Monitoring[]>;
}
