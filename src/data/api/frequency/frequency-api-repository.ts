import { Frequency } from "@domain/models/frequency/frequency";
import { FrequencyRepository } from "@domain/repositories/frequency/frequency-repository";
import { api } from "../_api";

export class FrequencyApiRepository implements FrequencyRepository {
  async get(): Promise<Frequency[]> {
    const { data } = await api.get(`frequency-type`);
    return data?.data?.map((item) =>
      Frequency.create({
        id: item?.id,
        type: item?.type || "-",
      })
    );
  }

  async getDataById(id: string): Promise<Frequency> {
    try {
      const { data } = await api.get(`frequency-type/${id}`);
      return Frequency.create({
        id: data.data?.id,
        type: data.data?.type || "-",
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async edit(frequency: Frequency): Promise<void> {
    try {
      const { data } = await api.put(`frequency-type/${frequency.id}`, {
        id: frequency.id,
        type: frequency.type,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(frequency: Frequency): Promise<void> {
    try {
      const { data } = await api.post(`frequency-type`, {
        id: frequency.id,
        type: frequency.type,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const { data } = await api.delete(`frequency-type/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
