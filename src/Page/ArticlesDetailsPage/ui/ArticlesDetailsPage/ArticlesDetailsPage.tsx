import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesDetailsPage.module.scss';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';

interface ArticlesDetailsPageProps {
   className?: string;
}

const ArticlesDetailsPage: FC<ArticlesDetailsPageProps> = (props) => {
   const { className } = props;
   const { t } = useTranslation('/articles-details')
   const {id} = useParams<{id: string}>()

   if(!id){
      return (
         <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            {t("Статья не найдена")}
         </div>
      )
   }

   return (
      <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            <ArticleDetails id = {id}/>
      </div>
   );
}

export default memo(ArticlesDetailsPage)