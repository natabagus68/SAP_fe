import { Entity } from "../_entity";

export interface ISparepartKategoryProps {
  id?: string | undefined;
  name: string;
}

export interface ISparepartKategory {
  unmarshall(): ISparepartKategoryProps;
}

export class SparepartKategory
  extends Entity<ISparepartKategoryProps>
  implements ISparepartKategory
{
  static create(props: ISparepartKategoryProps) {
    return new SparepartKategory(props);
  }
  unmarshall(): ISparepartKategoryProps {
    return {
      id: this.id,
      name: this.name,
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }

  get name(): string {
    return this._props.name;
  }
}
