import { Damage } from "@domain/models/damage/damage";
import { DamageRepository } from "@domain/repositories/damage/damage-repository";
import { api } from "../_api";

export default class DamageApiRepository implements DamageRepository {
  async get(): Promise<Damage[]> {
    const { data } = await api.get(`damage-type`);
    return data?.data?.map((item) =>
      Damage.create({
        id: item?.id,
        type: item?.type || "-",
      })
    );
  }
}
