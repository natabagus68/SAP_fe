import { Outlet } from "react-router-dom";
import my_logo from "../../../assets/my-logo.svg";
import FullscreenIcon from "@common/components/icons-new/FullscreenIcon";
import BurgerIcon from "@common/components/icons-new/BurgerIcon";
import DashboardIcon from "@common/components/icons-new/DashboardIcon";
import ChevronIcon from "@common/components/icons-new/ChevronIcon";
import useAdmin from "./admin-layout-model";
import LogoutIcon from "@common/components/icons-new/LogoutIcon";
import { NavItem } from "@common/components";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";
import SearchIcon from "@common/components/icons-new/SearchIcon";
import MasterDataIcon from "@common/components/icons-new/MasterDataIcon";

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
        } fixed w-[240px] h-full bg-white shadow-lg z-50 flex flex-col gap-[20px] transition-all ease-in-out delay-100`}
      >
        <div className="w-full h-[70px] shadow-sm flex items-center justify-center">
          <img src={my_logo} alt="Logo Ragdalion" className="h-[50px]" />
        </div>
        <div className="flex flex-col px-4 gap-[12px]">
          <span className="font-semibold text-[#5C5C5C]">Menu</span>
          <div className="flex flex-col gap-2">
            <NavItem
              label={`Dashboard`}
              icon={<DashboardIcon className="w-[24px] h-[24px]" />}
            >
              <NavItem label="General" to={"dashboard/general"} />
              <NavItem label="Details" to={"dashboard/details"} />
              <NavItem label="Real Time" to={"dashboard/real-time"} />
            </NavItem>
            <NavItem
              label={`Master Data`}
              icon={<MasterDataIcon className="w-[24px] h-[24px]" />}
            >
              <NavItem label="Manpower" to={"master-data/manpower/manpower"} />
              <NavItem label="Mesin" to={"master-data/mesin/mesin"} />
              <NavItem label="Frequency" to={"master-data/frequency"} />
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
