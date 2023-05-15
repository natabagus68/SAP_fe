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
}
