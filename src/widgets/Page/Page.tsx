import { FC, MutableRefObject, ReactNode, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { useInfliniteScroll } from 'shared/lib/hooks/useInfliniteScroll/useInfliniteScroll';
import { StateSchema, useAppDispatch } from 'app/providers/StoreProvider';
import { useLocation } from 'react-router-dom';
import { getScrollByPath, scrollAction } from 'features/ScrollSave';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';

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
   const dispatch = useAppDispatch();
   const {pathname} = useLocation()
   const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname))

   useInfliniteScroll({
      triggerRef,
      wrapperRef,
      callback: onScrollEnd,
   })

   const onScroll = useThrottle((e:React.UIEvent<HTMLDivElement>) => {
     dispatch(scrollAction.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: pathname
     }))
   }, 2000)

   useInitialEffect(() => {
      wrapperRef.current.scrollTop = scrollPosition
   })

   return (

      <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}
      onScroll={onScroll}
      >
         {children}
         <div className={cls.DIv} ref={triggerRef} />
      </section>
   );
}