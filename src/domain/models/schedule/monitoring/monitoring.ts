import { Entity } from "@domain/models/_entity";

export interface IMonitoringProps {
  id?: string | undefined;
  success?: boolean | undefined;
  message?: string | undefined;
  date: string;
  range: string;
  machine_name: string;
  section_name: string;
  type: string;
}

export interface IMonitoring {
  unmarshall(): IMonitoringProps;
}

export class Monitoring
  extends Entity<IMonitoringProps>
  implements IMonitoring
{
  static create(props: IMonitoringProps) {
    return new Monitoring(props);
  }
  unmarshall(): IMonitoringProps {
    return {
      id: this.id,
      success: this.success,
      message: this.message,
      date: this.date,
      range: this.range,
      machine_name: this.machine_name,
      section_name: this.section_name,
      type: this.type,
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }
  get success(): boolean | undefined {
    return this._props.success;
  }
  get message(): string | undefined {
    return this._props.message;
  }
  get date(): string {
    return this._props.date;
  }
  get range(): string {
    return this._props.range;
  }
  get machine_name(): string {
    return this._props.machine_name;
  }
  get section_name(): string {
    return this._props.section_name;
  }
  get type(): string {
    return this._props.type;
  }
}
