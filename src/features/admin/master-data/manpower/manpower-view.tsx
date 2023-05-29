import { Breadcrumbs } from "@common/components";
import PlusIcon from "@common/components/icons-new/PlusIcon";
import useManpower from "./manpower-model";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import EditIcon from "@common/components/icons-new/EditIcon";
import TrashIcon from "@common/components/icons-new/TrashIcon";
import empty_data_table from "../../../../assets/png/empty_data_table.png";
import ModalDelete from "@common/components/modals/ModalDelete";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import ModalSuccess from "@common/components/modals/ModalSeccess";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";

export default function ManpowerView() {
  const manpower = useManpower();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <ModalDelete
        open={manpower.openModalDelete}
        setOpen={manpower.setOpenModalDelete}
        setOpenConfirm={manpower.setOpenModalConfirm}
      />
      <ModalConfirm
        open={manpower.openModalConfirm}
        setOpen={manpower.setOpenModalConfirm}
        setOpenSuccess={manpower.setOpenModalSuccess}
        confirmMessage="Apakah anda yakin ingin menghapus data ini?"
        cb={(setIsLoading) => {
          if (manpower.type == "manpower") {
            manpower.deleteDataManpower(manpower.dataId, setIsLoading);
          } else {
            manpower.deleteDataPosition(manpower.dataId, setIsLoading);
          }
        }}
      />
      <ModalSuccess
        open={manpower.openModalSuccess}
        setOpen={manpower.setOpenModalSuccess}
        isSuccess={manpower.isSuccess}
        successMessage="Berhasil menghapus data!"
      />
      <Breadcrumbs
        items={[
          "Master Data",
          `${manpower.type[0].toLocaleUpperCase()}${manpower.type.slice(1)}`,
        ]}
      />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">Manpower</span>
        </div>
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <div className="flex gap-[32px]">
            <button
              className={`${
                manpower.type == "manpower"
                  ? "text-[#20519F] border-b border-[#20519F]"
                  : "text-[#514E4E]"
              } text-base font-semibold pb-2`}
              onClick={() =>
                manpower.navigate(`../master-data/manpower/1/manpower`)
              }
            >
              Manpower
            </button>
            <button
              className={`${
                manpower.type == "posisi"
                  ? "text-[#20519F] border-b border-[#20519F]"
                  : "text-[#514E4E]"
              } text-base font-semibold pb-2`}
              onClick={() =>
                manpower.navigate(`../master-data/posisi/1/manpower`)
              }
            >
              Posisi
            </button>
          </div>
          <div className="flex items-end gap-4">
            <button
              className="flex items-center gap-2 h-[46px] px-[20px] bg-[#20519F] rounded"
              onClick={() =>
                manpower.navigate("create", {
                  state: {
                    type: manpower.type,
                  },
                })
              }
            >
              <PlusIcon color="white" />
              <span className="text-white text-sm font-semibold">Add Data</span>
            </button>
          </div>
        </div>
        {manpower.type == "manpower" ? (
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
              <tr>
                <th className="px-[32px] text-start">No. Induk Pegawai</th>
                <th className="px-[32px] text-start">Nama Lengkap</th>
                <th className="px-[32px] text-start">Posisi</th>
                <th className="px-[32px] text-start">Section</th>
                <th className="px-[32px] text-start">Action</th>
              </tr>
            </thead>
            <tbody className="text-base text-[#514E4E]">
              {manpower.dataManpower?.data?.map((item, i) => (
                <tr key={i} className="border-b border-[#D0D3D9] h-[64px]">
                  <td className="px-[32px]">{item.employee_no}</td>
                  <td className="px-[32px]">{item.name}</td>
                  <td className="px-[32px]">{item.position_name}</td>
                  <td className="px-[32px]">{item.section_name}</td>
                  <td className="px-[32px]">
                    <div className="flex items-center gap-6">
                      <button
                        className="flex items-center gap-2 h-[46px] px-[20px] bg-[#1BBDD4] rounded"
                        onClick={() => manpower.navigate(`${item.id}/details`)}
                      >
                        <EyeShowIcon color="white" />
                        <span className="text-white text-sm font-semibold">
                          Detail
                        </span>
                      </button>
                      <button
                        className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F79009] rounded"
                        onClick={() => manpower.navigate(`${item.id}/edit`)}
                      >
                        <EditIcon color="white" />
                        <span className="text-white text-sm font-semibold">
                          Edit
                        </span>
                      </button>
                      <button
                        className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F04438] rounded"
                        onClick={() => {
                          manpower.setDataId(item.id);
                          manpower.setOpenModalDelete(true);
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
        ) : (
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
              <tr>
                <th className="px-[32px] text-start">Nama Posisi</th>
                <th className="px-[32px] text-start">Action</th>
              </tr>
            </thead>
            <tbody className="text-base text-[#514E4E]">
              {manpower.dataPosition?.data?.map((item, i) => (
                <tr key={i} className="border-b border-[#D0D3D9] h-[64px]">
                  <td className="px-[32px]">{item.name}</td>
                  <td className="px-[32px]">
                    <div className="flex items-center gap-6">
                      <button
                        className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F79009] rounded"
                        onClick={() => manpower.navigate(`${item.id}/edit`)}
                      >
                        <EditIcon color="white" />
                        <span className="text-white text-sm font-semibold">
                          Edit
                        </span>
                      </button>
                      <button
                        className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F04438] rounded"
                        onClick={() => {
                          manpower.setDataId(item.id);
                          manpower.setOpenModalDelete(true);
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
        )}
        {manpower.isLoadingData ? (
          <div className="w-full h-[64px] flex items-center justify-center">
            <LoadingIcon
              color="black"
              className="w-[24px] h-[24px] animate-spin"
            />
          </div>
        ) : null}
        {!manpower.isLoadingData ? (
          !!!manpower.dataManpower?.data?.length &&
          manpower.type == "manpower" ? (
            <div className="w-full flex flex-col items-center py-[60px]">
              <img src={empty_data_table} alt="Empty data table" className="" />
              <span className="text-[#514E4E] text-2xl font-bold">
                Tidak ada data
              </span>
            </div>
          ) : null
        ) : null}
        {!manpower.isLoadingData ? (
          !!!manpower.dataPosition?.data?.length && manpower.type == "posisi" ? (
            <div className="w-full flex flex-col items-center py-[60px]">
              <img src={empty_data_table} alt="Empty data table" className="" />
              <span className="text-[#514E4E] text-2xl font-bold">
                Tidak ada data
              </span>
            </div>
          ) : null
        ) : null}
        {/* <div className="flex justify-center gap-4"></div> */}
        {manpower.type == "manpower" ? (
          <div className="flex py-4 px-[32px] justify-end gap-4">
            <button
              disabled={
                !!manpower.dataManpower?.pagination?.prevPage ? false : true
              }
              onClick={() =>
                manpower.navigate(
                  `../master-data/${manpower.type}/${manpower.dataManpower?.pagination?.prevPage}/manpower`
                )
              }
              className={`px-4 h-[40px] text-[#B8B6B6] border gap-2 ${
                !!manpower.dataManpower?.pagination?.prevPage
                  ? "border-[#20519F]"
                  : "border-[#B8B6B6]"
              } rounded flex items-center justify-center`}
            >
              <ArrowUpIcon
                className="w-[16px] h-[16px] -rotate-90"
                color={`${
                  !!manpower.dataManpower?.pagination?.prevPage
                    ? "#20519F"
                    : "#B8B6B6"
                }`}
              />
            </button>
            <div className="w-[40px] h-[40px] bg-[#20519F] rounded flex items-center justify-center text-white">
              {!!manpower.dataManpower?.pagination?.page
                ? manpower.dataManpower?.pagination?.page
                : "-"}
            </div>
            <button
              disabled={
                !!manpower.dataManpower?.pagination?.nextPage ? false : true
              }
              onClick={() =>
                manpower.navigate(
                  `../master-data/${manpower.type}/${manpower.dataManpower?.pagination?.nextPage}/manpower`
                )
              }
              className={`px-4 h-[40px] text-[#20519F] border gap-2 ${
                !!manpower.dataManpower?.pagination?.nextPage
                  ? "border-[#20519F]"
                  : "border-[#B8B6B6]"
              } rounded flex items-center justify-center`}
            >
              <ArrowUpIcon
                className="w-[16px] h-[16px] rotate-90"
                color={`${
                  !!manpower.dataManpower?.pagination?.nextPage
                    ? "#20519F"
                    : "#B8B6B6"
                }`}
              />
            </button>
          </div>
        ) : null}
        {manpower.type == "posisi" ? (
          <div className="flex py-4 px-[32px] justify-end gap-4">
            <button
              disabled={
                !!manpower.dataPosition?.pagination?.prevPage ? false : true
              }
              onClick={() =>
                manpower.navigate(
                  `../master-data/${manpower.type}/${manpower.dataPosition?.pagination?.prevPage}/manpower`
                )
              }
              className={`px-4 h-[40px] text-[#B8B6B6] border gap-2 ${
                !!manpower.dataPosition?.pagination?.prevPage
                  ? "border-[#20519F]"
                  : "border-[#B8B6B6]"
              } rounded flex items-center justify-center`}
            >
              <ArrowUpIcon
                className="w-[16px] h-[16px] -rotate-90"
                color={`${
                  !!manpower.dataPosition?.pagination?.prevPage
                    ? "#20519F"
                    : "#B8B6B6"
                }`}
              />
            </button>
            <div className="w-[40px] h-[40px] bg-[#20519F] rounded flex items-center justify-center text-white">
              {!!manpower.dataPosition?.pagination?.page
                ? manpower.dataPosition?.pagination?.page
                : "-"}
            </div>
            <button
              disabled={
                !!manpower.dataPosition?.pagination?.nextPage ? false : true
              }
              onClick={() =>
                manpower.navigate(
                  `../master-data/${manpower.type}/${manpower.dataPosition?.pagination?.nextPage}/manpower`
                )
              }
              className={`px-4 h-[40px] text-[#20519F] border gap-2 ${
                !!manpower.dataPosition?.pagination?.nextPage
                  ? "border-[#20519F]"
                  : "border-[#B8B6B6]"
              } rounded flex items-center justify-center`}
            >
              <ArrowUpIcon
                className="w-[16px] h-[16px] rotate-90"
                color={`${
                  !!manpower.dataPosition?.pagination?.nextPage
                    ? "#20519F"
                    : "#B8B6B6"
                }`}
              />
            </button>
          </div>
        ) : null}
      </div>
    </main>
  );
}
