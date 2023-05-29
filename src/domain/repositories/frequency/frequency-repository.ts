import { DefaultResponse } from "@domain/models/default-response";
import { Frequency } from "@domain/models/frequency/frequency";

export interface FrequencyRepository {
  get(): Promise<Frequency[]>;
  getDataByPage(
    page?: string | undefined,
    limit?: string | undefined
  ): Promise<DefaultResponse>;
  getDataById(id: string): Promise<Frequency>;
  edit(frequency: Frequency): Promise<void>;
  create(frequency: Frequency): Promise<void>;
  delete(id: string): Promise<void>;
}
