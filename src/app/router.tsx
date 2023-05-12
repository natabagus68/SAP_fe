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
import { element } from "prop-types";

const Root = () => {
  return <Outlet />;
};

export default createBrowserRouter([
  {
    path: "",
    element: <Navigate to="../admin" />,
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
        path: "master-data/:type/manpower",
        element: <Root />,
        children: [
          {
            path: "",
            element: <ManpowerView />,
          },
          {
            path: "details",
            element: <ManpowerDetails />,
          },
          {
            path: "create",
            element: <ManpowerForm />,
          },
          {
            path: "edit",
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
            path: "details",
            element: <MesinDetails />,
          },
          {
            path: "create",
            element: <MesinForm />,
          },
          {
            path: "edit",
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
            path: "details",
            element: <LocationDetails />,
          },
          {
            path: "create",
            element: <LocationForm />,
          },
          {
            path: "edit",
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
            path: "edit",
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
            path: "details",
            element: <SparepartDetails />,
          },
          {
            path: "create",
            element: <SparepartForm />,
          },
          {
            path: "edit",
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
            path: "edit",
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
                path: "details",
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
                path: "edit",
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
                path: "edit",
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
