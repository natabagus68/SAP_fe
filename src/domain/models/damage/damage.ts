import { Entity } from "../_entity";

export interface IDamageProps {
  id?: string | undefined;
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
    return {
      id: this.id,
      type: this.type,
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }
  get type(): string {
    return this._props.type;
  }
}
