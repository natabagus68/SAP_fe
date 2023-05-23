import { Entity } from "../_entity";
import { ChecklistReport } from "./checklist-report";

export interface IChecklistProps {
  id?: string | undefined;
  success?: boolean | undefined;
  message?: string | undefined;
  date: string;
  machine_no: string;
  pic: string;
  status: string;
  machine_name?: string | undefined;
  working_time?: string | undefined;
  department?: string | undefined;
  section?: string | undefined;
  approveBy?: string | undefined;
  checkedBy?: string | undefined;
  report?: ChecklistReport | undefined;
  ng?: string | undefined;
  ok?: string | undefined;
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
      machine_name: this.machine_name,
      working_time: this.working_time,
      department: this.department,
      section: this.section,
      approveBy: this.approveBy,
      checkedBy: this.checkedBy,
      ng: this.ng,
      ok: this.ok,
      report: this.report,
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
  get machine_name(): string | undefined {
    return this._props.machine_name;
  }
  get working_time(): string | undefined {
    return this._props.working_time;
  }
  get department(): string | undefined {
    return this._props.department;
  }
  get section(): string | undefined {
    return this._props.section;
  }
  get approveBy(): string | undefined {
    return this._props.approveBy;
  }
  get checkedBy(): string | undefined {
    return this._props.checkedBy;
  }

  get report(): ChecklistReport | undefined {
    return this._props.report;
  }
  get ng(): string | undefined {
    return this._props.ng;
  }
  get ok(): string | undefined {
    return this._props.ok;
  }
}
