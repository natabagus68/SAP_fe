import { SparepartPart } from "@domain/models/sparepart/sparepart-part";

export interface SparepartPartRepository {
  get(): Promise<SparepartPart[]>;
}
