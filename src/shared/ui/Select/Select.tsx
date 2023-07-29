import { ChangeEvent, FC, memo, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './Select.module.scss'

interface SelectOptions{
    value?: string,
    content?:string,
}

export interface SelectProps {
    className?: string,
    label?: string,
    options?: SelectOptions[],
    value?: string,
    onChange?: (value: string) => void,
    readonly?: boolean,

}

export const Select: FC<SelectProps> = memo((props) => {

const {t} = useTranslation()

const {
    className, 
    value, 
    onChange, 
    options,
    label, 
    readonly 
} = props
    
const optionList = useMemo(() => 
        options?.map((opt) => (
            <option 
            className={cls.Option}
            value={opt.value}
            key = {opt.value}
            >
            {opt.content}
            </option>
        )),[options])

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && <span className={cls.Label}>{`${label}>`}</span>}
            <select 
            disabled = {readonly}
            className={cls.Select}
            value={value}
            onChange={onChangeHandler}
            >
            {optionList}
            </select>
        </div>
    )
})