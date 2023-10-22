import { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleLostItemSkeleton } from '../ArticleListItem/ArticleLostItemSkeleton';
import { ArticlesView } from 'entities/Article';

interface ArticleListProps {
   className?: string,
   isLoading?: boolean,
   articles: Article[],
   view?: ArticlesView,
   target?: HTMLAttributeAnchorTarget,
}



export const ArticleList: FC<ArticleListProps> = memo((props) => {
   const {
      className,
      isLoading,
      articles,
      view = ArticlesView.PLATE,
      target,
   } = props;

   const renderArticles = (article: Article) => {
      return (
         <ArticleListItem 
         className={cls.Card} 
         key={article.id} 
         article={article} 
         view={view} 
         target = {target} />
      )
   }

   const getSkeletons = (view: ArticlesView) => {
      return (
         <>
            {
               new Array(view === ArticlesView.PLATE ? 12 : 3)
                  .fill(0)
                  .map((_, index) => (
                     <ArticleLostItemSkeleton className={cls.Card} key={index} view={view} />
                  ))
            }
         </>
      )
   }




   return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
         {articles.length > 0
            ? articles.map(renderArticles)
            : null
         }
         {isLoading && getSkeletons(view)}
      </div>
   );
})