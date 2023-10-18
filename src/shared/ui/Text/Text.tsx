import { FC, memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from './Text.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum AlignText {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
}

export enum TextSize {
    S = 'size_s',
    M = "size_m",
    L = "size_l",
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

interface TextProps {
    className?: string,
    text?: string,
    title?: string,
    theme?: TextTheme,
    align?: AlignText,
    size?: TextSize,
    'data-testid'?: string;
}

const HeaderTagMap: Record<TextSize, HeaderTagType> = {
    [TextSize.L]: 'h1',
    [TextSize.M]: 'h2',
    [TextSize.S]: 'h3',
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        theme = TextTheme.PRIMARY,
        title,
        align = AlignText.LEFT,
        size = TextSize.L,
        'data-testid': dataTestId = 'Text'
    } = props

    const HeaderTag = HeaderTagMap[size]

    return (
        <div className={classNames(cls.Text, {}, [className, cls[align], cls[theme], cls[size]])}>
            {title &&
                <HeaderTag className={cls.title}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </HeaderTag>}
            {text &&
                <p 
                className={cls.text}
                data-testid = {`${dataTestId}.Paragraph`}
                >
                    {text}
                </p>
            }
        </div>
    )
});

