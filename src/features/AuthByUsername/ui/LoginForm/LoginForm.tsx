import { FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { LoginActions } from 'features/AuthByUsername/model/slice/LoginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { Text, TextTheme } from 'shared/ui/Text/Text';



interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }) => {

    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const { username, password, error, isLoading } = useSelector(getLoginState)
    const onChangeUsername = useCallback((value) => {
        dispatch(LoginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value) => {
        dispatch(LoginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({username, password}))
    }, [dispatch, username, password])

    return (
        <div className={classNames(cls.LoginForm, {}, [className || ''])}>
            <Text title = {t("Форма авторизации") as string}/>
            {error && <Text text = {t('Указано неверное имя пользователя или пароль') as string} theme = {TextTheme.ERROR}/>}
            <Input
                autofocus
                type='text'
                placeholder={t("Введите имя пользователя") as string}
                className={cls.input}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type='text'
                placeholder={t("Введите пароль") as string}
                className={cls.input}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                disabled = {isLoading}
                theme= {ThemeButton.OUTLINE}
                onClick={onLoginClick}
                className={cls.LoginBtn}
            >
                {t('Войти')}
            </Button>
        </div>
    )
})



