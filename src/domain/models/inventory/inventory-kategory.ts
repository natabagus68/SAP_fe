import { Entity } from "../_entity";

export interface IInventoryKategoryProps {
  id: string;
  name: string;
  icon: string;
}

export interface IInventoryKategory {
  unmarshall(): IInventoryKategoryProps;
}

export class InventoryKategory
  extends Entity<IInventoryKategoryProps>
  implements IInventoryKategory
{
  static create(props: IInventoryKategoryProps) {
    return new InventoryKategory(props);
  }
  unmarshall(): IInventoryKategoryProps {
    return {
      id: this.id,
      name: this.name,
      icon: this.icon
    };
  }

  get id(): string {
    return this._props.id;
  }
  get name(): string {
    return this._props.name;
  }
  get icon(): string {
    return this._props.icon;
  }
}
