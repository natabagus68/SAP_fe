import { UnitOfMeasure } from "@domain/models/mesin/uom";

export interface UomRepository {
  get(): Promise<UnitOfMeasure[]>;
  getDataById(id: string): Promise<UnitOfMeasure>;
  create(uom: UnitOfMeasure): Promise<void>;
  edit(uom: UnitOfMeasure): Promise<void>;
  delete(id: string): Promise<void>;
}
