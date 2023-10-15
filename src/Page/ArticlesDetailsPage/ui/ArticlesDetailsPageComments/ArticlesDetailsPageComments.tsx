import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AddCommentForm } from 'features/AddCommentForm';
import { CommentList } from 'entities/Comment';
import {Text, TextSize} from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { addCommentForArticle, fetchCommentsByArticleId, getArticleComments, getArticleDetailsCommentIsloading } from 'Page/ArticlesDetailsPage';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';

interface ArticlesDetailsPageCommentsProps {
   className?: string;
   id: string;
}

export const ArticlesDetailsPageComments: FC<ArticlesDetailsPageCommentsProps> = memo((props) => {
   const { className, id } = props;
   const { t } = useTranslation()

   const dispatch = useAppDispatch()
   const comments = useSelector(getArticleComments.selectAll)
   const commentsIsLoading = useSelector(getArticleDetailsCommentIsloading)


   const onSendTextValue = useCallback((text: string) => {
      dispatch(addCommentForArticle(text))
   }, [dispatch])

   useInitialEffect(() => {
      dispatch(fetchCommentsByArticleId(id))
   })

   return (
      <div className={classNames('', {}, [className])}>
             <Text 
            size={TextSize.L}
            title={t('Комментарии') || ''}
             />
           <AddCommentForm onSendTextValue={onSendTextValue} />
            <CommentList
               isLoading={commentsIsLoading}
               comments={comments}
            />
      </div>
   );
})