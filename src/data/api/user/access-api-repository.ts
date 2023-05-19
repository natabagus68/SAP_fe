import { Access } from "@domain/models/user/access";
import { AccessRepository } from "@domain/repositories/user/access-repository";
import { api } from "../_api";

export class AccessApiRepository implements AccessRepository {
  async getAccess(): Promise<Access[]> {
    const { data } = await api.get(`role`);
    return data?.data?.map((item) =>
      Access.create({
        id: item?.id,
        name: item?.name || "-",
      })
    );
  }

  async getDataById(id: string): Promise<Access> {
    try {
      const { data } = await api.get(`role/${id}`);

      return Access.create({
        id: data.data?.id,
        name: data.data?.name || "-",
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(access: Access): Promise<void> {
    try {
      const { data } = await api.post(`role`, {
        id: access.id,
        name: access.name,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async edit(access: Access): Promise<void> {
    try {
      const { data } = await api.put(`role/${access.id}`, {
        id: access.id,
        name: access.name,
      });

      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const { data } = await api.delete(`role/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
