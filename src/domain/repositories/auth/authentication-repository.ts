import { Authentication } from "@domain/models/auth/authentication";

export interface AuthenticationRepository {
  me(): Promise<Authentication>;
  login(login: Authentication): Promise<Authentication>;
}
