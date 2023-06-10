import { Breadcrumbs } from "@common/components";
import { ArrowIcon } from "@common/components/icons";
import UserFormView from "../form/user-form-view";
import useUserModel from "../user-model";

export default function UserEditView() {
  const data = useUserModel();
  return (
    <>
      <Breadcrumbs items={["User", "Edit User"]} />
      <div className="my-4 border rounded-[4px] bg-[#FFF]">
        <div className="px-8 py-6 text-[#514E4E] flex justify-between items-center border-b">
          <h1 className="text-2xl font-[700]">Edit User</h1>
          <div
            className="flex items-center gap-2 border border-[#667085] px-5 py-2 rounded-[4px] cursor-pointer"
            onClick={() => data.onNavigate(-1)}
          >
            <ArrowIcon className="-rotate-90" />
            <span className="text-sm text-[#667085]">Back</span>
          </div>
        </div>
        <UserFormView />
      </div>
    </>
  );
}
