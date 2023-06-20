import { DefaultResponse } from "@domain/models/default-response";
import { Machine } from "@domain/models/machine/machine";

export interface MachineRepository {
  getDataMachine(): Promise<Machine[]>;
  getDataByFilter(
    page?: string | undefined,
    limit?: string | undefined
  ): Promise<DefaultResponse>;
  getDataById(id: string): Promise<Machine>;
  create(machine: Machine): Promise<void>;
  edit(machine: Machine): Promise<void>;
  delete(id: string): Promise<void>;
}
