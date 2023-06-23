import { Entity } from "../_entity";

export interface IMonitoringProps {
  id?: string | undefined;
  qrTagNumber: string;
  qrTagNumberDetail: string;
  qtyQrTag: string;
  beforeCastingAt: string;
  castingAt: string;
  beforeMachiningAt: string;
  afterMachiningAt: string;
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
      qrTagNumber: this.qrTagNumber,
      qrTagNumberDetail: this.qrTagNumberDetail,
      qtyQrTag: this.qtyQrTag,
      beforeCastingAt: this.beforeCastingAt,
      castingAt: this.castingAt,
      beforeMachiningAt: this.beforeMachiningAt,
      afterMachiningAt: this.afterMachiningAt,
    };
  }
  get id(): string | undefined {
    return this._props.id;
  }
  get qrTagNumber(): string {
    return this._props.qrTagNumber;
  }
  get qrTagNumberDetail(): string {
    return this._props.qrTagNumberDetail;
  }
  get qtyQrTag(): string {
    return this._props.qtyQrTag;
  }
  get beforeCastingAt(): string {
    return this._props.beforeCastingAt;
  }
  get castingAt(): string {
    return this._props.castingAt;
  }
  get beforeMachiningAt(): string {
    return this._props.beforeMachiningAt;
  }
  get afterMachiningAt(): string {
    return this._props.afterMachiningAt;
  }
}
