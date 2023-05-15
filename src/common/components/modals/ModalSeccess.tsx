import Modal from "./Modal";
import ChecklistIcon from "../icons-new/ChecklistIcon";
import PlusIcon from "../icons-new/PlusIcon";

export default function ModalSuccess({
  open = false,
  setOpen,
  successMessage = "Default Message",
  isSuccess = false,
}) {
  return (
    <Modal open={open}>
      <div className="w-[430px] flex flex-col gap-8 items-center">
        <div
          className={`flex items-center justify-center w-[150px] h-[150px] ${
            isSuccess ? "bg-green-500" : "bg-red-500"
          } rounded-full border-[8px] border-[#E9EEF5]`}
        >
          {isSuccess ? (
            <ChecklistIcon className="w-[80px] h-[80px]" color="white" />
          ) : (
            <PlusIcon className="w-[80px] h-[80px] -rotate-45" color="white" />
          )}
        </div>
        <div className="flex items-center flex-col">
          <span className="text-[#2D2A2A] text-[24px] font-semibold">
            {isSuccess ? "Sukses" : "Failed"}
          </span>
          <span>{isSuccess ? successMessage : null}</span>
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
