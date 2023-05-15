import { Entity } from "../_entity";

export interface IUnitOfMeasureProps {
  id: string;
  name: string;
}

export interface IUnitOfMeasure {
  unmarshall(): IUnitOfMeasureProps;
}

export class UnitOfMeasure
  extends Entity<IUnitOfMeasureProps>
  implements IUnitOfMeasure
{
  static create(props: IUnitOfMeasureProps) {
    return new UnitOfMeasure(props);
  }
  unmarshall(): IUnitOfMeasureProps {
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
