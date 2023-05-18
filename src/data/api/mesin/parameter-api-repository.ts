import { Parameter } from "@domain/models/mesin/parameter";
import { ParameterRepository } from "@domain/repositories/mesin/parameter-repository";
import { api } from "../_api";

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

  async getDataById(id: string): Promise<Parameter> {
    try {
      const { data } = await api.get(`machine-parameter/${id}`);
      return Parameter.create({
        id: data.data?.id,
        indicator: data.data?.indicator.name || "-",
        name: data.data?.name || "-",
        variable: data.data?.variable || "-",
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(parameter: Parameter): Promise<void> {
    try {
      const { data } = await api.post("machine-parameter", {
        name: parameter.name,
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
