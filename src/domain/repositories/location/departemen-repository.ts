import { Departemen } from "@domain/models/location/departemen";

export interface DepartemenRepository {
  getDepartement(): Promise<Departemen[]>;
  getDataById(id: String): Promise<Departemen>;
  create(departemen: Departemen): Promise<void>;
  edit(departemen: Departemen): Promise<void>;
  delete(id: string): Promise<void>;
}
