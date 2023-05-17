import { Entity } from "../_entity";

export interface ISubMesinProps {
  id: string | undefined;
  sub_machine_no: string;
  name: string;
}

export interface ISubMesin {
  unmarshall(): ISubMesinProps;
}

export class SubMesin extends Entity<ISubMesinProps> implements ISubMesin {
  static create(props: ISubMesinProps) {
    return new SubMesin(props);
  }
  unmarshall(): ISubMesinProps {
    return {
      id: this.id,
      sub_machine_no: this.sub_machine_no,
      name: this.name,
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }
  get sub_machine_no(): string {
    return this._props.sub_machine_no;
  }
  get name(): string {
    return this._props.name;
  }
}
