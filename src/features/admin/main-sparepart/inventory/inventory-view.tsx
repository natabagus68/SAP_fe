import React from "react";
import useInventory from "./inventory-model";
import { Breadcrumbs } from "@common/components";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import ModalDelete from "@common/components/modals/ModalDelete";
import ModalSuccess from "@common/components/modals/ModalSeccess";
import settings from "../../../../assets/svg/settings.svg";
import socket from "../../../../assets/svg/socket.svg";
import toolbox from "../../../../assets/svg/toolbox.svg";
import rawoil from "../../../../assets/svg/raw-oil.svg";
import shaft from "../../../../assets/svg/shaft.svg";
import mariagge from "../../../../assets/svg/marriage.svg";
import fastener from "../../../../assets/svg/fastener.svg";

export default function InventoryView() {
  const inventory = useInventory();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["Sparepart", `Inventory`]} />
      <div className="grid grid-cols-3 gap-4">
        <div className="w-full h-[278px] bg-white rounded-md border px-6 py-4 flex items-center justify-between flex-col">
          <span className="w-full text-[#514E4E] text-base font-semibold">
            Mechanical
          </span>
          <img
            src={settings}
            alt="icon-kategory"
            className="w-[120px] h-[120px]"
          />
          <button
            className="text-white w-full h-[46px] px-[20px] font-semibold bg-[#20519F] rounded"
            onClick={() => inventory.navigate("mechanical/table")}
          >
            Details
          </button>
        </div>
        <div className="w-full h-[278px] bg-white rounded-md border px-6 py-4 flex items-center justify-between flex-col">
          <span className="w-full text-[#514E4E] text-base font-semibold">
            Electrical
          </span>
          <img
            src={socket}
            alt="icon-kategory"
            className="w-[120px] h-[120px]"
          />
          <button
            className="text-white w-full h-[46px] px-[20px] font-semibold bg-[#20519F] rounded"
            onClick={() => inventory.navigate("electrical/table")}
          >
            Details
          </button>
        </div>
        <div className="w-full h-[278px] bg-white rounded-md border px-6 py-4 flex items-center justify-between flex-col">
          <span className="w-full text-[#514E4E] text-base font-semibold">
            Fasteners
          </span>
          <img
            src={fastener}
            alt="icon-kategory"
            className="w-[120px] h-[120px]"
          />
          <button
            className="text-white w-full h-[46px] px-[20px] font-semibold bg-[#20519F] rounded"
            onClick={() => inventory.navigate("fasteners/table")}
          >
            Details
          </button>
        </div>
        <div className="w-full h-[278px] bg-white rounded-md border px-6 py-4 flex items-center justify-between flex-col">
          <span className="w-full text-[#514E4E] text-base font-semibold">
            Shaft Part
          </span>
          <img
            src={shaft}
            alt="icon-kategory"
            className="w-[120px] h-[120px]"
          />
          <button
            className="text-white w-full h-[46px] px-[20px] font-semibold bg-[#20519F] rounded"
            onClick={() => inventory.navigate("shaft/table")}
          >
            Details
          </button>
        </div>
        <div className="w-full h-[278px] bg-white rounded-md border px-6 py-4 flex items-center justify-between flex-col">
          <span className="w-full text-[#514E4E] text-base font-semibold">
            O- Ring and Seal
          </span>
          <img
            src={mariagge}
            alt="icon-kategory"
            className="w-[120px] h-[120px]"
          />
          <button
            className="text-white w-full h-[46px] px-[20px] font-semibold bg-[#20519F] rounded"
            onClick={() => inventory.navigate("ring-seal/table")}
          >
            Details
          </button>
        </div>
        <div className="w-full h-[278px] bg-white rounded-md border px-6 py-4 flex items-center justify-between flex-col">
          <span className="w-full text-[#514E4E] text-base font-semibold">
            Oil and Grease
          </span>
          <img
            src={rawoil}
            alt="icon-kategory"
            className="w-[120px] h-[120px]"
          />
          <button
            className="text-white w-full h-[46px] px-[20px] font-semibold bg-[#20519F] rounded"
            onClick={() => inventory.navigate("oil-grease/table")}
          >
            Details
          </button>
        </div>
        <div className="w-full h-[278px] bg-white rounded-md border px-6 py-4 flex items-center justify-between flex-col">
          <span className="w-full text-[#514E4E] text-base font-semibold">
            Other
          </span>
          <img
            src={toolbox}
            alt="icon-kategory"
            className="w-[120px] h-[120px]"
          />
          <button
            className="text-white w-full h-[46px] px-[20px] font-semibold bg-[#20519F] rounded"
            onClick={() => inventory.navigate("other/table")}
          >
            Details
          </button>
        </div>
      </div>
    </main>
  );
}
