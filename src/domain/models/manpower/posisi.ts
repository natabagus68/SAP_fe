import { Entity } from "../_entity";

export interface IPosisiProps {
  id: string;
  name: string;
}

export interface IPosisi {
  unmarshall(): IPosisiProps;
}

export class Posisi extends Entity<IPosisiProps> implements IPosisi {
  static create(props: IPosisiProps) {
    return new Posisi(props);
  }
  unmarshall(): IPosisiProps {
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
