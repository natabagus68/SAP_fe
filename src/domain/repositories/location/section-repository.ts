import { Section } from "@domain/models/location/section";

export interface SectionRepository {
  getSection(): Promise<Section[]>;
  getDataById(id: string): Promise<Section>;
  edit(section: Section): Promise<void>;
  create(section: Section): Promise<void>;
  delete(id: string): Promise<void>;
}
