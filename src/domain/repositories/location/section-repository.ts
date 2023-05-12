import { Section } from "@domain/models/location/section";

export interface SectionRepository {
  getSection(): Promise<Section[]>;
}
