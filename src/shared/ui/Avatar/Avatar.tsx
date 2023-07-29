import { CSSProperties, FC, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './Avatar.module.scss'
import { Profile } from 'Page/ProfilePage';

interface AvatarProps {
    className?: string;
    alt?: string,
    size?: number,
    src?: string,
}


export const Avatar: FC<AvatarProps> = ({ className, alt, src, size }) => {


    const styles:CSSProperties = useMemo(() => ({
        width: size || 100,
        height : size || 100,
    }), [size])

    return (
        <div className={classNames(cls.Avatar, {}, [className])}>
            <img
                style={styles}
                src={src}
                alt={alt}
            />
        </div>
    )
}