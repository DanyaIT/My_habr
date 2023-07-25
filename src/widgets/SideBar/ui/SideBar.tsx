import { memo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SideBar.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import LangSwitcher from "widgets/LangSwitcher/ui/LangSwitcher";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { SideBarItemsTypeList } from "../model/items";
import { SideBarItems } from "../SideBarItems/SideBarItems";

interface SideBarProps {
  className?: string;
}

export const SideBar = memo(({ className }:SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const {t} = useTranslation();
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
        className || "",
      ])}
      data-testid="sidebar"
    >
      <div className={cls.items}>
        {SideBarItemsTypeList.map(item => (
          <SideBarItems 
          key = {item.path}
          collapsed = {collapsed}
          item={item} />
        ))}
      </div>

      <Button
        theme={ThemeButton.BACKGROUND_INVERTED}
        square
        size={SizeButton.L}
        onClick={onToggle}
        data-testid="sidebar-toggle"
        className={cls.collapsedBtn}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  );
});
