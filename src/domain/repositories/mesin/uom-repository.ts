import { DefaultResponse } from "@domain/models/default-response";
import { UnitOfMeasure } from "@domain/models/mesin/uom";

export interface UomRepository {
  get(): Promise<UnitOfMeasure[]>;
  getDataWithFilter(
    page?: string | undefined,
    limit?: string | undefined,
    q?: string | undefined
  ): Promise<DefaultResponse>;
  getDataById(id: string): Promise<UnitOfMeasure>;
  create(uom: UnitOfMeasure): Promise<void>;
  edit(uom: UnitOfMeasure): Promise<void>;
  delete(id: string): Promise<void>;
}
