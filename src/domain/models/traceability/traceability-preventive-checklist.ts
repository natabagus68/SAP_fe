import { Entity } from "../_entity";
import { PreventiveReport } from "../report/preventive-report";
import { ChecklistReport } from "../report/checklist-report";


export interface ITraceabilityPreventiveChecklistProps {
    machine_name: string;
    machine_no: string;
    date: string;
    pic: string;
    section: string;
    department: string;
    interval?: string | undefined;
    working_time?: string | undefined;
    status: string;
    approval_checked_by: string;
    approval_approved_by: string;
    report?: PreventiveReport[] | ChecklistReport[] | undefined;
    total_ng?: number | undefined;
    total_ok?: number | undefined;
}

export interface ITraceabilityPreventiveChecklist {
  unmarshall(): ITraceabilityPreventiveChecklistProps;
}

export class TraceabilityPreventiveChecklist extends Entity<ITraceabilityPreventiveChecklistProps> implements ITraceabilityPreventiveChecklist {
  static create(props: ITraceabilityPreventiveChecklistProps) {
    return new TraceabilityPreventiveChecklist(props);
  }
  unmarshall(): ITraceabilityPreventiveChecklistProps {
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
      report : this.report,
      total_ng: this.total_ng,
      total_ok: this.total_ok
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
  get interval(): string | undefined {
    return this._props.interval;
  }
  get working_time(): string | undefined {
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
  get report(): PreventiveReport[] | ChecklistReport[] | undefined {
    return this._props.report
  }
  get total_ng(): number | undefined {
    return this._props.total_ng
  }
  get total_ok(): number | undefined {
    return this._props.total_ok
  }
}
