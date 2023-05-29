import { Frequency } from "@domain/models/frequency/frequency";
import { FrequencyRepository } from "@domain/repositories/frequency/frequency-repository";
import { api } from "../_api";
import { DefaultResponse } from "@domain/models/default-response";
import { MetaPagination } from "@domain/models/meta-pagination";

export class FrequencyApiRepository implements FrequencyRepository {
  async get(): Promise<Frequency[]> {
    const { data } = await api.get(`frequency-type`);
    return data?.data?.map((item) =>
      Frequency.create({
        id: item?.id,
        type: item?.type || "-",
      })
    );
  }

  async getDataByPage(page?: string, limit?: string): Promise<DefaultResponse> {
    try {
      const { data } = await api.get(
        `frequency-type?page=${page || ""}&limit=${limit || ""}`
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
          Frequency.create({
            id: item?.id,
            type: item?.type || "-",
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

  async getDataById(id: string): Promise<Frequency> {
    try {
      const { data } = await api.get(`frequency-type/${id}`);
      return Frequency.create({
        id: data.data?.id,
        type: data.data?.type || "-",
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async edit(frequency: Frequency): Promise<void> {
    try {
      const { data } = await api.put(`frequency-type/${frequency.id}`, {
        id: frequency.id,
        type: frequency.type,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(frequency: Frequency): Promise<void> {
    try {
      const { data } = await api.post(`frequency-type`, {
        id: frequency.id,
        type: frequency.type,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const { data } = await api.delete(`frequency-type/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
