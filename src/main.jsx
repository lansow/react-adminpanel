import { createRoot } from "react-dom/client";
import App from "./component/App";
import { AuthProvider } from "./auth/AuthContext";

const users = {
  admin: {
    id: 1,
    name: "ادمین سیستم",
    roles: ["ADMIN"],
    permissions: [],
  },
  support: {
    id: 2,
    name: "پشتیبان فنی",
    roles: ["SUPPORT"],
    permissions: [],
  },
  owner: {
    id: 3,
    name: "مالک سیستم",
    roles: ["OWNER"],
    permissions: [],
  },
};

createRoot(document.getElementById("root")).render(
  <AuthProvider user={users.owner}>
    <App />
  </AuthProvider>
);
