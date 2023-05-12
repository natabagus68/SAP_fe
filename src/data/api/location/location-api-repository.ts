import { Location } from "@domain/models/location/location";
import { LocationRepository } from "@domain/repositories/location/location-repository";
import { api } from "../_api";
import { Section } from "@domain/models/location/section";

export class LocationApiRepository implements LocationRepository {
  async getDepartement(): Promise<Location[]> {
    const { data } = await api.get(`department`);
    return data?.data?.map((item) =>
      Location.create({
        id: item?.id,
        name: item?.name || "-",
      })
    );
  }

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
