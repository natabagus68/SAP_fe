import { DefaultResponse } from "@domain/models/default-response";
import { Position } from "@domain/models/manpower/position";

export interface PositionRepository {
  get(): Promise<Position[]>;
  getWithPagination(
    page?: string | undefined,
    limit?: string | undefined,
    q?: string | undefined
  ): Promise<DefaultResponse>;
  getDataById(id: string): Promise<Position>;
  create(position: Position): Promise<void>;
  edit(manpower: Position): Promise<void>;
  delete(id: string): Promise<void>;
}
