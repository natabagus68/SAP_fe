import { SparepartAvailability } from "@domain/models/sparepart/sparepart-availability";

export interface SparepartAvailabilityRepository {
  get(): Promise<SparepartAvailability[]>;
  create(availability: SparepartAvailability): Promise<void>;
  getDataById(id: string): Promise<SparepartAvailability>;
  edit(availability: SparepartAvailability): Promise<void>;
  delete(id: string): Promise<void>;
}
