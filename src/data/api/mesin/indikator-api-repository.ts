import { Indikator } from "@domain/models/mesin/indikator";
import { IndikatorRepository } from "@domain/repositories/mesin/indikator-repository";
import { api } from "../_api";

export class IndikatorApiRepository implements IndikatorRepository {
  async get(): Promise<Indikator[]> {
    const { data } = await api.get(`machine-indicator`);
    return data?.data?.map((item) =>
      Indikator.create({
        id: item?.id,
        name: item?.name || "-",
      })
    );
  }
}
