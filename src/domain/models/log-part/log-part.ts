import { Entity } from "../_entity";

export interface ILogPartProps {
  id?: string | undefined;
  date: string;
  category: string;
  no: string;
  name: string;
  quantity: number;
  manpower: string;
  availability?: string;
  rack?: string | undefined;
  code?: string | undefined;
  brand?: string | undefined;
  spec?: string | undefined;
  stock?: number | undefined;
  min_stock?:number | undefined;
  cost?: number | undefined;
  vendor?: string | undefined;
  procurement?: string | undefined;
  remark?: string | undefined;
  maintenance_rate?: string | undefined;
  description?: string | undefined;
  image_path?: string | undefined;
  image_drawing_path?: string | undefined;
  delivery_time?: number | undefined;
  arrival_warranty?:string | undefined;
  usage_warranty?: string | undefined;
  status?: string | undefined;
  alternative_part?: string | undefined;
  usage_machine_no?: string | undefined;
  usage_machine_name?: string | undefined;
  uom?: string | undefined;
  inventory_category?: string | undefined
  usage_maintenance_type?: string | undefined;
  usage_description?: string | undefined;
}

export interface ILogPart {
  unmarshall(): ILogPartProps;
}

export class LogPart
  extends Entity<ILogPartProps>
  implements ILogPart
{
  static create(props: ILogPartProps) {
    return new LogPart(props);
  }
  unmarshall(): ILogPartProps {
    return {
      id: this.id,
      date: this.date,
      category: this.category,
      name: this.name,
      no: this.no,
      quantity: this.quantity,
      manpower: this.manpower,
      rack: this.rack,
      code: this.code,
      brand: this.brand,
      spec: this.spec,
      stock: this.stock,
      min_stock:this.min_stock,
      cost: this.cost,
      vendor: this.vendor,
      procurement: this.procurement,
      remark: this.remark,
      maintenance_rate: this.maintenance_rate,
      description: this.description,
      image_path: this.image_path,
      image_drawing_path: this.image_drawing_path,
      delivery_time: this.delivery_time,
      arrival_warranty:this.arrival_warranty,
      usage_warranty: this.usage_warranty,
      status: this.status,
      alternative_part: this.alternative_part,
      usage_machine_name:this.usage_machine_name,
      availability: this.availability,
      usage_machine_no: this.usage_machine_no,
      uom: this.uom,
      inventory_category: this.inventory_category,
      usage_description: this.usage_description,
      usage_maintenance_type: this.usage_maintenance_type
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }
  get date(): string {
    return this._props.date;
  }
  get category(): string {
    return this._props.category;
  }
  get name(): string {
    return this._props.name;
  }
  get no(): string {
    return this._props.no;
  }
  get quantity(): number {
    return this._props.quantity;
  }
  get manpower(): string {
    return this._props.manpower;
  }
  get rack(): string | undefined {
    return this._props.rack;
  }
  get code(): string | undefined {
    return this._props.code;
  }
  get brand(): string | undefined {
    return this._props.brand;
  }
  get spec(): string | undefined {
    return this._props.spec;
  }
  get stock(): number | undefined {
    return this._props.stock;
  }
  get min_stock(): number | undefined {
    return this._props.min_stock;
  }
  get cost(): number | undefined {
    return this._props.cost;
  }
  get vendor(): string | undefined {
    return this._props.vendor;
  }
  get procurement(): string | undefined {
    return this._props.procurement;
  }
  get remark(): string | undefined {
    return this._props.remark;
  }
  get maintenance_rate(): string | undefined {
    return this._props.maintenance_rate;
  }
  get description(): string | undefined {
    return this._props.description;
  }
  get image_path(): string | undefined {
    return this._props.image_path;
  }
  get image_drawing_path(): string | undefined {
    return this._props.image_drawing_path;
  }
  get delivery_time(): number | undefined {
    return this._props.delivery_time;
  }
  get arrival_warranty(): string | undefined {
    return this._props.arrival_warranty;
  }
  get usage_warranty(): string | undefined {
    return this._props.usage_warranty;
  }
  get status(): string | undefined {
    return this._props.status;
  }
  get alternative_part(): string | undefined {
    return this._props.alternative_part;
  }
  get usage_machine_no(): string | undefined {
    return this._props.usage_machine_no;
  }
  get usage_machine_name(): string | undefined {
    return this._props.usage_machine_name;
  }
  get availability(): string | undefined {
    return this._props.availability;
  }
  get uom(): string | undefined {
    return this._props.uom;
  }
  get inventory_category(): string | undefined {
    return this._props.inventory_category;
  }
  get usage_maintenance_type(): string | undefined {
    return this._props.usage_maintenance_type;
  }
  get usage_description(): string | undefined {
    return this._props.usage_description;
  }
}
