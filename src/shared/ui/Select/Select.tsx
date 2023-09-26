import { ChangeEvent, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Select.module.scss'

export interface SelectOptions<T extends string>{
    value: T,
    content:string,
}

export interface SelectProps<T extends string> {
    className?: string,
    label?: string,
    options?: SelectOptions<T>[],
    value?: T | '',
    onChange?: (value:T) => void,
    readonly?: boolean,

}

export const Select = <T extends string>(props:SelectProps<T>) => {


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
        onChange?.(e.target.value as T)
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
}