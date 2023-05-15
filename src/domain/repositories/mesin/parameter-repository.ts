import { Parameter } from "@domain/models/mesin/parameter";

export interface ParameterRepository {
  get(): Promise<Parameter[]>;
}
