import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const calculatorApi = createApi({
    reducerPath: 'calculatorApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:1013/' }),
    endpoints: (builder) => ({
        getPing: builder.query({
            query: () => ({
                url: 'ping',
                method: 'GET',
                responseHandler: (rsp) => rsp.text(),
            }),
        }),
        postToIncrement: builder.query({
            query: (value: number) => ({
                url: 'counter/increment',
                method: 'POST',
                body: { 'payload': { 'value': value } },
            }),
        }),
    }),
})

export const { 
    useGetPingQuery,
    usePostToIncrementQuery
 } = calculatorApi;