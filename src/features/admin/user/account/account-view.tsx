import EditIcon from "@common/components/icons-new/EditIcon";
import useAccount from "./account-model";
import { Breadcrumbs, Toggle } from "@common/components";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import ModalDelete from "@common/components/modals/ModalDelete";
import ModalSuccess from "@common/components/modals/ModalSeccess";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import SearchIcon from "@common/components/icons-new/SearchIcon";
import PlusIcon from "@common/components/icons-new/PlusIcon";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import TrashIcon from "@common/components/icons-new/TrashIcon";

export default function AccountView() {
  const account = useAccount();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <ModalDelete
        open={account.openModalDelete}
        setOpen={account.setOpenModalDelete}
        setOpenConfirm={account.setOpenModalConfirm}
      />
      <ModalConfirm
        open={account.openModalConfirm}
        setOpen={account.setOpenModalConfirm}
        setOpenSuccess={account.setOpenModalSuccess}
        confirmMessage="Apakah anda yakin ingin menghapus data ini?"
        cb={(setIsLoading) => {
          account.deleteAccount(account.dataId, setIsLoading);
          console.log("delete Acccount");
        }}
      />
      <ModalSuccess
        open={account.openModalSuccess}
        setOpen={account.setOpenModalSuccess}
        isSuccess={account.isSuccess}
        successMessage="Berhasil menghapus data!"
      />
      <Breadcrumbs items={["User", "Account"]} />

      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">Account</span>
          <div className="flex items-end gap-4">
            <div className="relative space-x-10">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-3 border border-[#D0D3D9] rounded px-2">
                  <SearchIcon color="black" />
                  <input
                    type="search"
                    className="h-[40px] "
                    placeholder="search"
                  />
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 h-[46px] px-[20px] bg-[#20519F] rounded">
              <PlusIcon color="white" />
              <span
                className="text-white text-sm font-semibold"
                onClick={() => account.navigate("create")}
              >
                Create New Account
              </span>
            </button>
          </div>
        </div>
        <table className="w-full">
          <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
            <tr>
              <th className="px-[32px] text-start">Status</th>
              <th className="px-[32px] text-start">Nama</th>
              <th className="px-[32px] text-start">Email</th>
              <th className="px-[32px] text-start">Role</th>
              <th className="px-[32px] text-start">Action</th>
            </tr>
          </thead>
          <tbody className="text-base text-[#514E4E]">
            {account.dataAccount.map((item, i) => (
              <tr key={i} className="border-b border-[#D0D3D9] h-[64px]">
                <td className="px-[32px]">
                  <div className="flex items-center">
                    <Toggle
                      id={item.id}
                      checked={item.is_ready ? true : false}
                      cb={() => console.log("onChange Toggle")}
                      activeText="active"
                      inactiveText="inactive"
                    />
                  </div>
                </td>
                <td className="px-[32px]">{item.name}</td>
                <td className="px-[32px]">{item.email}</td>
                <td className="px-[32px]">{item.role_name}</td>
                <td className="px-[32px]">
                  <div className="flex items-center gap-6">
                    <button
                      className="flex items-center gap-2 h-[46px] px-[20px] bg-[#1BBDD4] rounded"
                      onClick={() => account.navigate(`${item.id}/details`)}
                    >
                      <EyeShowIcon color="white" />
                      <span className="text-white text-sm font-semibold">
                        Detail
                      </span>
                    </button>
                    <button
                      className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F79009] rounded"
                      onClick={() => account.navigate(`${item.id}/edit`)}
                    >
                      <EditIcon color="white" />
                      <span className="text-white text-sm font-semibold">
                        Edit
                      </span>
                    </button>
                    <button
                      className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F04438] rounded"
                      onClick={() => {
                        account.setDataId(item.id);
                        account.setOpenModalDelete(true);
                      }}
                    >
                      <TrashIcon color="white" />
                      <span className="text-white text-sm font-semibold">
                        Delete
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
