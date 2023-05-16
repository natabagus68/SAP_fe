import { Entity } from "../_entity";

export interface ISectionProps {
  id: string | undefined;
  name: string;
  department_id?: string | undefined;
}

export interface ISection {
  unmarshall(): ISectionProps;
}

export class Section extends Entity<ISectionProps> implements ISection {
  static create(props: ISectionProps) {
    return new Section(props);
  }
  unmarshall(): ISectionProps {
    return {
      id: this.id,
      name: this.name,
      department_id: this.department_id,
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }
  get name(): string {
    return this._props.name;
  }
  get department_id(): string | undefined {
    return this._props.department_id;
  }
}
