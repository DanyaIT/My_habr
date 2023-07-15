import { FC, useRef, useState, useEffect, useCallback, lazy } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { Portal } from '../Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
    className?: string;
    children?: React.ReactNode,
    isOpen: boolean,
    onClose?: () => void,
    lazy?: boolean,
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = ({ className, children, isOpen, onClose, lazy }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false)
    const {theme} = useTheme();

    const timeRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const onCloseHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timeRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)

        }
    }, [onClose])

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onCloseHandler()
        }
    }, [onCloseHandler])


    useEffect(() => {
        if(isOpen){
            setIsMounted(true)
        }
    }, [isOpen])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown)
            if (timeRef.current !== null) {
                clearTimeout(timeRef.current);

            }

        }
    }, [isOpen, onKeyDown])

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    }

    if(lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className || '', theme])}>
                <div className={cls.overlay} onClick={onCloseHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    )
}


