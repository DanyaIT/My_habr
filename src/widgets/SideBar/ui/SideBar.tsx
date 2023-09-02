import { memo, useMemo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SideBar.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import LangSwitcher from "widgets/LangSwitcher/ui/LangSwitcher";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { SideBarItems } from "../SideBarItems/SideBarItems";
import { useSelector } from "react-redux";
import { getSideBarItems } from "../model/selectors/getSideBarItems/getSideBarItems";


interface SideBarProps {
  className?: string;
}

export const SideBar = memo(({ className }:SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sideBarItemsTypeList = useSelector(getSideBarItems)
  const {t} = useTranslation();
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(() => sideBarItemsTypeList.map((item) => (
    <SideBarItems
      item={item}
      collapsed = {collapsed}
      key = {item.path}
    />
  )), [collapsed, sideBarItemsTypeList])

  return (
    <menu
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
        className || "",
      ])}
      data-testid="sidebar"
    >
      <div className={cls.items}>
          {itemsList}
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
    </menu>
  );
});
