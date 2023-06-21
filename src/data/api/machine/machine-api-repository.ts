import { Machine } from "@domain/models/machine/machine";
import { MachineRepository } from "@domain/repositories/machine/machine-repository";
import { api } from "../_api";
import { DefaultResponse } from "@domain/models/default-response";
import { MetaPagination } from "@domain/models/meta-pagination";

export class MachineApiRepository implements MachineRepository {
  async getDataMachine(): Promise<Machine[]> {
    const { data } = await api.get(`machine`);
    return data?.data?.map((item) =>
      Machine.create({
        id: item.id,
        name: item.name,
        description: item.description,
        machineCode: item.machineCode,
        location: item.location,
      })
    );
  }

  async getDataByFilter(
    page?: string,
    limit?: string,
    search?: string
  ): Promise<DefaultResponse> {
    try {
      const { data } = await api.get(
        `machine?limit=${limit || ""}&page=${page || ""}&search=${search || ""}`
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
          Machine.create({
            id: item.id,
            name: item.name,
            description: item.description,
            machineCode: item.machineCode,
            location: item.location,
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

  async getDataById(id: string): Promise<Machine> {
    try {
      const { data } = await api.get(`machine/${id}`);
      return Machine.create({
        id: data.data?.id,
        name: data.data?.name || "-",
        description: data.data?.description || "-",
        machineCode: data.data?.machineCode || "-",
        location: data.data?.location || "-",
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(machine: Machine): Promise<void> {
    try {
      const { data } = await api.post(`machine`, {
        id: machine.id,
        name: machine.name,
        description: machine.description,
        machineCode: machine.machineCode,
        location: machine.location,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async edit(machine: Machine): Promise<void> {
    try {
      const { data } = await api.put(`machine/${machine.id}`, {
        id: machine.id,
        name: machine.name,
        description: machine.description,
        machineCode: machine.machineCode,
        location: machine.location,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const { data } = await api.delete(`machine/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
