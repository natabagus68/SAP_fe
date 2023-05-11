import usePreventive from "./preventive-model";
import { Breadcrumbs } from "@common/components";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import PlusIcon from "@common/components/icons-new/PlusIcon";
import Modal from "@common/components/modals/Modal";
import gambar_part from "../../../../assets/Gambar-part.png";

export default function PreventiveExpand() {
  const preventive = usePreventive();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["Report", "Preventive", "Details", "Parameter"]} />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            {preventive?.state?.data == "Gear" ? "Gear" : "Shaft & Bearing"}
          </span>
          <div className="flex items-end gap-4">
            <button
              className="flex items-center gap-2 h-[46px] px-[20px] border border-[#20519F] rounded"
              onClick={() => preventive.onOpenBackDetails()}
            >
              <ArrowUpIcon className="-rotate-90 w-5 h-5" color="#20519F" />
              <span className="text-[#20519F] text-sm font-semibold">
                Kembali
              </span>
            </button>
          </div>
        </div>
        <div className="w-full flex gap-[160px] py-[18px] px-[32px] flex-wrap">
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
              <tr>
                <th className="px-[32px] text-start border-l">Status</th>
                <th className="px-[32px] text-start border-l">
                  Deskripsi Before
                </th>
                <th className="px-[32px] text-start border-l">
                  Dokumentasi Before
                </th>
                <th className="px-[32px] text-start border-l">
                  Deskripsi After
                </th>
                <th className="px-[32px] text-start border-l">
                  Dokumentasi After
                </th>
              </tr>
            </thead>
            <tbody className="text-base text-[#514E4E]">
              <tr className="border border-[#D0D3D9] h-[64px]">
                <td className="px-[32px] border-l">Abnormal</td>
                <td className="px-[32px] border-l">Getar parah</td>
                <td className="px-[32px] border-l">
                  <button
                    className="flex items-center gap-2 h-[46px] px-[20px] bg-[#1BBDD4] rounded"
                    onClick={() => preventive.setOpenModalDetail(true)}
                  >
                    <EyeShowIcon color="white" />
                    <span className="text-white text-sm font-semibold">
                      Detail
                    </span>
                  </button>
                </td>
                <td className="px-[32px] border-l">Sudah Baik</td>
                <td className="px-[32px] border-l">
                  <div className="flex items-center gap-6">
                    <button
                      className="flex items-center gap-2 h-[46px] px-[20px] bg-[#1BBDD4] rounded"
                      onClick={() => preventive.setOpenModalDetail(true)}
                    >
                      <EyeShowIcon color="white" />
                      <span className="text-white text-sm font-semibold">
                        Detail
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {preventive?.state?.data != "Gear" ? (
        <div className="rounded-md border border-[#D0D3D9] bg-white">
          <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
            <span className="text-2xl text-[#514E4E] font-bold ">
              Inventory
            </span>
          </div>
          <div className="w-full flex gap-[160px] py-[18px] px-[32px] flex-wrap">
            <table className="w-full">
              <thead className="bg-[#FAFAFB] border border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
                <tr>
                  <th className="px-[32px] text-start border-l">Nama Part</th>
                  <th className="px-[32px] text-start border-l">Kode Part</th>
                  <th className="px-[32px] text-start border-l">Jumlah Part</th>
                  <th className="px-[32px] text-start border-l">Foto</th>
                </tr>
              </thead>
              <tbody className="text-base text-[#514E4E] ">
                <tr className="border border-[#D0D3D9] h-[64px]">
                  <td className="px-[32px] border-l">Pin Knock Out</td>
                  <td className="px-[32px] border-l">89657</td>
                  <td className="px-[32px] border-l">2</td>
                  <td className="px-[32px] border-l">
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-2 h-[46px] px-[20px] bg-[#1BBDD4] rounded">
                        <EyeShowIcon color="white" />
                        <span
                          className="text-white text-sm font-semibold "
                          onClick={() => preventive.setOpenModalPicture(true)}
                        >
                          Lihat
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      <Modal open={preventive.openModalDetail}>
        <div className="w-[800px] flex flex-col gap-2">
          <div className="w-full flex items-center justify-between p-[18px] border-b border-[#D0D3D9]">
            <span className="text-2xl text-[#514E4E] font-bold ">
              {preventive?.state?.data == "Before"
                ? "Dokumentasi Before"
                : "Dokumentasi After"}
            </span>
            <div className="flex items-end gap-4">
              <button
                className="flex items-center gap-2 h-[46px] px-[20px] border border-[#20519F] rounded"
                onClick={() => preventive.onOpenBackDetail()}
              >
                <PlusIcon className="rotate-45 w-5 h-5" color="#20519F" />
                <span className="text-[#20519F] text-sm font-semibold">
                  Tutup
                </span>
              </button>
            </div>
          </div>
          <div className="w-full flex gap-[25px] p-[18px] flex-wrap justify-center">
            <div className="flex flex-col justify-around">
              <span className="text-base font-bold text-[#514E4E] mb-3">
                Photo
              </span>
              <table className="w-[50px]">
                <tbody className="w-[100px] items-center">
                  <tr>
                    <td className="px-[16px]">
                      <div className="w-[50px] h-[50px]">
                        <img src={gambar_part} alt="Gambar=part" />
                      </div>
                    </td>
                    <td className="px-[16px]">Photo_kerusakan.jpg</td>
                    <td className="px-[16px] font-semibold text-blue-700">
                      <a onClick={() => preventive.setOpenModalPicture(true)}>
                        Lihat
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-col justify-around">
              <span className="text-base font-bold text-[#514E4E] mb-3">
                Video
              </span>
              <table className="w-[50px]">
                <tbody className="w-[100px] items-center">
                  <tr>
                    <td className="px-[16px]">
                      <div className="w-[50px] h-[50px]">
                        <img src={gambar_part} alt="Gambar=part" />
                      </div>
                    </td>
                    <td className="px-[16px]">video_kerusakan.mp4</td>
                    <td className="px-[16px] font-semibold text-blue-700">
                      <a onClick={() => preventive.setOpenModalVideo(true)}>
                        Lihat
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Modal>

      <Modal open={preventive.openModalPicture}>
        <div className="w-[500px] flex flex-col ">
          <div className="w-full flex items-center justify-end p-[8px] border-[#D0D3D9]">
            <div className="flex items-end">
              <button
                className="flex items-center h-[46px] px-[20px] border border-[#20519F] rounded"
                onClick={() => preventive.onOpenBackModalPicture()}
              >
                <PlusIcon className="rotate-45 w-5 h-5" color="#20519F" />
              </button>
            </div>
          </div>
          <div className="flex justify-center p-[5px]">
            <img src={gambar_part} alt="Gambar=part" />
          </div>
        </div>
      </Modal>

      <Modal open={preventive.openModalVideo}>
        <div className="w-[500px] flex flex-col ">
          <div className="w-full flex items-center justify-end p-[8px] border-[#D0D3D9]">
            <div className="flex items-end">
              <button
                className="flex items-center h-[46px] px-[20px] border border-[#20519F] rounded"
                onClick={() => preventive.onOpenBackModalVideo()}
              >
                <PlusIcon className="rotate-45 w-5 h-5" color="#20519F" />
              </button>
            </div>
          </div>
          <div className="flex justify-center p-[5px]">
            <img src={gambar_part} alt="Gambar=part" />
          </div>
        </div>
      </Modal>
    </main>
  );
}
