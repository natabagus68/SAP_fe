import { Indikator } from "@domain/models/mesin/indikator";
import { IndikatorRepository } from "@domain/repositories/mesin/indikator-repository";
import { api } from "../_api";

export class IndikatorApiRepository implements IndikatorRepository {
  async get(): Promise<Indikator[]> {
    const { data } = await api.get(`machine-indicator`);

    return data?.data?.map((item) =>
      Indikator.create({
        id: item?.id,
        name: item?.name || "-",
      })
    );
  }

  async getDataById(id: string): Promise<Indikator> {
    try {
      const { data } = await api.get(`machine-indicator/${id}`);

      return Indikator.create({
        id: data.data?.id,
        name: data.data?.name || "-",
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(indikator: Indikator): Promise<void> {
    try {
      const { data } = await api.post("machine-indicator", {
        name: indikator.name,
      });

      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async edit(indikator: Indikator): Promise<void> {
    try {
      const { data } = await api.put(`machine-indicator/${indikator.id}`, {
        name: indikator.name,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const { data } = await api.delete(`machine-indicator/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
