import { FC, SVGProps, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
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

   interface toggleView {
      icon:FC<SVGProps<SVGSVGElement>>;
      view: ArticlesView;
   }

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

  const toggleView = (articleType:toggleView) => {
   const mods: Mods = {
      [cls.NotSelected]: articleType.view !== view,
      [cls.Selected]: articleType.view === view,
   }
   return mods
  }

   return (
      <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
         {viewArticleType.map((articleType) => (
            <Button key = {articleType.view} theme={ThemeButton.CLEAR} onClick={onClick(articleType.view)}>
               <Icon
               className={classNames(cls.Icon, toggleView(articleType), [className])} 
               Svg={articleType.icon}/>
            </Button>
         ))}
      </div>
   );
})