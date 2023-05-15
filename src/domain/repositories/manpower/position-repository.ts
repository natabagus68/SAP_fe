import { Position } from "@domain/models/manpower/position";

export interface PositionRepository {
  get(): Promise<Position[]>;
}
