import { Corrective } from "@domain/models/report/corrective";
import { CorrectiveRepository } from "@domain/repositories/report/corrective-repository";
import { api } from "../_api";
import { CorrectiveDocumentation } from "@domain/models/report/corrective-documentation";
import { CorrectiveInventory } from "@domain/models/report/corrective-inventory";

export class CorrectiveApiRepository implements CorrectiveRepository {
  async get(
    date: string,
    status: string,
    section_id: string
  ): Promise<Corrective[]> {
    try {
      const { data } = await api.get(
        `report/corrective?date=${date || ""}&status=${
          status || ""
        }&section_id=${section_id || ""}`
      );
      return data.data?.map((item) =>
        Corrective.create({
          success: true,
          message: "Message success",
          id: item.id,
          date: item.date,
          machine_no: item.machine_no,
          pic: item.pic,
        })
      );
    } catch (error) {
      return [];
    }
  }

  async getDataById(id: string): Promise<Corrective> {
    try {
      const { data } = await api.get(`report/corrective/${id}`);
      console.log(data, "apirepogetbyId");
      return Corrective.create({
        machine_no: data.data?.detail?.machine?.no || "-",
        machine_name: data.data?.detail?.machine?.name || "-",
        pic: data.data?.detail?.pic || "-",
        // status: data.data?.detail?.status || "-",
        date: data.data?.detail?.date || "-",
        section: data.data?.detail?.section || "-",
        department: data.data?.detail?.department || "-",
        damage_time: data.data?.detail?.damaged_time || "-",

        repairing_type: data.data?.report?.repairing_type || "",
        lifetime_estimate: data.data?.report?.lifetime_estimate || "",
        damage_type: data.data?.report?.damage_type || "",
        deskripsi: data.data?.report?.description || "",

        // documentation: data.data?.documentation?.before.map((item) =>
        //   CorrectiveDocumentation.create({
        //     photo: item.photo || "-",
        //     video: item.video || "-",
        //   })
        // ),

        inventory: data.data?.inventory.map((item) =>
          CorrectiveInventory.create({
            name: item.name || "-",
            code: item.code || "-",
            quantity: item.quantity || "-",
            photo: item.photo || "-",
          })
        ),
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
