import { Authentication } from "@domain/models/auth/authentication";
import { AuthenticationRepository } from "@domain/repositories/auth/authentication-repository";
import { api } from "../_api";

export class AuthenticationApiRepository implements AuthenticationRepository {
  async me(): Promise<Authentication> {
    const { data } = await api.get(`auth/me`);
    return Authentication.create({
      id: data.data.id,
      name: data.data.fullname,
      email: data.data.email,
    });
  }
  async login(login: Authentication): Promise<Authentication> {
    const { data } = await api.post(`auth/login`, {
      email: login.email,
      password: login.password,
    });
    return Authentication.create({
      token: data?.token,
    });
  }
}
