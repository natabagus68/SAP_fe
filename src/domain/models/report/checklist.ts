import { Entity } from "../_entity";

export interface IChecklistProps {
  id?: string | undefined;
  success?: boolean | undefined;
  message?: string | undefined;
  date: string;
  machine_no: string;
  pic: string;
  status: string;
}

export interface IChecklist {
  unmarshall(): IChecklistProps;
}

export class Checklist extends Entity<IChecklistProps> implements IChecklist {
  static create(props: IChecklistProps) {
    return new Checklist(props);
  }
  unmarshall(): IChecklistProps {
    return {
      id: this.id,
      success: this.success,
      message: this.message,
      date: this.date,
      machine_no: this.machine_no,
      pic: this.pic,
      status: this.status,
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }
  get success(): boolean | undefined {
    return this._props.success;
  }
  get message(): string | undefined {
    return this._props.message;
  }
  get date(): string {
    return this._props.date;
  }
  get machine_no(): string {
    return this._props.machine_no;
  }
  get pic(): string {
    return this._props.pic;
  }
  get status(): string {
    return this._props.status;
  }
}
