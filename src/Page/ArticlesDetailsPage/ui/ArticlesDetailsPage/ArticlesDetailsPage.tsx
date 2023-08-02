import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
   className?: string;
}

const ArticlesDetailsPage: FC<ArticlesDetailsPageProps> = (props) => {
   const { className } = props;
   const { t } = useTranslation('/articles')

   return (
      <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            ArticlesDetailsPage
      </div>
   );
}

export default memo(ArticlesDetailsPage)