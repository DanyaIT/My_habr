import { StateSchema } from 'app/providers/StoreProvider';
import { getScrollPosition } from './../getScrollPosition/getScrollPosition';
import { createSelector } from "@reduxjs/toolkit";


export const getScrollByPath = createSelector(
    getScrollPosition,
    (state:StateSchema, path:string) => path,
    (scroll, path) => scroll[path] || 0,
)