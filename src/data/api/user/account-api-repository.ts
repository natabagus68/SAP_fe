import { Account } from "@domain/models/user/account";
import { api } from "../_api";
import { AccountRepository } from "@domain/repositories/user/account-repository";

export class AccountApiRepository implements AccountRepository {
  async getAccount(): Promise<Account[]> {
    const { data } = await api.get(`user`);

    return data?.data?.map((item) =>
      Account.create({
        id: item?.id,
        name: item?.name || "-",
        email: item?.email || "-",
        employee_id: item?.employee_id || "-",
        password: item?.password || "-",
        role_id: item?.role_id || "-",
        is_ready: item?.employee ? item.employee.is_ready : null,
      })
    );
  }
  async getDataById(id: string): Promise<Account> {
    try {
      const { data } = await api.get(`user/${id}`);
      console.log(data);

      return Account.create({
        id: data.data?.id,
        name: data.data?.name || "-",
        email: data.data?.email || "-",
        employee_id: data.data?.employee_id || "-",
        password: data.data?.password || "-",
        role_id: data.data?.role_id || "-",
        is_ready: data.data?.is_ready,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  async edit(account: Account): Promise<void> {
    try {
      const { data } = await api.put(`user/${account.id}`, {
        name: account.name,
        email: account.email,
        employee_id: account.employee_id,
        password: account.password,
        role_id: account.role_id,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async create(account: Account): Promise<void> {
    try {
      const { data } = await api.post(`user`, {
        name: account.name,
        email: account.email,
        employee_id: account.employee_id,
        password: account.password,
        role_id: account.role_id,
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async delete(id: string): Promise<void> {
    try {
      const { data } = await api.delete(`user/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
