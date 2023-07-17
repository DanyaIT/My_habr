import { classNames } from "shared/lib/classNames/classNames"
import cls from './LoginModal.module.scss'
import { FC } from "react"
import { LoginForm } from "../LoginForm/LoginForm"
import { Modal } from "shared/ui/Modal/Modal"

export interface LoginModalProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void,

}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => {
    return (
        <Modal
            lazy
            className={classNames(cls.LoginModal, {}, [className || ''])}
            isOpen={isOpen}
            onClose={onClose}
        >
            <LoginForm />
        </Modal>
    )
}

