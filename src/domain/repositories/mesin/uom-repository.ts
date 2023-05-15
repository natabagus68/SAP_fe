import { UnitOfMeasure } from "@domain/models/mesin/uom";

export interface UomRepository {
  get(): Promise<UnitOfMeasure[]>;
}
