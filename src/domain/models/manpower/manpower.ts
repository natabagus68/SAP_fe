import { Entity } from "../_entity";

export interface IManpowerProps {
  id: string;
  name: string;
  employee_no: string;
  section_name: string;
  position_name: string;
  avatar: string;
  departemen: string;
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
      section_name: this.section_name,
      position_name: this.position_name,
      avatar: this.avatar,
      departemen: this.departemen,
    };
  }

  get id(): string {
    return this._props.id;
  }
  get name(): string {
    return this._props.name;
  }
  get employee_no(): string {
    return this._props.employee_no;
  }
  get section_name(): string {
    return this._props.section_name;
  }
  get position_name(): string {
    return this._props.position_name;
  }
  get avatar(): string {
    return this._props.avatar;
  }
  get departemen(): string {
    return this._props.departemen;
  }
}
