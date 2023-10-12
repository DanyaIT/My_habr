import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Currency } from 'entities/Currency/model/types/currency';
import { Select } from 'shared/ui/Select/Select';
import { ListBox } from 'shared/ui/ListBox/ListBox';

interface CurrencySelectProps {
    className?: string;
    value?: Currency,
    onChange?: (value:Currency) => void,
    readonly?: boolean,
}

const options = [
    {value: Currency.RUB, content: Currency.RUB},
    {value: Currency.USD, content: Currency.USD},
    {value: Currency.EUR, content: Currency.EUR},

    
]


export const CurrencySelect: FC<CurrencySelectProps> = memo(({ className, onChange,value, readonly }) => {

    const { t } = useTranslation('profile')
    const onChangeHandler = (value:string) => {
        onChange?.(value as Currency)
    }

    return (
        <div className={classNames('', {}, [className])}>
            <ListBox
                label={t("Выберите валюту")}
                defaultValue={t("Выберите валюту")}
                items={options}
                onChange={onChangeHandler}
                value={value}
                readonly = {readonly}
                direction='top right'
            />

                {/* <Select
                readonly = {readonly}
                label={t("Выберите валюту") || ''}
                options={options}
                onChange={onChangeHandler}
                value={value}
            /> */}
        </div>
    )
})