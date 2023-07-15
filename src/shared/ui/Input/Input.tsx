import { FC, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Input.module.scss'

type HTMLIputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLIputProps {
    className?: string;
    value?: string,
    onChange?: (value: string) => void,
    autofocus?: boolean,
}

export const Input: FC<InputProps> = memo((props) => {

    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        ...otherProps
    } = props

    const [isFocused, setIsFocus] = useState(false)
    const [caretPosition, setCaretPosition] = useState(0)
    const ref = useRef<HTMLInputElement>(null);
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
        setCaretPosition(e.target.value.length)
    }

    const onFocus = () => {
        setIsFocus(true)
    }

    const onBlur = () => {
        setIsFocus(false)
    }

    const onSelect = (e:any) => {
        setCaretPosition(e?.target?.selectionStart || 0)
    }


    useEffect(()=> {
        if(autofocus){
            setIsFocus(true)
            ref.current?.focus()
        }
    }, [autofocus])


    
    return (
        <div className={classNames(cls.InputWrapper, {}, [className || ''])}>
            {placeholder && (
                <div className={cls.Placeholder}>{`${placeholder}>`}</div>
            )}
            <div className={cls.CaretWrapper}>
                <input
                    ref = {ref}
                    className={cls.Input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused &&
                    <span className={cls.Caret}
                    style={{left:`${caretPosition * 8.8}px`}}
                    />
                }
            </div>
        </div>
    )
})