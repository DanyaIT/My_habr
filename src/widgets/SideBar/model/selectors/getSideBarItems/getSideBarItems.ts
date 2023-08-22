import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData'
import { createSelector } from "@reduxjs/toolkit";
import { SideBarItemsType } from "../../types/sidebar";
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainPage from 'shared/assets/icons/MainPage.svg';
import AboutPage from 'shared/assets/icons/AboutPage.svg';
import ArticlesPage from 'shared/assets/icons/ArticlesPage.svg';
import ProfilePage from 'shared/assets/icons/ProfilePage.svg';


export const getSideBarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sideBarItemsTypeList: SideBarItemsType[] = [
            {
                path: RoutePath.main,
                Icon: MainPage,
                text: "Главная",
            },

            {
                path: RoutePath.about,
                Icon: AboutPage,
                text: "О сайте",
            },

        ]

        if (userData) {
            sideBarItemsTypeList.push(
                {
                    path: RoutePath.profile + userData.id,
                    Icon: ProfilePage,
                    text: "Профиль",
                    authOnly: true,
                },


                {
                    path: RoutePath.articles,
                    Icon: ArticlesPage,
                    text: "Статьи",
                    authOnly: true,
                },
            )
        }

        return sideBarItemsTypeList
    }
)












