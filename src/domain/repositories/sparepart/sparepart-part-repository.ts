import { DefaultResponse } from "@domain/models/default-response";
import { SparepartPart } from "@domain/models/sparepart/sparepart-part";

export interface SparepartPartRepository {
  get(): Promise<SparepartPart[]>;
  getDataWithFilter(
    page?: string | undefined,
    limit?: string | undefined,
    q?: string | undefined
  ): Promise<DefaultResponse>;
  getDataById(id: string): Promise<SparepartPart>;
  create(part: SparepartPart): Promise<void>;
  edit(part: SparepartPart): Promise<void>;
  delete(id: string): Promise<void>;
}
