import { Parameter } from "@domain/models/mesin/parameter";

export interface ParameterRepository {
  get(): Promise<Parameter[]>;
  getDataById(id: string): Promise<Parameter>;
  create(parameter: Parameter): Promise<void>;
  edit(parameter: Parameter): Promise<void>;
  delete(id: string): Promise<void>;
}
