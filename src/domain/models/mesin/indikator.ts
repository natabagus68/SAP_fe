import { Entity } from "../_entity";

export interface IIndikatorProps {
  id: string;
  name: string;
}

export interface IIndikator {
  unmarshall(): IIndikatorProps;
}

export class Indikator extends Entity<IIndikatorProps> implements IIndikator {
  static create(props: IIndikatorProps) {
    return new Indikator(props);
  }
  unmarshall(): IIndikatorProps {
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
