import { AnchorHTMLAttributes, FC, HTMLAttributeAnchorTarget, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { Text } from 'shared/ui/Text/Text';
import EyeImage from 'shared/assets/icons/EyeImage.svg'
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Article, ArticleBlockType, ArticlesView } from 'entities/Article';
import { ArticleTextBlock } from 'entities/Article/model/types/article';


interface ArticleListItemProps {
   className?: string,
   view: ArticlesView,
   article: Article,
   target?: HTMLAttributeAnchorTarget,
}

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
   const { className, article, view, target } = props;
   const { t } = useTranslation()
   
   const types = <Text className={cls.Type} text={article.type.join(', ')} />
   const views = (
      <>
         <Text className={cls.Views} text={String(article.view)} />
         <Icon className={cls.Icon} Svg={EyeImage} />
      </>
   )

   if (view === ArticlesView.LIST) {
      let articleTextBlocks = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
      return (
         <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.Card}>
               <div className={cls.Header}>
                  <Avatar className={cls.Avatar} src={article.user?.avatar} circle />
                  <Text className={cls.UserName} text={article.user?.username} />
                  <Text className={cls.Data} text={article.createdAt} />
               </div>
               <Text className={cls.Title} title={article.title} />
               {types}
               <img className={cls.Image} src={article.img} />
               {<ArticleTextBlockComponent className = {cls.ArticleTextBlock} block={articleTextBlocks}/>}
               <div className={cls.Footer}>
                  <AppLink to = {RoutePath.articles_details+article.id} target={target}>
                  <Button>
                     {t('Читать далее...')}
                  </Button>
                  </AppLink>
                  {views}
               </div>
            </Card>
         </div>
      )
   }


   return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
         <AppLink to = {RoutePath.articles_details+article.id} target = {target}>
         <Card className={cls.Card}>
            <div className={cls.ImageWrapper}>
               <img className={cls.Img} src={article.img} alt={article.title} />
               <Text className={cls.Data} text={article.createdAt} />
            </div>
            <div className={cls.InfoWrapper}>
               {types}
               {views}
            </div>
            <Text className={cls.Title} text={article.title} />
         </Card>
         </AppLink>
      </div>
   );
}