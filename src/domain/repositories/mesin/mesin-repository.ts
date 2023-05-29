import { DefaultResponse } from "@domain/models/default-response";
import { Mesin } from "@domain/models/mesin/mesin";

export interface MesinRepository {
  get(): Promise<Mesin[]>;
  getDataWithFilter(
    page?: string | undefined,
    limit?: string | undefined,
    q?: string | undefined
  ): Promise<DefaultResponse>;
  getDataById(id: string): Promise<Mesin>;
  create(mesin: Mesin): Promise<void>;
  edit(mesin: Mesin): Promise<void>;
  delete(id: string): Promise<void>;
}
