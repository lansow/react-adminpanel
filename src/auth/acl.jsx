// auth/acl.js
import React from "react";
import { useAuth } from "./AuthContext";
import { hasPermission } from "./permissions";

export const withACL = (Component, options = {}) => {
  const WrappedComponent = (props) => {
    const { user, hasRole } = useAuth();
    const { permission, fallback = null, ...restProps } = props;

    // بررسی از طریق پرمیژن
    if (permission && !hasPermission(user, permission)) {
      return fallback;
    }

    // بررسی از طریق رول (اگر در options مشخص شده باشد)
    if (options.requiredRoles) {
      const hasRequiredRole = options.requiredRoles.some((role) =>
        hasRole(role)
      );
      if (!hasRequiredRole) {
        return options.fallback || fallback;
      }
    }

    return <Component {...restProps} />;
  };

  WrappedComponent.displayName = `withACL(${
    Component.displayName || Component.name
  })`;
  return WrappedComponent;
};
