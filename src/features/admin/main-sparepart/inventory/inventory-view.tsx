import React from "react";
import useInventory from "./inventory-model";
import { Breadcrumbs } from "@common/components";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import ModalDelete from "@common/components/modals/ModalDelete";
import ModalSuccess from "@common/components/modals/ModalSeccess";
import mechanical from "../../../../assets/svg/settings.svg";
import electrical from "../../../../assets/svg/socket.svg";
import fastener from "../../../../assets/svg/fastener.svg";
import shaft from "../../../../assets/svg/shaft.svg";
import ring from "../../../../assets/svg/marriage.svg";
import oil from "../../../../assets/svg/raw-oil.svg";
import other from "../../../../assets/svg/toolbox.svg";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";

export default function InventoryView() {
  const inventory = useInventory();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["Sparepart", `Inventory`]} />

      {inventory.isLoadingData ? (
        <div className="w-full h-[48px] flex items-center justify-center">
          <LoadingIcon
            color="black"
            className="w-[24px] h-[24px] animate-spin"
          />
        </div>
      ) : null}

      <div className="grid grid-cols-3 gap-4">
        {inventory.dataInventoryKategory.map((item) => (
          <div
            key={item.id}
            className="w-full h-[278px] bg-white rounded-md border px-6 py-4 flex items-center justify-between flex-col"
          >
            <span className="w-full text-[#514E4E] text-base font-semibold">
              {item.name}
            </span>
            <img
              src={
                item?.icon == "mechanical"
                  ? mechanical
                  : item?.icon == "electrical"
                  ? electrical
                  : item?.icon == "fasteners"
                  ? fastener
                  : item?.icon == "shaft"
                  ? shaft
                  : item?.icon == "ring"
                  ? ring
                  : item?.icon == "oil"
                  ? oil
                  : other
              }
              alt="icon-kategory"
              className="w-[120px] h-[120px]"
            />
            <button
              className="text-white w-full h-[46px] px-[20px] font-semibold bg-[#20519F] rounded"
              onClick={() => inventory.navigate(`${item.name}/table`, {
                state: {
                  id: item.id
                }
              })}
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
