import { DefaultResponse } from "@domain/models/default-response";
import { api } from "../_api";
import { Section } from "@domain/models/location/section";
import { SectionRepository } from "@domain/repositories/location/section-repository";
import { MetaPagination } from "@domain/models/meta-pagination";

export class SectionApiRepository implements SectionRepository {
  async getSection(): Promise<Section[]> {
    const { data } = await api.get(`section`);
    return data?.data?.map((item) =>
      Section.create({
        id: item?.id,
        name: item?.name || "-",
        department_id: item?.department?.id || "-",
      })
    );
  }

  async getDataWithFilter(
    page?: string | undefined,
    limit?: string | undefined,
    q?: string | undefined
  ): Promise<DefaultResponse> {
    try {
      const { data } = await api.get(
        `section?page=${page || ""}&limit=${limit || ""}&q=${q || ""}`
      );
      return DefaultResponse.create({
        success: true,
        message: data.message,
        pagination: MetaPagination.create({
          page: data?.pagination?.page,
          limit: data?.pagination?.limit,
          totalRows: data?.pagination?.totalRows,
          totalPages: data?.pagination?.totalPages,
          prevPage: data?.pagination?.prevPage,
          nextPage: data?.pagination?.nextPage,
        }),
        data: data?.data?.map((item) =>
          Section.create({
            id: item?.id,
            name: item?.name || "-",
            department_id: item?.department?.id || "-",
          })
        ),
      });
    } catch (error) {
      return DefaultResponse.create({
        success: false,
        message: "error",
        data: [],
      });
    }
  }

  async getSectionWithoutDepartment(): Promise<Section[]> {
    const { data } = await api.get(`section/without-department`);
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
