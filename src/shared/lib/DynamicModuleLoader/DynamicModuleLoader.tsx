import { FC, useEffect } from 'react'
import {useStore } from 'react-redux'
import { ReduxStoreWithManager, useAppDispatch } from 'app/providers/StoreProvider'
import { Reducer } from '@reduxjs/toolkit'
import { StateSchema, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'


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
        const mountedReducer = store.reducerManager.getReducerMap();
        
        Object.entries(reducers).forEach(([name, reducer]) => {
            let mounted = mountedReducer[name as StateSchemaKey];
            if(mounted !== reducer){
                store.reducerManager.add(name as StateSchemaKey, reducer)
                dispatch({ type: `@INIT ${name} reducer` })
            }
        })

        return () => {
            if(removeAfterUnmount){
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey)
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