import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormAction, addCommentFormReducer } from '../../model/slice/addCommentSlice';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/getAddCommentFromState/getAddCommentFromState';
import { useAppDispatch } from 'app/providers/StoreProvider';


interface AddCommentFormProps {
   className?: string;
   onSendTextValue: (text:string) => void;
}

const AddCommentForm: FC<AddCommentFormProps> = memo((props) => {
   const { className, onSendTextValue } = props;
   const { t } = useTranslation()
   const dispatch = useAppDispatch()
   const text = useSelector(getAddCommentFormText)
   const error = useSelector(getAddCommentFormError)

   const initialReducer:ReducersList = {
      addCommentForm: addCommentFormReducer
   }  

   const onChangeTextValue = useCallback((value:string) => {
      dispatch(addCommentFormAction.setText(value))
   },[dispatch])

   const onSendHandler = useCallback(() => {
      onSendTextValue(text || '')
      onChangeTextValue('')
   }, [dispatch,onSendTextValue, onChangeTextValue, text ]) 

   return (
      <DynamicModuleLoader reducers={initialReducer} >
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
         <Input 
         placeholder = {t("Напишите комментарий") as string}
         type='text'
         value={text}
         onChange = {onChangeTextValue}
         />
         <Button
         onClick={onSendHandler}
         >
         {t('Добавить комментарий')}</Button>
      </div>
      </DynamicModuleLoader>
   );
})
export default AddCommentForm