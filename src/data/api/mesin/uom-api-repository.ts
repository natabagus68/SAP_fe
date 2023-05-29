import { UnitOfMeasure } from "@domain/models/mesin/uom";
import { api } from "../_api";
import { UomRepository } from "@domain/repositories/mesin/uom-repository";
import { DefaultResponse } from "@domain/models/default-response";
import { MetaPagination } from "@domain/models/meta-pagination";

export class UomApiRepository implements UomRepository {
  async get(): Promise<UnitOfMeasure[]> {
    const { data } = await api.get(`unit-of-measurement`);
    return data?.data?.map((item) =>
      UnitOfMeasure.create({
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
        `unit-of-measurement?page=${page || ""}&limit=${limit || ""}&q=${q || ""}`
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
          UnitOfMeasure.create({
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

  async getDataById(id: string): Promise<UnitOfMeasure> {
    try {
      const { data } = await api.get(`unit-of-measurement/${id}`);
      return UnitOfMeasure.create({
        id: data.data?.id,
        name: data.data?.name || "-",
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(uom: UnitOfMeasure): Promise<void> {
    try {
      const { data } = await api.post("unit-of-measurement", {
        name: uom.name,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async edit(uom: UnitOfMeasure): Promise<void> {
    try {
      const { data } = await api.put(`unit-of-measurement/${uom.id}`, {
        name: uom.name,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const { data } = await api.delete(`unit-of-measurement/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
