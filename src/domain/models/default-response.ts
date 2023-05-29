import { Entity } from "@domain/models/_entity";
import { MetaPagination } from "./meta-pagination";

export interface IDefaultResponseProps {
  success: boolean;
  message: string;
  pagination?: MetaPagination | undefined;
  data: any;
}

export interface IDefaultResponse {
  unmarshall(): IDefaultResponseProps;
}

export class DefaultResponse
  extends Entity<IDefaultResponseProps>
  implements IDefaultResponse
{
  static create(props: IDefaultResponseProps) {
    return new DefaultResponse(props);
  }
  unmarshall(): IDefaultResponseProps {
    return {
      success: this.success,
      message: this.message,
      pagination: this.pagination,
      data: this.data,
    };
  }

  get success(): boolean {
    return this._props.success;
  }
  get message(): string {
    return this._props.message;
  }
  get pagination(): MetaPagination | undefined {
    return this._props.pagination;
  }
  get data(): any {
    return this._props.data;
  }
}
