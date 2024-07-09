import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface Paper {
    paperId: string
    title: string
    url: string,
}

interface PapersApiResponse {
    data: Paper[]
    total: number
    offset?: number
    next?: number
}

const BASE_URL = import.meta.env.VITE_SEMANTIC_SCHOLAR_API;

export const papersApiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/paper/search`,
        prepareHeaders: (headers) => {
            headers.set('x-api-key', import.meta.env.VITE_S2_API_KEY);
            return headers
        },
    }),
    reducerPath: "papersAPI",
    tagTypes: ["Papers"],
    endpoints: build => ({
        getPapers: build.query<PapersApiResponse, { query?: string; limit?: number}>({
            // query passed down as object so have to destruct 
            query: ({query, limit = 5}) => {
                return`?query=${query}&limit=${limit}&fields=url,title`
            }
            
            /**
             * else can use URLSearchParams like this: 
             *     query: ({ query, limit = 5 }) => {
             *      const params = new URLSearchParams({
             *         query,
             *         limit: String(limit),
             *       });
             * 
             *      return `?${params.toString()}`;
             *     },
            */ 
        })

    })
})
export const { useGetPapersQuery } = papersApiSlice