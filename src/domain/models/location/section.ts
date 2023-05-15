import { Entity } from "../_entity";

export interface ISectionProps {
  id: string;
  name: string;
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
    };
  }

  get id(): string {
    return this._props.id;
  }
  get name(): string {
    return this._props.name;
  }
}
