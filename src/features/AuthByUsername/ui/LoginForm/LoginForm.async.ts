
import { lazy } from "react";import { LoginFormProps } from "./LoginForm";



export const LoginFormAcync = lazy<React.FC<LoginFormProps>>(() => import('./LoginForm'))