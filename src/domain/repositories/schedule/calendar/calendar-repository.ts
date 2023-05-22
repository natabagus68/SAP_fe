import { Calendar } from "@domain/models/schedule/calendar/calendar";
import { Remark } from "@domain/models/schedule/calendar/remark";

export interface CalendarRepository {
  create(calendar: Calendar): Promise<Calendar>;
  get(day: number, month: number): Promise<Calendar[]>;
  getDataById(id: string): Promise<Calendar>;
  delete(id: string): Promise<Calendar>;
  remark(remark: Remark): Promise<Remark>;
  deleteRemark(id: String): Promise<Remark>;
}
