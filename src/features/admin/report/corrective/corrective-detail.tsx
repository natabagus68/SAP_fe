import React from "react";
import useCorrective from "./corrective-model";
import { Breadcrumbs } from "@common/components";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import ExportIcon from "@common/components/icons-new/ExportIcon";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import Modal from "@common/components/modals/Modal";
import PlusIcon from "@common/components/icons-new/PlusIcon";
import gambar_part from "../../../../assets/gambar-part.png";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";
import empty_data_table from "../../../../assets/png/empty_data_table.png";

export default function CorrectiveDetail() {
  const corrective = useCorrective();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["Report", "Corrective", "Details"]} />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            Detail Corrective
          </span>
          <div className="flex items-end gap-4">
            <button
              className="flex items-center gap-2 h-[46px] px-[20px] border border-[#20519F] rounded"
              onClick={() => corrective.onOpenBack()}
            >
              <ArrowUpIcon className="-rotate-90 w-5 h-5" color="#20519F" />
              <span className="text-[#20519F] text-sm font-semibold">
                Kembali
              </span>
            </button>
            <button className="flex items-center gap-2 h-[46px] px-[20px] bg-[#20519F] rounded">
              <ExportIcon color="white" />
              <span className="text-white text-sm font-semibold">
                Download Report
              </span>
            </button>
          </div>
        </div>
        <div className="w-full flex gap-[160px] py-[18px] px-[32px] flex-wrap">
          <div className="flex flex-col gap-6">
            <span className="text-2xl text-[#514E4E]">
              Informasi Maintenance
            </span>
            <table className="w-[442px]">
              <tbody>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">No Mesin</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {corrective.dataCorrectiveById?.machine_no}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Nama Mesin</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {corrective.dataCorrectiveById?.machine_name}
                  </td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Pelaksana</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {corrective.dataCorrectiveById?.pic}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Durasi Kerusakan</td>
                  <td className="px-4 py-[6px] font-semibold ">
                    {corrective.dataCorrectiveById?.damage_time}
                  </td>
                </tr>
              </tbody>
            </table>
            <span className="text-2xl text-[#514E4E]">Laporan Corrective</span>
            <table className="w-[442px]">
              <tbody>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Tipe Perbaikan</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {corrective.dataCorrectiveById?.repairing_type}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Estimasi Lifetime</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {corrective.dataCorrectiveById?.lifetime_estimate}
                  </td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Jenis Kerusakan</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {corrective.dataCorrectiveById?.damage_type}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Deskripsi Kerusakan</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {corrective.dataCorrectiveById?.deskripsi}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-base text-[#514E4E] flex gap-4">
              <span>Tanggal & Jam Corrective :</span>
              <span className="font-semibold">
                {corrective.dataCorrectiveById?.date}
              </span>
            </div>
            <table className="w-[442px]">
              <tbody>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Section</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {corrective.dataCorrectiveById?.section}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Departemen</td>
                  <td className="px-4 py-[6px] font-semibold">
                    {corrective.dataCorrectiveById?.department}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="text-base text-[#514E4E] flex gap-4 space-y-8">
              <span className="text-2xl text-[#514E4E]">
                Dokumentasi Kerusakan
              </span>
            </div>
            <table className="w-[442px]">
              <tbody>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Before</td>
                  <td className="px-4 py-[6px] font-semibold text-blue-700">
                    <a
                      onClick={() => {
                        corrective.setStatusDocument(false);
                        corrective.setOpenModalDetail(true);
                      }}
                    >
                      Lihat
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">After</td>
                  <td className="px-4 py-[6px] font-semibold text-blue-700">
                    {" "}
                    <a
                      onClick={() => {
                        corrective.setStatusDocument(true);
                        corrective.setOpenModalDetail(true);
                      }}
                    >
                      Lihat
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center py-[18px] px-[32px] border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">Inventory</span>
        </div>
        <div className="w-full flex gap-[80px] py-[18px] px-[32px] flex-wrap">
          {" "}
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold ">
              <tr>
                <th className="px-[32px] text-start border-l">Nama Part</th>
                <th className="px-[32px] text-start border-l">Kode Part</th>
                <th className="px-[32px] text-start border-l">Jumlah Part</th>
                <th className="px-[32px] text-start border-l">Foto</th>
              </tr>
            </thead>
            <tbody className="text-base text-[#514E4E] ">
              {corrective.dataCorrectiveById?.inventory?.map((item, i) => (
                <>
                  <tr key={i} className="border-b border-[#D0D3D9] h-[64px]">
                    <td className="px-[32px] border-l">{item.name}</td>
                    <td className="px-[32px] border-l">{item.code}</td>
                    <td className="px-[32px] border-l">{item.quantity}</td>
                    <td className="px-[32px] border-l border-r">
                      <div className="flex items-center gap-6">
                        <button className="flex items-center gap-2 h-[46px] px-[20px] bg-[#1BBDD4] rounded">
                          <EyeShowIcon color="white" />
                          <span
                            className="text-white text-sm font-semibold "
                            onClick={() => corrective.setOpenModalPicture(true)}
                          >
                            Lihat
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
          {!corrective.dataCorrectiveById?.inventory.length ? (
            <div className="w-full h-[24px] flex items-center justify-center">
              Data Inventory Kosong
            </div>
          ) : null}
        </div>

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

      <Modal open={corrective.openModalDetail}>
        <div className="w-[800px] flex flex-col gap-2">
          <div className="w-full flex items-center justify-between p-[18px] border-b border-[#D0D3D9]">
            <span className="text-2xl text-[#514E4E] font-bold ">
              {corrective.statusDocument == false
                ? "Dokumentasi Before"
                : "Dokumentasi After"}
            </span>
            <div className="flex items-end gap-4">
              <button
                className="flex items-center gap-2 h-[46px] px-[20px] border border-[#20519F] rounded"
                onClick={() => corrective.onOpenBackDetail()}
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
                        {corrective.statusDocument == false ? (
                          <img
                            src={
                              corrective.dataCorrectiveById
                                ?.documentationBeforePhoto
                            }
                            alt="Gambar-part"
                          />
                        ) : (
                          <img
                            src={
                              corrective.dataCorrectiveById
                                ?.documentationAfterPhoto
                            }
                            alt="Gambar-part"
                          />
                        )}
                      </div>
                    </td>
                    <td className="px-[16px]">
                      {corrective.statusDocument == false ? (
                        <>
                          {` ${corrective.dataCorrectiveById?.documentationBeforePhoto}`.split(
                            "/"
                          )}
                        </>
                      ) : (
                        <>
                          {` ${corrective.dataCorrectiveById?.documentationAfterPhoto}`.split(
                            "/"
                          )}
                        </>
                      )}
                    </td>
                    <td className="px-[16px] font-semibold text-blue-700">
                      <a onClick={() => corrective.setOpenModalPicture(true)}>
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
                        {corrective.statusDocument == false ? (
                          <img
                            src={
                              corrective.dataCorrectiveById
                                ?.documentationBeforeVideo
                            }
                            alt="Video-part"
                          />
                        ) : (
                          <img
                            src={
                              corrective.dataCorrectiveById
                                ?.documentationAfterVideo
                            }
                            alt="Video-part"
                          />
                        )}
                      </div>
                    </td>
                    <td className="px-[16px]">
                      {corrective.statusDocument == false ? (
                        <>
                          {` ${corrective.dataCorrectiveById?.documentationBeforeVideo}`.split(
                            "/"
                          )}
                        </>
                      ) : (
                        <>
                          {` ${corrective.dataCorrectiveById?.documentationAfterVideo}`.split(
                            "/"
                          )}
                        </>
                      )}
                    </td>
                    <td className="px-[16px] font-semibold text-blue-700">
                      <a onClick={() => corrective.setOpenModalVideo(true)}>
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

      <dialog
        open={corrective.openModalPicture}
        className="bg-black bg-opacity-50 w-[100dvw] h-[100dvh] z-50 top-0 left-0 fixed p-0 m-0"
      >
        <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="relative flex justify-center ">
            <img
              src={corrective.dataCorrectiveById?.documentationBeforePhoto}
              alt="Gambar-part"
              className="w-[500px]"
            />
            <button
              className="flex items-center p-2 top-0 right-0  absolute "
              onClick={() => corrective.onOpenBackModalPicture()}
            >
              <PlusIcon className="rotate-45 w-6 h-6" color="white" />
            </button>
          </div>
        </div>
      </dialog>

      <dialog
        open={corrective.openModalVideo}
        className="bg-black bg-opacity-50 w-[100dvw] h-[100dvh] z-50 top-0 left-0 fixed p-0 m-0"
      >
        <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="relative flex justify-center ">
            <img
              src={corrective.dataCorrectiveById?.documentationBeforeVideo}
              alt="Gambar=part"
              className="w-[500px]"
            />
            <button
              className="flex items-center p-2 top-0 right-0  absolute "
              onClick={() => corrective.onOpenBackModalVideo()}
            >
              <PlusIcon className="rotate-45 w-6 h-6" color="white" />
            </button>
          </div>
        </div>
      </dialog>
    </main>
  );
}
