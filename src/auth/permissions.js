// auth/permissions.js
import { ROLES, ROLE_PERMISSIONS } from "./roles";

export const hasPermission = (user, requiredPermission) => {
  if (!user || !user.roles) return false;

  // اگر کاربر اونر است، تمام دسترسی‌ها را دارد
  if (user.roles.includes(ROLES.OWNER)) {
    return true;
  }

  // بررسی دسترسی‌های هر رول کاربر
  return user.roles.some((role) => {
    const permissions = ROLE_PERMISSIONS[role] || [];
    return permissions.includes(requiredPermission);
  });
};
