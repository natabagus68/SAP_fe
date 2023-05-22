import { Monitoring } from "@domain/models/schedule/monitoring/monitoring";
import { MonitoringRepository } from "@domain/repositories/schedule/monitoring/monitoring-repository";
import { api } from "@data/api/_api";

export class MonitoringApiRepository implements MonitoringRepository {
  async get(): Promise<Monitoring[]> {
    try {
      const { data } = await api.get(`monitoring`);
      return data.data?.map((item) =>
        Monitoring.create({
          success: true,
          message: "Message success",
          date: item?.expired_at,
          range: item?.range,
          machine_name: item?.machine_name,
          section_name: item?.section,
          type: item.type,
        })
      );
    } catch (error) {
      return [];
    }
  }
}
