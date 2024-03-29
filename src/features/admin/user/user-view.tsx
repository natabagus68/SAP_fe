import { Breadcrumbs, Toggle } from "@common/components";
import { SearchIcon } from "@common/components/icons/SearchIcon";
import FilterIcon from "@common/components/icons-new/FilterIcon";
import EditIcon from "@common/components/icons-new/EditIcon";
import TrashIcon from "@common/components/icons-new/TrashIcon";
import ModalDelete from "@common/components/modals/ModalDelete";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import ChangePasswordIcon from "@common/components/icons-new/ChangePasswordIcon";
import Pagination from "@common/components/pagination/Pagination";
import ChangePasswordModal from "./popup/change-pass";
import FilterModal from "../master-data/machine/popup/filter";
import useUserModel from "./user-model";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import ModalSuccess from "@common/components/modals/ModalSeccess";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";

export default function UserView() {
  const data = useUserModel();
  return (
    <>
      <ModalDelete
        open={data.openModalDelete}
        setOpen={data.setOpenModalDelete}
        setOpenConfirm={data.setOpenModalConfirm}
      />
      <ModalConfirm
        open={data.openModalConfirm}
        setOpen={data.setOpenModalConfirm}
        setOpenSuccess={data.setOpenModalSuccess}
        confirmMessage="Apakah anda yakin ingin menghapus data ini?"
        cb={(setIsLoading) => {
          data.deleteUser(data.dataId, setIsLoading);
        }}
      />
      <ModalSuccess
        open={data.openModalSuccess}
        setOpen={data.setOpenModalSuccess}
        isSuccess={data.isSuccess}
        successMessage="Berhasil menghapus data!"
      />
      <Breadcrumbs items={["User"]} />
      <div className="border border-[#D0D3D9] rounded-[4px] px-8 py-6 text-[#514E4E] mt-[18px] bg-[#FFF]">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-[700]">User</h1>
            <p className="text-[#667085] font-[400]">
              Management account & access
            </p>
          </div>
          <div
            className="flex items-center justify-center gap-2 text-sm bg-[#20519F] text-[#FFFFFF] h-[46px] px-4 rounded-[4px] cursor-pointer"
            onClick={() => data.navigate("add")}
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
              placeholder="Search by username, email, role..."
              className={`h-[40px] w-[40%] border outline-none rounded-[4px] placeholder:text-[#D0D3D9] placeholder:text-sm pl-8 active:border-[#E7EAEE]`}
              {...data.register("search")}
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
          <thead className="border-t border-b bg-[#F0F1F3] border-gray-400 text-[#667085]">
            <tr className="text-sm text-left">
              <th className="pl-4 py-4 font-[600]">Status</th>
              <th className="px-4 py-4 font-[600]">Name</th>
              <th className="px-4 py-4 font-[600]">Email Address</th>
              <th className="px-4 py-4 font-[600]">Role</th>
              <th className="px-4 py-4 font-[600]">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data.dataUser?.data?.map((item, i) => (
              <tr key={i} className="border-b border-[#D0D3D9]">
                <td className="px-[32px]">
                  <div className="flex items-center">
                    <Toggle
                      id={item.id}
                      checked={item.isActive ? true : false}
                      cb={() => console.log("1")}
                      activeText="active"
                      inactiveText="inactive"
                    />
                    <span>{item?.isActive}</span>
                  </div>
                </td>
                <td className="px-4 py-2">{item.fullname}</td>
                <td className="px-4 py-2">{item.email}</td>
                <td className="px-4 py-2">{item.role}</td>
                <td className="px-4 py-2 flex gap-2 text-[#FFFFFF]">
                  <button
                    name="detail"
                    className="border bg-[#20519F] h-[46px] px-6 flex items-center gap-2 rounded-[4px] text-sm border-none"
                    onClick={() => data.navigate(`${item.id}/details`)}
                  >
                    <EyeShowIcon color={"#FFFFFF"} className="w-4 h-4" />
                    <span>Detail</span>
                  </button>
                  <button
                    name="password"
                    className="border bg-[#12B569] h-[46px] px-6 flex items-center gap-2 rounded-[4px] text-sm border-none"
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
                    className="border bg-[#F79009] h-[46px] px-6 flex items-center gap-2 rounded-[4px] text-sm border-none"
                    onClick={() => data.navigate(`${item.id}/edit`)}
                  >
                    <EditIcon color={"#FFFFFF"} className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                  <button
                    name="delete"
                    className="border bg-[#F04438] h-[46px] px-6 flex items-center gap-2 rounded-[4px] text-sm border-none"
                    onClick={() => {
                      data.setDataId(item.id);
                      data.setOpenModalDelete(true);
                    }}
                  >
                    <TrashIcon color={"#FFFFFF"} className="w-4 h-4" />
                    <span>Delete</span>
                  </button>
                  {/* <ModalDelete
                    open={data.openModalDelete}
                    setOpen={data.onDeleteClose}
                    setOpenConfirm={data.openModalDelete}
                  /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex py-4 px-[32px] justify-end gap-4">
          <button
            disabled={!!data.dataUser?.pagination?.prevPage ? false : true}
            onClick={() =>
              data.navigate(`../user/${data.dataUser?.pagination?.prevPage}`)
            }
            className={`px-4 h-[40px] border gap-2 ${
              !!data.dataUser?.pagination?.prevPage
                ? "border-[#20519F] text-[#20519F]"
                : "border-[#B8B6B6] text-[#B8B6B6]"
            } rounded flex items-center justify-center`}
          >
            <ArrowUpIcon
              className="w-[16px] h-[16px] -rotate-90"
              color={`${
                !!data.dataUser?.pagination?.prevPage ? "#20519F" : "#B8B6B6"
              }`}
            />
          </button>
          <div className="w-[40px] h-[40px] bg-[#20519F] rounded flex items-center justify-center text-white">
            {!!data.dataUser?.pagination?.page
              ? data.dataUser?.pagination?.page
              : "-"}
          </div>
          <button
            disabled={!!data.dataUser?.pagination?.nextPage ? false : true}
            onClick={() =>
              data.navigate(`../user/${data.dataUser?.pagination?.nextPage}`)
            }
            className={`px-4 h-[40px] border gap-2 ${
              !!data.dataUser?.pagination?.nextPage
                ? "border-[#20519F] text-[#20519F]"
                : "border-[#B8B6B6] text-[#B8B6B6]"
            } rounded flex items-center justify-center`}
          >
            <ArrowUpIcon
              className="w-[16px] h-[16px] rotate-90"
              color={`${
                !!data.dataUser?.pagination?.nextPage ? "#20519F" : "#B8B6B6"
              }`}
            />
          </button>
        </div>
        {/* <div className="flex items-end justify-end mt-6">
          <Pagination row={1} limit={1} page={1} />
        </div> */}
      </div>
    </>
  );
}
