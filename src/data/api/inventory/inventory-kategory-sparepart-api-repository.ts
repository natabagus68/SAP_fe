import { InventoryKategorySparepart } from "@domain/models/inventory/inventory-kategory-sparepart";
import { InventoryKategorySparepartRepository } from "@domain/repositories/inventory/inventory-kategory-sparepart-repository";
import { api } from "../_api";

export class InventoryKategorySparepartApiRepository
  implements InventoryKategorySparepartRepository
{
  async getDetail(id: string): Promise<InventoryKategorySparepart> {
    const { data } = await api.get(`sparepart/${id}`);
    return InventoryKategorySparepart.create({
      id: data.data?.id,
      item_code: data.data?.item_code,
      part_no: data.data?.part_no,
      name: data.data?.name,
      brand: data.data?.brand,
      spec: data.data?.spec,
      qty_stock: data.data?.qty_stock,
      minimum_stock:data.data?.minimum_stock,
      vendor_name:data.data?.vendor_name,
      price: data.data?.price,
      procurement_type: data.data?.procurement_type,
      remark: data.data?.remark,
      maintenance_rate: data.data?.maintenance_rate,
      description: data.data?.description,
      delivery_time: data.data?.delivery_time,
      usage_warranty: data.data?.usage_warranty,
      part_status: data.data?.part_status,
      category: {
        name: data.data?.category.name
      },
      availability: {
        rack_code: data.data?.availability.rack_code
      },
      inventory: {
        name: data.data?.inventory.name
      },
      image_path: data.data?.image_path,
      image_drawing_path: data.data?.image_drawing_path,
      arrival_warranty: data.data?.arrival_warranty
    })
  }
}
