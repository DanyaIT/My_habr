import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextComponent.module.scss';
import { ArticleBlock, ArticleTextBlock } from 'entities/Article/model/types/article';
import { Text, TextSize } from 'shared/ui/Text/Text';

interface ArticleTextComponentProps {
   className?: string;
   block: ArticleTextBlock; 
}

export const ArticleTextBlockComponent: FC<ArticleTextComponentProps> = memo((props) => {
   const { className,  block} = props;
   
   return (
      <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
        {block.title && 
         <Text 
         title={block.title}
         />
        }   
        {block.paragraphs.map(text => (
         <Text 
         text={text}
         />
        ))}
      </div>
   );
})