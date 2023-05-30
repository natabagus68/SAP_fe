import { Entity } from "../_entity";

export interface IDashboardTroubleStatisticProps {
  date?: string;
}

export interface IDashboardTroubleStatistic {
  unmarshall(): IDashboardTroubleStatisticProps;
}

export class DashboardTroubleStatistic
  extends Entity<IDashboardTroubleStatisticProps>
  implements IDashboardTroubleStatistic
{
  static create(props: IDashboardTroubleStatisticProps) {
    return new DashboardTroubleStatistic(props);
  }

  unmarshall(): IDashboardTroubleStatisticProps {
    return { date: this.date };
  }

  get date(): string | undefined {
    return this._props.date;
  }
}
