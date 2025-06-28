import { Menu as AntMenu } from "@/ui";
import { useAuth } from "@/auth/AuthContext";
import { items } from "@/component/data/menu";

export function Menu({ dSK, dOK, mode }) {
  const { user } = useAuth();

  // تابع بازگشتی برای فیلتر آیتم‌های منو
  const filterItemsByRole = (menuItems) => {
    return menuItems.filter((item) => {
      // اگر آیتم رول مورد نیاز نداشت، نمایش داده می‌شود
      if (!item.requiredRoles) return true;

      // بررسی آیا کاربر حداقل یکی از رول‌های مورد نیاز را دارد
      const hasAccess = item.requiredRoles.some((role) =>
        user?.roles?.includes(role)
      );

      // اگر آیتم فرزند دارد، آنها را هم فیلتر کن
      if (hasAccess && item.children) {
        item.children = filterItemsByRole(item.children);
        // اگر تمام فرزندها حذف شدند، خود آیتم را هم حذف کن
        if (item.children.length === 0) return false;
      }

      return hasAccess;
    });
  };

  // فیلتر کردن آیتم‌های منو بر اساس رول کاربر
  const protectedItems = filterItemsByRole(items);

  return (
    <AntMenu
      defaultSelectedKeys={dSK}
      defaultOpenKeys={dOK}
      mode={mode}
      items={protectedItems}
    />
  );
}
