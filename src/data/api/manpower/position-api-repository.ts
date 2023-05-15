import { Position } from "@domain/models/manpower/position";
import { PositionRepository } from "@domain/repositories/manpower/position-repository";
import { api } from "../_api";

export class PositionApiRepository implements PositionRepository {
  async get(): Promise<Position[]> {
    try {
      const { data } = await api.get(`position`);
      return data?.data?.map((item) =>
        Position.create({
          id: item?.id,
          name: item?.name || "-",
          level: item?.level || 0,
        })
      );
    } catch (error) {
      return [];
    }
  }
}
