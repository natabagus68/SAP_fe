import { Entity } from "../_entity";

export interface ISparepartAvailabilityProps {
  id?: string | undefined;
  rack_code: string;
  section_id?: string | undefined;
  section_name?: string | undefined;
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
    return {
      id: this.id,
      rack_code: this.rack_code,
      section_id: this.section_id,
      section_name: this.section_name,
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }
  get rack_code(): string {
    return this._props.rack_code;
  }
  get section_id(): string | undefined {
    return this._props.section_id;
  }
  get section_name(): string | undefined {
    return this._props.section_name;
  }
}
