import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Label } from '../models/label.model';

const headers = {
  'Content-type': 'application/vnd.github+json',
  Authorization: 'Bearer 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',
};

// Define a service using a base URL and expected endpoints
export const labelsApi = createApi({
  reducerPath: 'labelsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/repos/chloe7303/github-issues-section',
  }),
  tagTypes: ['Label'],
  endpoints: (builder) => ({
    labelList: builder.query<Label[], void>({
      query: () => ({
        url: '/labels',
        headers,
      }),
      providesTags: ['Label'],
    }),
    label: builder.query<Label, string>({
      query: (name) => `labels/${name}`,
      providesTags: ['Label'],
    }),
    addLabel: builder.mutation<void, Label>({
      query: (label) => ({
        url: '/labels',
        method: 'POST',
        body: JSON.stringify(label),
        headers,
      }),
      invalidatesTags: ['Label'],
    }),
    updateLabel: builder.mutation<void, any>({
      query: ({ name, body }) => ({
        url: `/labels/${name}`,
        method: 'PATCH',
        body: JSON.stringify(body),
        headers,
      }),
      invalidatesTags: ['Label'],
    }),
    deleteLabel: builder.mutation<void, string>({
      query: (name) => ({
        url: `/labels/${name}`,
        method: 'DELETE',
        headers,
      }),
      invalidatesTags: ['Label'],
    }),
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const {
  useLabelListQuery,
  useLabelQuery,
  useAddLabelMutation,
  useUpdateLabelMutation,
  useDeleteLabelMutation,
} = labelsApi;
