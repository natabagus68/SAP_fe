import { DefaultResponse } from "@domain/models/default-response";
import { Material } from "@domain/models/material/material";

export interface MaterialRepository {
  getDataMaterial(): Promise<Material[]>;
  getDataByfilter(
    page?: string | undefined,
    limit?: string | undefined,
    search?: string | undefined
  ): Promise<DefaultResponse>;
  getDataById(id: string): Promise<Material>;
  create(material: Material): Promise<void>;
  edit(material: Material): Promise<void>;
  delete(id: string): Promise<void>;
}
