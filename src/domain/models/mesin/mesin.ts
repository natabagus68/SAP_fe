import { Entity } from "../_entity";

export interface IMesinProps {
  id?: string | undefined;
  machine_no: string;
  name: string;
  section_id?: string | undefined;
  section_name?: string | undefined;
  photo?: string | undefined;
  subMachines?: string | undefined;
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
      section_id: this.section_id,
      section_name: this.section_name,
      photo: this.photo,
      subMachines: this.subMachines,
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }
  get machine_no(): string {
    return this._props.machine_no;
  }
  get name(): string {
    return this._props.name;
  }
  get section_id(): string | undefined {
    return this._props.section_id;
  }
  get section_name(): string | undefined {
    return this._props.section_name;
  }
  get photo(): string | undefined {
    return this._props.photo;
  }
  get subMachines(): string | undefined {
    return this._props.subMachines;
  }
}
