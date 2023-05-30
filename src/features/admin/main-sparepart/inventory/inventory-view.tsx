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
import imgDefault from "../../../../assets/default_image.jpg";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";

export default function InventoryView() {
  const inventory = useInventory();
  const fakeCard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["Sparepart", `Inventory`]} />

      {inventory.isLoadingData ? (
        <div className="grid grid-cols-3 gap-4">
          {fakeCard.map((item) => (
            <div className="border border-blue-300 shadow rounded-md w-full">
              <div className="animate-pulse">
                <div className="w-full h-[278px] bg-white rounded-md border px-6 py-4 flex items-center justify-center">
                  <img
                    src={imgDefault}
                    alt="icon-kategory"
                    className="h-[50%] bg-black"
                  />
                </div>
              </div>
            </div>
            // <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            //   <div className="animate-pulse flex space-x-4">
            //     <div className="rounded-full bg-slate-700 h-10 w-10" />
            //     <div className="flex-1 space-y-6 py-1">
            //       <div className="h-2 bg-slate-700 rounded" />
            //       <div className="space-y-3">
            //         <div className="grid grid-cols-3 gap-4">
            //           <div className="h-2 bg-slate-700 rounded col-span-2" />
            //           <div className="h-2 bg-slate-700 rounded col-span-1" />
            //         </div>
            //         <div className="h-2 bg-slate-700 rounded" />
            //       </div>
            //     </div>
            //   </div>
            // </div>
          ))}
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
              onClick={() =>
                inventory.navigate(`${item.name}/table`, {
                  state: {
                    id: item.id,
                  },
                })
              }
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
