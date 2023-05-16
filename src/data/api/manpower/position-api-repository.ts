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
  async getDataById(id: string): Promise<Position> {
    try {
      const { data } = await api.get(`position/${id}`);
      return Position.create({
        name: data.data?.name || "-",
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  async create(position: Position): Promise<void> {
    try {
      const { data } = await api.post("position", {
        name: position.name,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async edit(position: Position): Promise<void> {
    try {
      const { data } = await api.put(`position/${position.id}`, {
        name: position.name,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async delete(id: string): Promise<void> {
    try {
      const { data } = await api.delete(`position/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
