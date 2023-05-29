import { Parameter } from "@domain/models/mesin/parameter";
import { ParameterRepository } from "@domain/repositories/mesin/parameter-repository";
import { api } from "../_api";
import { DefaultResponse } from "@domain/models/default-response";
import { MetaPagination } from "@domain/models/meta-pagination";

export class ParameterApiRepository implements ParameterRepository {
  async get(): Promise<Parameter[]> {
    const { data } = await api.get(`machine-parameter`);

    return data?.data?.map((item) =>
      Parameter.create({
        id: item?.id,
        indicator: item?.indicator.name || "-",
        name: item?.name || "-",
        variable: item?.variable || "-",
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
        `machine-parameter?page=${page || ""}&limit=${limit || ""}&q=${q || ""}`
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
          Parameter.create({
            id: item?.id,
            indicator: item?.indicator.name || "-",
            name: item?.name || "-",
            variable: item?.variable || "-",
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

  async getDataById(id: string): Promise<Parameter> {
    try {
      const { data } = await api.get(`machine-parameter/${id}`);

      return Parameter.create({
        indicator: data.data?.indicator_id || "-",
        name: data.data?.name || "-",
        variable: data.data?.variable || "-",
        uom: data.data?.machine_parameter_measurements || "-",
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(parameter: Parameter): Promise<void> {
    try {
      const { data } = await api.post("machine-parameter", {
        name: parameter.name,
        indicatorId: parameter.indicator,
        variable: parameter.variable,
        uom: parameter.uom,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async edit(parameter: Parameter): Promise<void> {
    try {
      const { data } = await api.put(`machine-parameter/${parameter.id}`, {
        name: parameter.name,
        indicatorId: parameter.indicator,
        variable: parameter.variable,
        uom: parameter.uom,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const { data } = await api.delete(`machine-parameter/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
