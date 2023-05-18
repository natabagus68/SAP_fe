import { Calendar } from "@domain/models/schedule/calendar/calendar";

export interface CalendarRepository {
  create(calendar: Calendar): Promise<Calendar>;
}
