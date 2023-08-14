import { CSSProperties, FC, memo, useMemo } from 'react'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './Avatar.module.scss'
import { Profile } from 'Page/ProfilePage';

interface AvatarProps {
    className?: string;
    alt?: string,
    size?: number,
    src?: string,
    circle?: boolean,
}


export const Avatar: FC<AvatarProps> = memo(({ className, alt, src, size, circle }) => {


    const styles:CSSProperties = useMemo(() => ({
        width: size || 100,
        height : size || 100,
    }), [size])

    const mods:Mods = {
        [cls.Circle] : circle
    }

    return (
        <div className={classNames(cls.Avatar, mods, [className])}>
            <img
                style={styles}
                src={src}
                alt={alt}
            />
        </div>
    )
})