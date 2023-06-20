import { Breadcrumbs } from "@common/components";
import { ArrowIcon } from "@common/components/icons";
import MasterDataForm from "@features/admin/master-data/machine/form/master-data-form";
import useUserModel from "@features/admin/user/user-model";

export default function MasterDataEdit() {
  const data = useUserModel();
  return (
    <>
      <Breadcrumbs items={["Master Data", "Edit Data"]} />
      <div className="my-4 border rounded-[4px] bg-[#FFF]">
        <div className="px-8 py-6 text-[#514E4E] flex justify-between items-center border-b">
          <h1 className="text-2xl font-[700]">Edit Data</h1>
          <div
            className="flex items-center gap-2 border border-[#667085] px-5 py-2 rounded-[4px] cursor-pointer"
            onClick={() => data.onNavigate(-1)}
          >
            <ArrowIcon className="-rotate-90" />
            <span className="text-sm text-[#667085]">Back</span>
          </div>
        </div>
        <MasterDataForm />
      </div>
    </>
  );
}
