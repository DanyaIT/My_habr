import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesEditPage.module.scss';
import { useParams } from 'react-router-dom';

interface ArticlesEditPageProps {
   className?: string;
}

const ArticlesEditPage: FC<ArticlesEditPageProps> = memo((props) => {
   const { className } = props;
   const { t } = useTranslation()
   const {id} = useParams<{id: string}>();
   const isEdit = Boolean(id)
   
   return (
      <div className={classNames(cls.ArticlesEditPage, {}, [className])}>
         {isEdit? 
         t('Редактирование статьи с id = ') + id
         :
         t('Создание новой статьи')
         }
      </div>
   );
})


export default ArticlesEditPage