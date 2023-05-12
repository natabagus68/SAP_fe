import { Entity } from "../_entity";

export interface ILocationProps {
  id: string;
  name: string;
}

export interface ILocation {
  unmarshall(): ILocationProps;
}

export class Location extends Entity<ILocationProps> implements ILocation {
  static create(props: ILocationProps) {
    return new Location(props);
  }
  unmarshall(): ILocationProps {
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
