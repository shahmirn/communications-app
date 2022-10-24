// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Conversation } from '../types/Conversation';

// Define a service using a base URL and expected endpoints
export const conversationApi = createApi({
  reducerPath: 'conversationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://communications-api.onrender.com' }),
  endpoints: (builder) => ({
    getConversationsFromAndByType: builder.query<Conversation[], { from?: Conversation['from']; type?: Conversation['type'] }>({
      query: ({ from, type }) => `?${new URLSearchParams({ from: from ?? '', type: type ?? '' }).toString()}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetConversationsFromAndByTypeQuery } = conversationApi;
