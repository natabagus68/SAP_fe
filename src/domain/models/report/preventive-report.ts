import { Entity } from "../_entity";

export interface IPreventiveReportProps {
  submesin_name?: string | undefined;
  parameter_name?: string | undefined;
  status_report?: string | undefined;
  parameter?: object | undefined;
}

export interface IPreventiveReport {
  unmarshall(): IPreventiveReportProps;
}

export class PreventiveReport
  extends Entity<IPreventiveReportProps>
  implements IPreventiveReport
{
  static create(props: IPreventiveReportProps) {
    return new PreventiveReport(props);
  }
  unmarshall(): IPreventiveReportProps {
    return {
      submesin_name: this.submesin_name,
      parameter_name: this.parameter_name,
      status_report: this.status_report,
      parameter: this.parameter,
    };
  }

  get submesin_name(): string | undefined {
    return this._props.submesin_name;
  }

  get parameter_name(): string | undefined {
    return this._props.parameter_name;
  }
  get parameter(): object | undefined {
    return this._props.parameter;
  }
  get status_report(): string | undefined {
    return this._props.status_report;
  }
}
