import { FC, Fragment, ReactNode, useState } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import cls from './ListBox.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from '../Button/Button'
import { HStack } from '../Stack'
import { DropdownDirection } from 'shared/types/ui'

type ListBoxItem = {
  value: string,
  content: ReactNode,
  disabled?: boolean,
}


export interface ListBoxProps {
  className?: string,
  items?: ListBoxItem[],
  value?: string,
  defaultValue: string,
  onChange: <T extends string>(value: T) => void,
  readonly?: boolean,
  direction?: DropdownDirection,
  label: string,
}

export const ListBox = (props: ListBoxProps) => {

  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom left',
    label
  } = props;

  const optionsMap: Record<DropdownDirection, string> = {
    'bottom left': cls.DropDownLeft,
    'bottom right': cls.DropDownRight,
    'top left': cls.DropUpLeft,
    'top right': cls.DropUpRight
  }

  const optionsClasses = optionsMap[direction]

  return (
    <HStack gap='4'>
      <span>{label && label + '>'}</span>
      <HListBox
        disabled={readonly}
        className={classNames(cls.ListBox, {}, [className])}
        as="div"
        value={value}
        onChange={onChange}>
        <HListBox.Button>
          <Button
            className={cls.Btn}
            disabled={readonly}
            theme={ThemeButton.OUTLINE}
          >
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.Options, {}, [optionsClasses])}
        >
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li className =
                  {classNames(cls.Items, { [cls.Active]: active, [cls.Disabled]: item.disabled }, [])}>
                  {selected && '!!!'}
                  {item.content}
                </li>
              )}

            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  )

}
