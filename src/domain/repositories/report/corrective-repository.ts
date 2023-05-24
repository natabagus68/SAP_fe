import { Corrective } from "@domain/models/report/corrective";

export interface CorrectiveRepository {
  get(date: string, status: string, section_id: string): Promise<Corrective[]>;
  getDataById(id: string): Promise<Corrective>;
}
