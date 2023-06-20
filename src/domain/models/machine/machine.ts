import { Entity } from "../_entity";

export interface IMachineProps {
  id?: string | undefined;
  name: string;
  description: string;
  machineCode: string;
  location: string;
}

export interface IMachine {
  unmarshall(): IMachineProps;
}

export class Machine extends Entity<IMachineProps> implements IMachine {
  static create(props: IMachineProps) {
    return new Machine(props);
  }
  unmarshall(): IMachineProps {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      machineCode: this.machineCode,
      location: this.location,
    };
  }
  get id(): string | undefined {
    return this._props.id;
  }

  get name(): string {
    return this._props.name;
  }

  get description(): string {
    return this._props.description;
  }

  get machineCode(): string {
    return this._props.machineCode;
  }
  get location(): string {
    return this._props.location;
  }
}
