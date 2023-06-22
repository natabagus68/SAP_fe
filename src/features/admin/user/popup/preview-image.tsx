import Modal from "@common/components/modals/Modal";
import CloseIcon from "@common/components/icons-new/CloseIcon";
import useUserModel from "../user-model";
import { config } from "@common/utils";
import default_avatar from "../../../../assets/default_avatar.jpg";

export default function PreviewImageModal({ open, close }) {
  const data = useUserModel();
  return (
    <Modal open={open}>
      <div className="bg-gray-800 h-[75vh] w-[25vw]">
        <CloseIcon
          className="absolute -right-[-50px] -top-[-50px] cursor-pointer"
          onClick={close}
        />
        {!!data?.dataUserById?.avatarPath ? (
          <img
            src={`${config.apiAssetUrl}${data?.dataUserById?.avatarPath}`}
            alt="Avatar User"
            className="object-cover"
          />
        ) : (
          <img
            src={default_avatar}
            alt="Default Avatar"
            className="object-cover"
          />
        )}
      </div>
    </Modal>
  );
}
