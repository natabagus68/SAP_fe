import { Entity } from "../_entity";

export interface ICorrectiveInventoryProps {
  name?: string | undefined;
  code?: string | undefined;
  quantity?: string | undefined;
  photo?: string | undefined;
}

export interface ICorrectiveInventory {
  unmarshall(): ICorrectiveInventoryProps;
}

export class CorrectiveInventory
  extends Entity<ICorrectiveInventoryProps>
  implements ICorrectiveInventory
{
  static create(props: ICorrectiveInventoryProps) {
    return new CorrectiveInventory(props);
  }
  unmarshall(): ICorrectiveInventoryProps {
    return {
      name: this.name,
      code: this.code,
      quantity: this.quantity,
      photo: this.photo,
    };
  }

  get name(): string | undefined {
    return this._props.name;
  }
  get code(): string | undefined {
    return this._props.code;
  }
  get quantity(): string | undefined {
    return this._props.quantity;
  }
  get photo(): string | undefined {
    return this._props.photo;
  }
}
