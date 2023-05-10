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
        path: "schedule",
        element: <Root />,
        children: [
          {
            path: "calendar",
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
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
