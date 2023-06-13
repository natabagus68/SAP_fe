import Modal from "@common/components/modals/Modal";
import CloseIcon from "@common/components/icons-new/CloseIcon";
import CastingIcon from "@common/components/icons-new/CastingIcon";
import MachiningIcon from "@common/components/icons-new/MachiningIcon";
import ReceiptIcon from "@common/components/icons-new/ReceiptIcon";
import MachiningResultModal from "./machining-result-modal";
import useMonitoringModel from "../monitoring-model";

export default function MachiningModalDetail({ open, close }) {
  const data = useMonitoringModel();
  return (
    <>
      <Modal open={open}>
        <div className="flex items-center justify-between border-b w-[1200px]">
          <div className="mb-6">
            <h1 className="text-2xl font-[700] mb-24text-[#313030]">
              Machining Details
            </h1>
            <span className="text-[#667085]">
              Information inbound tracking data.
            </span>
          </div>
          <CloseIcon
            color={"#514E4E"}
            onClick={close}
            className="cursor-pointer w-3 h-3 relative -top-[15px]"
          />
        </div>
        <div className="w-full flex text-[#514E4E]">
          <div className="w-1/2 mt-6 border-r">
            <h1 className="mb-3 font-[600]">General Information</h1>
            <div className="grid grid-cols-2 text-[#514E4E]">
              <div>
                <div className="mb-4">
                  <h1 className="text-[#989FAD] text-sm">QR Tag Number</h1>
                  <span>NM13011603202100008</span>
                </div>
                <div className="mb-4">
                  <h1 className="text-[#989FAD] text-sm">PRO Number</h1>
                  <span>100008465822N</span>
                </div>
                <div className="mb-4">
                  <h1 className="text-[#989FAD] text-sm">Plant</h1>
                  <span>1301</span>
                </div>
                <div className="mb-4">
                  <h1 className="text-[#989FAD] text-sm">
                    Business Area Description
                  </h1>
                  <span>PT. AOP - NUSA METAL</span>
                </div>
                <div className="mb-4">
                  <h1 className="text-[#989FAD] text-sm">Customer Code</h1>
                  <span>AHM01001</span>
                </div>
                <div className="mb-4">
                  <h1 className="text-[#989FAD] text-sm">Production Version</h1>
                  <span>0001</span>
                </div>
                <div className="mb-4">
                  <h1 className="text-[#989FAD] text-sm">Storage Location</h1>
                  <span>1021</span>
                </div>
                <div className="mb-4">
                  <h1 className="text-[#989FAD] text-sm">Material Number</h1>
                  <span>NTGEAR-FK1AALAH00</span>
                </div>
                <div className="mb-4">
                  <h1 className="text-[#989FAD] text-sm">
                    Material Description
                  </h1>
                  <span>CASE COMP MISSION K1AA (FG)</span>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <h1 className="text-[#989FAD] text-sm">
                    Customer Material Info
                  </h1>
                  <span>2120B-K1A-N000-IN</span>
                </div>
                <div className="mb-4">
                  <h1 className="text-[#989FAD] text-sm">Target Qty PRO</h1>
                  <span>100</span>
                </div>
                <div className="mb-4">
                  <h1 className="text-[#989FAD] text-sm">UoM PRO</h1>
                  <span>PCS</span>
                </div>
                <div className="mb-4">
                  <h1 className="text-[#989FAD] text-sm">Qty QR Tag</h1>
                  <span>100</span>
                </div>
                <div className="mb-4">
                  <h1 className="text-[#989FAD] text-sm">
                    Unit of Measurement
                  </h1>
                  <span>PCS</span>
                </div>
                <div className="mb-4">
                  <h1 className="text-[#989FAD] text-sm">Production Date</h1>
                  <span>16/08/2013</span>
                </div>
                <div className="mb-4">
                  <h1 className="text-[#989FAD] text-sm">Production Time</h1>
                  <span>18:37:12</span>
                </div>
                <div className="mb-4">
                  <h1 className="text-[#989FAD] text-sm">AHM Supplier ID</h1>
                  <span>1100002</span>
                </div>
                <div className="mb-4">
                  <h1 className="text-[#989FAD] text-sm">No Mesin</h1>
                  <span>-</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 mt-6 px-[72px]">
            <h1 className="mb-3 font-[600]">Tracking History</h1>
            <div className="mb-6">
              <h1 className="text-[#989FAD] text-sm font-[600] mb-2">
                Receipt
              </h1>
              <div className="flex items-center gap-3">
                <ReceiptIcon />
                <p
                  className="text-[#20519F] text-sm cursor cursor-pointer"
                  onClick={data.onResultReceiptOpen}
                >
                  View Card
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <div className="bg-[#20519F] h-[75px] w-[75px] rounded-full flex items-center justify-center">
                  <div className="bg-[#FFF] h-[65px] w-[65px] flex items-center justify-center rounded-full">
                    <CastingIcon />
                  </div>
                </div>
                <div className="absolute top-[100px] left-[10px] text-center">
                  <h1 className="text-[#20519F] text-sm font-[600]">Casting</h1>
                  <span className="font-[600]">13:00</span>
                </div>
              </div>
              <div className="w-12 border-2 border-[#20519F]"></div>
              <div className="w-12 border-2 border-[#20519F]"></div>
              <div className="relative">
                <div className="bg-[#20519F] h-[75px] w-[75px] rounded-full flex items-center justify-center">
                  <div className="bg-[#FFF] h-[65px] w-[65px] flex items-center justify-center rounded-full">
                    <MachiningIcon />
                  </div>
                </div>
                <div className="absolute top-[100px] text-center">
                  <h1 className="text-[#20519F] text-sm font-[600]">
                    Machining
                  </h1>
                  <span className="font-[600]">16:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <MachiningResultModal open={data.modalResultReceipt} close={data.onResultReceiptClose} />
    </>
  );
}
