import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Dropdown.module.scss';
import { Menu } from '@headlessui/react'
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from '../AppLink/AppLink';

export interface DropdownItems {
   disabled?: boolean;
   content?: ReactNode;
   href?: string,
   onClick?: () => void;
}

interface DropdownProps {
   className?: string;
   items: DropdownItems[];
   trigger: ReactNode;
   direction: DropdownDirection;
}

const menuMap: Record<DropdownDirection, string> = {
   'bottom left': cls.DropDownLeft,
   'bottom right': cls.DropDownRight,
   'top left': cls.DropUpLeft,
   'top right': cls.DropUpRight
}


export function Dropdown(props: DropdownProps) {

   const { className, items, trigger, direction = 'bottom right' } = props

   const menuClasses = [menuMap[direction]]

   return (
      <Menu as='div' className={classNames(cls.DropDown, {}, [className])}>
         <Menu.Button className={cls.Btn}>{trigger}</Menu.Button>
         <Menu.Items className={classNames(cls.Items, {}, menuClasses)}>
            {items.map(item => {
               const content = ({active}: {active: boolean}) => (
                  <button
                     onClick={item.onClick}
                     disabled={item.disabled}
                     className={classNames(cls.Item, { [cls.Active]: active, [cls.Disabled]: item.disabled }, [])}>
                     {item.content}
                  </button>
               )
               if(item.href){
                  return (
                     <Menu.Item as = {AppLink} to = {item.href}>
                        {content}
                     </Menu.Item>
                  )
               }
               return (
                  <Menu.Item as={Fragment}>
                     {content}
                  </Menu.Item>
               )
            })}
         </Menu.Items>
      </Menu>
   )
}
