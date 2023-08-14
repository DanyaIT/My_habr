import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesDetailsPage.module.scss';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { articleDetailsCommentReducer, fetchCommentsByArticleId, getArticleComments, getArticleDetailsCommentIsloading } from 'Page/ArticlesDetailsPage';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';

interface ArticlesDetailsPageProps {
   className?: string;
}

const ArticlesDetailsPage: FC<ArticlesDetailsPageProps> = (props) => {
   const { className } = props;
   const { t } = useTranslation('/articles-details')
   const {id} = useParams<{id: string}>()
   const dispatch = useAppDispatch()
   const comments = useSelector(getArticleComments.selectAll)
   const commentsIsLoading = useSelector(getArticleDetailsCommentIsloading)
   const reducers:ReducersList = {
      ArticleDetailsComments:articleDetailsCommentReducer,
   }

   useInitialEffect(() => {
      dispatch(fetchCommentsByArticleId(id))
   })

   if(!id){
      return (
         <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            {t("Статья не найдена")}
         </div>
      )
   }

   return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            <ArticleDetails id = {id}/>
            <Text className={cls.TitleArticlesDetailsPage} title={t('Комментарии') || ''}/>
            <CommentList 
            isLoading = {commentsIsLoading}
            comments = {comments}
            />
      </div>
      </DynamicModuleLoader>
   );
}

export default memo(ArticlesDetailsPage)