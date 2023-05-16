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

  async edit(damage: Damage): Promise<void> {
    try {
      const formData = new FormData();
      formData.append("id", damage.id);
      formData.append("name", damage.name);
      const { data } = await api.put(`damage-type/${damage.id}`, formData);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(damage: Damage): Promise<void> {
    try {
      const formData = new FormData();
      formData.append("id", damage.id);
      formData.append("name", damage.name);
      const { data } = await api.post(`damage-type`, formData);
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
