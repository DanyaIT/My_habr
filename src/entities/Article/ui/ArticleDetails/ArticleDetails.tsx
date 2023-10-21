import { FC, memo, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';

import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/ArticleDetailsSlice';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { getArticleDetailsError, getArticleDetailsLoading, getArticleDetailsData, ArticleCodeBlockComponent, ArticleTextBlockComponent, ArticleImageBlockComponent } from 'entities/Article';
import { useSelector } from 'react-redux';

import { AlignText, Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';

import EyeImage from '../../../../shared/assets/icons/EyeImage.svg'
import CalendarImage from '../../../../shared/assets/icons/CalendarImage.svg'
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article';

interface ArticleDetailsProps {
   className?: string;
   id?: string,
}

const redusers: ReducersList = {
   articleDetails: articleDetailsReducer,
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
   const { className, id } = props;
   const { t } = useTranslation('articles-details')
   const dispatch = useAppDispatch()
   const data = useSelector(getArticleDetailsData)
   const error = useSelector(getArticleDetailsError)
   const isLoading = useSelector(getArticleDetailsLoading)
   
   useEffect(() => {
      if(__PROJECT__ !=='storybook'){
         dispatch(fetchArticleById(id))
      }
   }, [dispatch, id])


   const renderBlocks = useCallback((block: ArticleBlock) => {
      switch (block.type) {
         case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent 
            className={cls.Block} 
             //@ts-ignore
            block = {block}
            key={block.id}
            />
         case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent 
            className={cls.Block} 
            //@ts-ignore
            block = {block}
            key={block.id}
            />
         case ArticleBlockType.IMAGE:
              //@ts-ignore
            return <ArticleImageBlockComponent 
            className={cls.Block} 
            //@ts-ignore
            block = {block}
            key={block.id}
            />
         default:
            return null
      }
   }, [])

   let content;
   if (isLoading) {
      content = (
         <>
            <Skeleton className={cls.Avatar} width={200} height={200} border={'50%'} />
            <Skeleton className={cls.Title} width={400} height={31} />
            <Skeleton className={cls.Title} width={'100%'} height={231} />
            <Skeleton className={cls.Title} width={'100%'} height={231} />
         </>
      )
   } else if (error) {
      content = (
         <Text
            align={AlignText.CENTER}
            theme={TextTheme.ERROR}
            title={t('Произошла ошибка при загрузке статьи') || ''}
         />
      )
   } else {
      content = (
         <>
            <div className={cls.AvatarWrapper}>
               <Avatar
                  src={data?.img}
                  size={300}
               />
            </div>
            <Text
               size={TextSize.L}
               title={data?.title}
               text={data?.subtitle}
            />
            <div className={cls.ArticleInfo}>
               <Icon className={cls.Icon}
                  Svg={EyeImage} />
               <Text
                  text={String(data?.view)}
               />
            </div>
            <div className={cls.ArticleInfo}>
               <Icon className={cls.Icon}
                  Svg={CalendarImage} />
               <Text
                  text={data?.createdAt}
               />
            </div>
            {data?.blocks?.map(renderBlocks)}
         </>
      )
   }

   return (
      <DynamicModuleLoader reducers={redusers} removeAfterUnmount = {false}>
         <div className={classNames(cls.ArticleDetails, {}, [className])}>
            {content}
         </div>
      </DynamicModuleLoader>
   );
})