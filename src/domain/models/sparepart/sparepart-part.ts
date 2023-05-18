import React, { Component } from "react";
import { Entity } from "../_entity";

export interface ISparepartProps {
  id?: string | undefined;
  part_no?: string | undefined;
  item_code?: string | undefined;
  part_name?: string | undefined;
  brand?: string | undefined;
  spec?: string | undefined;
  qty_stock?: number | undefined;
  minimum_stock?: number | string;
  price?: number | string;
  vendor_name?: string | undefined;
  procurement_type?: string | undefined;
  remark?: string | undefined;
  maintenance_rate?: string | undefined;
  description?: string | undefined;
  sparepart_image?: string | undefined;
  drawing_image?: string | undefined;
  alternative_part_id?: string | undefined;
  alternative_part_name?: string | undefined;
  delivery_time?: number | string;
  arrival_warranty?: string | undefined;
  usage_warranty?: string | undefined;
  status?: string | undefined;
  category_id?: string | undefined;
  category_name?: string | undefined;
  availability_id?: string | undefined;
  availability_rack_code?: string | undefined;
  inventory_id?: string | undefined;
  inventory_name?: string | undefined;
  uom_id?: string | undefined;
}

export interface ISparepart {
  unmarshall(): ISparepartProps;
}

export class SparepartPart
  extends Entity<ISparepartProps>
  implements ISparepart
{
  static create(props: ISparepartProps) {
    return new SparepartPart(props);
  }
  unmarshall(): ISparepartProps {
    return {
      id: this.id,
      part_no: this.part_no,
      item_code: this.item_code,
      part_name: this.part_name,
      brand: this.brand,
      spec: this.spec,
      qty_stock: this.qty_stock,
      minimum_stock: this.minimum_stock,
      price: this.price,
      vendor_name: this.vendor_name,
      procurement_type: this.procurement_type,
      remark: this.remark,
      maintenance_rate: this.maintenance_rate,
      description: this.description,
      sparepart_image: this.sparepart_image,
      drawing_image: this.drawing_image,
      alternative_part_id: this.alternative_part_id,
      alternative_part_name: this.alternative_part_name,
      delivery_time: this.delivery_time,
      arrival_warranty: this.arrival_warranty,
      usage_warranty: this.usage_warranty,
      status: this.status,
      category_id: this.category_id,
      category_name: this.category_name,
      availability_id: this.availability_id,
      availability_rack_code: this.availability_rack_code,
      inventory_id: this.inventory_id,
      inventory_name: this.inventory_name,
      uom_id: this.uom_id
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }
  get part_no(): string | undefined {
    return this._props.part_no;
  }
  get item_code(): string | undefined {
    return this._props.item_code;
  }
  get part_name(): string | undefined {
    return this._props.part_name;
  }
  get brand(): string | undefined {
    return this._props.brand;
  }
  get spec(): string | undefined {
    return this._props.spec;
  }
  get qty_stock(): number | undefined {
    return this._props.qty_stock;
  }
  get minimum_stock(): number | string {
    return this._props.minimum_stock;
  }
  get price(): number | string {
    return this._props.price;
  }
  get vendor_name(): string | undefined {
    return this._props.vendor_name;
  }
  get procurement_type(): string | undefined {
    return this._props.procurement_type;
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
  get sparepart_image(): string | undefined {
    return this._props.sparepart_image;
  }
  get drawing_image(): string | undefined {
    return this._props.drawing_image;
  }
  get alternative_part_id(): string | undefined {
    return this._props.alternative_part_id;
  }
  get alternative_part_name(): string | undefined {
    return this._props.alternative_part_name;
  }
  get delivery_time(): number | string {
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
  get category_id(): string | undefined {
    return this._props.category_id;
  }
  get category_name(): string | undefined {
    return this._props.category_name;
  }
  get availability_id(): string | undefined {
    return this._props.availability_id;
  }
  get availability_rack_code(): string | undefined {
    return this._props.availability_rack_code;
  }
  get inventory_id(): string | undefined {
    return this._props.inventory_id;
  }
  get inventory_name(): string | undefined {
    return this._props.inventory_name;
  }
  get uom_id(): string | undefined {
    return this._props.uom_id;
  }
}
