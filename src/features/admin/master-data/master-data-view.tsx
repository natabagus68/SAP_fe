import { Breadcrumbs } from "@common/components";
import { SearchIcon } from "@common/components/icons/SearchIcon";
import ModalDelete from "@common/components/modals/ModalDelete";
import TrashIcon from "@common/components/icons-new/TrashIcon";
import EditIcon from "@common/components/icons-new/EditIcon";
import FilterIcon from "@common/components/icons-new/FilterIcon";
import Pagination from "@common/components/pagination/Pagination";
import FilterModal from "./popup/filter";
import useMasterDataModel from "./master-data-model";

export default function MasterDataView() {
  const data = useMasterDataModel();
  return (
    <>
      <Breadcrumbs items={["Master Data"]} />
      <div className="border border-[#D0D3D9] rounded-[4px] px-8 py-6 text-[#514E4E] mt-[18px] bg-[#FFF]">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-[700]">Master Data</h1>
            <p className="text-[#667085] font-[400]">Management Machine Data</p>
          </div>
          <div
            className="flex items-center justify-center gap-2 text-sm bg-[#20519F] text-[#FFFFFF] h-[46px] px-4 rounded-[4px] cursor-pointer"
            onClick={() => data.onNavigate("../features/add")}
          >
            <span>+</span>
            <button name="create">Create new machine</button>
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
          <thead className="border-t border-b bg-[#F0F1F3] border-gray-400 text-[#667085]">
            <tr className="text-sm text-left">
              <th className="pl-4 py-4 font-[600]">Machine Code</th>
              <th className="px-4 py-4 font-[600]">Machine Name</th>
              <th className="px-4 py-4 font-[600]">Description</th>
              <th className="px-4 py-4 font-[600]">Location</th>
              <th className="px-4 py-4 font-[600]">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#D0D3D9]">
              <td className="pl-4 py-2">K00224</td>
              <td className="px-4 py-2">Machine Satu</td>
              <td className="px-4 py-2">ckctm12@gmail.com</td>
              <td className="px-4 py-2">Line 1</td>
              <td className="px-4 py-2 flex gap-2">
                <button
                  name="edit"
                  className="border bg-[#F79009] text-[#FFFFFF] h-[46px] px-6 flex items-center gap-2 rounded-[4px] text-sm"
                  onClick={() => data.onNavigate("../features/1/edit")}
                >
                  <EditIcon color={"#FFFFFF"} className="w-4 h-4" />
                  <span>Edit</span>
                </button>
                <button
                  name="delete"
                  className="border bg-[#F04438] text-[#FFFFFF] h-[46px] px-6 flex items-center gap-2 rounded-[4px] text-sm"
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
