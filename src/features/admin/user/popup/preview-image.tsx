import Modal from "@common/components/modals/Modal";
import CloseIcon from "@common/components/icons-new/CloseIcon";

export default function PreviewImageModal({ open, close }) {
  return (
    <Modal open={open}>
      <div className="bg-gray-800 h-[75vh] w-[25vw]">
        <CloseIcon className="absolute -right-[-50px] -top-[-50px] cursor-pointer" onClick={close} />
      </div>
    </Modal>
  );
}
