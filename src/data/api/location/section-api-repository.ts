import { api } from "../_api";
import { Section } from "@domain/models/location/section";
import { SectionRepository } from "@domain/repositories/location/section-repository";

export class SectionApiRepository implements SectionRepository {
  async getSection(): Promise<Section[]> {
    const { data } = await api.get(`section`);
    return data?.data?.map((item) =>
      Section.create({
        id: item?.id,
        name: item?.name || "-",
      })
    );
  }
  async getDataById(id: string): Promise<Section> {
    try {
      const { data } = await api.get(`section/${id}`);
      return Section.create({
        id: data.data?.id,
        name: data.data?.name || "-",
        department_id: data.data?.department.id || "-",
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async edit(section: Section): Promise<void> {
    try {
      const { data } = await api.put(`section/${section.id}`, {
        id: section.id,
        name: section.name,
        department_id: section.department_id,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(section: Section): Promise<void> {
    try {
      const { data } = await api.post(`section`, {
        id: section.id,
        name: section.name,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const { data } = await api.delete(`section/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
