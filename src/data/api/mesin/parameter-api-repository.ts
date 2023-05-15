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
}
