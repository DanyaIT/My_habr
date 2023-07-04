import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SideBar.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import LangSwitcher from "widgets/LangSwitcher/ui/LangSwitcher";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainPage from "shared/assets/icons/MainPage.svg";
import AboutPage from "shared/assets/icons/AboutPage.svg";

interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }:SideBarProps) => {
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
        <AppLink
          to={RoutePath.main}
          theme={AppLinkTheme.PRIMARY}
          className={cls.item}
        >
          <MainPage className={cls.icon} />
          <span className={cls.link}>{t("Главная")}</span>
        </AppLink>

        <AppLink
          to={RoutePath.about}
          theme={AppLinkTheme.PRIMARY}
          className={cls.item}
        >
          <AboutPage className={cls.icon} />
          <span className={cls.link}>{t('О сайте')}</span>
        </AppLink>
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
};
