import { SubMesin } from "@domain/models/mesin/sub-mesin";

export interface SubMesinRepository {
  get(): Promise<SubMesin[]>;
  getDataById(id: string): Promise<SubMesin>;
  create(submesin: SubMesin): Promise<void>;
  edit(submesin: SubMesin): Promise<void>;
  delete(id: string): Promise<void>;
}
