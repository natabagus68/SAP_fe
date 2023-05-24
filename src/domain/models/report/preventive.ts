import { Entity } from "../_entity";
import { PreventiveReport } from "./preventive-report";

export interface IPreventiveProps {
  id?: string | undefined;
  success?: boolean | undefined;
  message?: string | undefined;
  date: string;
  machine_no: string;
  machine_name?: string | undefined;
  pic: string;
  status: string;
  report?: PreventiveReport | undefined;
  section?: string | undefined;
  department?: string | undefined;
  interval?: string | undefined;
  working_time?: string | undefined;
  approvedBy?: string | undefined;
  checkedBy?: string | undefined;
}

export interface IPreventive {
  unmarshall(): IPreventiveProps;
}

export class Preventive
  extends Entity<IPreventiveProps>
  implements IPreventive
{
  static create(props: IPreventiveProps) {
    return new Preventive(props);
  }
  unmarshall(): IPreventiveProps {
    return {
      id: this.id,
      success: this.success,
      message: this.message,
      date: this.date,
      machine_no: this.machine_no,
      machine_name: this.machine_name,
      pic: this.pic,
      status: this.status,
      report: this.report,
      section: this.section,
      department: this.department,
      interval: this.interval,
      working_time: this.working_time,
      approvedBy: this.approvedBy,
      checkedBy: this.checkedBy,
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
  get machine_name(): string | undefined {
    return this._props.machine_name;
  }
  get pic(): string {
    return this._props.pic;
  }
  get status(): string {
    return this._props.status;
  }
  get section(): string | undefined {
    return this._props.section;
  }
  get working_time(): string | undefined {
    return this._props.working_time;
  }
  get department(): string | undefined {
    return this._props.department;
  }
  get interval(): string | undefined {
    return this._props.interval;
  }
  get approvedBy(): string | undefined {
    return this._props.approvedBy;
  }
  get checkedBy(): string | undefined {
    return this._props.checkedBy;
  }
  get report(): PreventiveReport | undefined {
    return this._props.report;
  }
}
