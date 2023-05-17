import { SparepartPart } from "@domain/models/sparepart/sparepart-part";

export interface SparepartPartRepository {
  get(): Promise<SparepartPart[]>;
  getDataById(id: string): Promise<SparepartPart>;
  create(part: SparepartPart): Promise<void>;
}
