import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { Comment } from 'entities/Comment/model/types/comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';


interface CommentCardProps {
   className?: string;
   comment?: Comment,
   isLoading?: boolean,
}

export const CommentCard: FC<CommentCardProps> = memo((props) => {
   const { className, isLoading, comment } = props;
   const { t } = useTranslation()

   if (isLoading) {
      return (
         <div className={classNames(cls.CommentCard, {}, [className, cls.Loading])}>
            <div className={cls.CommentUser}>
               <Skeleton className={cls.Avatar} width={45} height={45} border='50%' />
               <Skeleton className={cls.Username} width={150} height={35} />
            </div>
            <Skeleton className={cls.Text} width={1900} height={150} />
         </div>
      )
   }


   return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
         <AppLink to = {`${RoutePath.profile}${comment?.user.id}`} className={cls.CommentUser}>
            {comment?.user.avatar ? <Avatar className={cls.Avatar} size={45} src={comment?.user.avatar} circle /> : null}
            <Text className={cls.Username} title={comment?.user.username} />
         </AppLink>
         <Text className={cls.Text} text={comment?.text} />
      </div>
   );
})