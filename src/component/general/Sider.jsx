import { Layout } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  ShopOutlined,
  ShoppingOutlined,
  PercentageOutlined,
  AppstoreOutlined,
  ProjectOutlined,
  SettingOutlined,
  CommentOutlined,
  ControlOutlined,
} from "@ant-design/icons";
import { Menu } from "@/ui/Menu";
import { Link } from "react-router-dom";

const { Sider: AntSider } = Layout;
const items = [
  {
    key: "dashboard",
    icon: <DashboardOutlined />,
    label: <Link to='/'>داشبورد</Link>,
    requiredRoles: ["OWNER"],
  },
  {
    key: "PM",
    label: <Link to='/ProductManagement'>مدیریت محصولات</Link>,
    icon: <ShopOutlined />,
    requiredRoles: ["ADMIN", "OWNER"],
  },
  {
    key: "OM",
    label: <Link to='/OrderManagement'>مدیریت سفارشات</Link>,
    icon: <ShoppingOutlined />,
    requiredRoles: ["ADMIN", "OWNER", "SUPPORT"],
  },
  {
    key: "pepole",
    label: "کاربران",
    icon: <UserOutlined />,
    requiredRoles: ["ADMIN", "OWNER", "SUPPORT"],
    children: [
      { key: "pepole-1", label: <Link to='/pepole'>لیست کاربران</Link> },
      { key: "pepole-2", label: <Link to='/pepole/add'>افزودن کاربر</Link> },
    ],
  },
  {
    key: "MD",
    label: <Link to='/ManageDiscounts'>مدیریت تخفیف‌ها</Link>,
    icon: <PercentageOutlined />,
    requiredRoles: ["OWNER"],
  },
  {
    key: "CMS",
    label: <Link to='/CMS'>مدیریت محتوا</Link>,
    icon: <AppstoreOutlined />,
    requiredRoles: ["ADMIN", "OWNER"],
  },
  {
    key: "AR",
    label: <Link to='/AdvancedReports'>گزارش‌گیری پیشرفته</Link>,
    icon: <ProjectOutlined />,
    requiredRoles: ["OWNER"],
  },
  {
    key: "Settings",
    label: <Link to='/Settings'>تنظیمات سیستم</Link>,
    icon: <SettingOutlined />,
    requiredRoles: ["OWNER"],
  },
  {
    key: "Support",
    label: <Link to='/Support'>پشتیبانی و تیکت‌ها</Link>,
    icon: <CommentOutlined />,
    requiredRoles: ["ADMIN", "OWNER", "SUPPORT"],
  },
  {
    key: "SB",
    label: <Link to='/SecurityBackup'>امنیت و بکاپ</Link>,
    icon: <ControlOutlined />,
    requiredRoles: ["OWNER"],
  },
];

export default function Sider() {
  return (
    <AntSider width='18%' theme='light' collapsible>
      <Menu dSK={["dashboard"]} dOK={["pepole"]} mode='inline' items={items} />
    </AntSider>
  );
}
