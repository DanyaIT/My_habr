import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsRecomendationsList.module.scss';
import { ArticleList } from 'entities/Article';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { useArticleRecommendationsList} from '../api/ArticleDetailsRecommendationsApi';

interface ArticleDetailsRecomendationsListProps {
   className?: string;
}

export const ArticleDetailsRecomendationsList: FC<ArticleDetailsRecomendationsListProps> = memo((props) => {
   const { className } = props;
   const { t } = useTranslation()

   const {isLoading, error, data:articles} = useArticleRecommendationsList(10);

   if(isLoading || error){
      return null
   }
   
   return (
      <VStack 
      gap='16'
      className={classNames(cls.ArticleDetailsRecomendationsList, {}, [className])}>
            <Text
            size={TextSize.L}
            title = {t('Рекомендуем') || ''}
            />
            <ArticleList
            articles={articles}
            target='_blank'
            />
      </VStack>
   );
})