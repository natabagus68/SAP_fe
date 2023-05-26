import { Entity } from "../_entity";

export interface ITraceabilityProps {
    id: string
    type: string;
    department: string;
    section: string;
    machine_no: string;
    pic: string;
}

export interface ITraceability {
  unmarshall(): ITraceabilityProps;
}

export class Traceability extends Entity<ITraceabilityProps> implements ITraceability {
  static create(props: ITraceabilityProps) {
    return new Traceability(props);
  }
  unmarshall(): ITraceabilityProps {
    return {
      id: this.id,
      type: this.type,
      department: this.department,
      section: this.section,
      machine_no: this.machine_no,
      pic: this.pic
    };
  }

  get id(): string {
    return this._props.id;
  }
  get type(): string {
    return this._props.type;
  }
  get department(): string {
    return this._props.department;
  }
  get section(): string {
    return this._props.section;
  }
  get machine_no(): string {
    return this._props.machine_no;
  }
  get pic(): string {
    return this._props.pic;
  }
}
