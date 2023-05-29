import { Breadcrumbs } from "@common/components";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import EditIcon from "@common/components/icons-new/EditIcon";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import PlusIcon from "@common/components/icons-new/PlusIcon";
import TrashIcon from "@common/components/icons-new/TrashIcon";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import ModalDelete from "@common/components/modals/ModalDelete";
import ModalSuccess from "@common/components/modals/ModalSeccess";
import useSparepart from "./sparepart-model";
import { Toggle } from "@common/components";
import empty_data_table from "../../../../assets/png/empty_data_table.png";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";
import mechanical from "../../../../assets/svg/settings.svg";
import electrical from "../../../../assets/svg/socket.svg";
import fasteners from "../../../../assets/svg/fastener.svg";
import shaft from "../../../../assets/svg/shaft.svg";
import ring from "../../../../assets/svg/marriage.svg";
import oil from "../../../../assets/svg/raw-oil.svg";
import other from "../../../../assets/svg/toolbox.svg";

export default function SparepartView() {
  const sparepart = useSparepart();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <ModalDelete
        open={sparepart.openModalDelete}
        setOpen={sparepart.setOpenModalDelete}
        setOpenConfirm={sparepart.setOpenModalConfirm}
      />
      <ModalConfirm
        open={sparepart.openModalConfirm}
        setOpen={sparepart.setOpenModalConfirm}
        setOpenSuccess={sparepart.setOpenModalSuccess}
        confirmMessage="Apakah anda yakin ingin menghapus data ini?"
        cb={(setIsLoading) => {
          if (sparepart.type == "part") {
            sparepart.deleteDataSparepart(sparepart.dataId, setIsLoading);
          } else if (sparepart.type == "kategory-inventory") {
            sparepart.deleteDataInventory(sparepart.dataId, setIsLoading);
          } else if (sparepart.type == "availability") {
            sparepart.deleteDataAvailability(sparepart.dataId, setIsLoading);
          } else if (sparepart.type == "kategory-sparepart") {
            sparepart.deleteDataCategory(sparepart.dataId, setIsLoading);
          }
        }}
      />
      <ModalSuccess
        open={sparepart.openModalSuccess}
        setOpen={sparepart.setOpenModalSuccess}
        isSuccess={sparepart.isSuccess}
        successMessage="Berhasil menghapus data!"
      />
      <Breadcrumbs
        items={[
          "Master Data",
          `${sparepart.type[0].toLocaleUpperCase()}${sparepart.type.slice(1)}`,
        ]}
      />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">Sparepart</span>
        </div>
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <div className="flex gap-[32px]">
            <button
              className={`${
                sparepart.type == "part"
                  ? "text-[#20519F] border-b border-[#20519F]"
                  : "text-[#514E4E]"
              } text-base font-semibold pb-2`}
              onClick={() =>
                sparepart.navigate("../master-data/part/1/sparepart")
              }
            >
              Part
            </button>
            <button
              className={`${
                sparepart.type == "kategory-inventory"
                  ? "text-[#20519F] border-b border-[#20519F]"
                  : "text-[#514E4E]"
              } text-base font-semibold pb-2`}
              onClick={() =>
                sparepart.navigate(
                  "../master-data/kategory-inventory/1/sparepart"
                )
              }
            >
              Kategory Inventory
            </button>
            <button
              className={`${
                sparepart.type == "availability"
                  ? "text-[#20519F] border-b border-[#20519F]"
                  : "text-[#514E4E]"
              } text-base font-semibold pb-2`}
              onClick={() =>
                sparepart.navigate("../master-data/availability/1/sparepart")
              }
            >
              Availability
            </button>
            <button
              className={`${
                sparepart.type == "kategory-sparepart"
                  ? "text-[#20519F] border-b border-[#20519F]"
                  : "text-[#514E4E]"
              } text-base font-semibold pb-2`}
              onClick={() =>
                sparepart.navigate(
                  "../master-data/kategory-sparepart/1/sparepart"
                )
              }
            >
              Kategory Sparepart
            </button>
          </div>
          <div className="flex items-end gap-4">
            <button
              className="flex items-center gap-2 h-[46px] px-[20px] bg-[#20519F] rounded"
              onClick={() => sparepart.navigate("create")}
            >
              <PlusIcon color="white" />
              <span className="text-white text-sm font-semibold">Add Data</span>
            </button>
          </div>
        </div>

        {sparepart.type == "part" ? (
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
              <tr>
                <th className="px-[32px] text-start">Kategory</th>
                <th className="px-[32px] text-start">Item Code</th>
                <th className="px-[32px] text-start">Part Name</th>
                <th className="px-[32px] text-start">Availability</th>
                <th className="px-[32px] text-start">Stok</th>
                <th className="px-[32px] text-start">Action</th>
              </tr>
            </thead>
            <tbody className="text-base text-[#514E4E]">
              {sparepart.dataPartWithFilter?.data?.map((item, i) => {
                return (
                  <tr key={i} className="border-b border-[#D0D3D9] h-[64px]">
                    <td className="px-[32px]">{item.category_name}</td>
                    <td className="px-[32px]">{item.item_code}</td>
                    <td className="px-[32px]">{item.part_name}</td>
                    <td className="px-[32px]">{item.availability_rack_code}</td>
                    <td className="px-[32px]">{item.qty_stock}</td>
                    <td className="px-[32px]">
                      <div className="flex items-center gap-6">
                        <button
                          className="flex items-center gap-2 h-[46px] px-[20px] bg-[#1BBDD4] rounded"
                          onClick={() =>
                            sparepart.navigate(`${item.id}/details`)
                          }
                        >
                          <EyeShowIcon color="white" />
                          <span className="text-white text-sm font-semibold">
                            Detail
                          </span>
                        </button>
                        <button
                          className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F79009] rounded"
                          onClick={() => sparepart.navigate(`${item.id}/edit`)}
                        >
                          <EditIcon color="white" />
                          <span className="text-white text-sm font-semibold">
                            Edit
                          </span>
                        </button>
                        <button
                          className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F04438] rounded"
                          onClick={() => {
                            sparepart.setDataId(item.id);
                            sparepart.setOpenModalDelete(true);
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
                );
              })}
            </tbody>
          </table>
        ) : null}

        {sparepart.type == "kategory-inventory" ? (
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
              <tr>
                <th className="px-[32px] text-start">Status</th>
                <th className="px-[32px] text-start">Nama Kategory</th>
                <th className="px-[32px] text-start">Icon Kategory</th>
                <th className="px-[32px] text-start">Action</th>
              </tr>
            </thead>
            <tbody className="text-base text-[#514E4E]">
              {sparepart.dataInventoryWithFilter?.data?.map((item, i) => (
                <tr key={i} className="border-b border-[#D0D3D9] h-[64px]">
                  <td className="px-[32px]">
                    <div className="flex items-center">
                      <Toggle
                        id={item.id}
                        checked={item.status == "active" ? true : false}
                        cb={() => sparepart.editStatusInventory(item.id)}
                      />
                      <span>{item?.status}</span>
                    </div>
                  </td>
                  <td className="px-[32px]">{item?.name}</td>
                  <td className="px-[32px]">
                    <img
                      src={
                        item?.icon == "mechanical"
                          ? mechanical
                          : item?.icon == "electrical"
                          ? electrical
                          : item?.icon == "fasteners"
                          ? fasteners
                          : item?.icon == "shaft"
                          ? shaft
                          : item?.icon == "ring"
                          ? ring
                          : item?.icon == "oil"
                          ? oil
                          : other
                      }
                      alt="icon-kategory"
                    />
                  </td>
                  <td className="px-[32px]">
                    <div className="flex items-center gap-6">
                      <button
                        className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F79009] rounded"
                        onClick={() => sparepart.navigate(`${item.id}/edit`)}
                      >
                        <EditIcon color="white" />
                        <span className="text-white text-sm font-semibold">
                          Edit
                        </span>
                      </button>
                      <button
                        className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F04438] rounded"
                        onClick={() => {
                          sparepart.setDataId(item.id);
                          sparepart.setOpenModalDelete(true);
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

        {sparepart.type == "availability" ? (
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
              <tr>
                <th className="px-[32px] text-start">Rak</th>
                <th className="px-[32px] text-start">Section</th>
                <th className="px-[32px] text-start">Action</th>
              </tr>
            </thead>
            <tbody className="text-base text-[#514E4E]">
              {sparepart.dataAvailabilityWithFilter?.data?.map((item, i) => (
                <tr key={i} className="border-b border-[#D0D3D9] h-[64px]">
                  <td className="px-[32px]">{item?.rack_code}</td>
                  <td className="px-[32px]">{item?.section_name}</td>
                  <td className="px-[32px]">
                    <div className="flex items-center gap-6">
                      <button
                        className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F79009] rounded"
                        onClick={() => sparepart.navigate(`${item.id}/edit`)}
                      >
                        <EditIcon color="white" />
                        <span className="text-white text-sm font-semibold">
                          Edit
                        </span>
                      </button>
                      <button
                        className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F04438] rounded"
                        onClick={() => {
                          sparepart.setDataId(item.id);
                          sparepart.setOpenModalDelete(true);
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

        {sparepart.type == "kategory-sparepart" ? (
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
              <tr>
                <th className="px-[32px] text-start">Kategory Type</th>
                <th className="px-[32px] text-start">Action</th>
              </tr>
            </thead>
            <tbody className="text-base text-[#514E4E]">
              {sparepart.dataCategoryWithFilter?.data?.map((item, i) => (
                <tr key={i} className="border-b border-[#D0D3D9] h-[64px]">
                  <td className="px-[32px]">{item.name}</td>
                  <td className="px-[32px]">
                    <div className="flex items-center gap-6">
                      <button
                        className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F79009] rounded"
                        onClick={() => sparepart.navigate(`${item.id}/edit`)}
                      >
                        <EditIcon color="white" />
                        <span className="text-white text-sm font-semibold">
                          Edit
                        </span>
                      </button>
                      <button
                        className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F04438] rounded"
                        onClick={() => {
                          sparepart.setDataId(item.id);
                          sparepart.setOpenModalDelete(true);
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

        {sparepart.isLoadingData ? (
          <div className="w-full h-[48px] flex items-center justify-center">
            <LoadingIcon
              color="black"
              className="w-[24px] h-[24px] animate-spin"
            />
          </div>
        ) : null}
        {!sparepart.isLoadingData ? (
          !!!sparepart.dataPartWithFilter?.data?.length &&
          sparepart.type == "part" ? (
            <div className="w-full flex flex-col items-center py-[60px]">
              <img src={empty_data_table} alt="Empty data table" className="" />
              <span className="text-[#514E4E] text-2xl font-bold">
                Tidak ada data
              </span>
            </div>
          ) : null
        ) : null}
        {!sparepart.isLoadingData ? (
          !!!sparepart.dataInventoryWithFilter?.data?.length &&
          sparepart.type == "kategory-inventory" ? (
            <div className="w-full flex flex-col items-center py-[60px]">
              <img src={empty_data_table} alt="Empty data table" className="" />
              <span className="text-[#514E4E] text-2xl font-bold">
                Tidak ada data
              </span>
            </div>
          ) : null
        ) : null}
        {!sparepart.isLoadingData ? (
          !!!sparepart.dataAvailabilityWithFilter?.data?.length &&
          sparepart.type == "availability" ? (
            <div className="w-full flex flex-col items-center py-[60px]">
              <img src={empty_data_table} alt="Empty data table" className="" />
              <span className="text-[#514E4E] text-2xl font-bold">
                Tidak ada data
              </span>
            </div>
          ) : null
        ) : null}
        {!sparepart.isLoadingData ? (
          !!!sparepart.dataCategoryWithFilter?.data?.length &&
          sparepart.type == "kategory-sparepart" ? (
            <div className="w-full flex flex-col items-center py-[60px]">
              <img src={empty_data_table} alt="Empty data table" className="" />
              <span className="text-[#514E4E] text-2xl font-bold">
                Tidak ada data
              </span>
            </div>
          ) : null
        ) : null}

        {sparepart.type == "part" ? (
          <div className="flex py-4 px-[32px] justify-end gap-4">
            <button
              disabled={
                !!sparepart.dataPartWithFilter?.pagination?.prevPage
                  ? false
                  : true
              }
              onClick={() =>
                sparepart.navigate(
                  `../master-data/${sparepart.type}/${sparepart.dataPartWithFilter?.pagination?.prevPage}/sparepart`
                )
              }
              className={`px-4 h-[40px] text-[#B8B6B6] border gap-2 ${
                !!sparepart.dataPartWithFilter?.pagination?.prevPage
                  ? "border-[#20519F]"
                  : "border-[#B8B6B6]"
              } rounded flex items-center justify-center`}
            >
              <ArrowUpIcon
                className="w-[16px] h-[16px] -rotate-90"
                color={`${
                  !!sparepart.dataPartWithFilter?.pagination?.prevPage
                    ? "#20519F"
                    : "#B8B6B6"
                }`}
              />
            </button>
            <div className="w-[40px] h-[40px] bg-[#20519F] rounded flex items-center justify-center text-white">
              {!!sparepart.dataPartWithFilter?.pagination?.page
                ? sparepart.dataPartWithFilter?.pagination?.page
                : "-"}
            </div>
            <button
              disabled={
                !!sparepart.dataPartWithFilter?.pagination?.nextPage
                  ? false
                  : true
              }
              onClick={() =>
                sparepart.navigate(
                  `../master-data/${sparepart.type}/${sparepart.dataPartWithFilter?.pagination?.nextPage}/sparepart`
                )
              }
              className={`px-4 h-[40px] text-[#20519F] border gap-2 ${
                !!sparepart.dataPartWithFilter?.pagination?.nextPage
                  ? "border-[#20519F]"
                  : "border-[#B8B6B6]"
              } rounded flex items-center justify-center`}
            >
              <ArrowUpIcon
                className="w-[16px] h-[16px] rotate-90"
                color={`${
                  !!sparepart.dataPartWithFilter?.pagination?.nextPage
                    ? "#20519F"
                    : "#B8B6B6"
                }`}
              />
            </button>
          </div>
        ) : null}

        {sparepart.type == "kategory-inventory" ? (
          <div className="flex py-4 px-[32px] justify-end gap-4">
            <button
              disabled={
                !!sparepart.dataInventoryWithFilter?.pagination?.prevPage
                  ? false
                  : true
              }
              onClick={() =>
                sparepart.navigate(
                  `../master-data/${sparepart.type}/${sparepart.dataInventoryWithFilter?.pagination?.prevPage}/sparepart`
                )
              }
              className={`px-4 h-[40px] text-[#B8B6B6] border gap-2 ${
                !!sparepart.dataInventoryWithFilter?.pagination?.prevPage
                  ? "border-[#20519F]"
                  : "border-[#B8B6B6]"
              } rounded flex items-center justify-center`}
            >
              <ArrowUpIcon
                className="w-[16px] h-[16px] -rotate-90"
                color={`${
                  !!sparepart.dataInventoryWithFilter?.pagination?.prevPage
                    ? "#20519F"
                    : "#B8B6B6"
                }`}
              />
            </button>
            <div className="w-[40px] h-[40px] bg-[#20519F] rounded flex items-center justify-center text-white">
              {!!sparepart.dataInventoryWithFilter?.pagination?.page
                ? sparepart.dataInventoryWithFilter?.pagination?.page
                : "-"}
            </div>
            <button
              disabled={
                !!sparepart.dataInventoryWithFilter?.pagination?.nextPage
                  ? false
                  : true
              }
              onClick={() =>
                sparepart.navigate(
                  `../master-data/${sparepart.type}/${sparepart.dataInventoryWithFilter?.pagination?.nextPage}/sparepart`
                )
              }
              className={`px-4 h-[40px] text-[#20519F] border gap-2 ${
                !!sparepart.dataInventoryWithFilter?.pagination?.nextPage
                  ? "border-[#20519F]"
                  : "border-[#B8B6B6]"
              } rounded flex items-center justify-center`}
            >
              <ArrowUpIcon
                className="w-[16px] h-[16px] rotate-90"
                color={`${
                  !!sparepart.dataInventoryWithFilter?.pagination?.nextPage
                    ? "#20519F"
                    : "#B8B6B6"
                }`}
              />
            </button>
          </div>
        ) : null}

        {sparepart.type == "availability" ? (
          <div className="flex py-4 px-[32px] justify-end gap-4">
            <button
              disabled={
                !!sparepart.dataAvailabilityWithFilter?.pagination?.prevPage
                  ? false
                  : true
              }
              onClick={() =>
                sparepart.navigate(
                  `../master-data/${sparepart.type}/${sparepart.dataAvailabilityWithFilter?.pagination?.prevPage}/sparepart`
                )
              }
              className={`px-4 h-[40px] text-[#B8B6B6] border gap-2 ${
                !!sparepart.dataAvailabilityWithFilter?.pagination?.prevPage
                  ? "border-[#20519F]"
                  : "border-[#B8B6B6]"
              } rounded flex items-center justify-center`}
            >
              <ArrowUpIcon
                className="w-[16px] h-[16px] -rotate-90"
                color={`${
                  !!sparepart.dataAvailabilityWithFilter?.pagination?.prevPage
                    ? "#20519F"
                    : "#B8B6B6"
                }`}
              />
            </button>
            <div className="w-[40px] h-[40px] bg-[#20519F] rounded flex items-center justify-center text-white">
              {!!sparepart.dataAvailabilityWithFilter?.pagination?.page
                ? sparepart.dataAvailabilityWithFilter?.pagination?.page
                : "-"}
            </div>
            <button
              disabled={
                !!sparepart.dataAvailabilityWithFilter?.pagination?.nextPage
                  ? false
                  : true
              }
              onClick={() =>
                sparepart.navigate(
                  `../master-data/${sparepart.type}/${sparepart.dataAvailabilityWithFilter?.pagination?.nextPage}/sparepart`
                )
              }
              className={`px-4 h-[40px] text-[#20519F] border gap-2 ${
                !!sparepart.dataAvailabilityWithFilter?.pagination?.nextPage
                  ? "border-[#20519F]"
                  : "border-[#B8B6B6]"
              } rounded flex items-center justify-center`}
            >
              <ArrowUpIcon
                className="w-[16px] h-[16px] rotate-90"
                color={`${
                  !!sparepart.dataAvailabilityWithFilter?.pagination?.nextPage
                    ? "#20519F"
                    : "#B8B6B6"
                }`}
              />
            </button>
          </div>
        ) : null}

        {sparepart.type == "kategory-sparepart" ? (
          <div className="flex py-4 px-[32px] justify-end gap-4">
            <button
              disabled={
                !!sparepart.dataCategoryWithFilter?.pagination?.prevPage
                  ? false
                  : true
              }
              onClick={() =>
                sparepart.navigate(
                  `../master-data/${sparepart.type}/${sparepart.dataCategoryWithFilter?.pagination?.prevPage}/sparepart`
                )
              }
              className={`px-4 h-[40px] text-[#B8B6B6] border gap-2 ${
                !!sparepart.dataCategoryWithFilter?.pagination?.prevPage
                  ? "border-[#20519F]"
                  : "border-[#B8B6B6]"
              } rounded flex items-center justify-center`}
            >
              <ArrowUpIcon
                className="w-[16px] h-[16px] -rotate-90"
                color={`${
                  !!sparepart.dataCategoryWithFilter?.pagination?.prevPage
                    ? "#20519F"
                    : "#B8B6B6"
                }`}
              />
            </button>
            <div className="w-[40px] h-[40px] bg-[#20519F] rounded flex items-center justify-center text-white">
              {!!sparepart.dataCategoryWithFilter?.pagination?.page
                ? sparepart.dataCategoryWithFilter?.pagination?.page
                : "-"}
            </div>
            <button
              disabled={
                !!sparepart.dataCategoryWithFilter?.pagination?.nextPage
                  ? false
                  : true
              }
              onClick={() =>
                sparepart.navigate(
                  `../master-data/${sparepart.type}/${sparepart.dataCategoryWithFilter?.pagination?.nextPage}/sparepart`
                )
              }
              className={`px-4 h-[40px] text-[#20519F] border gap-2 ${
                !!sparepart.dataCategoryWithFilter?.pagination?.nextPage
                  ? "border-[#20519F]"
                  : "border-[#B8B6B6]"
              } rounded flex items-center justify-center`}
            >
              <ArrowUpIcon
                className="w-[16px] h-[16px] rotate-90"
                color={`${
                  !!sparepart.dataCategoryWithFilter?.pagination?.nextPage
                    ? "#20519F"
                    : "#B8B6B6"
                }`}
              />
            </button>
          </div>
        ) : null}

        {/* <div className="flex py-4 px-[32px] justify-end gap-4">
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
        </div> */}
      </div>
    </main>
  );
}
