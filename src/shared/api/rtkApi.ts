import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/const'


export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery(
    { 
        baseUrl: __API__, 
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(LOCAL_STORAGE_USER_KEY || '')
            if(token){
                return headers.set('Authorization', token)
            }
            return headers
        }  
    }),
  endpoints: (builder) => ({
 
  }),
})
