import { FC, memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from './Text.module.scss'

export enum TextTheme{
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum AlignText {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
}

export enum TextSize {
    M = "size_m",
    L = "size_l",
}

interface TextProps {
    className?: string,
    text?: string,
    title?: string,
    theme?: TextTheme,
    align?: AlignText,
    size?: TextSize,
}


export const Text = memo((props:TextProps) => {
    const {
        className,
        text,
        theme = TextTheme.PRIMARY,
        title = '',
        align = AlignText.LEFT,
        size = TextSize.L,
    } = props

    return (
        <div className = {classNames(cls.Text, {}, [className, cls[align], cls[theme],cls[size] ])}>
            {title  && <p className= {cls.title}>{title}</p>}
            {text && <p className= {cls.text}>{text}</p>}
        </div>
    )
});

