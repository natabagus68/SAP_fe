import { Breadcrumbs } from "@common/components";
import { SearchIcon } from "@common/components/icons/SearchIcon";
import FilterIcon from "@common/components/icons-new/FilterIcon";
import EditIcon from "@common/components/icons-new/EditIcon";
import TrashIcon from "@common/components/icons-new/TrashIcon";
import ModalDelete from "@common/components/modals/ModalDelete";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import ChangePasswordIcon from "@common/components/icons-new/ChangePasswordIcon";
import Pagination from "@common/components/pagination/Pagination";
import ChangePasswordModal from "./popup/change-pass";
import FilterModal from "../master-data/popup/filter";
import useUserModel from "./user-model";

export default function UserView() {
  const data = useUserModel();
  return (
    <>
      <Breadcrumbs items={["User"]} />
      <div className="border border-[#D0D3D9] rounded-[4px] px-8 py-6 text-[#514E4E] mt-4">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-[700]">User</h1>
            <p className="text-[#667085] font-[400]">
              Management account & access
            </p>
          </div>
          <div
            className="flex items-center justify-center gap-2 text-sm bg-[#20519F] text-[#FFFFFF] h-[46px] px-4 rounded-[4px] cursor-pointer"
            onClick={() => data.onNavigate("../features/user-add")}
          >
            <span>+</span>
            <button name="create">Create new user</button>
          </div>
        </div>
        <div className="my-4 bg-[#F0F1F3] p-4 rounded-[4px] flex justify-between">
          <div className="relative w-full">
            <SearchIcon className="absolute top-[35%] left-[1.5%]" />
            <input
              type="search"
              name="search"
              placeholder="Search by username, email, role..."
              className="h-[40px] w-[40%] border outline-none rounded-[4px] placeholder:text-[#D0D3D9] placeholder:text-sm pl-8 active:border-[#E7EAEE]"
            />
          </div>
          <button
            className="py-2 w-[10%] pl-4 border text-[#667085] bg-[#FFFFFF] rounded-[4px] text-sm flex gap-2 items-center"
            onClick={data.onFilterOpen}
          >
            <FilterIcon />
            <h1>Filter</h1>
          </button>
          <FilterModal open={data.openModalFilter} close={data.onFilterClose} />
        </div>
        <table className="w-full">
          <thead className="border-t border-b bg-[#D0D3D9] border-gray-400 text-[#667085]">
            <tr className="font-[600] text-sm text-left">
              <th className="pl-4 py-4">Status</th>
              <th className="px-4 py-4">Name</th>
              <th className="px-4 py-4">Email Address</th>
              <th className="px-4 py-4">Role</th>
              <th className="px-4 py-4">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#D0D3D9]">
              <td className="w-[12%] relative">
                <label className="absolute inline-flex items-center cursor-pointer left-[10%] top-[30%]">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    onClick={() =>
                      !data.roleActive ? data.onActive() : data.onInactive()
                    }
                  ></div>
                  <span className="absolute text-sm left-[52px]">
                    {data.roleActive ? "Active" : "Inactive"}
                  </span>
                </label>
              </td>
              <td className="px-4 py-2">Udin Jaenudi</td>
              <td className="px-4 py-2">test@mail.com</td>
              <td className="px-4 py-2">Admin</td>
              <td className="px-4 py-2 flex gap-2 text-[#FFFFFF]">
                <button
                  name="detail"
                  className="border bg-[#20519F] h-[46px] px-6 flex items-center gap-2 rounded-[4px] text-sm"
                  onClick={() => data.onNavigate("../features/1/user-detail")}
                >
                  <EyeShowIcon color={"#FFFFFF"} className="w-4 h-4" />
                  <span>Detail</span>
                </button>
                <button
                  name="password"
                  className="border bg-[#12B569] h-[46px] px-6 flex items-center gap-2 rounded-[4px] text-sm"
                  onClick={data.onPasswordOpen}
                >
                  <ChangePasswordIcon className="w-4 h-4" />
                  <span>Change Password</span>
                </button>
                <ChangePasswordModal
                  open={data.openModalPassword}
                  close={data.onPasswordClose}
                />
                <button
                  name="edit"
                  className="border bg-[#F79009] h-[46px] px-6 flex items-center gap-2 rounded-[4px] text-sm"
                  onClick={() => data.onNavigate("../features/1/user-edit")}
                >
                  <EditIcon color={"#FFFFFF"} className="w-4 h-4" />
                  <span>Edit</span>
                </button>
                <button
                  name="delete"
                  className="border bg-[#F04438] h-[46px] px-6 flex items-center gap-2 rounded-[4px] text-sm"
                  onClick={data.onDeleteOpen}
                >
                  <TrashIcon color={"#FFFFFF"} className="w-4 h-4" />
                  <span>Delete</span>
                </button>
                <ModalDelete
                  open={data.openModalDelete}
                  setOpen={data.onDeleteClose}
                  setOpenConfirm={data.openModalDelete}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex items-end justify-end mt-6">
          <Pagination row={1} limit={1} page={1} />
        </div>
      </div>
    </>
  );
}
