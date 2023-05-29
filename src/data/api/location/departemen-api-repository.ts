import { DepartemenRepository } from "@domain/repositories/location/departemen-repository";
import { api } from "../_api";
import { Departemen } from "@domain/models/location/departemen";
import { DefaultResponse } from "@domain/models/default-response";
import { MetaPagination } from "@domain/models/meta-pagination";

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

  async getDataWithFilter(
    page?: string | undefined,
    limit?: string | undefined,
    q?: string | undefined
  ): Promise<DefaultResponse> {
    try {
      const { data } = await api.get(
        `department?page=${page || ""}&limit=${limit || ""}&q=${q || ""}`
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
          Departemen.create({
            id: item?.id,
            name: item?.name || "-",
            section: item?.Sections || "-",
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

  async getDataById(id: string): Promise<Departemen> {
    try {
      const { data } = await api.get(`department/${id}`);
      return Departemen.create({
        id: data.data?.id,
        name: data.data?.name || "-",
        section: data.data?.Sections || "-",
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(departemen: Departemen): Promise<void> {
    try {
      const { data } = await api.post(`department`, {
        name: departemen.name,
        sections: departemen.section,
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
        section_id: departemen.section_id,
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
