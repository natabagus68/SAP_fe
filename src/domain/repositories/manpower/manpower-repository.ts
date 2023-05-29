import { DefaultResponse } from "@domain/models/default-response";
import { Manpower } from "@domain/models/manpower/manpower";

export interface ManpowerRepository {
  get(page: number, limit: number, q: string): Promise<DefaultResponse>;
  getDataById(id: string): Promise<Manpower>;
  create(manpower: Manpower): Promise<void>;
  edit(manpower: Manpower): Promise<void>;
  delete(id: string): Promise<void>;
}
