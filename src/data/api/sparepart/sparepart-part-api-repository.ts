import { SparepartPart } from "@domain/models/sparepart/sparepart-part";
import { SparepartPartRepository } from "@domain/repositories/sparepart/sparepart-part-repository";
import { api } from "../_api";

export class SparepartApiRpository implements SparepartPartRepository {
  async get(): Promise<SparepartPart[]> {
    const { data } = await api.get(`sparepart`);
    return data?.data?.map((item) =>
      SparepartPart.create({
        id: item?.id,
        category_name: item?.category?.name || "-",
        item_code: item?.item_code || "-",
        part_name: item?.name || "-",
        availability_rack_code: item?.availability?.rack_code || "-",
        qty_stock: item?.qty_stock || "-",
      })
    );
  }
  async getDataById(id: string): Promise<SparepartPart> {
    try {
      const { data } = await api.get(`sparepart/${id}`);
      return SparepartPart.create({
        part_no: data.data?.part_no || "-",
        part_name: data.data?.name || "-",
        item_code: data.data?.item_code || "-",
        brand: data.data?.brand || "-",
        spec: data.data?.spec || "-",
        qty_stock: data.data?.qty_stock || 0,
        minimum_stock: data.data?.minimum_stock || 0,
        price: data.data?.price || 0,
        vendor_name: data.data?.vendor_name || "-",
        procurement_type: data.data?.procurement_type || "-",
        remark: data.data?.remark || "-",
        maintenance_rate: data.data?.maintenance_rate || "-",
        description: data.data?.description || "-",
        sparepart_image: data.data?.image_path || "-",
        drawing_image: data.data?.image_drawing_path || "-",
        alternative_part_id: data.data?.alternative_part?.id || "-",
        alternative_part_name: data.data?.alternative_part?.name || "-",
        delivery_time: data.data?.delivery_time || 0,
        arrival_warranty: data.data?.arrival_warranty || "-",
        usage_warranty: data.data?.usage_warranty || "-",
        status: data.data?.part_status || "-",
        category_id: data.data?.category?.id || "-",
        category_name: data.data?.category?.name || "-",
        availability_id: data.data?.availability?.id || "-",
        availability_rack_code: data.data?.availability?.rack_code || "-",
        inventory_id: data.data?.inventory?.id || "-",
        inventory_name: data.data?.inventory?.name || "-",
        uom_id: data.data?.uom_id || "-",
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  async create(part: SparepartPart): Promise<void> {
    try {
      const formData = new FormData();
      formData.append("name", part.part_name);
      formData.append("item_code", part.item_code);
      formData.append("brand", part.brand);
      formData.append("spec", part.spec);
      formData.append("qty_stock", String(part.qty_stock));
      formData.append("minimum_stock", String(part.minimum_stock));
      formData.append("price", String(part.price));
      formData.append("vendor_name", part.vendor_name);
      formData.append("procurement_type", part.procurement_type);
      formData.append("remark", part.remark);
      formData.append("maintenance_rate", part.maintenance_rate);
      formData.append("description", part.description);
      formData.append("sparepart_image", part.sparepart_image[0]);
      formData.append("drawing_image", part.drawing_image[0]);
      formData.append("alternative_part_id", part.alternative_part_id);
      formData.append("delivery_time", String(part.delivery_time));
      formData.append("arrival_warranty", part.arrival_warranty);
      formData.append("usage_warranty", part.usage_warranty);
      formData.append("status", part.status);
      formData.append("category_id", part.category_id);
      formData.append("availability_id", part.availability_id);
      formData.append("inventory_id", part.inventory_id);
      formData.append("uom_id", part.uom_id);
      formData.append("part_no", part.part_no);
      const { data } = await api.post("sparepart", formData);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
