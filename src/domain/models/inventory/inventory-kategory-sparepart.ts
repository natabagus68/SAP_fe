import { Entity } from "../_entity";

export interface IInventoryKategorySparepartProps {
  id: string;
  category: {
    name: string
  };
  availability: {
    rack_code: string
  };
  inventory: {
    name: string
  };
  part_no: string;
  item_code: string;
  name: string;
  brand: string;
  spec: string;
  qty_stock: number;
  minimum_stock:number;
  price: number;
  vendor_name: string;
  procurement_type: string;
  remark: string;
  maintenance_rate: string;
  description: string;
  image_path: string;
  image_drawing_path: string;
  delivery_time: number;
  arrival_warranty:string;
  usage_warranty: string;
  part_status?: string;
}

export interface IInventoryKategorySparepart {
  unmarshall(): IInventoryKategorySparepartProps;
}

export class InventoryKategorySparepart
  extends Entity<IInventoryKategorySparepartProps>
  implements IInventoryKategorySparepart
{
  static create(props: IInventoryKategorySparepartProps) {
    return new InventoryKategorySparepart(props);
  }
  unmarshall(): IInventoryKategorySparepartProps {
    return {
      id: this.id,
      category: {
        name : this.category_name
      },
      availability: {
        rack_code: this.availability_rack_code
      },
      inventory: {
        name: this.inventory_name
      },
      part_no: this.part_no,
      item_code: this.item_code,
      name: this.name,
      brand: this.brand,
      spec: this.spec,
      qty_stock: this.qty_stock,
      minimum_stock:this.minimum_stock,
      price: this.price,
      vendor_name: this.vendor_name,
      procurement_type: this.procurement_type,
      remark: this.remark,
      maintenance_rate: this.maintenance_rate,
      description: this.description,
      image_path: this.image_path,
      image_drawing_path: this.image_drawing_path,
      delivery_time: this.delivery_time,
      arrival_warranty:this.arrival_warranty,
      usage_warranty: this.usage_warranty,
      part_status: this.part_status
    };
  }

  get id(): string {
    return this._props.id;
  }
  get category_name(): string {
    return this._props.category.name;
  }
  get availability_rack_code(): string {
    return this._props.availability.rack_code;
  }
  get inventory_name(): string {
    return this._props.inventory.name;
  }
  get part_no(): string {
    return this._props.part_no;
  }
  get item_code(): string {
    return this._props.item_code;
  }
  get name(): string {
    return this._props.name;
  }
  get brand(): string {
    return this._props.brand;
  }
  get spec(): string {
    return this._props.spec;
  }
  get qty_stock(): number {
    return this._props.qty_stock;
  }
  get minimum_stock(): number {
    return this._props.minimum_stock;
  }
  get price(): number {
    return this._props.price;
  }
  get vendor_name(): string {
    return this._props.vendor_name;
  }
  get procurement_type(): string {
    return this._props.procurement_type;
  }
  get remark(): string {
    return this._props.remark;
  }
  get maintenance_rate(): string {
    return this._props.maintenance_rate;
  }
  get description(): string {
    return this._props.description;
  }
  get image_path(): string {
    return this._props.image_path;
  }
  get image_drawing_path(): string {
    return this._props.image_drawing_path;
  }
  get delivery_time(): number {
    return this._props.delivery_time;
  }
  get arrival_warranty(): string {
    return this._props.arrival_warranty;
  }
  get usage_warranty(): string {
    return this._props.usage_warranty;
  }
  get part_status(): string | undefined {
    return this._props.part_status;
  }
}
