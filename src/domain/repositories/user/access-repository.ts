import { Access } from "@domain/models/user/access";

export interface AccessRepository {
  getAccess(): Promise<Access[]>;
  getDataById(id: string): Promise<Access>;
  edit(access: Access): Promise<void>;
  create(access: Access): Promise<void>;
  delete(id: string): Promise<void>;
}
