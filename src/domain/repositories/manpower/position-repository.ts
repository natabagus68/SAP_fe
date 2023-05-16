import { Position } from "@domain/models/manpower/position";

export interface PositionRepository {
  get(): Promise<Position[]>;
  getDataById(id: string): Promise<Position>;
  create(position: Position): Promise<void>;
  edit(manpower: Position): Promise<void>;
  delete(id: string): Promise<void>;
}
