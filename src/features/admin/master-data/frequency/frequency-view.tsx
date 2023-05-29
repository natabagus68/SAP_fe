import { Breadcrumbs } from "@common/components";
import PlusIcon from "@common/components/icons-new/PlusIcon";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import EditIcon from "@common/components/icons-new/EditIcon";
import TrashIcon from "@common/components/icons-new/TrashIcon";
import ModalDelete from "@common/components/modals/ModalDelete";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import ModalSuccess from "@common/components/modals/ModalSeccess";
import useFrequency from "./frequency-model";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";
import empty_data_table from "../../../../assets/png/empty_data_table.png";

export default function FrequencyView() {
  const frequency = useFrequency();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <ModalDelete
        open={frequency.openModalDelete}
        setOpen={frequency.setOpenModalDelete}
        setOpenConfirm={frequency.setOpenModalConfirm}
      />
      <ModalConfirm
        open={frequency.openModalConfirm}
        setOpen={frequency.setOpenModalConfirm}
        setOpenSuccess={frequency.setOpenModalSuccess}
        confirmMessage="Apakah anda yakin ingin menghapus data ini?"
        cb={(setIsLoading) => {
          frequency.deleteDataFrequency(frequency.dataId, setIsLoading);
          console.log("delete useFrequency");
        }}
      />
      <ModalSuccess
        open={frequency.openModalSuccess}
        setOpen={frequency.setOpenModalSuccess}
        isSuccess={frequency.isSuccess}
        successMessage="Berhasil menghapus data!"
      />
      <Breadcrumbs items={["Master Data", `Frequency`]} />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">Frequency</span>
          <div className="flex items-end gap-4">
            <button
              className="flex items-center gap-2 h-[46px] px-[20px] bg-[#20519F] rounded"
              onClick={() => frequency.navigate("create")}
            >
              <PlusIcon color="white" />
              <span className="text-white text-sm font-semibold">Add Data</span>
            </button>
          </div>
        </div>

        <table className="w-full">
          <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
            <tr>
              <th className="px-[32px] text-start">Waktu Frequency</th>
              <th className="px-[32px] text-start">Action</th>
            </tr>
          </thead>
          <tbody className="text-base text-[#514E4E]">
            {frequency.dataFrequency?.data?.map((item, i) => (
              <tr key={i} className="border-b border-[#D0D3D9] h-[64px]">
                <td className="px-[32px]">{item.type}</td>
                <td className="px-[32px]">
                  <div className="flex items-center gap-6">
                    <button
                      className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F79009] rounded"
                      onClick={() => frequency.navigate(`${item.id}/edit`)}
                    >
                      <EditIcon color="white" />
                      <span className="text-white text-sm font-semibold">
                        Edit
                      </span>
                    </button>
                    <button
                      className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F04438] rounded"
                      onClick={() => {
                        frequency.setDataId(item.id);
                        frequency.setOpenModalDelete(true);
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

        {frequency.isLoadingData ? (
          <div className="w-full h-[48px] flex items-center justify-center">
            <LoadingIcon
              color="black"
              className="w-[24px] h-[24px] animate-spin"
            />
          </div>
        ) : !!!frequency.dataFrequency?.data?.length ? (
          <div className="w-full flex flex-col items-center py-[60px]">
            <img src={empty_data_table} alt="Empty data table" className="" />
            <span className="text-[#514E4E] text-2xl font-bold">
              Tidak ada data
            </span>
          </div>
        ) : null}

        <div className="flex py-4 px-[32px] justify-end gap-4">
          <button
            disabled={
              !!frequency.dataFrequency?.pagination?.prevPage ? false : true
            }
            onClick={() =>
              frequency.navigate(
                `../master-data/${frequency.dataFrequency?.pagination?.prevPage}/frequency`
              )
            }
            className={`px-4 h-[40px] text-[#B8B6B6] border gap-2 ${
              !!frequency.dataFrequency?.pagination?.prevPage
                ? "border-[#20519F]"
                : "border-[#B8B6B6]"
            } rounded flex items-center justify-center`}
          >
            <ArrowUpIcon
              className="w-[16px] h-[16px] -rotate-90"
              color="#B8B6B6"
            />
            <span>Prev</span>
          </button>
          <div className="w-[40px] h-[40px] bg-[#20519F] rounded flex items-center justify-center text-white">
            {!!frequency.dataFrequency?.pagination?.page
              ? frequency.dataFrequency?.pagination?.page
              : "-"}
          </div>
          <button
            disabled={
              !!frequency.dataFrequency?.pagination?.nextPage ? false : true
            }
            onClick={() =>
              frequency.navigate(
                `../master-data/${frequency.dataFrequency?.pagination?.nextPage}/frequency`
              )
            }
            className={`px-4 h-[40px] text-[#B8B6B6] border gap-2 ${
              !!frequency.dataFrequency?.pagination?.nextPage
                ? "border-[#20519F]"
                : "border-[#B8B6B6]"
            } rounded flex items-center justify-center`}
          >
            <span>Next</span>
            <ArrowUpIcon
              className="w-[16px] h-[16px] rotate-90"
              color={`${
                !!frequency.dataFrequency?.pagination?.nextPage
                  ? "#20519F"
                  : "#B8B6B6"
              }`}
            />
          </button>
        </div>
      </div>
    </main>
  );
}
