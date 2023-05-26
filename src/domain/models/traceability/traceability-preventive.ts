import { Entity } from "../_entity";
import { PreventiveReport } from "../report/preventive-report";


export interface ITraceabilityPreventiveProps {
    machine_name: string;
    machine_no: string;
    date: string;
    pic: string;
    section: string;
    department: string;
    interval: string;
    working_time: string;
    status: string;
    approval_checked_by: string;
    approval_approved_by: string;
    report: PreventiveReport;
}

export interface ITraceabilityPreventive {
  unmarshall(): ITraceabilityPreventiveProps;
}

export class TraceabilityPreventive extends Entity<ITraceabilityPreventiveProps> implements ITraceabilityPreventive {
  static create(props: ITraceabilityPreventiveProps) {
    return new TraceabilityPreventive(props);
  }
  unmarshall(): ITraceabilityPreventiveProps {
    return {
      machine_name: this.machine_name,
      machine_no: this.machine_no,
      date: this.date,
      department: this.department,
      interval: this.interval,
      pic: this.pic,
      section: this.section,
      status: this.status,
      working_time: this.working_time,
      approval_checked_by: this.approval_checked_by,
      approval_approved_by: this.approval_approved_by,
      report : this.report      
    };
  }

  get machine_name(): string {
    return this._props.machine_name;
  }
  get machine_no(): string {
    return this._props.machine_no;
  }
  get department(): string {
    return this._props.department;
  }
  get section(): string {
    return this._props.section;
  }
  get pic(): string {
    return this._props.pic;
  }
  get interval(): string {
    return this._props.interval;
  }
  get working_time(): string {
    return this._props.working_time;
  }
  get status(): string {
    return this._props.status;
  }
  get date(): string {
    return this._props.date;
  }
  get approval_checked_by(): string {
    return this._props.approval_checked_by;
  }
  get approval_approved_by(): string {
    return this._props.approval_approved_by;
  }
  get report(): PreventiveReport {
    return this._props.report
  }
}
