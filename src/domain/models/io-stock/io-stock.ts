import { Entity } from "../_entity";

export interface IIoStockProps {
  type: string;
  date?: string | undefined;
  part_no?: string | undefined;
  part_name?: string | undefined;
  qty?: number | undefined;
  user?: string | undefined;
  part_id?: string | undefined
}

export interface IIoStock {
  unmarshall(): IIoStockProps;
}

export class IoStock
  extends Entity<IIoStockProps>
  implements IIoStock
{
  static create(props: IIoStockProps) {
    return new IoStock(props);
  }
  unmarshall(): IIoStockProps {
    return {
      type: this.type,
      date: this.date,
      part_name: this.part_name,
      part_no: this.part_no,
      qty: this.qty,
      user: this.user,
      part_id: this.part_id
    };
  }

  get type(): string {
    return this._props.type;
  }
  get date(): string {
    return this._props.date;
  }
  get part_no(): string {
    return this._props.part_no;
  }
  get part_name(): string {
    return this._props.part_name;
  }
  get qty(): number {
    return this._props.qty;
  }
  get user(): string {
    return this._props.user;
  }
  get part_id(): string | undefined {
    return this._props.part_id
  }
}
