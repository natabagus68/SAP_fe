import { Entity } from "../_entity";

export interface IManpowerProps {
  id?: string | undefined;
  name: string;
  employee_no: string;
  section_id?: string | undefined;
  section_name?: string | undefined;
  position_id?: string | undefined;
  position_name?: string | undefined;
  departemen_id?: string | undefined;
  departemen_name?: string | undefined;
  avatar?: string | undefined;
}

export interface IManpower {
  unmarshall(): IManpowerProps;
}

export class Manpower extends Entity<IManpowerProps> implements IManpower {
  static create(props: IManpowerProps) {
    return new Manpower(props);
  }
  unmarshall(): IManpowerProps {
    return {
      id: this.id,
      name: this.name,
      employee_no: this.employee_no,
      section_id: this.section_id,
      section_name: this.section_name,
      position_id: this.position_id,
      position_name: this.position_name,
      departemen_id: this.departemen_id,
      departemen_name: this.departemen_name,
      avatar: this.avatar,
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }
  get name(): string {
    return this._props.name;
  }
  get employee_no(): string {
    return this._props.employee_no;
  }
  get section_id(): string | undefined {
    return this._props.section_id;
  }
  get section_name(): string | undefined {
    return this._props.section_name;
  }
  get position_id(): string | undefined {
    return this._props.position_id;
  }
  get position_name(): string | undefined {
    return this._props.position_name;
  }
  get departemen_id(): string | undefined {
    return this._props.departemen_id;
  }
  get departemen_name(): string | undefined {
    return this._props.departemen_name;
  }
  get avatar(): string | undefined {
    return this._props.avatar;
  }
}
