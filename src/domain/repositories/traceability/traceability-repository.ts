import { Traceability } from "@domain/models/traceability/traceability";

export interface TraceabilityRepository {
  get(): Promise<Traceability[]>;
}
