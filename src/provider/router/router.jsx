// routes/ProtectedRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "@/auth/AuthContext";
import { items as routes } from "@/component/data/routes";

const ProtectedRoute = ({ element, requiredRoles }) => {
  const { user } = useAuth();

  if (
    !requiredRoles ||
    requiredRoles.some((role) => user?.roles?.includes(role))
  ) {
    return element;
  }

  return <Navigate to='/unauthorized' replace />;
};

export default function ProtectedRoutes() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.id}
          path={route.path}
          element={
            <ProtectedRoute
              element={route.element}
              requiredRoles={route.requiredRoles}
            />
          }
        />
      ))}
    </Routes>
  );
}
