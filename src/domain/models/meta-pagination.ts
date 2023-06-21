import { Entity } from "@domain/models/_entity";

export interface IMetaPaginationProps {
  page: number;
  limit: number;
  totalRows: number;
  totalPages: number;
  prevPage: number;
  nextPage: number;
}

export interface IMetaPagination {
  unmarshall(): IMetaPaginationProps;
}

export class MetaPagination
  extends Entity<IMetaPaginationProps>
  implements IMetaPagination
{
  static create(props: IMetaPaginationProps) {
    return new MetaPagination(props);
  }
  unmarshall(): IMetaPaginationProps {
    return {
      page: this.page,
      limit: this.limit,
      totalRows: this.totalRows,
      totalPages: this.totalPages,
      prevPage: this.prevPage,
      nextPage: this.nextPage,
    };
  }

  get page(): number {
    return this._props.page;
  }
  get limit(): number {
    return this._props.limit;
  }
  get totalRows(): number {
    return this._props.totalRows;
  }
  get totalPages(): number {
    return this._props.totalPages;
  }
  get prevPage(): number {
    return this._props.prevPage;
  }
  get nextPage(): number {
    return this._props.nextPage;
  }
}
