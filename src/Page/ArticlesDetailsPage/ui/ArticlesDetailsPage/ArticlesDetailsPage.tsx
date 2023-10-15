import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesDetailsPage.module.scss';
import { ArticleDetails } from 'entities/Article';
import {
   articleDetailsPageReducer,
} from 'Page/ArticlesDetailsPage';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'widgets/Page/Page';
import { fetchArticlesRecomendations } from 'Page/ArticlesDetailsPage/model/services/fetchArticlesRecomendations/fetchArticlesRecomendations';
import { ArticlesDetailsPageHeader } from '../ArticlesDetailsPageHeader/ArticlesDetailsPageHeader';
import { ArticleDetailsRecomendationsList } from 'features/ArticleDetailsRecomendationsList';
import { ArticlesDetailsPageComments } from '../ArticlesDetailsPageComments/ArticlesDetailsPageComments';
import { useParams } from 'react-router-dom';


interface ArticlesDetailsPageProps {
   className?: string;
}

const ArticlesDetailsPage: FC<ArticlesDetailsPageProps> = memo((props) => {
   const { className } = props;
   const { t } = useTranslation('/articles-details')
   const { id } = useParams<{ id: string }>()
   const dispatch = useAppDispatch()


   const reducers: ReducersList = {
      articleDetailsPage: articleDetailsPageReducer
   }



   useInitialEffect(() => {
      dispatch(fetchArticlesRecomendations())
   })

   if (!id) {
      return (
         <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            {t("Статья не найдена")}
         </div>
      )
   }

   return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
         <Page className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
               <ArticlesDetailsPageHeader />
               <ArticleDetails id={id} />
               <ArticleDetailsRecomendationsList />
               <ArticlesDetailsPageComments id={id} />
         </Page>
      </DynamicModuleLoader>
   );
})

export default memo(ArticlesDetailsPage)