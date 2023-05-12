import { Damage } from "@domain/models/damage/damage";

export interface DamageRepository {
  get(): Promise<Damage[]>;
}
