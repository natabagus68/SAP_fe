import { DefaultResponse } from "@domain/models/default-response";
import { Departemen } from "@domain/models/location/departemen";

export interface DepartemenRepository {
  getDepartement(): Promise<Departemen[]>;
  getDataWithFilter(
    page?: string | undefined,
    limit?: string | undefined,
    q?: string | undefined
  ): Promise<DefaultResponse>;
  getDataById(id: String): Promise<Departemen>;
  create(departemen: Departemen): Promise<void>;
  edit(departemen: Departemen): Promise<void>;
  delete(id: string): Promise<void>;
}
