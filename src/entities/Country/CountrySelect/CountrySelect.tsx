import { FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../model/types/countrySelect';
import { ListBox } from 'shared/ui/ListBox/ListBox';

interface CountrySelectorProps {
    className?: string,
    readonly?: boolean,
    value?: Country,
    onChange?: (value: Country) => void,
}

const options = [
    {value: Country.Armenia, content: Country.Armenia},
    {value: Country.Belarus, content: Country.Belarus},
    {value: Country.Kazakhstan, content: Country.Kazakhstan},
    {value: Country.Russia, content: Country.Russia},
    {value: Country.Ukraine, content: Country.Ukraine},
]

export const CountrySelect: FC<CountrySelectorProps> = memo((props) => {

    const { t } = useTranslation('profile')
    const {
        className,
        value,
        onChange,
        readonly,
    } = props

    const onChangeHendler = (value:string) => {
        onChange?.(value as Country)
    }

    return (
        <div className={classNames('', {}, [className])}>
                <ListBox
                label={t('Выберите страну')}
                defaultValue={t('Выберите страну')}
                onChange={onChangeHendler}
                items={options}
                readonly = {readonly}
                value = {value}
                direction='top'
            />
            {/* <Select
                label={t('Выберите страну') || ''}
                onChange={onChangeHendler}
                options={options}
                readonly = {readonly}
                value = {value}
            /> */}
        </div>
    )
})