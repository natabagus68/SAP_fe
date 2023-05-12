import { Entity } from "../_entity";

export interface IAuthenticationProps {
  id?: string | undefined;
  name?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  token?: string | undefined;
}

export interface IAuthentication {
  unmarshall(): IAuthenticationProps;
}

export class Authentication extends Entity<IAuthenticationProps> implements IAuthentication {
  static create(props: IAuthenticationProps) {
    return new Authentication(props);
  }
  unmarshall(): IAuthenticationProps {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }
  get email(): string | undefined {
    return this._props.email;
  }
  get name(): string | undefined {
    return this._props.name;
  }
  get password(): string | undefined {
    return this._props.password;
  }
  get token(): string | undefined {
    return this._props.token;
  }
}
