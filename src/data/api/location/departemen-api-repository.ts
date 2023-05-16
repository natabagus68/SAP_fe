import { DepartemenRepository } from "@domain/repositories/location/departemen-repository";
import { api } from "../_api";
import { Departemen } from "@domain/models/location/departemen";

export class DepartemenApiRepository implements DepartemenRepository {
  async getDepartement(): Promise<Departemen[]> {
    try {
      const { data } = await api.get(`department`);
      return data?.data?.map((item) =>
        Departemen.create({
          id: item?.id,
          name: item?.name || "-",
          section: item?.Sections || "-",
        })
      );
    } catch (error) {
      return [];
    }
  }

  async getDataDepartemenById(id: string): Promise<Departemen> {
    try {
      const { data } = await api.get(`department/${id}`);
      console.log(data);
      return Departemen.create({
        id: data.data?.id,
        name: data.data?.name || "-",
        section: data.data?.Sections.name || "-",
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}