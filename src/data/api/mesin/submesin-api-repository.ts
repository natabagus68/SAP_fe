import { SubMesin } from "@domain/models/mesin/sub-mesin";
import { SubMesinRepository } from "@domain/repositories/mesin/submesin-repository";
import { api } from "../_api";
import { DefaultResponse } from "@domain/models/default-response";
import { MetaPagination } from "@domain/models/meta-pagination";

export class SubMesinApiRepository implements SubMesinRepository {
  async get(): Promise<SubMesin[]> {
    const { data } = await api.get(`sub-machine`);

    return data?.data?.map((item) =>
      SubMesin.create({
        id: item?.id,
        no: item?.sub_machine_no || "-",
        name: item?.name || "-",
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
        `sub-machine?page=${page || ""}&limit=${limit || ""}&q=${q || ""}`
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
          SubMesin.create({
            id: item?.id,
            no: item?.sub_machine_no || "-",
            name: item?.name || "-",
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

  async getDataById(id: string): Promise<SubMesin> {
    try {
      const { data } = await api.get(`sub-machine/${id}`);
      return SubMesin.create({
        id: data.data?.id || "-",
        name: data.data?.name || "-",
        no: data.data?.sub_machine_no || "-",
      });
    } catch (error) {}
  }

  async create(submesin: SubMesin): Promise<void> {
    try {
      const { data } = await api.post(`sub-machine`, {
        name: submesin.name,
        no: submesin.no,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async edit(submesin: SubMesin): Promise<void> {
    try {
      const { data } = await api.put(`sub-machine/${submesin.id}`, {
        name: submesin.name,
        no: submesin.no,
      });

      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const { data } = await api.delete(`sub-machine/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
