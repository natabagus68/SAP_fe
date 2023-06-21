import { Material } from "@domain/models/material/material";
import { MaterialRepository } from "@domain/repositories/material/material-repository";
import { api } from "../_api";
import { DefaultResponse } from "@domain/models/default-response";
import { MetaPagination } from "@domain/models/meta-pagination";

export class MaterialApiRepository implements MaterialRepository {
  async getDataMaterial(): Promise<Material[]> {
    const { data } = await api.get(`material-description`);
    return data?.data?.map((item) =>
      Material.create({
        id: item.id,
        materialNumber: item.materialNumber,
        materialDescription: item.materialDescription,
        machineId: item.machineId,
      })
    );
  }

  async getDataByfilter(
    page?: string,
    limit?: string,
    search?: string
  ): Promise<DefaultResponse> {
    try {
      const { data } = await api.get(
        `material-description?search=${search || ""}&limit=${
          limit || ""
        }&page=${page || ""}`
      );
      return DefaultResponse.create({
        success: true,
        message: data.message,
        pagination: MetaPagination.create({
          page: data?.meta?.page,
          limit: data?.meta?.limit,
          totalRows: data?.meta?.totalRows,
          totalPages: data?.meta?.totalPages,
          prevPage: data?.meta?.prevPage,
          nextPage: data?.meta?.nextPage,
        }),
        data: data?.data?.map((item) =>
          Material.create({
            id: item.id,
            materialNumber: item.materialNumber,
            materialDescription: item.materialDescription,
            machineId: item.machineId,
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

  async getDataById(id: string): Promise<Material> {
    try {
      const { data } = await api.get(`material-description/${id}`);
      return Material.create({
        id: data.data?.id,
        materialNumber: data.data?.materialNumber,
        materialDescription: data.data?.materialDescription,
        machineId: data.data?.machineId,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(material: Material): Promise<void> {
    try {
      const { data } = await api.post(`material-description`, {
        id: material.id,
        materialNumber: material.materialNumber,
        materialDescription: material.materialDescription,
        machineId: material.machineId,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async edit(material: Material): Promise<void> {
    try {
      const { data } = await api.put(`material-description/${material.id}`, {
        id: material.id,
        materialNumber: material.materialNumber,
        materialDescription: material.materialDescription,
        machineId: material.machineId,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const { data } = await api.delete(`material-description/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
