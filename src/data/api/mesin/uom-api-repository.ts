import { UnitOfMeasure } from "@domain/models/mesin/uom";
import { api } from "../_api";

export class UomApiRepository implements UomApiRepository {
  async get(): Promise<UnitOfMeasure[]> {
    const { data } = await api.get(`unit-of-measurement`);
    return data?.data?.map((item) =>
      UnitOfMeasure.create({
        id: item?.id,
        name: item?.name || "-",
      })
    );
  }
}
