import { Calendar } from "@domain/models/schedule/calendar/calendar";
import { CalendarRepository } from "@domain/repositories/schedule/calendar/calendar-repository";
import { api } from "@data/api/_api";

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
  async get(month: number): Promise<Calendar[]> {
    try {
      const { data } = await api.get(`schedules?month=${month}`);
      return data.data?.map((item) =>
        Calendar.create({
          success: true,
          message: "Message success",
        })
      );
      // return Calendar.create({
      // });
    } catch (error) {
      return [];
    }
  }
}
