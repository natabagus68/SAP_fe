import { DepartemenRepository } from "@domain/repositories/location/departemen-repository";
import { api } from "../_api";
import { Departemen } from "@domain/models/location/departemen";

export class DepartemenApiRepository implements DepartemenRepository {
  async getDepartement(): Promise<Departemen[]> {
    const { data } = await api.get(`department`);
    return data?.data?.map((item) =>
      Departemen.create({
        id: item?.id,
        name: item?.name || "-",
      })
    );
  }
}
