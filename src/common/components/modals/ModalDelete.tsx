import Modal from "./Modal";
import TrashModal from "../icons-new/trashmodal";

export default function ModalDelete({ open = false, setOpen, setOpenConfirm }) {
  return (
    <Modal open={open}>
      <div className="w-[430px] flex flex-col gap-8 items-center">
        <div className="flex items-center justify-center w-[150px] h-[150px] bg-[#F04438] rounded-full">
          <TrashModal className="bg-[#FFFFFF]" />
        </div>
        <div className="flex items-center flex-col">
          <span className="text-[#2D2A2A] text-[24px] font-semibold">
            Delete
          </span>
          <span>Are you sure you want to delete this file?</span>
        </div>

        <div className="flex w-full items-end gap-4">
          <button
            className="flex items-center justify-center flex-1 gap-2 h-[46px] px-[20px] border border-[#B8B6B6] rounded text-[#514E4E] text-sm font-semibold"
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>
          <button
            className="flex items-center justify-center flex-1 gap-2 h-[46px] px-[20px] bg-[#F04438] rounded text-white text-sm font-semibold"
            onClick={() => {
              setOpen(false);
              setTimeout(() => {
                setOpenConfirm(true);
              }, 100);
            }}
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </Modal>
  );
}
