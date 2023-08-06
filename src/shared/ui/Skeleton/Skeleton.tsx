import { CSSProperties, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
   className?: string;
   height?: string | number,
   width?: string | number,
   border?: string,
}

export const Skeleton: FC<SkeletonProps> = (props) => {
   const { className, height, width, border } = props;

   const styles:CSSProperties = {
      width,
      height,  
      borderRadius: border,
   }

   return (
      <div style={styles} className={classNames(cls.Skeleton, {}, [className])}/>
   );
}