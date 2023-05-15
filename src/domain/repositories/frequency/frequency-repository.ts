import { Frequency } from "@domain/models/frequency/frequency";

export interface FrequencyRepository {
  get(): Promise<Frequency[]>;
}
