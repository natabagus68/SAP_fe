import { Breadcrumbs } from "@common/components";
import { ArrowIcon } from "@common/components/icons";
import UserFormView from "../form/user-form-view";
import useUserModel from "../user-model";

export default function UserAddView() {
  const data = useUserModel();
  return (
    <>
      <Breadcrumbs items={["User", "Add User"]} />
      <div className="my-4 border rounded-[4px]">
        <div className="px-8 py-6 text-[#514E4E] flex justify-between items-center border-b">
          <h1 className="text-2xl font-[800]">Add User</h1>
          <div
            className="flex items-center gap-2 border border-[#514E4E] px-5 py-2 rounded-[4px] cursor-pointer"
            onClick={() => data.onNavigate(-1)}
            >
            <ArrowIcon className="-rotate-90" />
            <span className="text-sm">Back</span>
          </div>
        </div>
        <UserFormView />
      </div>
    </>
  );
}
