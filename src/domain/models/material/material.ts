import { Entity } from "../_entity";

export interface IMaterialProps {
  id?: string | undefined;
  materialNumber: string;
  materialDescription: string;
  machineId: string;
  machineName: string;
}

export interface IMaterial {
  unmarshall(): IMaterialProps;
}

export class Material extends Entity<IMaterialProps> implements IMaterial {
  static create(props: IMaterialProps) {
    return new Material(props);
  }
  unmarshall(): IMaterialProps {
    return {
      id: this.id,
      materialNumber: this.materialNumber,
      materialDescription: this.materialDescription,
      machineId: this.machineId,
      machineName: this.machineName,
    };
  }
  get id(): string | undefined {
    return this._props.id;
  }

  get materialNumber(): string {
    return this._props.materialNumber;
  }

  get materialDescription(): string {
    return this._props.materialDescription;
  }

  get machineId(): string {
    return this._props.machineId;
  }

  get machineName(): string {
    return this._props.machineName;
  }
}
