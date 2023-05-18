import { Entity } from "../_entity";

export interface IInventoryKategoryByIdProps {
  id: string;
  name: string;
  no: string;
  availability: string;
  stock: number;
}

export interface IInventoryKategoryById {
  unmarshall(): IInventoryKategoryByIdProps;
}

export class InventoryKategoryById
  extends Entity<IInventoryKategoryByIdProps>
  implements IInventoryKategoryById
{
  static create(props: IInventoryKategoryByIdProps) {
    return new InventoryKategoryById(props);
  }
  unmarshall(): IInventoryKategoryByIdProps {
    return {
      id: this.id,
      name: this.name,
      no: this.no,
      availability: this.availability,
      stock: this.stock,
    };
  }

  get id(): string {
    return this._props.id;
  }
  get name(): string {
    return this._props.name;
  }
  get no(): string {
    return this._props.no;
  }
  get availability(): string {
    return this._props.availability;
  }
  get stock(): number {
    return this._props.stock
  }
}
