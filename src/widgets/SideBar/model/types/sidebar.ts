import { RoutePath } from "shared/config/routeConfig/routeConfig"
import MainPage from "shared/assets/icons/MainPage.svg";
import AboutPage from "shared/assets/icons/AboutPage.svg";
import ProfilePage from "shared/assets/icons/ProfilePage.svg";
import ArticlesPage from "shared/assets/icons/ArticlesPage.svg";


export interface SideBarItemsType {
    path: string,
    Icon: React.FC<React.SVGProps<SVGSVGElement>>,
    text: string,
    authOnly?: boolean,
}

