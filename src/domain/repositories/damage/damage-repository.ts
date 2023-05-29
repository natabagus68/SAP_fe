import { DefaultResponse } from "@domain/models/default-response";
import { Damage } from "@domain/models/damage/damage";

export interface DamageRepository {
  get(): Promise<Damage[]>;
  getDataByPage(
    page?: string | undefined,
    limit?: string | undefined
  ): Promise<DefaultResponse>;
  getDataById(id: string): Promise<Damage>;
  edit(damage: Damage): Promise<void>;
  create(damage: Damage): Promise<void>;
  delete(id: string): Promise<void>;
}
