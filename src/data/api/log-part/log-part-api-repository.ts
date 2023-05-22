import { LogPart } from "@domain/models/log-part/log-part";
import { LogPartRepository } from "@domain/repositories/log-part/log-part-repository";
import { api } from "../_api";

export class LogPartApiRepository
  implements LogPartRepository
{
  async get(): Promise<LogPart[]> {
    const { data } = await api.get(`sparepart/log`);
    return data?.data?.map((item) =>
      LogPart.create({
        id: item?.id,
        date: item?.date,
        category: item?.category,
        name: item?.name,
        no: item?.no,
        quantity: item?.quantity,
        manpower: item?.manpower
      })
    );
  }
  async getById(id: string): Promise<LogPart> {
    const res = await api.get(`sparepart/log/${id}`)
    const { data } = res.data
    return LogPart.create({      
      category: data.part?.type_category,
      name: data.part?.part_name,
      no: data.part?.part_no,
      quantity: data.usage?.quantity, 
      rack: data.part?.rack,
      availability: data.part?.availability,
      code: data.part?.code,
      brand: data.part?.brand,
      spec: data.part?.spec,
      uom: data.part?.uom,
      stock: data.part?.stock,
      min_stock:data.part?.min_stock,
      vendor:data.part?.vendor,
      cost: data.part?.cost,
      procurement: data.part?.procurement,
      remark: data.part?.remark,
      alternative_part: data.part?.alternative_part,
      maintenance_rate: data.part?.maintenance_rate,
      description: data.part?.description,
      inventory_category: data.part?.inventory_category,
      delivery_time: data.part?.delivery_time,
      usage_warranty: data.part?.usage_warranty,
      status: data.part?.status,
      image_path: data.part?.image_path,
      image_drawing_path: data.part?.image_drawing_path,
      arrival_warranty: data.part?.arrival_warranty,
      date: data.usage?.date,
      manpower: data.usage?.manpower,
      usage_maintenance_type: data.usage?.maintenance_type,
      usage_machine_no: data.usage?.machine_no,
      usage_machine_name: data.usage?.machine_name,
      usage_description: data.usage?.description
    })
  }
}
