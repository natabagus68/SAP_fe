import { Entity } from "../_entity";

export interface ICorrectiveReportProps {
  repairing_type?: string | undefined;
  lifetime_estimate?: string | undefined;
  damage_type?: string | undefined;
  deskripsi?: string | undefined;
}

export interface ICorrectiveReport {
  unmarshall(): ICorrectiveReportProps;
}

export class CorrectiveReport
  extends Entity<ICorrectiveReportProps>
  implements ICorrectiveReport
{
  static create(props: ICorrectiveReportProps) {
    return new CorrectiveReport(props);
  }
  unmarshall(): ICorrectiveReportProps {
    return {
      repairing_type: this.repairing_type,
      lifetime_estimate: this.lifetime_estimate,
      damage_type: this.damage_type,
      deskripsi: this.deskripsi,
    };
  }

  get repairing_type(): string | undefined {
    return this._props.repairing_type;
  }

  get lifetime_estimate(): string | undefined {
    return this._props.lifetime_estimate;
  }
  get damage_type(): string | undefined {
    return this._props.damage_type;
  }
  get deskripsi(): string | undefined {
    return this._props.deskripsi;
  }
}
