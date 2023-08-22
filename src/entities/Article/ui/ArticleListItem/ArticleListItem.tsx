import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleBlockBlockType, ArticleTextBlock, ArticlesView } from '../../model/types/article';
import { Text } from 'shared/ui/Text/Text';
import EyeImage from 'shared/assets/icons/EyeImage.svg'
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';


interface ArticleListItemProps {
   className?: string,
   view: ArticlesView,
   article: Article,
}

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
   const { className, article, view } = props;
   const { t } = useTranslation()
   const navigate = useNavigate()
   
   const types = <Text className={cls.Type} text={article.type.join(', ')} />
   const views = (
      <>
         <Text className={cls.Views} text={String(article.views)} />
         <Icon className={cls.Icon} Svg={EyeImage} />
      </>
   )

   const onOpenArticle = useCallback(() => {
      navigate(RoutePath.articles_details + article.id)
   }, [article.id, navigate])

   if (view === ArticlesView.LIST) {
      let articleTextBlocks = article.blocks.find((block) => block.type === ArticleBlockBlockType.TEXT) as ArticleTextBlock;
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
                  <Button onClick={onOpenArticle}>
                     {t('Читать далее...')}
                  </Button>
                  {views}
               </div>
            </Card>
         </div>
      )
   }


   return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
         <Card className={cls.Card} onClick={onOpenArticle}>
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
      </div>
   );
}