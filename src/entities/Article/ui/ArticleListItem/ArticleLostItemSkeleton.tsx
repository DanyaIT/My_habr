import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleBlockType, ArticleTextBlock, ArticlesView } from '../../model/types/article';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';


interface ArticleLostItemSkeletonProps {
   className?: string,
   view: ArticlesView,
}

export const ArticleLostItemSkeleton: FC<ArticleLostItemSkeletonProps> = (props) => {
   const { className, view } = props;
 


   if (view === ArticlesView.LIST) {
        return (
         <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.Card}>
               <div className={cls.Header}>
                  <Skeleton className={cls.Avatar}  width={100} height={100} border='50%'/>
                  <Skeleton className={cls.UserName} width={130} height={25} />
                  <Skeleton className={cls.Data} width={130} height={25} />
               </div>
               <Skeleton className={cls.Title} width={200} height={30} />
               <Skeleton className={cls.Image} width={'100%'} height={300} />
               <Skeleton className = {cls.ArticleTextBlock} width={'100%'} height={200}/>
               <div className={cls.Footer}>
                  <Skeleton width={200} height={50}/>
                  <Skeleton className={cls.Views} width={50} height={16}/>
                  <Skeleton className={cls.Avatar}  width={25} height={25} border='50%'/>
               </div>
            </Card>
         </div>
      )
   }


   return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
         <Card className={cls.Card}>
            <div className={cls.ImageWrapper}>
               <Skeleton width={200} height={200}/>
            </div>
            <div className={cls.InfoWrapper}>
               <Skeleton width={130} height={16}/>
            </div>
            <Skeleton className = {cls.Title} width={170} height={15}/>
         </Card>
      </div>
   );
}