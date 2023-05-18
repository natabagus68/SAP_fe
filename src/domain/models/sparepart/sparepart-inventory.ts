import { Entity } from "../_entity";

export interface ISparepartInventoryProps {
  id?: string | undefined;
  name: string;
  icon: string;
  status: string;
}

export interface ISparepartInventory {
  unmarshall(): ISparepartInventoryProps;
}

export class SparepartInventory
  extends Entity<ISparepartInventoryProps>
  implements ISparepartInventory
{
  static create(props: ISparepartInventoryProps) {
    return new SparepartInventory(props);
  }
  unmarshall(): ISparepartInventoryProps {
    return {
      id: this.id,
      name: this.name,
      icon: this.icon,
      status: this.status,
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }
  get name(): string {
    return this._props.name;
  }
  get icon(): string {
    return this._props.icon;
  }
  get status(): string {
    return this._props.status;
  }
}
