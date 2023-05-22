import { Preventive } from "@domain/models/report/preventive";

export interface PreventiveRepository {
  get(date: string, status: string, section_id: string): Promise<Preventive[]>;
}
