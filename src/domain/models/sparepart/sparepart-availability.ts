import { Entity } from "../_entity";

export interface ISparepartAvailabilityProps {
  id: string;
  rak: string;
  section: string;
}

export interface ISparepartAvailability {
  unmarshall(): ISparepartAvailabilityProps;
}

export class SparepartAvailability
  extends Entity<ISparepartAvailabilityProps>
  implements ISparepartAvailability
{
  static create(props: ISparepartAvailabilityProps) {
    return new SparepartAvailability(props);
  }
  unmarshall(): ISparepartAvailabilityProps {
    return { id: this.id, rak: this.rak, section: this.section };
  }

  get id(): string {
    return this._props.id;
  }
  get rak(): string {
    return this._props.rak;
  }
  get section(): string {
    return this._props.section;
  }
}
