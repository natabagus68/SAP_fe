import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { Error404 } from "../common/components";
import LoginView from "@features/auth/login-view";
import AdminLayout from "@features/admin/admin-layout/admin-layout";
import GuestView from "@features/guest/guest-view";

import MasterDataView from "@features/admin/master-data/master-data-view";
import MasterDataAdd from "@features/admin/master-data/features/add";
import MasterDataEdit from "@features/admin/master-data/features/edit";

import UserView from "@features/admin/user/user-view";
import UserAddView from "@features/admin/user/features/user-add";
import UserEditView from "@features/admin/user/features/user-edit";
import UserDetailView from "@features/admin/user/features/user-detail";

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
      },
      {
        path: "monitoring",
        element: <Root />,
      },
      {
        path: "stock",
        element: <Root />,
      },
      {
        path: "master-data",
        element: <Root />,
        children: [
          {
            path: "master-data-view",
            element: <MasterDataView />,
          },
          {
            path: "features/add",
            element: <MasterDataAdd />,
          },
          {
            path: "features/:id/edit",
            element: <MasterDataEdit />,
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
    path: "*",
    element: <Error404 />,
  },
]);
