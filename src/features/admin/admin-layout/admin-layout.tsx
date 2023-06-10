import { Outlet } from "react-router-dom";
import my_logo from "../../../assets/my-logo.svg";
import BurgerIcon from "@common/components/icons-new/BurgerIcon";
import DashboardIcon from "@common/components/icons-new/DashboardIcon";
import ChevronIcon from "@common/components/icons-new/ChevronIcon";
import useAdmin from "./admin-layout-model";
import LogoutIcon from "@common/components/icons-new/LogoutIcon";
import { NavItem } from "@common/components";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";
import MasterDataIcon from "@common/components/icons-new/MasterDataIcon";
import UserIcon from "@common/components/icons-new/UserIcon";
import StockIcon from "@common/components/icons-new/StockIcon";
import FileIcon from "@common/components/icons-new/FileIcon";

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
        </div>
        <div className="relative">
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => admin.onOpenAvatar()}
          >
            <div className="w-6 h-6 rounded-full bg-white"></div>
            <span className="text-white font-semibold">Admin</span>
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
          <div className="flex flex-col gap-2 h-screen justify-between">
            <div className="mt-3">
              <NavItem
                label={`Dashboard`}
                icon={<DashboardIcon className="w-[24px] h-[24px]" />}
                to={"dashboard/dashboard-view"}
                className="text-sm font-[400]"
              />
              <NavItem
                label={`Monitoring`}
                icon={
                  <FileIcon color={"#231F20"} className="w-[24px] h-[24px]" />
                }
                to={"monitoring/monitoring-view"}
                className="text-sm font-[400]"
              />
              <NavItem
                label={`Stock`}
                icon={
                  <StockIcon color={"#231F20"} className="w-[24px] h-[24px]" />
                }
                to={"stock/stock-view"}
                className="text-sm font-[400]"
              />
              <NavItem
                label={`Master Data`}
                to={"master-data/master-data-view"}
                icon={<MasterDataIcon className="w-[24px] h-[24px]" />}
                className="text-sm font-[400]"
              />
              <NavItem
                label={`User`}
                icon={<UserIcon className="w-[24px] h-[24px]" />}
                to={"user/user-view"}
                className="text-sm font-[400]"
              />
            </div>
            <button
              onClick={admin.onLogout}
              className="flex items-center gap-2 text-[#F04438] font-[400] px-4 py-8"
            >
              <LogoutIcon color={"#F04438"} />
              <span>Sign Out</span>
            </button>
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
