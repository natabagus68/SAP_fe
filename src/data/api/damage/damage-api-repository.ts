import { Damage } from "@domain/models/damage/damage";
import { DamageRepository } from "@domain/repositories/damage/damage-repository";
import { api } from "../_api";

export class DamageApiRepository implements DamageRepository {
  async get(): Promise<Damage[]> {
    const { data } = await api.get(`damage-type`);
    return data?.data?.map((item) =>
      Damage.create({
        id: item?.id,
        type: item?.type || "-",
      })
    );
  }

  async getDataById(id: string): Promise<Damage> {
    try {
      const { data } = await api.get(`damage-type/${id}`);
      return Damage.create({
        id: data.data?.id,
        type: data.data?.type || "-",
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async edit(damage: Damage): Promise<void> {
    try {
      const { data } = await api.put(`damage-type/${damage.id}`, {
        id: damage.id,
        type: damage.type,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(damage: Damage): Promise<void> {
    try {
      const { data } = await api.post(`damage-type`, {
        id: damage.id,
        type: damage.type,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async delete(id: string): Promise<void> {
    try {
      const { data } = await api.delete(`damage-type/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
