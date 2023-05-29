import { DefaultResponse } from "@domain/models/default-response";
import { Parameter } from "@domain/models/mesin/parameter";

export interface ParameterRepository {
  get(): Promise<Parameter[]>;
  getDataWithFilter(
    page?: string | undefined,
    limit?: string | undefined,
    q?: string | undefined
  ): Promise<DefaultResponse>;
  getDataById(id: string): Promise<Parameter>;
  create(parameter: Parameter): Promise<void>;
  edit(parameter: Parameter): Promise<void>;
  delete(id: string): Promise<void>;
}
