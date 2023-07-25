import { ButtonHTMLAttributes, FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "background_inverted",
}

export enum SizeButton {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  disabled?: boolean;
  size?: SizeButton;
  children: React.ReactNode
}


export const Button: FC<ButtonProps> = memo((props) => {
  const { 
    className, 
    children, 
    theme, 
    square, 
    disabled,
    size = SizeButton.M, 
    ...otherProps 
  } = props;

  const mods: Record<string, boolean | undefined> = {
    [cls.square] : square,
    [cls[size]] : true,
    [cls.disabled] : disabled,
  };

  return (
    <button
      className={classNames(cls.Button, mods, [className || "", cls[theme || ""]])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
