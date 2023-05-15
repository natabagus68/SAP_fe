import { Entity } from "../_entity";

export interface IParameterProps {
  id: string;
  indicator_id: string;
  name: string;
  variable: string;
}

export interface IParameter {
  unmarshall(): IParameterProps;
}

export class Parameter extends Entity<IParameterProps> implements IParameter {
  static create(props: IParameterProps) {
    return new Parameter(props);
  }
  unmarshall(): IParameterProps {
    return {
      id: this.id,
      indicator_id: this.indicator_id,
      name: this.name,
      variable: this.variable,
    };
  }

  get id(): string {
    return this._props.id;
  }
  get indicator_id(): string {
    return this._props.indicator_id;
  }
  get name(): string {
    return this._props.name;
  }
  get variable(): string {
    return this._props.variable;
  }
}
