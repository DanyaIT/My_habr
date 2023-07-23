import { FC, useEffect } from 'react'
import {useStore } from 'react-redux'
import { ReduxStoreWithManager, useAppDispatch } from 'app/providers/StoreProvider'
import { Reducer } from '@reduxjs/toolkit'
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'


export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducersList,
    children: React.ReactNode,
    removeAfterUnmount?: boolean,
}

export const DynamicModuleLoader:FC<DynamicModuleLoaderProps> = (props) => {

    const {
        reducers,
        children,
        removeAfterUnmount = true,
    } = props
    const dispatch = useAppDispatch()
    const store = useStore() as ReduxStoreWithManager

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]:ReducerListEntry) => {
            store.reducerManager.add(name, reducer)
            dispatch({ type: `@INIT ${name} reducer` })
        })

        return () => {
            if(removeAfterUnmount){
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.remove('LoginForm')
                    dispatch({ type: `@DESTROY ${name} reducer`})
                })
            }
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}