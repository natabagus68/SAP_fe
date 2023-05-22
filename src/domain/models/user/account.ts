import { Entity } from "../_entity";

export interface IAccountProps {
  id?: string | undefined;
  name: string;
  email: string;
  employee_id?: string | undefined;
  role_id?: string | undefined;
  role_name?: string | undefined;
  password: string;
  is_ready?: boolean | undefined;
}

export interface IAccount {
  unmarshall(): IAccountProps;
}

export class Account extends Entity<IAccountProps> implements IAccount {
  static create(props: IAccountProps) {
    return new Account(props);
  }
  unmarshall(): IAccountProps {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      employee_id: this.employee_id,
      password: this.password,
      role_id: this.role_id,
      is_ready: this.is_ready,
      role_name: this.role_name,
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }
  get name(): string {
    return this._props.name;
  }
  get email(): string {
    return this._props.email;
  }
  get employee_id(): string | undefined {
    return this._props.employee_id;
  }
  get role_id(): string | undefined {
    return this._props.role_id;
  }
  get password(): string {
    return this._props.password;
  }
  get is_ready(): boolean | undefined {
    return this._props.is_ready;
  }
  get role_name(): string | undefined {
    return this._props.role_name;
  }
}
