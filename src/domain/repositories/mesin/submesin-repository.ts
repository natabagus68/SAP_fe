import { DefaultResponse } from "@domain/models/default-response";
import { SubMesin } from "@domain/models/mesin/sub-mesin";

export interface SubMesinRepository {
  get(): Promise<SubMesin[]>;
  getDataWithFilter(
    page?: string | undefined,
    limit?: string | undefined,
    q?: string | undefined
  ): Promise<DefaultResponse>;
  getDataById(id: string): Promise<SubMesin>;
  create(submesin: SubMesin): Promise<void>;
  edit(submesin: SubMesin): Promise<void>;
  delete(id: string): Promise<void>;
}
