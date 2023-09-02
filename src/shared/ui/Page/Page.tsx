import { FC, MutableRefObject, ReactNode, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { useInfliniteScroll } from 'shared/lib/hooks/useInfliniteScroll/useInfliniteScroll';

interface PageProps {
   onScrollEnd?: () => void;
   className?: string;
   children: ReactNode;
}

export const Page: FC<PageProps> = (props) => {
   const { className, children, onScrollEnd } = props;
   const { t } = useTranslation()

   const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
   const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

   useInfliniteScroll({
      triggerRef,
      wrapperRef,
      callback: onScrollEnd,
   })

   return (

      <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
         {children}
         <div className={cls.DIv} ref={triggerRef} />
      </section>
   );
}