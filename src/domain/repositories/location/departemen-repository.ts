import { Departemen } from "@domain/models/location/departemen";

export interface DepartemenRepository {
  getDepartement(): Promise<Departemen[]>;
}
