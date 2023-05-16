import { Damage } from "@domain/models/damage/damage";

export interface DamageRepository {
  get(): Promise<Damage[]>;
  edit(damage: Damage): Promise<void>;
  create(damage: Damage): Promise<void>;
  delete(id: string): Promise<void>;
}
