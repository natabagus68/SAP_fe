import { Entity } from "@domain/models/_entity";

export interface IMaintenanceProps {
  id?: string | undefined;
  type: string;
  machine: string;
  section: string;
}

export interface IMaintenance {
  unmarshall(): IMaintenanceProps;
}

export class Maintenance
  extends Entity<IMaintenanceProps>
  implements IMaintenance
{
  static create(props: IMaintenanceProps) {
    return new Maintenance(props);
  }
  unmarshall(): IMaintenanceProps {
    return {
      id: this.id,
      type: this.type,
      machine: this.machine,
      section: this.section,
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }
  get type(): string {
    return this._props.type;
  }
  get machine(): string {
    return this._props.machine;
  }
  get section(): string {
    return this._props.section;
  }
}
