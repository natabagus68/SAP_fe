import { Entity } from "../_entity";

export interface IUserProps {
  id?: string | undefined;
  email: string;
  fullname: string;
  isActive?: boolean | undefined;
  avatarPath?: string | undefined;
  password?: string | undefined;
  role: string;
}

export interface IUser {
  unmarshall(): IUserProps;
}

export class User extends Entity<IUserProps> implements IUser {
  static create(props: IUserProps) {
    return new User(props);
  }
  unmarshall(): IUserProps {
    return {
      id: this.id,
      email: this.email,
      fullname: this.fullname,
      isActive: this.isActive,
      avatarPath: this.avatarPath,
      role: this.role,
      password: this.password,
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }

  get email(): string {
    return this._props.email;
  }

  get fullname(): string {
    return this._props.fullname;
  }
  get isActive(): boolean | undefined {
    return this._props.isActive;
  }
  get avatarPath(): string | undefined {
    return this._props.avatarPath;
  }
  get role(): string {
    return this._props.role;
  }
  get password(): string | undefined {
    return this._props.password;
  }
}
