import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesDetailsPage.module.scss';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import {
   addCommentForArticle,
   articleDetailsPageReducer,
   fetchCommentsByArticleId,
   getArticleComments,
   getArticleDetailsCommentIsloading
} from 'Page/ArticlesDetailsPage';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/AddCommentForm';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button } from 'shared/ui/Button/Button';
import { Page } from 'widgets/Page/Page';
import {
   getArticleRecomendations
} from '../../model/slices/ArticleDetailsPageRecomendationSlice';
import { getArticleDetailsRecomendationsIsLoading } from 'Page/ArticlesDetailsPage/model/selectors/getArticleDetailsRecomendationsState/getArticleDetailsRecomendationsState';
import { fetchArticlesRecomendations } from 'Page/ArticlesDetailsPage/model/services/fetchArticlesRecomendations/fetchArticlesRecomendations';
import { ArticlesDetailsPageHeader } from '../ArticlesDetailsPageHeader/ArticlesDetailsPageHeader';

interface ArticlesDetailsPageProps {
   className?: string;
}

const ArticlesDetailsPage: FC<ArticlesDetailsPageProps> = memo((props) => {
   const { className } = props;
   const { t } = useTranslation('/articles-details')
   const { id } = useParams<{ id: string }>()
   const navigate = useNavigate()
   const dispatch = useAppDispatch()

   const comments = useSelector(getArticleComments.selectAll)
   const commentsIsLoading = useSelector(getArticleDetailsCommentIsloading)
   const recomedtations = useSelector(getArticleRecomendations.selectAll)
   const recomendationsIsLoading = useSelector(getArticleDetailsRecomendationsIsLoading)

   const reducers: ReducersList = {
      articleDetailsPage: articleDetailsPageReducer
   }

   const onSendTextValue = useCallback((text: string) => {
      dispatch(addCommentForArticle(text))
   }, [dispatch])


   const onBackToList = useCallback(() => {
      navigate(RoutePath.articles)
   }, [navigate])

   useInitialEffect(() => {
      dispatch(fetchCommentsByArticleId(id))
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
            <ArticlesDetailsPageHeader/>
            <ArticleDetails id={id} />
            <Text 
            size={TextSize.L}
            className={cls.TitleArticlesDetailsPage} 
            title = {t('Рекомендуем') || ''}
            />
            <ArticleList
            target='_blank'
            className={cls.Recomedtations}
            isLoading = {recomendationsIsLoading}
            articles={recomedtations}
            />
            <Text 
            size={TextSize.L}
            className={cls.TitleArticlesDetailsPage} 
            title={t('Комментарии') || ''}
             />
            <AddCommentForm onSendTextValue={onSendTextValue} />
            <CommentList
               isLoading={commentsIsLoading}
               comments={comments}
            />
         </Page>
      </DynamicModuleLoader>
   );
})

export default memo(ArticlesDetailsPage)