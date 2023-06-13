import QRCode from "react-qr-code";
import Logo from "../../../../assets/my-logo.svg";
import CloseIcon from "@common/components/icons-new/CloseIcon";
import Modal from "@common/components/modals/Modal";

export default function CastingResultModal({ open, close }) {
  return (
    <Modal open={open}>
      <div onClick={close}>
        <CloseIcon
          color={"#514E4E"}
          className="absolute z-10 right-10 top-10 w-4 h-4 cursor-pointer"
        />
        <div className="bg-[#FFF] w-[530px] border-2 border-[#514E4E] px-8 py-6">
          <div className="flex items-center justify-between font-[600]">
            <img src={Logo} alt="logo" className="w-1/2 mb-4" />
            <h1>FO/PPC/PPC/067 Rev:0</h1>
          </div>
          <div className="mt-[27px] font-[600]">
            <div className="flex gap-3 mb-3">
              <h1 className="w-28">Material</h1>
              <span>:</span>
              <p>{"NDHANC-SK59JEAHCA"}</p>
            </div>
            <div className="flex gap-3 mb-3">
              <h1 className="w-28">Part Name</h1>
              <span>:</span>
              <p>{"RAIL REAR GRAB K59J (SFG)"}</p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-5">
            <div className="font-[600] flex-1">
              <div className="flex gap-3 mb-3">
                <h1 className="w-28">Qty / Pack</h1>
                <span>:</span>
                <p>{"Part Name"}</p>
              </div>
              <div className="flex gap-3 mb-3">
                <h1 className="w-28">Date</h1>
                <span>:</span>
                <p>{"22 May 2023 | 11:45"}</p>
              </div>
              <div className="flex gap-3 mb-3">
                <h1 className="w-28">No. MC</h1>
                <span>:</span>
                <p>{"-"}</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <QRCode
                size={56}
                style={{ height: "auto", maxWidth: "100%", width: "75%" }}
                value={"HAI"}
                viewBox={`0 0 256 256`}
              />
              <span className="text-xs">NM13011603202100008</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
