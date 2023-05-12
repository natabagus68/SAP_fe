import { Breadcrumbs, Toggle } from "@common/components";
import useAccess from "./access-model";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import { DataIcon } from "@common/components/icons";
import EditIcon from "@common/components/icons-new/EditIcon";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import TrashIcon from "@common/components/icons-new/TrashIcon";
import PlusIcon from "@common/components/icons-new/PlusIcon";
import Modal from "@common/components/modals/Modal";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import ModalSuccess from "@common/components/modals/ModalSeccess";

export default function AccessMenu() {
  const access = useAccess();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <ModalConfirm
        open={access.openModalConfirm}
        setOpen={access.setOpenModalConfirm}
        setOpenSuccess={access.setOpenModalSuccess}
        cb={(setIsLoading) => {
          setTimeout(() => {
            setIsLoading({ loading: false, exec: true });
            console.log("delete useAccess");
          }, 3000);
        }}
      />
      <ModalSuccess
        open={access.openModalSuccess}
        setOpen={access.setOpenModalSuccess}
      />
      <Breadcrumbs items={["User", "Access", "Menu"]} />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">Menu</span>
          <div className="flex items-end gap-4">
            <button
              className="flex items-center gap-2 h-[46px] px-[20px] border border-[#20519F] rounded"
              onClick={() => access.onOpenBack()}
            >
              <ArrowUpIcon className="-rotate-90 w-5 h-5" color="#20519F" />
              <span className="text-[#20519F] text-sm font-semibold">
                Kembali
              </span>
            </button>
            <button className="flex items-center gap-2 h-[46px] px-[20px] bg-[#20519F] rounded">
              <DataIcon color="white" />
              <span className="text-white text-sm font-semibold">Simpan</span>
            </button>
          </div>
        </div>
        <table className="w-full">
          <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
            <tr>
              <th className="px-[32px] text-start">checkbox</th>
              <th className="px-[32px] text-start">Menu Name</th>
              <th className="px-[32px] text-start">Permission</th>
              <th className="px-[32px] text-start">Action</th>
            </tr>
          </thead>
          <tbody className="text-base text-[#514E4E]">
            <tr className="border-b border-[#D0D3D9] h-[64px]">
              <td className="px-[32px]">
                <div className="flex items-center">checkbox</div>
              </td>
              <td className="px-[32px]">Dashboard</td>
              <td className="px-[32px]">Filter</td>
              <td className="px-[32px]">
                <div className="flex items-center gap-6">
                  <button
                    className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F79009] rounded"
                    onClick={() => access.setOpenModalAccess(true)}
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
      </div>

      <Modal open={access.openModalAccess}>
        <div className="w-[400px] flex flex-col gap-2">
          <div className="w-full flex flex-col items-center space-y-3 p-[18px]">
            <span className="text-2xl text-[#514E4E] font-bold ">
              Dashboard
            </span>
            <span className="text-base text-[#514E4E] ">
              Check to grand access
            </span>
          </div>
          <div className="w-full flex p-[18px] flex-wrap justify-between">
            <div className="space-y-6">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  {...access.register("menu")}
                  value="View Data"
                  className="w-[24px] h-[24px]"
                />
                <span>View Data</span>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  {...access.register("menu")}
                  value="Delete Data"
                  className="w-[24px] h-[24px]"
                />
                <span>Delete Data</span>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  {...access.register("menu")}
                  value="Edit Data"
                  className="w-[24px] h-[24px]"
                />
                <span>Edit Data</span>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  {...access.register("menu")}
                  value="Add Data"
                  className="w-[24px] h-[24px]"
                />
                <span>Add Data</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  {...access.register("menu")}
                  value="Entry Data"
                  className="w-[24px] h-[24px]"
                />
                <span>Entry Data</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6">
            <button
              className="flex items-center justify-center gap-2 h-[46px] px-[20px] w-[181px] border border-[#20519F] rounded"
              type="button"
              onClick={() => access.onOpenBackMenu()}
            >
              <span className="text-[#20519F] text-sm font-semibold">
                Batal
              </span>
            </button>
            <button className="flex items-center justify-center gap-2 h-[46px] w-[181px] px-[20px] bg-[#20519F] rounded text-white text-sm font-semibold">
              Simpan Permission
            </button>
          </div>
        </div>
      </Modal>
    </main>
  );
}
