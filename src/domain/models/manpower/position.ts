import { Entity } from "../_entity";

export interface IPositionProps {
  id?: string | undefined;
  name: string;
  level?: number | undefined;
}

export interface IPosition {
  unmarshall(): IPositionProps;
}

export class Position extends Entity<IPositionProps> implements IPosition {
  static create(props: IPositionProps) {
    return new Position(props);
  }
  unmarshall(): IPositionProps {
    return {
      id: this.id,
      name: this.name,
      level: this.level,
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }
  get name(): string {
    return this._props.name;
  }
  get level(): number | undefined {
    return this._props.level;
  }
}
