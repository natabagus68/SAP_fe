import { Manpower } from "@domain/models/manpower/manpower";

export interface ManpowerRepository {
  get(): Promise<Manpower[]>;
  getDataById(id: string): Promise<Manpower>;
  create(manpower: Manpower): Promise<void>;
}
