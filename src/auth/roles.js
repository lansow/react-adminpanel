// auth/roles.js
export const ROLES = {
  ADMIN: "ADMIN",
  SUPPORT: "SUPPORT",
  OWNER: "OWNER",
};

// تعریف پرمیژن‌های هر رول
export const ROLE_PERMISSIONS = {
  [ROLES.ADMIN]: [
    "VIEW_DASHBOARD",
    "MANAGE_USERS",
    "EDIT_SETTINGS",
    "VIEW_REPORTS",
  ],
  [ROLES.SUPPORT]: ["VIEW_DASHBOARD", "MANAGE_TICKETS", "VIEW_USER_INFO"],
  [ROLES.OWNER]: [
    "VIEW_DASHBOARD",
    "MANAGE_USERS",
    "EDIT_SETTINGS",
    "VIEW_REPORTS",
    "MANAGE_BILLING",
    "FULL_ACCESS",
  ],
};
