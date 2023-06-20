import { createBrowserRouter, Outlet } from "react-router-dom";
import { Error404 } from "../common/components";
import LoginView from "@features/auth/login-view";
import AdminLayout from "@features/admin/admin-layout/admin-layout";
import GuestView from "@features/guest/guest-view";
import { LayoutOperator } from "@features/operator/layout-operator/layout-operator";
import { CastingMachiningPrint } from "@features/operator/casting-machining-print/casting-machining-print-view";
import { DashboardOperator } from "@features/operator/scan/dashboard/dashboard";
import { Qr } from "@features/operator/scan/qr/qr-view";
import { ChartPadf } from "@features/operator/pdf/chard-pdf";

import DashboardView from "@features/admin/dashboard/dashboard-view";

import MasterDataAdd from "@features/admin/master-data/machine/features/add";
import MasterDataEdit from "@features/admin/master-data/machine/features/edit";

import UserView from "@features/admin/user/user-view";
import UserAddView from "@features/admin/user/features/user-add";
import UserEditView from "@features/admin/user/features/user-edit";
import UserDetailView from "@features/admin/user/features/user-detail";

import MonitoringView from "@features/admin/monitoring/monitoring-view";

import StockView from "@features/admin/stock/stock-view";
import { element } from "prop-types";
import MaterialDescriptionView from "@features/admin/master-data/material-description/material-description-view";
import MasterDataView from "@features/admin/master-data/machine/master-data-view";
import MasterDataForm from "@features/admin/master-data/machine/form/master-data-form";

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
        path: "dashboard",
        element: <Root />,
        children: [
          {
            path: "dashboard-view",
            element: <DashboardView />,
          },
        ],
      },
      {
        path: "monitoring",
        element: <Root />,
        children: [
          {
            path: "monitoring-view",
            element: <MonitoringView />,
          },
        ],
      },
      {
        path: "stock",
        element: <Root />,
        children: [
          {
            path: "stock-view",
            element: <StockView />,
          },
        ],
      },
      {
        path: "master-data",
        element: <Root />,
        children: [
          {
            path: "mesin",
            element: <Root />,
            children: [
              {
                path: "",
                element: <MasterDataView />,
              },
              {
                path: "features/add",
                element: <MasterDataForm />,
              },
              // {
              //   path: "features/:id/edit",
              //   element: <MasterDataEdit />,
              // },
            ],
          },
          {
            path: "material-description",
            element: <Root />,
            children: [
              {
                path: "",
                element: <MaterialDescriptionView />,
              },
              // {
              //   path: "features/add",
              //   element: <MasterDataAdd />,
              // },
              // {
              //   path: "features/:id/edit",
              //   element: <MasterDataEdit />,
              // },
            ],
          },
        ],
      },
      {
        path: "User",
        element: <Root />,
        children: [
          {
            path: "user-view",
            element: <UserView />,
          },
          {
            path: "features/user-add",
            element: <UserAddView />,
          },
          {
            path: "features/:id/user-detail",
            element: <UserDetailView />,
          },
          {
            path: "features/:id/user-edit",
            element: <UserEditView />,
          },
        ],
      },
    ],
  },
  {
    path: "hmi",
    element: <LayoutOperator />,
    children: [
      {
        path: "",
        element: <CastingMachiningPrint />,
      },
      {
        path: "dashboard",
        element: <Root />,
        children: [
          {
            path: "",
            element: <DashboardOperator />,
          },
          {
            path: "scanQr",
            element: <Qr />,
          },
        ],
      },
      {
        path: ":machine",
        element: <CastingMachiningPrint />,
      },
    ],
  },
  {
    path: "pdf",
    element: <ChartPadf />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
