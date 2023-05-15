import { Posisi } from "@domain/models/manpower/posisi";

export interface PosisiRepository {
  get(): Promise<Posisi[]>;
}
