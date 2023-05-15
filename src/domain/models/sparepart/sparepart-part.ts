import React, { Component } from "react";
import { Entity } from "../_entity";

export interface ISparepartProps {
  id: string;
  kategory: string;
  item_code: string;
  part_name: string;
  availability: string;
  stock: number;
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
      kategory: this.kategory,
      item_code: this.item_code,
      part_name: this.part_name,
      availability: this.availability,
      stock: this.stock,
    };
  }

  get id(): string {
    return this._props.id;
  }

  get kategory(): string {
    return this._props.kategory;
  }
  get item_code(): string {
    return this._props.item_code;
  }
  get part_name(): string {
    return this._props.part_name;
  }
  get availability(): string {
    return this._props.availability;
  }
  get stock(): number {
    return this._props.stock;
  }
}
