import { Breadcrumbs } from "@common/components";
import useIoStock from "./io-stock-model";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import SearchIcon from "@common/components/icons-new/SearchIcon";
import empty_data_table from "../../../../assets/png/empty_data_table.png";
import ExportIcon from "@common/components/icons-new/ExportIcon";
import moment from "moment";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";

export default function IoStockView() {
  const ioStock = useIoStock();
  
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["Sparepart", "In/out stock", "Log Transaksi"]} />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        {
          ioStock.isLoadingData ? (
            <div className="w-full h-[48px] flex items-center justify-center">
              <LoadingIcon
                color="black"
                className="w-[24px] h-[24px] animate-spin"
              />
            </div>
          )
          :
          <>
            <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
              <span className="text-2xl text-[#514E4E] font-bold ">
                Log Transaksi
              </span>
              <div className="flex items-end gap-4">
                <button
                  className="flex items-center justify-center gap-2 h-[46px] px-[20px] w-[181px] border border-[#20519F] rounded"
                  type="button"
                  onClick={() => ioStock.navigate("..")}
                >
                  <ArrowUpIcon className="-rotate-90 w-5 h-5" color="#20519F" />
                  <span className="text-[#20519F] text-sm font-semibold">
                    Kembali
                  </span>
                </button>
                <button className="flex items-center gap-2 h-[46px] px-[20px] bg-[#20519F] rounded">
                  <ExportIcon color="white" />
                  <span className="text-white text-sm font-semibold">
                    Download Log
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
              <div className="flex items-center gap-2  border border-[#D0D3D9] rounded px-2">
                <SearchIcon color="#B8B6B6" className="w-[18px] h-[18px]" />
                <input
                  type="search"
                  className="h-[40px] outline-none w-[180px]"
                  placeholder="Cari"
                />
              </div>
            </div>
            <table className="w-full">
              <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
                <tr>
                  <th className="px-[32px] text-start">Jenis Transaksi</th>
                  <th className="px-[32px] text-start">Date</th>
                  <th className="px-[32px] text-start">Part No</th>
                  <th className="px-[32px] text-start">Part Name</th>
                  <th className="px-[32px] text-start">Quantity</th>
                  <th className="px-[32px] text-start">Transaksi By</th>
                </tr>
              </thead>
              <tbody className="text-base text-[#514E4E]">
                {
                  ioStock.dataIoStock.map((item, i) => (
                    <tr key={i} className="border-b border-[#D0D3D9] h-[64px]">
                      <td className="px-[32px]"><div className={`w-[53px] h-[32px] rounded-xl flex items-center justify-center text-white text-base uppercase ${item.type === 'in' ? 'bg-[#41C487]' : 'bg-[#F36960]'}`}>{item.type}</div></td>
                      <td className="px-[32px]">{moment(item.date).format('DD/MM/YYYY HH:mm:ss')}</td>
                      <td className="px-[32px]">{item.part_no}</td>
                      <td className="px-[32px]">{item.part_name}</td>
                      <td className="px-[32px]">{item.qty}</td>
                      <td className="px-[32px]">{item.user}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            {
              !ioStock.dataIoStock.length &&
              <div className="w-full flex flex-col items-center py-[60px]">
                <img src={empty_data_table} alt="Empty data table" className="" />
                <span className="text-[#514E4E] text-2xl font-bold">
                  Tidak ada request hari ini
                </span>
              </div>
            }
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
          </>
        }
      </div>
    </main>
  );
}
