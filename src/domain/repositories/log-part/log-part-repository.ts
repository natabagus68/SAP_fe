import { LogPart } from "@domain/models/log-part/log-part";

export interface LogPartRepository {
  get(): Promise<LogPart[]>;
  getById(id: string): Promise<LogPart>;
}
