import { Checklist } from "@domain/models/report/checklist";

export interface ChecklistRepository {
  get(date: string, status: string, section_id: string): Promise<Checklist[]>;
  getDataById(id: string): Promise<Checklist>;
}
