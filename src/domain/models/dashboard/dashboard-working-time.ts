import { Entity } from "../_entity";

export interface IDashboardWorkingTimeProps {
  working_time?: string;
  type?: string;
  count?: number;
  total?: number;
}

export interface IDashboardWorkingTime {
  unmarshall(): IDashboardWorkingTimeProps;
}

export class Dashboard extends Entity<IDashboardWorkingTimeProps> implements IDashboardWorkingTime {
  static create(props: IDashboardWorkingTimeProps) {
    return new Dashboard(props);
  }

  unmarshall(): IDashboardWorkingTimeProps {
    return {};
  }

  get working_time(): string | undefined {
    return this._props.working_time;
  }
  get type(): string | undefined {
    return this._props.type;
  }
  get count(): number | undefined {
    return this._props.count;
  }
  get total(): number | undefined {
    return this._props.total;
  }
}
