import Modal from "@common/components/modals/Modal";
import ChangePassLogo from "../../../../assets/ChangePassLogo.png";
import useUserModel from "../user-model";

export default function ChangePasswordModal({ open, close }) {
  const data = useUserModel();

  return (
    <Modal open={open}>
      <div className="flex gap-3 w-[480px] mb-4">
        <img src={ChangePassLogo} alt="change-password-image" />
        <div>
          <h1 className="text-2xl text-[#313030] font-[600]">
            Change Password
          </h1>
          <span className="text-sm text-[#B8B6B6]">Update your password</span>
        </div>
      </div>
      <form onSubmit={data.handleSubmit(data.editPassword)}>
        <div className="mb-3">
          <h1 className="text-[400] mb-2">New Password</h1>
          <div>
            <input
              type="password"
              placeholder="enter new password"
              className="border border-[#D0D3D9] rounded-lg px-4 py-2 w-[100%] placeholder:text-sm"
              {...data.register("password", { required: true })}
            />
          </div>
        </div>
        <div>
          <h1 className="mb-2">Confirm Password</h1>
          <div>
            <input
              type="password"
              placeholder="re-enter new password"
              className="border border-[#D0D3D9] rounded-lg px-4 py-2 w-[100%] placeholder:text-sm"
              {...data.register("confirmPassword", { required: true })}
            />
          </div>
        </div>
        <div className="flex gap-3 mt-8">
          <button
            className="w-1/2 border rounded-[4px] h-[46px] bg-[#FFFFFF] border-[#514E4E] text-sm font-[600]"
            onClick={close}
          >
            Cancel
          </button>
          <button className="w-1/2 border rounded-[4px] text-[#FFFFFF] h-[46px] bg-[#20519F] border-[#514E4E] text-sm font-[600]">
            Update
          </button>
        </div>
      </form>
    </Modal>
  );
}
