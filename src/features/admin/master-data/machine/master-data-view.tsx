import { Breadcrumbs } from "@common/components";
import { SearchIcon } from "@common/components/icons/SearchIcon";
import ModalDelete from "@common/components/modals/ModalDelete";
import TrashIcon from "@common/components/icons-new/TrashIcon";
import EditIcon from "@common/components/icons-new/EditIcon";
import FilterIcon from "@common/components/icons-new/FilterIcon";
import Pagination from "@common/components/pagination/Pagination";
import useMasterDataModel from "./master-data-model";
import FilterModal from "./popup/filter";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import ModalSuccess from "@common/components/modals/ModalSeccess";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";

export default function MasterDataView() {
  const data = useMasterDataModel();
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
          data.deleteMachine(data.dataId, setIsLoading);
        }}
      />
      <ModalSuccess
        open={data.openModalSuccess}
        setOpen={data.setOpenModalSuccess}
        isSuccess={data.isSuccess}
        successMessage="Berhasil menghapus data!"
      />
      <Breadcrumbs items={["Master Data"]} />
      <div className="border border-[#D0D3D9] rounded-[4px] px-8 py-6 text-[#514E4E] mt-[18px] bg-[#FFF]">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-[700]">Master Data</h1>
            <p className="text-[#667085] font-[400]">Management Machine Data</p>
          </div>
          <div
            className="flex items-center justify-center gap-2 text-sm bg-[#20519F] text-[#FFFFFF] h-[46px] px-4 rounded-[4px] cursor-pointer"
            onClick={() => data.navigate("add")}
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
              <th className="pl-4 py-4 font-[600]">Machine Code</th>
              <th className="px-4 py-4 font-[600]">Machine Name</th>
              <th className="px-4 py-4 font-[600]">Description</th>
              <th className="px-4 py-4 font-[600]">Location</th>
              <th className="px-4 py-4 font-[600]">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data.dataMachine?.data?.map((item, i) => (
              <tr key={i} className="border-b border-[#D0D3D9]">
                <td className="pl-4 py-2">{item.machineCode}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.description}</td>
                <td className="px-4 py-2">{item.location}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    name="edit"
                    className="border bg-[#F79009] text-[#FFFFFF] h-[46px] px-6 flex items-center gap-2 rounded-[4px] text-sm"
                    onClick={() => data.navigate(`${item.id}/edit`)}
                  >
                    <EditIcon color={"#FFFFFF"} className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                  <button
                    className="border bg-[#F04438] text-[#FFFFFF] h-[46px] px-6 flex items-center gap-2 rounded-[4px] text-sm"
                    onClick={() => {
                      data.setDataId(item.id);
                      data.setOpenModalDelete(true);
                    }}
                  >
                    <TrashIcon color={"#FFFFFF"} className="w-4 h-4" />
                    <span>Delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex py-4 px-[32px] justify-end gap-4">
          <button
            disabled={!!data.dataMachine?.pagination?.prevPage ? false : true}
            onClick={() =>
              data.navigate(
                `../mesin/${data.dataMachine?.pagination?.prevPage}`
              )
            }
            className={`px-4 h-[40px] border gap-2 ${
              !!data.dataMachine?.pagination?.prevPage
                ? "border-[#20519F] text-[#20519F]"
                : "border-[#B8B6B6] text-[#B8B6B6]"
            } rounded flex items-center justify-center`}
          >
            <ArrowUpIcon
              className="w-[16px] h-[16px] -rotate-90"
              color={`${
                !!data.dataMachine?.pagination?.prevPage ? "#20519F" : "#B8B6B6"
              }`}
            />
          </button>
          <div className="w-[40px] h-[40px] bg-[#20519F] rounded flex items-center justify-center text-white">
            {!!data.dataMachine?.pagination?.page
              ? data.dataMachine?.pagination?.page
              : "-"}
          </div>
          <button
            disabled={!!data.dataMachine?.pagination?.nextPage ? false : true}
            onClick={() =>
              data.navigate(
                `../mesin/${data.dataMachine?.pagination?.nextPage}`
              )
            }
            className={`px-4 h-[40px] border gap-2 ${
              !!data.dataMachine?.pagination?.nextPage
                ? "border-[#20519F] text-[#20519F]"
                : "border-[#B8B6B6] text-[#B8B6B6]"
            } rounded flex items-center justify-center`}
          >
            <ArrowUpIcon
              className="w-[16px] h-[16px] rotate-90"
              color={`${
                !!data.dataMachine?.pagination?.nextPage ? "#20519F" : "#B8B6B6"
              }`}
            />
          </button>
        </div>
      </div>
    </>
  );
}
