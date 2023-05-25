import { Entity } from "@domain/models/_entity";
import { Schedules } from "./schedules";
import { MetaPagination } from "@domain/models/meta-pagination";

export interface ICalendarProps {
  id?: string | undefined;
  success?: boolean | undefined;
  message?: string | undefined;
  schedules?: Schedules | undefined;
  machineId?: string | undefined;
  sectionId?: string | undefined;
  activeRange?: string | undefined;
  startDate?: string | undefined;
  type?: string | undefined;
  meta?: MetaPagination | undefined;

  // machine_name?: string | undefined;
  // section_name?: string | undefined;
  // maintenance?: Array<ICalendar> | undefined;
  // remark?: Array<ICalendar> | undefined;
}

export interface ICalendar {
  unmarshall(): ICalendarProps;
}

export class Calendar extends Entity<ICalendarProps> implements ICalendar {
  static create(props: ICalendarProps) {
    return new Calendar(props);
  }
  unmarshall(): ICalendarProps {
    return {
      id: this.id,
      success: this.success,
      message: this.message,
      schedules: this.schedules,
      machineId: this.machineId,
      sectionId: this.sectionId,
      activeRange: this.activeRange,
      startDate: this.startDate,
      type: this.type,
      meta: this.meta,
      // machine_name: this.machine_name,
      // section_name: this.section_name,
      // maintenance: this.maintenance,
      // remark: this.remark,
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
  get schedules(): Schedules | undefined {
    return this._props.schedules;
  }
  get machineId(): string | undefined {
    return this._props.machineId;
  }
  get sectionId(): string | undefined {
    return this._props.sectionId;
  }
  get activeRange(): string | undefined {
    return this._props.activeRange;
  }
  get startDate(): string | undefined {
    return this._props.startDate;
  }
  get type(): string | undefined {
    return this._props.type;
  }
  get meta(): MetaPagination | undefined {
    return this._props.meta;
  }
  // get machine_name(): string | undefined {
  //   return this._props.machine_name;
  // }
  // get section_name(): string | undefined {
  //   return this._props.section_name;
  // }
  // get maintenance(): Array<ICalendar> | undefined {
  //   return this._props.maintenance;
  // }
  // get remark(): Array<ICalendar> | undefined {
  //   return this._props.remark;
  // }
}
