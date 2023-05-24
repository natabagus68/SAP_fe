import { IoStock } from "@domain/models/io-stock/io-stock";
import { IoStockRepository } from "@domain/repositories/io-stock/io-stock-repository";
import { api } from "../_api";

export class IoStockApiRepository
  implements IoStockRepository
{
  async get(): Promise<IoStock[]> {
    const { data } = await api.get(`sparepart/in-out`);
    return data?.data?.map((item) =>
      IoStock.create({
        type: item?.type,
        date: item?.date,
        part_no: item?.part_no,
        part_name: item?.part_name,
        qty: item?.qty,
        user: item?.user
      })
    );
  }
  async create(stock: IoStock): Promise<void> {
    try {
      const body = {
        type: stock.type,
        part_id: stock.part_id,
        qty: stock.qty
      }
      const { data } = await api.post("sparepart/in-out", body);
      return data.data;      
    } catch (error) {
      throw new Error(error);
    }
  }
}
