import { RoutePath } from "shared/config/routeConfig/routeConfig"
import MainPage from "shared/assets/icons/MainPage.svg";
import AboutPage from "shared/assets/icons/AboutPage.svg";
import ProfilePage from "shared/assets/icons/ProfilePage.svg";

export interface SideBarItemsType {
    path: string,
    Icon: React.FC<React.SVGProps<SVGSVGElement>>,
    text: string,
    authOnly?: boolean,
}


export const SideBarItemsTypeList:SideBarItemsType[] = [
    {
        path:RoutePath.main,
        Icon:MainPage,
        text:"Главная" ,
    },

    {
        path:RoutePath.about,
        Icon:AboutPage,
        text:"О сайте" ,
    },

    {
        path:RoutePath.profile,
        Icon:ProfilePage,
        text:"Профиль" ,
        authOnly: true,
    },
]