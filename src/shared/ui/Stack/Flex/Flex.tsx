import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Flex.module.scss';


export type AlignFlex = 'start'|'center'|'end';
export type JustifyFlex = 'start'|'center'| 'end'|'between'|'around'
export type DirectionFlex = 'column'|'row'
export type GapFlex = '4'|'8'|'16'|'32'
type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
   className?: string;
   children?: ReactNode;
   align?: AlignFlex,
   justify?:JustifyFlex,
   direction:DirectionFlex,
   gap?: GapFlex;
   max?: boolean;
}

const alignClasses: Record<AlignFlex, string> = {
   start: cls.alignStart,
   center: cls.alignCenter,
   end: cls.alignEnd,
}

const justifyClasses:Record<JustifyFlex, string> = {
   start: cls.justifyStart,
   center: cls.justifyCenter,
   end: cls.justifyEnd,
   between: cls.justifyBetween,
   around: cls.justifyAround,
}

const directionClasses: Record<DirectionFlex, string> = {
   column: cls.directionColumn,
   row: cls.directionRow
}

const gapClasses: Record<GapFlex, string> = {
   4: cls.gap4,
   8: cls.gap8,
   16: cls.gap16,
   32: cls.gap32,
}
  

export const Flex: FC<FlexProps> = memo((props) => {
   const { 
      children,
      className,
      align = 'center',
      justify = 'start',
      direction = 'row',
      gap,
      max,
   } = props;
   const { t } = useTranslation()

   const classes = [
      className,
      alignClasses[align],
      justifyClasses[justify],
      directionClasses[direction],
      gap && gapClasses[gap],
   ]

   const mods: Mods = {
      [cls.max]: max,
   }

   return (
      <div className={classNames(cls.Flex, mods, classes)}>
         {children}
      </div>
   );
})