import { Location } from "@domain/models/location/location";
import { Section } from "@domain/models/location/section";

export interface LocationRepository {
  getDepartement(): Promise<Location[]>;
  getSection(): Promise<Section[]>;
}
