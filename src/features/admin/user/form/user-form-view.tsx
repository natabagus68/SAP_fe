import SaveIcon from "@common/components/icons-new/SaveIcon";
import EditIcon from "@common/components/icons-new/EditIcon";
import TrashIcon from "@common/components/icons-new/TrashIcon";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import useUserModel from "../user-model";

export default function UserFormView() {
  const data = useUserModel();
  return (
    <form className="px-8 py-6 text-[#514E4E]" onSubmit={data.onFormSubmit}>
      <div className="w-full mb-3">
        <h1 className="mb-2">Name</h1>
        <input
          name="machine-cide"
          type="text"
          placeholder="Input Name"
          className="px-4 py-2 border border-[#D0D3D9] outline-none rounded-lg placeholder:text-[#B8B6B6] w-[80%] text-sm"
        />
      </div>
      <div className="w-full mb-3">
        <h1 className="mb-2">Email Address</h1>
        <input
          name="machine-cide"
          type="text"
          placeholder="Input Email"
          className="px-4 py-2 border border-[#D0D3D9] outline-none rounded-lg placeholder:text-[#B8B6B6] w-[80%] text-sm"
        />
      </div>
      <div className="w-full mb-3">
        <h1 className="mb-2">Role</h1>
        <select
          name="role"
          id="role"
          className="px-4 py-2 border bg-[#FFFFFF] rounded-[4px] w-[80%] text-sm"
        >
          <option value="inspection">Inspection</option>
          <option value="admin">Admin</option>
          <option value="operator">Operator</option>
        </select>
      </div>
      <div className="w-full">
        <h1 className="mb-2">Profile Pictures</h1>
        <div className="flex">
          <label
            htmlFor="user-image"
            className="bg-[#20519F] text-[#FFFFFF] text-sm rounded-tl-[4px] rounded-bl-[4px] w-[10%] flex items-center justify-center cursor-pointer"
          >
            Choose
          </label>
          <input
            id="user-image"
            name="user-image"
            type="file"
            placeholder="images.png"
            className="file:hidden py-2 pl-4 border w-[60%] text-sm rounded-tr-lg rounded-br-lg cursor-pointer border-[#D0D3D9] bg-[#FFFFFF]"
          />
          <div className="flex gap-3 ml-4">
            <button
              name="add-image"
              className="bg-[#F79009] px-3 rounded-[4px]"
            >
              <EditIcon className="w-4 h-4" />
            </button>
            <button
              name="remove-image"
              className="bg-[#F04438] px-3 rounded-[4px]"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <button className="flex items-center justify-center gap-2 h-[46px] w-[200px] bg-[#20519F] text-[#FFFFFF] rounded-[4px] mt-6">
        <SaveIcon />
        <span className="text-sm font-[600]">Save</span>
      </button>
      <ModalConfirm open={data.openConfirmModal} setOpen={data.onClose} />
    </form>
  );
}
