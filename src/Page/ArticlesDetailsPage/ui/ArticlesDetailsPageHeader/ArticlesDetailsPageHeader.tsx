import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesDetailsPageHeader.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getCanEditArticle } from '../../model/selectors/getCanEditArticle/getCanEditArticle';
import { getArticleDetailsData } from 'entities/Article';

interface ArticlesDetailsPageHeaderProps {
   className?: string;
}

export const ArticlesDetailsPageHeader: FC<ArticlesDetailsPageHeaderProps> = memo((props) => {
   const { className } = props;
   const { t } = useTranslation()
   const navigate = useNavigate()
   const canEdit = useSelector(getCanEditArticle)
   const articles = useSelector(getArticleDetailsData)

   const onBackToList = useCallback(() => {
      navigate(RoutePath.articles)
   }, [navigate])

   const onEditArticle = useCallback(() => {
      navigate(`${RoutePath.articles_details}${articles?.id}/edit`)
   }, [navigate, articles?.id])

   return (
      <div className={classNames(cls.ArticlesDetailsPageHeader, {}, [className])}>
         <Button
         onClick={onBackToList}
         >
            {t('Назад к списку статей')}
         </Button>
         {canEdit && 
         <Button
         onClick={onEditArticle}
         className={cls.EditBtn}
         >
            {t('Редактировать')}
         </Button>
         }
      </div>
   );
})