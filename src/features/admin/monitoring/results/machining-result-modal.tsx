import Logo from "../../../../assets/my-logo.svg";
import CloseIcon from "@common/components/icons-new/CloseIcon";
import Modal from "@common/components/modals/Modal";

export default function MachiningResultModal({ open, close }) {
  return (
    <Modal open={open}>
      <div onClick={close}>
        <CloseIcon
          color={"#514E4E"}
          className="absolute z-10 right-10 top-10 w-4 h-4 cursor-pointer"
        />
        <div className="bg-[#FFF] w-[530px] border-2 border-[#514E4E] px-8 py-6">
          <img src={Logo} alt="logo" className="mb-4" />
          <div className="font-[700] text-center">
            <h1 className="text-2xl">Tanda Terima Transfer Posting</h1>
            <h1 className="uppercase text-[32px]">Berhasil</h1>
          </div>
          <div className="mt-[27px] font-[600]">
            <div className="flex gap-3 mb-3">
              <h1 className="w-28">No. Ref</h1>
              <span>:</span>
              <p>{"1012101345068,489597338"}</p>
            </div>
            <div className="flex gap-3 mb-3">
              <h1 className="w-28">Date</h1>
              <span>:</span>
              <p>{"16 August 2023 |13:01:12 22"}</p>
            </div>
            <div className="flex gap-3 mb-3">
              <h1 className="w-28">Material</h1>
              <span>:</span>
              <p>{"NFHANC-SK59JEAHCA"}</p>
            </div>
            <div className="flex gap-3 mb-3">
              <h1 className="w-28">Part name</h1>
              <span>:</span>
              <p>{"RAIL REAR GRAB K59J (SFG)"}</p>
            </div>
            <div className="flex gap-3 mb-3">
              <h1 className="w-28">Qty / pack</h1>
              <span>:</span>
              <p>{"54 Pcs"}</p>
            </div>
            <div className="flex gap-3 mb-3">
              <h1 className="w-28">Store Loc</h1>
              <span>:</span>
              <p>{"1012 ke 1013"}</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
