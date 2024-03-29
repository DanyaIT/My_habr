import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AdminPanelPage.module.scss';
import { Page } from 'widgets/Page/Page';

interface AdminPanelPageProps {
   className?: string;
}

const AdminPanelPage: FC<AdminPanelPageProps> = memo((props) => {
   const { className } = props;
   const { t } = useTranslation()

   return (
      <Page className={classNames(cls.AdminPanelPage, {}, [className])}>
         ADMIN
      </Page>
   );
})

export default AdminPanelPage