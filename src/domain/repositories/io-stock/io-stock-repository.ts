import { IoStock } from "@domain/models/io-stock/io-stock";

export interface IoStockRepository {
  get(): Promise<IoStock[]>;
  create(stock: IoStock): Promise<void>;
}
