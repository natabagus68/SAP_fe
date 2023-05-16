import { Departemen } from "@domain/models/location/departemen";

export interface DepartemenRepository {
  getDepartement(): Promise<Departemen[]>;
  getDataById(id: String): Promise<Departemen>;
  delete(id: string): Promise<void>;
}
