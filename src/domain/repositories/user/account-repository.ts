import { Account } from "@domain/models/user/account";

export interface AccountRepository {
  getAccount(): Promise<Account[]>;
  getDataById(id: string): Promise<Account>;
  edit(account: Account): Promise<void>;
  create(account: Account): Promise<void>;
  delete(id: string): Promise<void>;
}
