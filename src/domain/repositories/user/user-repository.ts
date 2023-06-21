import { DefaultResponse } from "@domain/models/default-response";
import { User } from "@domain/models/user/user";

export interface UserRepository {
  getDataUser(): Promise<User[]>;
  getDataByFilter(
    page?: string | undefined,
    limit?: string | undefined,
    search?: string | undefined
  ): Promise<DefaultResponse>;
  getDataById(id: string): Promise<User>;
  create(user: User): Promise<void>;
  edit(user: User): Promise<void>;
  delete(id: string): Promise<void>;
}
