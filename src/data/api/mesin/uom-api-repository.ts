import { UnitOfMeasure } from "@domain/models/mesin/uom";
import { api } from "../_api";

export class UomApiRepository implements UomApiRepository {
  async get(): Promise<UnitOfMeasure[]> {
    const { data } = await api.get(`unit-of-measurement`);
    return data?.data?.map((item) =>
      UnitOfMeasure.create({
        id: item?.id,
        name: item?.name || "-",
      })
    );
  }

  async getDataById(id: string): Promise<UnitOfMeasure> {
    try {
      const { data } = await api.get(`unit-of-measurement/${id}`);
      return UnitOfMeasure.create({
        id: data.data?.id,
        name: data.data?.name || "-",
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(uom: UnitOfMeasure): Promise<void> {
    try {
      const { data } = await api.post("unit-of-measurement", {
        name: uom.name,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async edit(uom: UnitOfMeasure): Promise<void> {
    try {
      const { data } = await api.put(`unit-of-measurement/${uom.id}`, {
        name: uom.name,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const { data } = await api.delete(`unit-of-measurement/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
