import { SparepartAvailability } from "@domain/models/sparepart/sparepart-availability";

export interface SparepartAvailabilityRepository {
  get(): Promise<SparepartAvailability[]>;
}
