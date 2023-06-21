import { Breadcrumbs } from "@common/components";
import { ArrowIcon } from "@common/components/icons";
import EditIcon from "@common/components/icons-new/EditIcon";
import PreviewImageModal from "../popup/preview-image";
import useUserModel from "../user-model";

export default function UserDetailView() {
  const data = useUserModel();
  return (
    <>
      <Breadcrumbs items={["User", "Details"]} />
      <div className="my-4 border rounded-[4px] bg-[#FFF]">
        <div className="px-8 py-6 text-[#514E4E] flex justify-between items-center border-b">
          <div>
            <h1 className="text-2xl font-[700]">User Details</h1>
            <span className="text-[#667085]">Information account & access</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="border border-[#667085] px-5 py-2 rounded-[4px] flex items-center gap-2"
              onClick={() => data.navigate(-1)}
            >
              <ArrowIcon className="-rotate-90" />
              <span className="text-sm text-[#667085]">Back</span>
            </button>
            <button
              className="border bg-[#F79009] border-[#F79009] text-[#FFFFFF] px-5 py-2 rounded-[4px] flex items-center gap-2"
              onClick={() => data.navigate(`./../edit`)}
            >
              <EditIcon className="w-4 h-4" />
              <span>Edit</span>
            </button>
          </div>
        </div>
        <div className="px-8 py-6 border-b w-1/3">
          <h1 className="font-[600] text-[#313030] mb-3">Profile Picture</h1>
          <div className="flex items-center gap-6">
            <div className="w-[125px] h-[125px] bg-gray-800 rounded-full"></div>
            <span
              className="text-sm text-[#20519F] cursor-pointer"
              onClick={data.onPreviewPhotoOpen}
            >
              See Photo
            </span>
          </div>
        </div>
        <PreviewImageModal
          open={data.openModalPreviewPhoto}
          close={data.onPreviewPhotoClose}
        />
        <div className="px-8 py-6 border-b w-1/3">
          <h1 className="font-[600] mb-3">General Information</h1>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h1 className="text-[#989FAD] text-[14px]">Name</h1>
              <span className="text-[#514E4E]">
                {data.dataUserById?.fullname}
              </span>
            </div>
            <div>
              <h1 className="text-[#989FAD] text-[14px]">Role</h1>
              <span className="text-[#514E4E]">{data.dataUserById?.role}</span>
            </div>
            <div>
              <h1 className="text-[#989FAD] text-[14px]">Email Address</h1>
              <span className="text-[#514E4E]">{data.dataUserById?.email}</span>
            </div>
            <div>
              <h1 className="text-[#989FAD] text-[14px]">Status</h1>
              <span
                className={`${
                  data.dataUserById?.isActive == true
                    ? "text-[#12B569]"
                    : "text-[#F04438]"
                }`}
              >
                {data.dataUserById?.isActive == true ? "Active" : "Inactive"}
              </span>
              {/* <span className="text-[#12B569]">Active</span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
