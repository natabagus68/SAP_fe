import { Breadcrumbs } from "@common/components";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import useMonitoring from "./monitoring-model";
import ReloadIcon from "@common/components/icons-new/ReloadIcon";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import ModalSuccess from "@common/components/modals/ModalSeccess";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";
import empty_data_table from "../../../../assets/png/empty_data_table.png";
import { useEffect } from "react";

export default function MonitoringView() {
  const monitorng = useMonitoring();

  useEffect(() => {
    monitorng.getDataMonitoring();
  }, [monitorng.page]);

  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <ModalConfirm
        open={monitorng.openModalConfirm}
        confirmMessage="Apakah anda yakin untuk me-Renew data ini?"
        setOpen={monitorng.setOpenModalConfirm}
        setOpenSuccess={monitorng.setOpenModalSuccess}
        cb={(setIsLoading) => {
          setTimeout(() => {
            setIsLoading({ loading: false, exec: true });
          }, 3000);
        }}
      />
      <ModalSuccess
        open={monitorng.openModalSuccess}
        setOpen={monitorng.setOpenModalSuccess}
      />
      <Breadcrumbs items={["Schedule", "Monitorng"]} />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">Monitoring</span>
        </div>
        <table className="w-full">
          <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
            <tr>
              <th className="px-[32px] text-start">Expired Date</th>
              <th className="px-[32px] text-start">Range</th>
              <th className="px-[32px] text-start">Machine Name</th>
              <th className="px-[32px] text-start">Maintenance Type</th>
              <th className="px-[32px] text-start">Section</th>
              <th className="px-[32px] text-start">Action</th>
            </tr>
          </thead>
          <tbody className="text-base text-[#514E4E]">
            {!monitorng.isLoadingData &&
              monitorng?.dataMonitoring?.data?.map((item, i) => (
                <tr key={i} className="border-b border-[#D0D3D9] h-[64px]">
                  <td className="px-[32px]">
                    {item.date.split("T")[0].split("-").reverse().join("-")}
                  </td>
                  <td className="px-[32px]">{item.range}</td>
                  <td className="px-[32px]">{item.machine_name}</td>
                  <td className="px-[32px]">
                    <div
                      className={`h-[32px] w-[99px] text-white flex items-center justify-center ${
                        item?.type == "checklist"
                          ? "bg-[#FECE00]"
                          : item?.type == "preventive"
                          ? "bg-[#20519F]"
                          : "bg-[#DB6037]"
                      } rounded-xl`}
                    >
                      {item?.type[0].toLocaleUpperCase()}{item?.type.slice(1)}
                    </div>
                  </td>
                  <td className="px-[32px]">{item.section_name}</td>
                  <td className="px-[32px]">
                    <div className="flex items-center gap-6">
                      <button
                        className="flex items-center gap-2 h-[46px] px-[20px] bg-[#12B569] rounded"
                        onClick={() => monitorng.setOpenModalConfirm(true)}
                      >
                        <ReloadIcon color="white" />
                        <span className="text-white text-sm font-semibold">
                          Renew
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {monitorng.isLoadingData ? (
          <div className="w-full h-[48px] flex items-center justify-center">
            <LoadingIcon
              color="black"
              className="w-[24px] h-[24px] animate-spin"
            />
          </div>
        ) : null}
        {!monitorng.isLoadingData ? (
          !!!monitorng.dataMonitoring?.data?.length ? (
            <div className="w-full flex flex-col items-center py-[60px]">
              <img src={empty_data_table} alt="Empty data table" className="" />
              <span className="text-[#514E4E] text-2xl font-bold">
                Tidak ada data
              </span>
            </div>
          ) : null
        ) : null}
        <div className="flex py-4 px-[32px] justify-end gap-4">
          <button 
            disabled={
              !!monitorng.dataMonitoring?.pagination?.prevPage ? false : true
            }
            onClick={() =>
              monitorng.navigate(
                `../monitoring/${monitorng.dataMonitoring?.pagination?.prevPage}`
              )
            }
            className={`px-4 h-[40px] border gap-2 ${
              !!monitorng.dataMonitoring?.pagination?.prevPage
                ? "border-[#20519F] text-[#20519F]"
                : "border-[#B8B6B6] text-[#B8B6B6]"
            } rounded flex items-center justify-center`}
          >
            <ArrowUpIcon
              className="w-[16px] h-[16px] -rotate-90"
              color={
                !!monitorng.dataMonitoring?.pagination?.prevPage ? "#20519F" : "#B8B6B6"
              }
            />
            <span>Prev</span>
          </button>
          <div className="w-[40px] h-[40px] bg-[#20519F] rounded flex items-center justify-center text-white">
            {!!monitorng.dataMonitoring?.pagination?.page
                ? monitorng.dataMonitoring?.pagination?.page
                : "-"}
          </div>
          <button 
            disabled={
              !!monitorng.dataMonitoring?.pagination?.nextPage ? false : true
            }
            onClick={() =>
              monitorng.navigate(
                `../monitoring/${monitorng.dataMonitoring?.pagination?.nextPage}`
              )
            }
            className={`px-4 h-[40px] border gap-2 ${
              !!monitorng.dataMonitoring?.pagination?.nextPage
                ? "border-[#20519F] text-[#20519F]"
                : "border-[#B8B6B6] text-[#B8B6B6]"
            } rounded flex items-center justify-center`}
          >
            <span>Next</span>
            <ArrowUpIcon
              className="w-[16px] h-[16px] rotate-90"
              color={
                !!monitorng.dataMonitoring?.pagination?.nextPage ? "#20519F" : "#B8B6B6"
              }
            />
          </button>
        </div>
      </div>
    </main>
  );
}
