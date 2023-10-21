import { FC, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { Button, ThemeButton } from '../Button/Button';
import CopyPage from '../../assets/icons/CopyPage.svg'

interface CodeProps {
   className?: string;
   text: string,
   children?: string,
}

export const Code: FC<CodeProps> = (props) => {
   const { className, text } = props;

   const onCopy = useCallback(() => {
      navigator.clipboard.writeText(text)
   },[text])

   return (
      <pre className={classNames(cls.Code, {}, [className])}>
         <Button
         onClick={onCopy}
         className={cls.Btn} 
         theme={ThemeButton.CLEAR} >
         <CopyPage className={cls.CopyPage}/>
         </Button>
         <code >
            {text}
         </code>
      </pre>

   );
}

