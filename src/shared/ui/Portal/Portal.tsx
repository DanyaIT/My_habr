import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Portal.module.scss'
import { createPortal } from 'react-dom';

interface PortalProps {
    children: React.ReactNode;
    element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {

    const { children, element = document.body } = props

    return createPortal(children, element)
}