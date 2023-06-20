import SaveIcon from "@common/components/icons-new/SaveIcon";
import { Breadcrumbs } from "@common/components";
import { ArrowIcon } from "@common/components/icons";
import useMaterialDataModel from "../material-description-model";

export default function Materi() {
  const data = useMaterialDataModel();
  return (
    <>
      <Breadcrumbs items={["Master Data", !!data?.id ? "Edit" : "Create"]} />
      <div className="my-4 border rounded-[4px] bg-[#FFF]">
        <div className="px-8 py-6 text-[#514E4E] flex justify-between items-center border-b">
          <h1 className="text-2xl font-[700]">
            {!!data?.id ? "Edit Data" : "Create New Data"}
          </h1>
          <button
            className="flex items-center gap-2 border border-[#667085] px-5 py-2 rounded-[4px] cursor-pointer"
            onClick={() => data.navigate("..")}
          >
            <ArrowIcon className="-rotate-90" />
            <span className="text-sm text-[#667085]">Back</span>
          </button>
        </div>
        <form
          className="px-8 py-6 text-[#514E4E]"
          onSubmit={data.handleSubmit(
            !!data?.id ? data.editMaterial : data.createMaterial
          )}
        >
          <div className="w-full mb-3">
            <h1 className="mb-2">Material Number</h1>
            <input
              type="text"
              placeholder="Input Material Number"
              className={`px-4 py-2 border border-[#D0D3D9] rounded-lg placeholder:text-[#B8B6B6] w-[80%] text-sm focus:outline-none focus:border-[#20519F] focus:ring-1 focus:ring-[#20519F] ${
                data.errors.materialNumber ? "bg-red-100" : "bg-white"
              }`}
              {...data.register("materialNumber", { required: true })}
            />
          </div>
          <div className="w-full mb-3">
            <h1 className="mb-2">Material Description</h1>
            <input
              type="text"
              placeholder="Input Material Description"
              className={`px-4 py-2 border border-[#D0D3D9] outline-none rounded-lg placeholder:text-[#B8B6B6] w-[80%] text-sm focus:outline-none focus:border-[#20519F] focus:ring-1 focus:ring-[#20519F] ${
                data.errors.materialDescription ? "bg-red-100" : "bg-white"
              }`}
              {...data.register("materialDescription", { required: true })}
            />
          </div>
          <div className="w-full">
            <h1 className="mb-2">ID Machine</h1>
            <input
              type="text"
              placeholder="input line (e.g. Line 1)"
              className={`px-4 py-2 border border-[#D0D3D9] outline-none rounded-lg placeholder:text-[#B8B6B6] w-[80%] text-sm focus:outline-none focus:border-[#20519F] focus:ring-1 focus:ring-[#20519F] ${
                data.errors.machineId ? "bg-red-100" : "bg-white"
              }`}
              {...data.register("machineId", { required: true })}
            />
          </div>
          <button className="flex items-center justify-center gap-2 h-[46px] w-[200px] bg-[#20519F] text-[#FFFFFF] rounded-[4px] mt-6">
            <SaveIcon />
            <span className="text-sm font-[600]">Save</span>
          </button>
          {/* <ModalConfirm
            open={data.openConfirmModal}
            setOpen={data.onConfirmClose}
            confirmMessage={"Data yang ditambahkan sudah sesuai?"}
            setOpenSuccess={""}
            cb={""}
          /> */}
        </form>
      </div>
    </>
  );
}
