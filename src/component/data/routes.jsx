import Dashboard from "../dashboard/Dashboard";
import PM from "../products/PM";
import AddP from "../products/AddP";
import EditP from "../products/EditP";
import OM from "../orders/OM";
import ODetail from "../orders/ODetail";
import IDetail from "../products/IDetail";
import Pepole from "../pepole/Pepole";
import PDetail from "../pepole/PDetail";
import MD from "../marketing/MD";
import CMS from "../marketing/CMS";
import AR from "../analytics/AR";
import Support from "../support/Support";
import SB from "../sec/SB";
import Settings from "../settings/Settings";
import MainPage from "../marketing/MainPage";
import Statics from "../marketing/Statics";
import Vblog from "../marketing/Vblog";

export const items = [
  {
    id: 1,
    path: "/",
    element: <Dashboard />,
    requiredRoles: ["OWNER"],
  },
  {
    id: 2,
    path: "/ProductManagement",
    element: <PM />,
    requiredRoles: ["ADMIN", "OWNER"],
  },
  {
    id: 3,
    path: "/ProductManagement/add",
    element: <AddP />,
    requiredRoles: ["ADMIN", "OWNER"],
  },
  {
    id: 4,
    path: "/ProductManagement/edit/:id",
    element: <EditP />,
    requiredRoles: ["ADMIN", "OWNER"],
  },
  {
    id: 5,
    path: "/ProductManagement/:id",
    element: <IDetail />,
    requiredRoles: ["ADMIN", "OWNER"],
  },
  {
    id: 6,
    path: "/OrderManagement",
    element: <OM />,
    requiredRoles: ["ADMIN", "OWNER", "SUPPORT"],
  },

  {
    id: 7,
    path: "/OrderManagement/:id",
    element: <ODetail />,
    requiredRoles: ["ADMIN", "OWNER", "SUPPORT"],
  },
  {
    id: 8,
    path: "/pepole",
    element: <Pepole />,
    requiredRoles: ["ADMIN", "OWNER", "SUPPORT"],
  },
  {
    id: 9,
    path: "/pepole/:id",
    element: <PDetail />,
    requiredRoles: ["ADMIN", "OWNER", "SUPPORT"],
  },
  {
    id: 10,
    path: "/ManageDiscounts",
    element: <MD />,
    requiredRoles: ["OWNER"],
  },
  {
    id: 11,
    path: "/CMS",
    element: <CMS />,
    requiredRoles: ["ADMIN", "OWNER"],
  },
  {
    id: 12,
    path: "/CMS/MainPage",
    element: <MainPage />,
    requiredRoles: ["ADMIN", "OWNER"],
  },
  {
    id: 13,
    path: "/CMS/Statics",
    element: <Statics />,
    requiredRoles: ["ADMIN", "OWNER"],
  },
  {
    id: 14,
    path: "/CMS/Vblog",
    element: <Vblog />,
    requiredRoles: ["ADMIN", "OWNER"],
  },
  {
    id: 15,
    path: "/AdvancedReports",
    element: <AR />,
    requiredRoles: ["OWNER"],
  },
  {
    id: 16,
    path: "/Settings",
    element: <Settings />,
    requiredRoles: ["OWNER"],
  },
  {
    id: 17,
    path: "/Support",
    element: <Support />,
    requiredRoles: ["ADMIN", "OWNER", "SUPPORT"],
  },
  {
    id: 18,
    path: "/SecurityBackup",
    element: <SB />,
    requiredRoles: ["OWNER"],
  },
];
