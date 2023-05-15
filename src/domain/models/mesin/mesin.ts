import { Entity } from "../_entity";

export interface IMesinProps {
  id: string;
  machine_no: string;
  name: string;
  section: string;
}

export interface IMesin {
  unmarshall(): IMesinProps;
}

export class Mesin extends Entity<IMesinProps> implements IMesin {
  static create(props: IMesinProps) {
    return new Mesin(props);
  }
  unmarshall(): IMesinProps {
    return {
      id: this.id,
      machine_no: this.machine_no,
      name: this.name,
      section: this.section,
    };
  }

  get id(): string {
    return this._props.id;
  }
  get machine_no(): string {
    return this._props.machine_no;
  }
  get name(): string {
    return this._props.name;
  }
  get section(): string {
    return this._props.section;
  }
}
