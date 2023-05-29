import { Indikator } from "@domain/models/mesin/indikator";
import { IndikatorRepository } from "@domain/repositories/mesin/indikator-repository";
import { api } from "../_api";
import { DefaultResponse } from "@domain/models/default-response";
import { MetaPagination } from "@domain/models/meta-pagination";

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

  async getDataWithFilter(
    page?: string | undefined,
    limit?: string | undefined,
    q?: string | undefined
  ): Promise<DefaultResponse> {
    try {
      const { data } = await api.get(
        `machine?page=${page || ""}&limit=${limit || ""}&q=${q || ""}`
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
          Indikator.create({
            id: item?.id,
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

  async getDataById(id: string): Promise<Indikator> {
    try {
      const { data } = await api.get(`machine-indicator/${id}`);

      return Indikator.create({
        id: data.data?.id,
        name: data.data?.name || "-",
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(indikator: Indikator): Promise<void> {
    try {
      const { data } = await api.post("machine-indicator", {
        name: indikator.name,
      });

      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async edit(indikator: Indikator): Promise<void> {
    try {
      const { data } = await api.put(`machine-indicator/${indikator.id}`, {
        name: indikator.name,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const { data } = await api.delete(`machine-indicator/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
