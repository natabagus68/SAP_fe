import { Entity } from "../_entity";

export interface IChecklistReportProps {
  submesin_name?: string | undefined;
  parameter_name?: string | undefined;
  indikator?: string | undefined;
  status_report?: string | undefined;
  deskripsi?: string | undefined;

  parameter?: object | undefined;
}

export interface IChecklistReport {
  unmarshall(): IChecklistReportProps;
}

export class ChecklistReport
  extends Entity<IChecklistReportProps>
  implements IChecklistReport
{
  static create(props: IChecklistReportProps) {
    return new ChecklistReport(props);
  }
  unmarshall(): IChecklistReportProps {
    return {
      submesin_name: this.submesin_name,
      parameter_name: this.parameter_name,
      indikator: this.indikator,
      status_report: this.status_report,
      deskripsi: this.deskripsi,

      parameter: this.parameter,
    };
  }

  get submesin_name(): string | undefined {
    return this._props.submesin_name;
  }

  get parameter_name(): string | undefined {
    return this._props.parameter_name;
  }
  get indikator(): string | undefined {
    return this._props.indikator;
  }
  get status_report(): string | undefined {
    return this._props.status_report;
  }
  get deskripsi(): string | undefined {
    return this._props.deskripsi;
  }

  get parameter(): object | undefined {
    return this._props.parameter;
  }
}
