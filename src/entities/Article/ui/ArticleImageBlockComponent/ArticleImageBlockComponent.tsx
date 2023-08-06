import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { AlignText, Text, TextSize } from 'shared/ui/Text/Text';

interface ArticleBlockComponentProps {
   className?: string;
   block: ArticleImageBlock,
}

export const ArticleImageBlockComponent: FC<ArticleBlockComponentProps> = memo((props) => {
   const { className, block } = props;

   return (
      <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
         <img className={cls.Image}
         src={block.src} 
         alt = {block.title}/>
         {block.title && 
            <Text 
            align={AlignText.CENTER}
            title={block.title} 
            size={TextSize.M}/>
         }
      </div>
   );
})