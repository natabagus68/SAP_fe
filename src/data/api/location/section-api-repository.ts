import { api } from "../_api";
import { Departemen } from "@domain/models/location/departemen";
import { Section } from "@domain/models/location/section";
import { SectionRepository } from "@domain/repositories/location/section-repository";

export class SectionApiRepository implements SectionRepository {
  async getSection(): Promise<Section[]> {
    const { data } = await api.get(`section`);
    return data?.data?.map((item) =>
      Section.create({
        id: item?.id,
        name: item?.name || "-",
      })
    );
  }
}
