import { Entity } from "../_entity";

export interface IFrequencyProps {
  id: string;
  type: string;
}

export interface IFrequency {
  unmarshall(): IFrequencyProps;
}

export class Frequency extends Entity<IFrequencyProps> implements IFrequency {
  static create(props: IFrequencyProps) {
    return new Frequency(props);
  }
  unmarshall(): IFrequencyProps {
    return { id: this.id, type: this.type };
  }

  get id(): string {
    return this._props.id;
  }
  get type(): string {
    return this._props.type;
  }
}
