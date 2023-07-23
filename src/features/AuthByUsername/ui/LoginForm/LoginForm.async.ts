import { resolve } from "path";
import { lazy } from "react";
import { LoginFormProps } from "./LoginForm";



export const LoginFormAcync = lazy<React.FC<LoginFormProps>>(async () => await new Promise(resolve => {
    setTimeout(() => {
        resolve(import('./LoginForm'))
    },0)
}) )