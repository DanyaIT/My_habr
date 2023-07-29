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

interface TextProps {
    className?: string,
    text?: string,
    title?: string,
    theme?: TextTheme,
    align?: AlignText,
}


export const Text = memo((props:TextProps) => {
    const {
        className,
        text,
        theme = TextTheme.PRIMARY,
        title,
        align = AlignText.LEFT
    } = props

    return (
        <div className = {classNames(cls.Text, {}, [className, cls[align], cls[theme] ])}>
            {title  && <p className= {cls.title}>{title}</p>}
            {text && <p className= {cls.text}>{text}</p>}
        </div>
    )
});

