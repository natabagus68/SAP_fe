import { DefaultResponse } from "@domain/models/default-response";
import { Section } from "@domain/models/location/section";

export interface SectionRepository {
  getSection(): Promise<Section[]>;
  getDataWithFilter(
    page?: string | undefined,
    limit?: string | undefined,
    q?: string | undefined
  ): Promise<DefaultResponse>;
  getSectionWithoutDepartment(): Promise<Section[]>;
  getDataById(id: string): Promise<Section>;
  edit(section: Section): Promise<void>;
  create(section: Section): Promise<void>;
  delete(id: string): Promise<void>;
}
