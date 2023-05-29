import { Damage } from "@domain/models/damage/damage";
import { DamageRepository } from "@domain/repositories/damage/damage-repository";
import { api } from "../_api";
import { MetaPagination } from "@domain/models/meta-pagination";
import { DefaultResponse } from "@domain/models/default-response";

export class DamageApiRepository implements DamageRepository {
  async get(): Promise<Damage[]> {
    const { data } = await api.get(`damage-type`);
    return data?.data?.map((item) =>
      Damage.create({
        id: item?.id,
        type: item?.type || "-",
      })
    );
  }

  async getDataByPage(page?: string, limit?: string): Promise<DefaultResponse> {
    try {
      const { data } = await api.get(
        `damage-type?page=${page || ""}&limit=${limit || ""}`
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
          Damage.create({
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

  async getDataById(id: string): Promise<Damage> {
    try {
      const { data } = await api.get(`damage-type/${id}`);
      return Damage.create({
        id: data.data?.id,
        type: data.data?.type || "-",
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async edit(damage: Damage): Promise<void> {
    try {
      const { data } = await api.put(`damage-type/${damage.id}`, {
        id: damage.id,
        type: damage.type,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(damage: Damage): Promise<void> {
    try {
      const { data } = await api.post(`damage-type`, {
        id: damage.id,
        type: damage.type,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async delete(id: string): Promise<void> {
    try {
      const { data } = await api.delete(`damage-type/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
