import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import { ArticlesView } from 'entities/Article';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import View from 'shared/assets/icons/View.svg'
import Burger from 'shared/assets/icons/Burger.svg'

interface ArticleViewSelectorProps {
   className?: string;
   view: ArticlesView;
   onViewClick?: (view:ArticlesView) => void;

}

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo((props) => {
   const { className, view, onViewClick } = props;
   const { t } = useTranslation()

   const viewArticleType = [
      {
         icon: View,
         view: ArticlesView.PLATE 
      },

      {
         icon: Burger,
         view: ArticlesView.LIST
      }
   ]

   const onClick = useCallback((newView:ArticlesView) => {
      return () => {
         onViewClick?.(newView)
      }
   },[])

   return (
      <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
         {viewArticleType.map(articleType => (
            <Button theme={ThemeButton.CLEAR} onClick={onClick(articleType.view)}>
               <Icon
               className={classNames('', {[cls.NotSelected]: articleType.view !== view}, [className])} 
               Svg={articleType.icon}/>
            </Button>
         ))}
      </div>
   );
})