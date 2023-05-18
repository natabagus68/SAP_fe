import { Entity } from "@domain/models/_entity";

export interface ICalendarProps {
  id?: string | undefined;
  success?: boolean | undefined;
  message?: string | undefined;
  type?: string | undefined;
  machineId?: string | undefined;
  sectionId?: string | undefined;
  activeRange?: string | undefined;
  startDate?: string | undefined;
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
      type: this.type,
      machineId: this.machineId,
      sectionId: this.sectionId,
      activeRange: this.activeRange,
      startDate: this.startDate,
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }
  get type(): string {
    return this._props.type;
  }
  get machineId(): string {
    return this._props.machineId;
  }
  get sectionId(): string {
    return this._props.sectionId;
  }
  get activeRange(): string {
    return this._props.activeRange;
  }
  get startDate(): string {
    return this._props.startDate;
  }
  get success(): boolean | undefined {
    return this._props.success;
  }
  get message(): string | undefined {
    return this._props.message;
  }
}
