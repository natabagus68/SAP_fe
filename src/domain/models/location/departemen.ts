import { Entity } from "../_entity";

export interface IDepartemenProps {
  id: string;
  name: string;
  section: string;
  // section_name: string;
}

export interface IDepartemen {
  unmarshall(): IDepartemenProps;
}

export class Departemen
  extends Entity<IDepartemenProps>
  implements IDepartemen
{
  static create(props: IDepartemenProps) {
    return new Departemen(props);
  }
  unmarshall(): IDepartemenProps {
    return {
      id: this.id,
      name: this.name,
      section: this.section,
      // section_name: this.section_name,
    };
  }

  get id(): string {
    return this._props.id;
  }
  get name(): string {
    return this._props.name;
  }
  get section(): string {
    return this._props.section;
  }
  // get section_name(): string {
  //   return this._props.section_name;
  // }
}
