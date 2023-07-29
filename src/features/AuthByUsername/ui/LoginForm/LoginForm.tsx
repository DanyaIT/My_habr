import { FC, memo, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { LoginActions, LoginReducer } from '../../model/slice/LoginSlice';

import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'app/providers/StoreProvider';


export interface LoginFormProps {
    className?: string;
    onSuccess: () => void
}

const LoginForm: FC<LoginFormProps> = (({ className, onSuccess }) => {

    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginLoading)
    const error = useSelector(getLoginError)

    const initialReducers:ReducersList = {
        LoginForm: LoginReducer,
    }

    const onChangeUsername = useCallback((value) => {
        dispatch(LoginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value) => {
        dispatch(LoginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }))
        if(result.meta.requestStatus === 'fulfilled'){
            onSuccess();
        }
    }, [dispatch, username, password])

    return (
        <DynamicModuleLoader  reducers = {initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className || ''])}>
                <Text title={t("Форма авторизации") as string} />
                {error && <Text text={t('Указано неверное имя пользователя или пароль') as string} theme={TextTheme.ERROR} />}
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
                    disabled={isLoading}
                    theme={ThemeButton.OUTLINE}
                    onClick={onLoginClick}
                    className={cls.LoginBtn}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
})



export default LoginForm


