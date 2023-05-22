import { Entity } from "@domain/models/_entity";
import { Maintenance } from "./maintenance";
import { Remark } from "./remark";

export interface ISchedulesProps {
  id?: string | undefined;
  date: string;
  maintenance: Array<Maintenance>;
  remark: Array<Remark>;
}

export interface ISchedules {
  unmarshall(): ISchedulesProps;
}

export class Schedules extends Entity<ISchedulesProps> implements ISchedules {
  static create(props: ISchedulesProps) {
    return new Schedules(props);
  }
  unmarshall(): ISchedulesProps {
    return {
      id: this.id,
      date: this.date,
      maintenance: this.maintenance,
      remark: this.remark,
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }
  get date(): string {
    return this._props.date;
  }
  get maintenance(): Array<Maintenance> {
    return this._props.maintenance;
  }
  get remark(): Array<Remark> {
    return this._props.remark;
  }
}
