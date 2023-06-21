import SaveIcon from "@common/components/icons-new/SaveIcon";
import EditIcon from "@common/components/icons-new/EditIcon";
import TrashIcon from "@common/components/icons-new/TrashIcon";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import useUserModel from "../user-model";
import { Breadcrumbs } from "@common/components";
import { ArrowIcon } from "@common/components/icons";

export default function UserFormView() {
  const data = useUserModel();
  return (
    <>
      <Breadcrumbs items={["User", !!data?.idUser ? "Edit" : "Create"]} />
      <div className="my-4 border rounded-[4px] bg-[#FFF]">
        <div className="px-8 py-6 text-[#514E4E] flex justify-between items-center border-b">
          <h1 className="text-2xl font-[700]">
            {!!data?.idUser ? "Edit Data User " : "Create New User"}
          </h1>
          <div
            className="flex items-center gap-2 border border-[#667085] px-5 py-2 rounded-[4px] cursor-pointer"
            onClick={() => data.onNavigate(-1)}
          >
            <ArrowIcon className="-rotate-90" />
            <span className="text-sm text-[#667085]">Back</span>
          </div>
        </div>
        <form
          className="px-8 py-6 text-[#514E4E]"
          onSubmit={data.handleSubmit(
            !!data?.idUser ? data.editUser : data.createUser
          )}
        >
          <div className="w-full mb-3">
            <h1 className="mb-2">Name</h1>
            <input
              type="text"
              placeholder="Input Name"
              className={`px-4 py-2 border border-[#D0D3D9] rounded-lg placeholder:text-[#B8B6B6] w-[80%] text-sm focus:outline-none focus:border-[#20519F] focus:ring-1 focus:ring-[#20519F] ${
                data.errors.fullname ? "bg-red-100" : "bg-white"
              }`}
              {...data.register("fullname", { required: true })}
            />
          </div>

          <div className="w-full mb-3">
            <h1 className="mb-2">Password</h1>
            <input
              type="password"
              placeholder="Input Password"
              className={`px-4 py-2 border border-[#D0D3D9] rounded-lg placeholder:text-[#B8B6B6] w-[80%] text-sm focus:outline-none focus:border-[#20519F] focus:ring-1 focus:ring-[#20519F] ${
                data.errors.password ? "bg-red-100" : "bg-white"
              }`}
              {...data.register("password", { required: true })}
            />
          </div>

          <div className="w-full mb-3">
            <h1 className="mb-2">Email Address</h1>
            <input
              type="text"
              placeholder="Input Email"
              className={`px-4 py-2 border border-[#D0D3D9] rounded-lg placeholder:text-[#B8B6B6] w-[80%] text-sm focus:outline-none focus:border-[#20519F] focus:ring-1 focus:ring-[#20519F] ${
                data.errors.email ? "bg-red-100" : "bg-white"
              }`}
              {...data.register("email", { required: true })}
            />
          </div>
          <div className="w-full mb-3">
            <h1 className="mb-2">Role</h1>
            <select
              className={`px-4 py-2 border bg-[#FFFFFF] rounded-[4px] w-[80%] text-sm focus:outline-none focus:border-[#20519F] focus:ring-1 focus:ring-[#20519F] ${
                data.errors.role ? "bg-red-100" : "bg-white"
              }`}
              {...data.register("role", { required: true })}
            >
              <option value="ADMIN">Admin</option>
              <option value="SUPER_ADMIN">Super Admin</option>
              <option value="OPERATOR">Operator</option>
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
                ref={data.imageRef}
                id="user-image"
                name="user-image"
                type="file"
                placeholder="images.png"
                className={`file:hidden py-2 pl-4 border w-[60%] text-sm rounded-tr-lg rounded-br-lg cursor-pointer border-[#D0D3D9] bg-[#FFFFFF] ${
                  data.errors.avatarPath ? "bg-red-100" : "bg-white"
                }`}
                {...data.register("avatarPath")}
              />
              <div className="flex gap-3 ml-4">
                <button
                  name="add-image"
                  className="bg-[#F79009] px-3 rounded-[4px]"
                  // onClick={data.onResetImageUpdate}
                >
                  <EditIcon className="w-4 h-4" />
                </button>
                <button
                  name="remove-image"
                  className="bg-[#F04438] px-3 rounded-[4px]"
                  // onClick={data.onDeleteImageUpdate}
                >
                  <TrashIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full mt-3">
            <span>Status</span>
            <div className="w-fit flex gap-2 items-center">
              <input
                type="checkbox"
                className="w-[16px] h-[16px]"
                {...data.register("isActive")}
              />
              <span>
                {data.watch("isActive") == false ? "Inactive" : "Active"}
              </span>
            </div>
          </div>

          <button className="flex items-center justify-center gap-2 h-[46px] w-[200px] bg-[#20519F] text-[#FFFFFF] rounded-[4px] mt-6">
            <SaveIcon />
            <span className="text-sm font-[600]">Save</span>
          </button>
          {/* <ModalConfirm
            open={data.openConfirmModal}
            setOpen={data.onConfirmClose}
            confirmMessage={""}
            setOpenSuccess={""}
            cb={""}
          /> */}
        </form>
      </div>
    </>
  );
}
