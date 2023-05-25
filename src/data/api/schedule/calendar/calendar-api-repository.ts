import { Calendar } from "@domain/models/schedule/calendar/calendar";
import { CalendarRepository } from "@domain/repositories/schedule/calendar/calendar-repository";
import { api } from "@data/api/_api";
import { Schedules } from "@domain/models/schedule/calendar/schedules";
import { Maintenance } from "@domain/models/schedule/calendar/maintenance";
import { Remark } from "@domain/models/schedule/calendar/remark";
import { MetaPagination } from "@domain/models/meta-pagination";

export class CalendarApiRepository implements CalendarRepository {
  async create(calendar: Calendar): Promise<Calendar> {
    try {
      const { data } = await api.post(`schedules`, calendar._props);
      return Calendar.create({
        success: true,
        message: "Message success",
      });
    } catch (error) {
      return Calendar.create({
        success: false,
        message: error?.response?.data?.message,
      });
    }
  }
  async get(
    day: number,
    month: number,
    page: number,
    limit: number
  ): Promise<Calendar[]> {
    try {
      const { data } = await api.get(
        `schedules?month=${month}&day=${!!day ? day : ""}&page=${
          !!page ? page : ""
        }&limit=${!!limit ? limit : ""}`
      );
      return data.data?.map((item) =>
        Calendar.create({
          success: true,
          message: "Message success",
          meta: MetaPagination.create({
            page: !!day ? data.meta?.page : item.meta?.page || null,
            totalPages: !!day
              ? data.meta?.totalPages
              : item.meta?.totalPages || null,
            prevPage: !!day ? data.meta?.prevPage : item.meta?.prevPage || null,
            nextPage: !!day ? data.meta?.nextPage : item.meta?.nextPage || null,
          }),
          schedules: Schedules.create({
            date: item.date,
            maintenance: item.maintenance?.map((item) =>
              Maintenance.create({
                id: item.id,
                type: item.type,
                machine: item.machine,
                section: item.section,
                content: item.content,
              })
            ),
            remark: item.remark?.map((item) =>
              Remark.create({
                id: item.id,
                remark: item.content,
              })
            ),
          }),
        })
      );
      return data.data?.map((item) =>
        Calendar.create({
          success: true,
          message: "Message success",
          meta: MetaPagination.create({
            page: item.meta.page || 1,
            totalPages: item.meta.page || 1,
            prevPage: item.meta.page || null,
            nextPage: item.meta.page || null,
          }),
          schedules: Schedules.create({
            date: item.date,
            maintenance: item.maintenance?.map((item) =>
              Maintenance.create({
                id: item.id,
                type: item.type,
                machine: item.machine,
                section: item.section,
              })
            ),
            remark: item.remark?.map((item) =>
              Remark.create({
                id: item.id,
                remark: item.content,
              })
            ),
          }),
        })
      );
    } catch (error) {
      return [];
    }
  }
  async getDataById(id: string): Promise<Calendar> {
    try {
      const { data } = await api.post(`schedules/${id}`);
      return Calendar.create({
        success: true,
        message: "Message success",
      });
    } catch (error) {
      return Calendar.create({
        success: false,
        message: error?.response?.data?.message,
      });
    }
  }
  async delete(id: string): Promise<Calendar> {
    try {
      const { data } = await api.delete(`schedules/${id}`);
      return Calendar.create({
        success: true,
        message: "Delete success",
      });
    } catch (error) {
      return Calendar.create({
        success: false,
        message: error?.response?.data?.message,
      });
    }
  }
  async remark(remark: Remark): Promise<Remark> {
    try {
      const { data } = await api.post(`schedules/remark`, remark._props);
      return Remark.create({
        success: true,
        message: "Message success",
      });
    } catch (error) {
      return Remark.create({
        success: false,
        message: error?.response?.data?.message,
      });
    }
  }
  async deleteRemark(id: string): Promise<Remark> {
    try {
      const { data } = await api.delete(`schedules/remark/${id}`);
      return Remark.create({
        success: true,
        message: "Delete success",
      });
    } catch (error) {
      return Remark.create({
        success: false,
        message: error?.response?.data?.message,
      });
    }
  }
}
