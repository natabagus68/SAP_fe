import { Entity } from "../_entity";
import { CorrectiveInventory } from "./corrective-inventory";

export interface ICorrectiveProps {
  id?: string | undefined;
  date: string;
  machine_no: string;
  pic: string;
  status?: string | undefined;
  success?: boolean | undefined;
  message?: string | undefined;

  machine_name?: string | undefined;
  section?: string | undefined;
  department?: string | undefined;
  damage_time?: string | undefined;

  repairing_type?: string | undefined;
  lifetime_estimate?: string | undefined;
  damage_type?: string | undefined;
  deskripsi?: string | undefined;

  documentationBeforePhoto?: string | undefined;
  documentationAfterPhoto?: string | undefined;

  documentationBeforeVideo?: string | undefined;
  documentationAfterVideo?: string | undefined;

  inventory?: CorrectiveInventory | undefined;
}

export interface ICorrective {
  unmarsshall(): ICorrectiveProps;
}

export class Corrective
  extends Entity<ICorrectiveProps>
  implements ICorrective
{
  static create(props: ICorrectiveProps) {
    return new Corrective(props);
  }
  unmarsshall(): ICorrectiveProps {
    return {
      id: this.id,
      success: this.success,
      message: this.message,
      date: this.date,
      machine_no: this.machine_no,
      pic: this.pic,
      status: this.status,

      machine_name: this.machine_name,
      section: this.section,
      department: this.department,
      damage_time: this.damage_time,

      repairing_type: this.repairing_type,
      lifetime_estimate: this.lifetime_estimate,
      damage_type: this.damage_type,
      deskripsi: this.deskripsi,

      documentationBeforePhoto: this.documentationBeforePhoto,
      documentationAfterPhoto: this.documentationAfterPhoto,
      documentationBeforeVideo: this.documentationBeforeVideo,
      documentationAfterVideo: this.documentationAfterVideo,

      inventory: this.inventory,
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
  get date(): string {
    return this._props.date;
  }
  get machine_no(): string {
    return this._props.machine_no;
  }
  get pic(): string {
    return this._props.pic;
  }
  get status(): string | undefined {
    return this._props.status;
  }
  get machine_name(): string | undefined {
    return this._props.machine_name;
  }
  get section(): string | undefined {
    return this._props.section;
  }
  get department(): string | undefined {
    return this._props.department;
  }
  get damage_time(): string | undefined {
    return this._props.damage_time;
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
  get documentationBeforePhoto(): string | undefined {
    return this._props.documentationBeforePhoto;
  }
  get documentationAfterPhoto(): string | undefined {
    return this._props.documentationAfterPhoto;
  }
  get documentationBeforeVideo(): string | undefined {
    return this._props.documentationBeforeVideo;
  }
  get documentationAfterVideo(): string | undefined {
    return this._props.documentationAfterVideo;
  }
  get inventory(): CorrectiveInventory | undefined {
    return this._props.inventory;
  }
}
