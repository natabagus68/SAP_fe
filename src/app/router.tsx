import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { Error404 } from "../common/components";
import LoginView from "@features/auth/login-view";
import GeneralView from "@features/admin/dashboard/general/general-view";
import AdminLayout from "@features/admin/admin-layout/admin-layout";
import RealTimeView from "@features/admin/dashboard/real-time/real-time-view";
import DetailsView from "@features/admin/dashboard/details/details-view";
import TraceabilityView from "@features/admin/traceability/traceability-view";
import TraceabilityDetail from "@features/admin/traceability/traceability-detail";
import ManpowerView from "@features/admin/master-data/manpower/manpower-view";
import ManpowerDetails from "@features/admin/master-data/manpower/manpower-details";
import ManpowerForm from "@features/admin/master-data/manpower/manpower-form";
import MesinView from "@features/admin/master-data/mesin/mesin-view";
import MesinDetails from "@features/admin/master-data/mesin/mesin-details";
import MesinForm from "@features/admin/master-data/mesin/mesin-form";
import FrequencyView from "@features/admin/master-data/frequency/frequency-view";
import FrequencyForm from "@features/admin/master-data/frequency/frequency-form";
import LocationView from "@features/admin/master-data/location/location-view";
import LocationDetails from "@features/admin/master-data/location/location-details";
import LocationForm from "@features/admin/master-data/location/location-form";
import SparepartView from "@features/admin/master-data/sparepart/sparepart-view";
import SparepartDetails from "@features/admin/master-data/sparepart/sparepart-details";
import SparepartForm from "@features/admin/master-data/sparepart/sparepart-form";
import CalendarView from "@features/admin/schedule/calendar/calendar-view";
import CalendarForm from "@features/admin/schedule/calendar/calendar-form";
import CalendarRemark from "@features/admin/schedule/calendar/calendar-remark";
import MonitoringView from "@features/admin/schedule/monitoring/monitoring-view";
import DamageView from "@features/admin/master-data/damage/damage-view";
import DamageForm from "@features/admin/master-data/damage/damage-form";
import ChecklistView from "@features/admin/report/checklist/checklist-view";
import ChecklistDetail from "@features/admin/report/checklist/checklist-detail";
import PreventiveView from "@features/admin/report/preventive/preventive-view";
import CorrectiveView from "@features/admin/report/corrective/corrective-view";
import PreventiveDetail from "@features/admin/report/preventive/preventive-detail";
import CorrectiveDetail from "@features/admin/report/corrective/corrective-detail";
import PreventiveExpand from "@features/admin/report/preventive/preventive-expand";
import AccountView from "@features/admin/user/account/account-view";
import AccountDetail from "@features/admin/user/account/account-detail";
import AccountForm from "@features/admin/user/account/account-form";
import AccessView from "@features/admin/user/access/access-view";
import AccessMenu from "@features/admin/user/access/access-menu";
import AccessForm from "@features/admin/user/access/access-form";
import InventoryView from "@features/admin/main-sparepart/inventory/inventory-view";
import InventoryTable from "@features/admin/main-sparepart/inventory/inventory-table";
import InventoryDetails from "@features/admin/main-sparepart/inventory/inventory-details";
import LogPartView from "@features/admin/main-sparepart/log-part/log-part-view";
import LogPartDetails from "@features/admin/main-sparepart/log-part/log-part-details";
import IoStockView from "@features/admin/main-sparepart/io-stok/io-stock-view";
import IoStockForm from "@features/admin/main-sparepart/io-stok/io-stock-form";
import GuestView from "@features/guest/guest-view";

const Root = () => {
  return <Outlet />;
};

export default createBrowserRouter([
  {
    path: "",
    element: <GuestView />,
  },
  {
    path: "login",
    element: <LoginView />,
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "traceability",
        element: <Root />,
        children: [
          {
            path: "",
            element: <TraceabilityView />,
          },
          {
            path: "detail",
            element: <TraceabilityDetail />,
          },
        ],
      },
      {
        path: "schedule",
        element: <Root />,
        children: [
          {
            path: ":month/calendar",
            element: <Root />,
            children: [
              {
                path: "",
                element: <CalendarView />,
              },
              {
                path: "create",
                element: <CalendarForm />,
              },
              {
                path: "edit",
                element: <CalendarForm />,
              },
              {
                path: "remark",
                element: <CalendarRemark />,
              },
            ],
          },
          {
            path: "monitoring",
            element: <Root />,
            children: [
              {
                path: "",
                element: <MonitoringView />,
              },
            ],
          },
        ],
      },
      {
        path: "dashboard",
        element: <Root />,
        children: [
          {
            path: "general",
            element: <GeneralView />,
          },
          {
            path: "details",
            element: <DetailsView />,
          },
          {
            path: "real-time",
            element: <RealTimeView />,
          },
        ],
      },
      {
        path: "report",
        element: <Root />,
        children: [
          {
            path: "checklist",
            element: <Root />,
            children: [
              {
                path: "",
                element: <ChecklistView />,
              },
              {
                path: "details",
                element: <ChecklistDetail />,
              },
            ],
          },
          {
            path: "preventive",
            element: <Root />,
            children: [
              {
                path: "",
                element: <PreventiveView />,
              },
              {
                path: "details",
                element: <PreventiveDetail />,
              },
              {
                path: "details/expands",
                element: <PreventiveExpand />,
              },
            ],
          },
          {
            path: "corrective",
            element: <Root />,
            children: [
              {
                path: "",
                element: <CorrectiveView />,
              },
              {
                path: "details",
                element: <CorrectiveDetail />,
              },
            ],
          },
        ],
      },
      {
        path: "main-sparepart",
        element: <Root />,
        children: [
          {
            path: "inventory",
            element: <Root />,
            children: [
              {
                path: "",
                element: <InventoryView />,
              },
              {
                path: ":type/table",
                element: <Root />,
                children: [
                  {
                    path: "",
                    element: <InventoryTable />,
                  },
                  {
                    path: ":id/details",
                    element: <InventoryDetails />,
                  },
                ],
              },
            ],
          },
          {
            path: "log-part",
            element: <Root />,
            children: [
              {
                path: "",
                element: <LogPartView />,
              },
              {
                path: "details",
                element: <LogPartDetails />,
              },
            ],
          },
          {
            path: "io-stock",
            element: <Root />,
            children: [
              {
                path: "",
                element: <IoStockView />,
              },
              {
                path: "create",
                element: <IoStockForm />,
              },
            ],
          },
        ],
      },
      {
        path: "master-data/:type/manpower",
        element: <Root />,
        children: [
          {
            path: "",
            element: <ManpowerView />,
          },
          {
            path: ":id/details",
            element: <ManpowerDetails />,
          },
          {
            path: "create",
            element: <ManpowerForm />,
          },
          {
            path: ":id/edit",
            element: <ManpowerForm />,
          },
        ],
      },
      {
        path: "master-data/:type/mesin",
        element: <Root />,
        children: [
          {
            path: "",
            element: <MesinView />,
          },
          {
            path: ":id/details",
            element: <MesinDetails />,
          },
          {
            path: "create",
            element: <MesinForm />,
          },
          {
            path: ":id/edit",
            element: <MesinForm />,
          },
        ],
      },
      {
        path: "master-data/:type/location",
        element: <Root />,
        children: [
          {
            path: "",
            element: <LocationView />,
          },
          {
            path: ":id/details",
            element: <LocationDetails />,
          },
          {
            path: "create",
            element: <LocationForm />,
          },
          {
            path: ":id/edit",
            element: <LocationForm />,
          },
        ],
      },
      {
        path: "master-data/frequency",
        element: <Root />,
        children: [
          {
            path: "",
            element: <FrequencyView />,
          },
          {
            path: "create",
            element: <FrequencyForm />,
          },
          {
            path: ":frequencyId/edit",
            element: <FrequencyForm />,
          },
        ],
      },
      {
        path: "master-data/:type/sparepart",
        element: <Root />,
        children: [
          {
            path: "",
            element: <SparepartView />,
          },
          {
            path: ":id/details",
            element: <SparepartDetails />,
          },
          {
            path: "create",
            element: <SparepartForm />,
          },
          {
            path: ":id/edit",
            element: <SparepartForm />,
          },
        ],
      },
      {
        path: "master-data/damage",
        element: <Root />,
        children: [
          {
            path: "",
            element: <DamageView />,
          },
          {
            path: "create",
            element: <DamageForm />,
          },
          {
            path: ":damageId/edit",
            element: <DamageForm />,
          },
        ],
      },

      {
        path: "User",
        element: <Root />,
        children: [
          {
            path: "Account",
            element: <Root />,
            children: [
              {
                path: "",
                element: <AccountView />,
              },
              {
                path: ":AccountId/details",
                element: <AccountDetail />,
              },
              {
                path: "details/edit",
                element: <AccountForm />,
              },
              {
                path: "create",
                element: <AccountForm />,
              },
              {
                path: ":AccountId/edit",
                element: <AccountForm />,
              },
            ],
          },
          {
            path: "Access",
            element: <Root />,
            children: [
              {
                path: "",
                element: <AccessView />,
              },
              {
                path: "menu",
                element: <AccessMenu />,
              },
              {
                path: "create",
                element: <AccessForm />,
              },
              {
                path: ":AccessId/edit",
                element: <AccessForm />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
