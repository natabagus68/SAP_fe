import { Entity } from "@domain/models/_entity";

export interface IRemarkProps {
  id?: string | undefined;
  success?: boolean | undefined;
  message?: string | undefined;
  remark?: string | undefined;
  date?: string | undefined;
}

export interface IRemark {
  unmarshall(): IRemarkProps;
}

export class Remark extends Entity<IRemarkProps> implements IRemark {
  static create(props: IRemarkProps) {
    return new Remark(props);
  }
  unmarshall(): IRemarkProps {
    return {
      id: this.id,
      remark: this.remark,
      success: this.success,
      message: this.message,
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }
  get remark(): string | undefined {
    return this._props.remark;
  }
  get date(): string | undefined {
    return this._props.date;
  }
  get success(): boolean | undefined {
    return this._props.success;
  }
  get message(): string | undefined {
    return this._props.message;
  }
}
