import { Manpower } from "@domain/models/manpower/manpower";

export interface ManpowerRepository {
  get(): Promise<Manpower[]>;
}
