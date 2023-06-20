import SaveIcon from "@common/components/icons-new/SaveIcon";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import useMasterDataModel from "../machine/master-data-model";

export default function MasterDataForm() {
  const data = useMasterDataModel();
  return (
    <form className="px-8 py-6 text-[#514E4E]" onSubmit={data.onFormSubmit}>
      <div className="w-full mb-3">
        <h1 className="mb-2">Machine Code</h1>
        <input
          name="machine-cide"
          type="text"
          placeholder="Input machine code"
          className="px-4 py-2 border border-[#D0D3D9] rounded-lg placeholder:text-[#B8B6B6] w-[80%] text-sm focus:outline-none focus:border-[#20519F] focus:ring-1 focus:ring-[#20519F]"
          required
        />
      </div>
      <div className="w-full mb-3">
        <h1 className="mb-2">Machine Name</h1>
        <input
          name="machine-cide"
          type="text"
          placeholder="Input machine name"
          className="px-4 py-2 border border-[#D0D3D9] outline-none rounded-lg placeholder:text-[#B8B6B6] w-[80%] text-sm focus:outline-none focus:border-[#20519F] focus:ring-1 focus:ring-[#20519F]"
          required
        />
      </div>
      <div className="w-full mb-3">
        <h1 className="mb-2">Description</h1>
        <input
          name="machine-cide"
          type="text"
          placeholder="Input description"
          className="px-4 py-2 border border-[#D0D3D9] outline-none rounded-lg placeholder:text-[#B8B6B6] w-[80%] text-sm focus:outline-none focus:border-[#20519F] focus:ring-1 focus:ring-[#20519F]"
          required
        />
      </div>
      <div className="w-full">
        <h1 className="mb-2">Location</h1>
        <input
          name="machine-cide"
          type="text"
          placeholder="input line (e.g. Line 1)"
          className="px-4 py-2 border border-[#D0D3D9] outline-none rounded-lg placeholder:text-[#B8B6B6] w-[80%] text-sm focus:outline-none focus:border-[#20519F] focus:ring-1 focus:ring-[#20519F]"
          required
        />
      </div>
      <button className="flex items-center justify-center gap-2 h-[46px] w-[200px] bg-[#20519F] text-[#FFFFFF] rounded-[4px] mt-6">
        <SaveIcon />
        <span className="text-sm font-[600]">Save</span>
      </button>
      <ModalConfirm
        open={data.openConfirmModal}
        setOpen={data.onConfirmClose}
        confirmMessage={""}
        setOpenSuccess={""}
        cb={""}
      />
    </form>
  );
}
