import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from 'entities/Comment/model/types/comment';



interface CommentListProps {
   className?: string;
   comments?: Comment[],
   isLoading?: boolean,
}

export const CommentList: FC<CommentListProps> = memo((props) => {
   const { className, comments, isLoading } = props;
   const { t } = useTranslation()


   if(isLoading){
      return (
         <div className={classNames(cls.CommentList, {}, [className])}>
            <CommentCard isLoading = {true}/>
            <CommentCard isLoading = {true}/>
            <CommentCard isLoading = {true}/>
         </div>
      )
   }


   return (
      <div className={classNames(cls.CommentList, {}, [className])}>
         {comments?.length ?
            comments.map(comment => (
               <CommentCard
                  isLoading = {isLoading}
                  comment={comment}
                  key={comment.id} />
            ))
            :
            <Text title={t('Комментарии отсутствуют') || ''} />
         }
      </div>
   );
})