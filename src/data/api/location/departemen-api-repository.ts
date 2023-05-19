import { DepartemenRepository } from "@domain/repositories/location/departemen-repository";
import { api } from "../_api";
import { Departemen } from "@domain/models/location/departemen";

export class DepartemenApiRepository implements DepartemenRepository {
  async getDepartement(): Promise<Departemen[]> {
    try {
      const { data } = await api.get(`department`);
      console.log(data);
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

  async getDataById(id: string): Promise<Departemen> {
    try {
      const { data } = await api.get(`department/${id}`);

      return Departemen.create({
        id: data.data?.id,
        name: data.data?.name || "-",
        section: data.data?.Sections || "-",
        //department_id: data.data?.department_id || "-",
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(departemen: Departemen): Promise<void> {
    try {
      const { data } = await api.post(`department`, {
        id: departemen.id,
        name: departemen.name,
        section: departemen.section,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async edit(departemen: Departemen): Promise<void> {
    try {
      const { data } = await api.put(`department/${departemen.id}`, {
        id: departemen.id,
        name: departemen.name,
        section: departemen.section,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const { data } = await api.delete(`department/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
