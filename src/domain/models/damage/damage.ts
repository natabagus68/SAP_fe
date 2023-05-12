import { Entity } from "../_entity";

export interface IDamageProps {
  id: string;
  type: string;
}

export interface IDamage {
  unmarshall(): IDamageProps;
}

export class Damage extends Entity<IDamageProps> implements IDamage {
  static create(props: IDamageProps) {
    return new Damage(props);
  }
  unmarshall(): IDamageProps {
    return { id: this.id, type: this.name };
  }
  get id(): string {
    return this._props.id;
  }
  get name(): string {
    return this._props.type;
  }
}
