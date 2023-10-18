import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ForbiddenPage.module.scss';
import { Page } from 'widgets/Page/Page';

interface ForbiddenPageProps {
   className?: string;
}

const ForbiddenPage: FC<ForbiddenPageProps> = memo((props) => {
   const { className } = props;
   const { t } = useTranslation()

   return (
      <Page className={classNames(cls.ForbiddenPage, {}, [className])}>
         {t('У Вас недостаточно прав для перехода в админ панель')}
      </Page>
   );
})

export default ForbiddenPage;