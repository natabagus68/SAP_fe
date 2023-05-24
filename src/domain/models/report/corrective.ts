import { Entity } from "../_entity";
import { CorrectiveReport } from "./corrective-report";

export interface ICorrectiveProps {
  //id?: string | undefined;
  date: string;
  machine_no: string;
  pic: string;
  status: string;
  success?: boolean | undefined;
  message?: string | undefined;

  machine_name?: string | undefined;
  section?: string | undefined;
  department?: string | undefined;
  damage_time?: string | undefined;

  report?: CorrectiveReport | undefined;
}

export interface ICorrective {
  unmarsshall(): ICorrectiveProps;
}

export class Corrective
  extends Entity<ICorrectiveProps>
  implements ICorrective
{
  static create(props: ICorrectiveProps) {
    return new Corrective(props);
  }
  unmarsshall(): ICorrectiveProps {
    return {
      // id: this.id,
      success: this.success,
      message: this.message,
      date: this.date,
      machine_no: this.machine_no,
      pic: this.pic,
      status: this.status,

      machine_name: this.machine_name,
      section: this.section,
      department: this.department,
      damage_time: this.damage_time,
      report: this.report,
    };
  }
  //   get id(): string | undefined {
  //     return this._props.id;
  //   }
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
  get section(): string | undefined {
    return this._props.section;
  }
  get department(): string | undefined {
    return this._props.department;
  }
  get damage_time(): string | undefined {
    return this._props.damage_time;
  }
  get report(): CorrectiveReport | undefined {
    return this._props.report;
  }
}
