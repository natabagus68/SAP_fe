import Modal from "./Modal";
import ChecklistIcon from "../icons-new/ChecklistIcon";

export default function ModalSuccess({ open = false, setOpen, successMessage = "Default Message" }) {
  return (
    <Modal open={open}>
      <div className="w-[430px] flex flex-col gap-8 items-center">
        <div className="flex items-center justify-center w-[150px] h-[150px] bg-green-500 rounded-full border-[8px] border-[#E9EEF5]">
          <ChecklistIcon className="w-[80px] h-[80px]" color="white" />
        </div>
        <div className="flex items-center flex-col">
          <span className="text-[#2D2A2A] text-[24px] font-semibold">
          Sukses
          </span>
          <span>{successMessage}</span>
        </div>

        <div className="flex w-full items-end gap-4">
          <button
            className="flex items-center justify-center flex-1 gap-2 h-[46px] px-[20px] border border-[#B8B6B6] rounded text-[#514E4E] text-sm font-semibold"
            onClick={() => setOpen(false)}
          >
            Tutup
          </button>
        </div>
      </div>
    </Modal>
  );
}
