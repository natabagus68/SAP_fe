import { SubMesin } from "@domain/models/mesin/sub-mesin";

export interface SubMesinRepository {
  get(): Promise<SubMesin[]>;
}
