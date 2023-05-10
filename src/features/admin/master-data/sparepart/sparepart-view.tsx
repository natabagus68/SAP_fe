import { Breadcrumbs } from "@common/components";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import EditIcon from "@common/components/icons-new/EditIcon";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import PlusIcon from "@common/components/icons-new/PlusIcon";
import TrashIcon from "@common/components/icons-new/TrashIcon";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import ModalDelete from "@common/components/modals/ModalDelete";
import ModalSuccess from "@common/components/modals/ModalSeccess";
import useSparepart from "./sparepart-model";
import { Toggle } from "@common/components";
import settings from "../../../../assets/svg/settings.svg";

export default function SparepartView() {
  const sparepart = useSparepart();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <ModalDelete
        open={sparepart.openModalDelete}
        setOpen={sparepart.setOpenModalDelete}
        setOpenConfirm={sparepart.setOpenModalConfirm}
      />
      <ModalConfirm
        open={sparepart.openModalConfirm}
        setOpen={sparepart.setOpenModalConfirm}
        setOpenSuccess={sparepart.setOpenModalSuccess}
        cb={(setIsLoading) => {
          setTimeout(() => {
            setIsLoading({ loading: false, exec: true });
            if (sparepart.type == "sparepart") {
              console.log("delete sparepart");
            } else {
              console.log("delete posisi");
            }
          }, 3000);
        }}
      />
      <ModalSuccess
        open={sparepart.openModalSuccess}
        setOpen={sparepart.setOpenModalSuccess}
      />
      <Breadcrumbs
        items={[
          "Master Data",
          `${sparepart.type[0].toLocaleUpperCase()}${sparepart.type.slice(1)}`,
        ]}
      />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">Sparepart</span>
        </div>
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <div className="flex gap-[32px]">
            <button
              className={`${
                sparepart.type == "part"
                  ? "text-[#20519F] border-b border-[#20519F]"
                  : "text-[#514E4E]"
              } text-base font-semibold pb-2`}
              onClick={() => sparepart.navigate("./../../part/sparepart")}
            >
              Part
            </button>
            <button
              className={`${
                sparepart.type == "kategory-inventory"
                  ? "text-[#20519F] border-b border-[#20519F]"
                  : "text-[#514E4E]"
              } text-base font-semibold pb-2`}
              onClick={() =>
                sparepart.navigate("./../../kategory-inventory/sparepart")
              }
            >
              Kategory Inventory
            </button>
            <button
              className={`${
                sparepart.type == "availability"
                  ? "text-[#20519F] border-b border-[#20519F]"
                  : "text-[#514E4E]"
              } text-base font-semibold pb-2`}
              onClick={() =>
                sparepart.navigate("./../../availability/sparepart")
              }
            >
              Availability
            </button>
            <button
              className={`${
                sparepart.type == "kategory-sparepart"
                  ? "text-[#20519F] border-b border-[#20519F]"
                  : "text-[#514E4E]"
              } text-base font-semibold pb-2`}
              onClick={() =>
                sparepart.navigate("./../../kategory-sparepart/sparepart")
              }
            >
              Kategory Sparepart
            </button>
          </div>
          <div className="flex items-end gap-4">
            <button
              className="flex items-center gap-2 h-[46px] px-[20px] bg-[#20519F] rounded"
              onClick={() => sparepart.navigate("create")}
            >
              <PlusIcon color="white" />
              <span className="text-white text-sm font-semibold">Add Data</span>
            </button>
          </div>
        </div>

        {sparepart.type == "part" ? (
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
              <tr>
                <th className="px-[32px] text-start">Kategory</th>
                <th className="px-[32px] text-start">Item Code</th>
                <th className="px-[32px] text-start">Part Name</th>
                <th className="px-[32px] text-start">Availability</th>
                <th className="px-[32px] text-start">Stok</th>
                <th className="px-[32px] text-start">Action</th>
              </tr>
            </thead>
            <tbody className="text-base text-[#514E4E]">
              <tr className="border-b border-[#D0D3D9] h-[64px]">
                <td className="px-[32px]">Mechanical</td>
                <td className="px-[32px]">AM1214</td>
                <td className="px-[32px]">Pilow Block Bearing</td>
                <td className="px-[32px]">Alloy Casting</td>
                <td className="px-[32px]">123</td>
                <td className="px-[32px]">
                  <div className="flex items-center gap-6">
                    <button
                      className="flex items-center gap-2 h-[46px] px-[20px] bg-[#1BBDD4] rounded"
                      onClick={() => sparepart.navigate("details")}
                    >
                      <EyeShowIcon color="white" />
                      <span className="text-white text-sm font-semibold">
                        Detail
                      </span>
                    </button>
                    <button
                      className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F79009] rounded"
                      onClick={() =>
                        sparepart.navigate("edit", {
                          state: {
                            edit: true,
                            type: sparepart.type,
                            data: {
                              kategory: "Mechanical",
                              itemCode: "0001213",
                              availability: "Alloy Casting",
                              rak: "B001",
                              partNo: "0803",
                              partName: "Pillow Block Bearing",
                              brand: "Ferrox",
                              specification: "Gear",
                              uom: "Pcs",
                              maintenceRate: "1 year",
                              vendor: "PT Ragdalion Technology",
                              description: "Filter Element",
                              gambarPart: "picture.png",
                              drawing: "drawing.png",
                              typeKategory: "inti",
                              stock: "123",
                              minStok: "12",
                              remark: "Discontinue",
                              alternativePart: "SF01214",
                              deliveryTime: "3 Hari",
                              garansiDatang: "121213",
                              minStgaransiPakaiok: "121212",
                              status: "baru",
                            },
                          },
                        })
                      }
                    >
                      <EditIcon color="white" />
                      <span className="text-white text-sm font-semibold">
                        Edit
                      </span>
                    </button>
                    <button
                      className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F04438] rounded"
                      onClick={() => sparepart.setOpenModalDelete(true)}
                    >
                      <TrashIcon color="white" />
                      <span className="text-white text-sm font-semibold">
                        Delete
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        ) : null}

        {sparepart.type == "kategory-inventory" ? (
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
              <tr>
                <th className="px-[32px] text-start">status</th>
                <th className="px-[32px] text-start">Nama Kategory</th>
                <th className="px-[32px] text-start">Icon Kategory</th>
                <th className="px-[32px] text-start">Action</th>
              </tr>
            </thead>
            <tbody className="text-base text-[#514E4E]">
              <tr className="border-b border-[#D0D3D9] h-[64px]">
                <td className="px-[32px]">
                  <div className="flex items-center">
                    <Toggle children={undefined} cb={undefined} />
                    <span>Active</span>
                  </div>
                </td>
                <td className="px-[32px]">Mecanical</td>
                <td className="px-[32px]">
                  <img src={settings} alt="icon-kategory" />
                </td>
                <td className="px-[32px]">
                  <div className="flex items-center gap-6">
                    <button
                      className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F79009] rounded"
                      onClick={() =>
                        sparepart.navigate("edit", {
                          state: {
                            edit: true,
                            type: sparepart.type,
                            data: {
                              kategory: "Mechanical",
                              iconKategory: "",
                            },
                          },
                        })
                      }
                    >
                      <EditIcon color="white" />
                      <span className="text-white text-sm font-semibold">
                        Edit
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        ) : null}

        {sparepart.type == "availability" ? (
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
              <tr>
                <th className="px-[32px] text-start">ID</th>
                <th className="px-[32px] text-start">Rak</th>
                <th className="px-[32px] text-start">Section</th>
                <th className="px-[32px] text-start">Action</th>
              </tr>
            </thead>
            <tbody className="text-base text-[#514E4E]">
              <tr className="border-b border-[#D0D3D9] h-[64px]">
                <td className="px-[32px]">AOB123</td>
                <td className="px-[32px]">A01</td>
                <td className="px-[32px]">Alloy Casting</td>
                <td className="px-[32px]">
                  <div className="flex items-center gap-6">
                    <button
                      className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F79009] rounded"
                      onClick={() =>
                        sparepart.navigate("edit", {
                          state: {
                            edit: true,
                            type: sparepart.type,
                            data: {
                              id: "AOB1242",
                              rak: "A01",
                              availiability: "Alloy Casting",
                            },
                          },
                        })
                      }
                    >
                      <EditIcon color="white" />
                      <span className="text-white text-sm font-semibold">
                        Edit
                      </span>
                    </button>
                    <button
                      className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F04438] rounded"
                      onClick={() => sparepart.setOpenModalDelete(true)}
                    >
                      <TrashIcon color="white" />
                      <span className="text-white text-sm font-semibold">
                        Delete
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        ) : null}

        {sparepart.type == "kategory-sparepart" ? (
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
              <tr>
                <th className="px-[32px] text-start">Kategory Type</th>
                <th className="px-[32px] text-start">Action</th>
              </tr>
            </thead>
            <tbody className="text-base text-[#514E4E]">
              <tr className="border-b border-[#D0D3D9] h-[64px]">
                <td className="px-[32px]">Inti</td>
                <td className="px-[32px]">
                  <div className="flex items-center gap-6">
                    <button
                      className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F79009] rounded"
                      onClick={() =>
                        sparepart.navigate("edit", {
                          state: {
                            edit: true,
                            type: sparepart.type,
                            data: {
                              typeKategory: "inti",
                            },
                          },
                        })
                      }
                    >
                      <EditIcon color="white" />
                      <span className="text-white text-sm font-semibold">
                        Edit
                      </span>
                    </button>
                    <button
                      className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F04438] rounded"
                      onClick={() => sparepart.setOpenModalDelete(true)}
                    >
                      <TrashIcon color="white" />
                      <span className="text-white text-sm font-semibold">
                        Delete
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        ) : null}

        <div className="flex py-4 px-[32px] justify-end gap-4">
          <button className="px-4 h-[40px] text-[#B8B6B6] border gap-2 border-[#B8B6B6] rounded flex items-center justify-center">
            <ArrowUpIcon
              className="w-[16px] h-[16px] -rotate-90"
              color="#B8B6B6"
            />
            <span>Prev</span>
          </button>
          <div className="w-[40px] h-[40px] bg-[#20519F] rounded flex items-center justify-center text-white">
            1
          </div>
          <button className="px-4 h-[40px] text-[#20519F] border gap-2 border-[#20519F] rounded flex items-center justify-center">
            <span>Next</span>
            <ArrowUpIcon
              className="w-[16px] h-[16px] rotate-90"
              color="#20519F"
            />
          </button>
        </div>
      </div>
    </main>
  );
}
