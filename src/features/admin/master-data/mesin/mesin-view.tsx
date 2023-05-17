import { Breadcrumbs } from "@common/components";
import PlusIcon from "@common/components/icons-new/PlusIcon";
import useMesin from "./mesin-model";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import EditIcon from "@common/components/icons-new/EditIcon";
import TrashIcon from "@common/components/icons-new/TrashIcon";
// import { useEffect } from "react";
import ModalDelete from "@common/components/modals/ModalDelete";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import ModalSuccess from "@common/components/modals/ModalSeccess";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";
import empty_data_table from "../../../../assets/png/empty_data_table.png";

export default function MesinView() {
  const mesin = useMesin();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <ModalDelete
        open={mesin.openModalDelete}
        setOpen={mesin.setOpenModalDelete}
        setOpenConfirm={mesin.setOpenModalConfirm}
      />
      <ModalConfirm
        open={mesin.openModalConfirm}
        setOpen={mesin.setOpenModalConfirm}
        setOpenSuccess={mesin.setOpenModalSuccess}
        confirmMessage="Apakah anda yakin ingin menghapus data ini?"
        cb={(setIsLoading) => {
          if (mesin.type == "mesin") {
            mesin.deleteMesin(mesin.dataId, setIsLoading);
          } else if (mesin.type == "sub-mesin") {
            mesin.deleteSubmesin(mesin.dataId, setIsLoading);
          } else if (mesin.type == "parameter") {
            mesin.deleteParameter(mesin.dataId, setIsLoading);
          } else if (mesin.type == "indikator") {
            mesin.deleteIndikator(mesin.dataId, setIsLoading);
          } else {
            mesin.deleteUom(mesin.dataId, setIsLoading);
          }
        }}
      />
      <ModalSuccess
        open={mesin.openModalSuccess}
        setOpen={mesin.setOpenModalSuccess}
        isSuccess={mesin.isSuccess}
        successMessage="Berhasil menghapus data!"
      />
      <Breadcrumbs
        items={[
          "Master Data",
          `${mesin.type[0].toLocaleUpperCase()}${mesin.type.slice(1)}`,
        ]}
      />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">Mesin</span>
        </div>
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <div className="flex gap-[32px]">
            <button
              className={`${
                mesin.type == "mesin"
                  ? "text-[#20519F] border-b border-[#20519F]"
                  : "text-[#514E4E]"
              } text-base font-semibold pb-2`}
              onClick={() => mesin.navigate("./../../mesin/mesin")}
            >
              Mesin
            </button>
            <button
              className={`${
                mesin.type == "sub-mesin"
                  ? "text-[#20519F] border-b border-[#20519F]"
                  : "text-[#514E4E]"
              } text-base font-semibold pb-2`}
              onClick={() => mesin.navigate("./../../sub-mesin/mesin")}
            >
              Sub-Mesin
            </button>
            <button
              className={`${
                mesin.type == "parameter"
                  ? "text-[#20519F] border-b border-[#20519F]"
                  : "text-[#514E4E]"
              } text-base font-semibold pb-2`}
              onClick={() => mesin.navigate("./../../parameter/mesin")}
            >
              Parameter
            </button>
            <button
              className={`${
                mesin.type == "indikator"
                  ? "text-[#20519F] border-b border-[#20519F]"
                  : "text-[#514E4E]"
              } text-base font-semibold pb-2`}
              onClick={() => mesin.navigate("./../../indikator/mesin")}
            >
              Indikator
            </button>
            <button
              className={`${
                mesin.type == "uom"
                  ? "text-[#20519F] border-b border-[#20519F]"
                  : "text-[#514E4E]"
              } text-base font-semibold pb-2`}
              onClick={() => mesin.navigate("./../../uom/mesin")}
            >
              UoM
            </button>
          </div>
          <div className="flex items-end gap-4">
            <button
              className="flex items-center gap-2 h-[46px] px-[20px] bg-[#20519F] rounded"
              onClick={() => mesin.navigate("create")}
            >
              <PlusIcon color="white" />
              <span className="text-white text-sm font-semibold">Add Data</span>
            </button>
          </div>
        </div>

        {mesin.type == "mesin" ? (
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
              <tr>
                <th className="px-[32px] text-start">No. Mesin</th>
                <th className="px-[32px] text-start">Nama Mesin</th>
                <th className="px-[32px] text-start">Section</th>
                <th className="px-[32px] text-start">Action</th>
              </tr>
            </thead>
            <tbody className="text-base text-[#514E4E]">
              {mesin.dataMesin.map((item, i) => (
                <tr key={i} className="border-b border-[#D0D3D9] h-[64px]">
                  <td className="px-[32px]">{item.machine_no}</td>
                  <td className="px-[32px]">{item.name}</td>
                  <td className="px-[32px]">{item.section_name}</td>
                  <td className="px-[32px]">
                    <div className="flex items-center gap-6">
                      <button
                        className="flex items-center gap-2 h-[46px] px-[20px] bg-[#1BBDD4] rounded"
                        onClick={() => mesin.navigate(`${item.id}/details`)}
                      >
                        <EyeShowIcon color="white" />
                        <span className="text-white text-sm font-semibold">
                          Detail
                        </span>
                      </button>
                      <button
                        className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F79009] rounded"
                        onClick={() => mesin.navigate(`${item.id}/edit`)}
                      >
                        <EditIcon color="white" />
                        <span className="text-white text-sm font-semibold">
                          Edit
                        </span>
                      </button>
                      <button
                        className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F04438] rounded"
                        onClick={() => {
                          mesin.setDataId(item.id);
                          mesin.setOpenModalDelete(true);
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
        ) : null}

        {mesin.type == "sub-mesin" ? (
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
              <tr>
                <th className="px-[32px] text-start">No. Sub-Mesin</th>
                <th className="px-[32px] text-start">Nama Sub-Mesin</th>
                <th className="px-[32px] text-start">Action</th>
              </tr>
            </thead>
            <tbody className="text-base text-[#514E4E]">
              {mesin.dataSubMesin.map((item, i) => (
                <tr key={i} className="border-b border-[#D0D3D9] h-[64px]">
                  <td className="px-[32px]">{item.sub_machine_no}</td>
                  <td className="px-[32px]">{item.name}</td>
                  <td className="px-[32px]">
                    <div className="flex items-center gap-6">
                      <button
                        className="flex items-center gap-2 h-[46px] px-[20px] bg-[#1BBDD4] rounded"
                        onClick={() => mesin.navigate(`${item.id}/details`)}
                      >
                        <EyeShowIcon color="white" />
                        <span className="text-white text-sm font-semibold">
                          Detail
                        </span>
                      </button>
                      <button
                        className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F79009] rounded"
                        onClick={() => mesin.navigate(`${item.id}/edit`)}
                      >
                        <EditIcon color="white" />
                        <span className="text-white text-sm font-semibold">
                          Edit
                        </span>
                      </button>
                      <button
                        className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F04438] rounded"
                        onClick={() => {
                          mesin.setDataId(item.id);
                          mesin.setOpenModalDelete(true);
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
        ) : null}

        {mesin.type == "parameter" ? (
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
              <tr>
                <th className="px-[32px] text-start">Nama Parameter</th>
                <th className="px-[32px] text-start">Variabel</th>
                <th className="px-[32px] text-start">Indikator</th>
                <th className="px-[32px] text-start">Action</th>
              </tr>
            </thead>
            <tbody className="text-base text-[#514E4E]">
              {mesin.dataParameter.map((item, i) => (
                <tr key={i} className="border-b border-[#D0D3D9] h-[64px]">
                  <td className="px-[32px]">{item.name}</td>
                  <td className="px-[32px]">{item.variable}</td>
                  <td className="px-[32px]">{item.indicator}</td>
                  <td className="px-[32px]">
                    <div className="flex items-center gap-6">
                      <button
                        className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F79009] rounded"
                        onClick={() => mesin.navigate(`${item.id}/edit`)}
                      >
                        <EditIcon color="white" />
                        <span className="text-white text-sm font-semibold">
                          Edit
                        </span>
                      </button>
                      <button
                        className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F04438] rounded"
                        onClick={() => {
                          mesin.setDataId(item.id);
                          mesin.setOpenModalDelete(true);
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
        ) : null}

        {mesin.type == "indikator" ? (
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
              <tr>
                <th className="px-[32px] text-start">Deskripsi Indikator</th>
                <th className="px-[32px] text-start">Action</th>
              </tr>
            </thead>
            <tbody className="text-base text-[#514E4E]">
              {mesin.dataIndikator.map((item, i) => (
                <tr key={i} className="border-b border-[#D0D3D9] h-[64px]">
                  <td className="px-[32px]">{item.name}</td>
                  <td className="px-[32px]">
                    <div className="flex items-center gap-6">
                      <button
                        className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F79009] rounded"
                        onClick={() => mesin.navigate(`${item.id}/edit`)}
                      >
                        <EditIcon color="white" />
                        <span className="text-white text-sm font-semibold">
                          Edit
                        </span>
                      </button>
                      <button
                        className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F04438] rounded"
                        onClick={() => {
                          mesin.setDataId(item.id);
                          mesin.setOpenModalDelete(true);
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
        ) : null}

        {mesin.type == "uom" ? (
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
              <tr>
                <th className="px-[32px] text-start">Unit of Measurement</th>
                <th className="px-[32px] text-start">Action</th>
              </tr>
            </thead>
            <tbody className="text-base text-[#514E4E]">
              {mesin.dataUom.map((item, i) => (
                <tr className="border-b border-[#D0D3D9] h-[64px]">
                  <td className="px-[32px]">{item.name}</td>
                  <td className="px-[32px]">
                    <div className="flex items-center gap-6">
                      <button
                        className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F79009] rounded"
                        onClick={() => mesin.navigate(`${item.id}/edit`)}
                      >
                        <EditIcon color="white" />
                        <span className="text-white text-sm font-semibold">
                          Edit
                        </span>
                      </button>
                      <button
                        className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F04438] rounded"
                        onClick={() => {
                          mesin.setDataId(item.id);
                          mesin.setOpenModalDelete(true);
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
        ) : null}

        {mesin.isLoadingData ? (
          <div className="w-full h-[48px] flex items-center justify-center">
            <LoadingIcon
              color="black"
              className="w-[24px] h-[24px] animate-spin"
            />
          </div>
        ) : null}
        {!mesin.isLoadingData ? (
          !!!mesin.dataMesin.length && mesin.type == "mesin" ? (
            <div className="w-full flex flex-col items-center py-[60px]">
              <img src={empty_data_table} alt="Empty data table" className="" />
              <span className="text-[#514E4E] text-2xl font-bold">
                Tidak ada data
              </span>
            </div>
          ) : null
        ) : null}
        {!mesin.isLoadingData ? (
          !!!mesin.dataSubMesin.length && mesin.type == "sub-mesin" ? (
            <div className="w-full flex flex-col items-center py-[60px]">
              <img src={empty_data_table} alt="Empty data table" className="" />
              <span className="text-[#514E4E] text-2xl font-bold">
                Tidak ada data
              </span>
            </div>
          ) : null
        ) : null}
        {!mesin.isLoadingData ? (
          !!!mesin.dataIndikator.length && mesin.type == "indikator" ? (
            <div className="w-full flex flex-col items-center py-[60px]">
              <img src={empty_data_table} alt="Empty data table" className="" />
              <span className="text-[#514E4E] text-2xl font-bold">
                Tidak ada data
              </span>
            </div>
          ) : null
        ) : null}
        {!mesin.isLoadingData ? (
          !!!mesin.dataParameter.length && mesin.type == "parameter" ? (
            <div className="w-full flex flex-col items-center py-[60px]">
              <img src={empty_data_table} alt="Empty data table" className="" />
              <span className="text-[#514E4E] text-2xl font-bold">
                Tidak ada data
              </span>
            </div>
          ) : null
        ) : null}
        {!mesin.isLoadingData ? (
          !!!mesin.dataUom.length && mesin.type == "uom" ? (
            <div className="w-full flex flex-col items-center py-[60px]">
              <img src={empty_data_table} alt="Empty data table" className="" />
              <span className="text-[#514E4E] text-2xl font-bold">
                Tidak ada data
              </span>
            </div>
          ) : null
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
