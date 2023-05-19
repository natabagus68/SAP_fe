import React, { Component } from "react";
import { Entity } from "../_entity";

export interface IAccessProps {
  id?: string | undefined;
  name: string;
}

export interface IAccess {
  unmarshall(): IAccessProps;
}

export class Access extends Entity<IAccessProps> implements IAccess {
  static create(props: IAccessProps) {
    return new Access(props);
  }
  unmarshall(): IAccessProps {
    return {
      id: this.id,
      name: this.name,
    };
  }

  get id(): string | undefined {
    return this._props.id;
  }
  get name(): string {
    return this._props.name;
  }
}
