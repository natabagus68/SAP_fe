import { DefaultResponse } from "@domain/models/default-response";
import { SparepartAvailability } from "@domain/models/sparepart/sparepart-availability";

export interface SparepartAvailabilityRepository {
  get(): Promise<SparepartAvailability[]>;
  getDataWithFilter(
    page?: string | undefined,
    limit?: string | undefined,
    q?: string | undefined
  ): Promise<DefaultResponse>;
  create(availability: SparepartAvailability): Promise<void>;
  getDataById(id: string): Promise<SparepartAvailability>;
  edit(availability: SparepartAvailability): Promise<void>;
  delete(id: string): Promise<void>;
}
