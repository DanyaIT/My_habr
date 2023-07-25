import { classNames } from "shared/lib/classNames/classNames"
import cls from './LoginModal.module.scss'
import { FC, Suspense } from "react"
import { Modal } from "shared/ui/Modal/Modal"
import { LoginFormAcync } from "../LoginForm/LoginForm.async"
import { Loader } from "shared/ui/Loader/Loader"

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
            <Suspense fallback = {<Loader/>}>
                <LoginFormAcync onSuccess={onClose}/>
            </Suspense>
        </Modal>
    )
}

