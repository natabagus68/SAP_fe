import { Outlet } from "react-router-dom";
import my_logo from "../../../assets/my-logo.svg";
import BurgerIcon from "@common/components/icons-new/BurgerIcon";
import DashboardIcon from "@common/components/icons-new/DashboardIcon";
import ChevronIcon from "@common/components/icons-new/ChevronIcon";
import useAdmin from "./admin-layout-model";
import LogoutIcon from "@common/components/icons-new/LogoutIcon";
import { NavItem } from "@common/components";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";
import SearchIcon from "@common/components/icons-new/SearchIcon";
import MasterDataIcon from "@common/components/icons-new/MasterDataIcon";
import UserIcon from "@common/components/icons-new/UserIcon";
import CalendarIcon from "@common/components/icons-new/CalendarIcon";
import SparepartIcon from "@common/components/icons-new/SparepartIcon";
import FlieIcon from "@common/components/icons-new/FileIcon";

export default function AdminLayout() {
  const admin = useAdmin();
  return admin.isLoading ? (
    <main className="w-screen h-screen flex bg-gray-200 items-center justify-center">
      <LoadingIcon className="animate-spin w-[80px] h-[80px]" />
    </main>
  ) : (
    <main className="relative">
      <header
        className={`${
          admin.isOpenSidebar ? "pl-[265px]" : "pl-[25px]"
        } fixed w-full h-[70px] bg-[#20519F] shadow-lg z-50 flex items-center justify-between pr-[25px] transition-all ease-in-out delay-100`}
      >
        <div className="flex gap-6 items-center">
          <BurgerIcon
            className="cursor-pointer"
            onClick={() => admin.onOpenSideBar()}
          />
          <button
            className="px-[20px] gap-2 h-[46px] rounded-md bg-[#4D74B2] text-white flex items-center"
            onClick={() => admin.onOpenTraceability()}
          >
            <SearchIcon />
            <span>Traceability</span>
          </button>
        </div>
        <div className="relative">
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => admin.onOpenAvatar()}
          >
            <div className="w-6 h-6 rounded-full bg-white"></div>
            <span className="text-white font-semibold">Admin</span>
            <ChevronIcon color="white" />
          </div>
          <div
            className={`${
              admin.isOpenAvatar ? "flex" : "hidden"
            } absolute top-[35px] bg-white rounded-md overflow-hidden right-0 flex-col gap-2 min-w-[190px] border border-gray-400`}
            onMouseLeave={() => admin.onOpenAvatar()}
          >
            <div
              className="flex items-center gap-3 cursor-pointer px-4 py-2 hover:bg-gray-100"
              onClick={() => admin.onLogout()}
            >
              <LogoutIcon />
              <span>Logout</span>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`${
          admin.isOpenSidebar ? null : "-translate-x-[240px]"
        } fixed w-[240px] h-full bg-white shadow-lg z-50 flex flex-col transition-all ease-in-out delay-100`}
      >
        <div className="w-full h-[70px] shadow-sm flex items-center justify-center">
          <img src={my_logo} alt="Logo Ragdalion" className="h-[50px]" />
        </div>
        <div className="flex flex-col p-4 gap-[12px] overflow-y-auto">
          <span className="font-semibold text-[#5C5C5C]">Menu</span>
          <div className="flex flex-col gap-2">
            <NavItem
              label={`Dashboard`}
              icon={<DashboardIcon className="w-[24px] h-[24px]" />}
            >
              <NavItem label="General" to={"dashboard/general"} />
              {/* <NavItem label="Details" to={"dashboard/details"} />
              <NavItem label="Real Time" to={"dashboard/real-time"} /> */}
            </NavItem>

            <NavItem
              label={`Report`}
              icon={<FlieIcon color="#231F20" className="w-[24px] h-[24px]" />}
            >
              <NavItem
                label="Checklist"
                to={"report/null/null/null/checklist"}
              />
              <NavItem
                label="Preventive"
                to={"report/null/null/null/preventive"}
              />
              <NavItem
                label="Corrective"
                to={"report/null/null/null/corrective"}
              />
            </NavItem>

            <NavItem
              label={`Schedule`}
              icon={<CalendarIcon className="w-[24px] h-[24px]" />}
            >
              <NavItem
                label="Calendar"
                to={`schedule/${new Date().getDate()}/${
                  new Date().getMonth() + 1
                }/${new Date().getFullYear()}/1/calendar`}
              />
              <NavItem label="Monitoring" to={"schedule/monitoring/1"} />
            </NavItem>
            <NavItem
              label={`Sparepart`}
              icon={<SparepartIcon className="w-[24px] h-[24px]" />}
            >
              <NavItem label="Inventory" to={"main-sparepart/inventory"} />
              <NavItem label="Log Part" to={"main-sparepart/log-part"} />
              <NavItem label="In/out Stok" to={"main-sparepart/io-stock"} />
            </NavItem>
            <NavItem
              label={`Master Data`}
              icon={<MasterDataIcon className="w-[24px] h-[24px]" />}
            >
              <NavItem label="Manpower" to={"master-data/manpower/1/manpower"} />
              <NavItem label="Mesin" to={"master-data/mesin/1/mesin"} />
              <NavItem
                label="Location"
                to={"master-data/departemen/location"}
              />
              <NavItem label="Sparepart" to={"master-data/part/1/sparepart"} />
              <NavItem label="Frequency" to={"master-data/frequency"} />
              <NavItem label="Damage" to={"master-data/damage"} />
            </NavItem>

            <NavItem
              label={`User`}
              icon={<UserIcon className="w-[24px] h-[24px]" />}
            >
              <NavItem label="Account" to={"user/account"} />
              <NavItem label="Access" to={"user/access"} />
            </NavItem>
          </div>
        </div>
      </div>
      <div
        className={`${
          admin.isOpenSidebar ? "pl-[265px]" : "pl-[25px]"
        } flex-1 pt-[95px] p-[25px] transition-all ease-in-out delay-100`}
      >
        <Outlet />
      </div>
    </main>
  );
}
