import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Label, Issue } from '../models/label.model';
import { IssueType, Timeline } from '../models/issue.model';

const headers = {
  'Content-type': 'application/vnd.github+json',
  Authorization: `Bearer ${process.env.REACT_APP_PERSONAL_TOKEN}`,
  'if-none-match': '',
};

// Define a service using a base URL and expected endpoints
export const labelsApi = createApi({
  reducerPath: 'labelsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/repos/chloe7303/github-issues-section',
  }),
  tagTypes: ['Label', 'Comment', 'Issue'],
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
    // Isssue List Page
    issueList: builder.query<[], string>({
      query: (filter) => ({
        url: `/issues${filter}`,
        headers,
      }),
      providesTags: ['Label'],
    }),
    assigneeList: builder.query<[], void>({
      query: () => ({
        url: '/assignees',
        headers,
      }),
    }),
    createIssue: builder.mutation<void, Issue>({
      query: (issue) => ({
        url: '/issues',
        method: 'POST',
        body: JSON.stringify(issue),
        headers,
      }),
    }),
    // Issue Page
    issue: builder.query<IssueType, string>({
      query: (issueNumber) => ({
        url: `/issues/${issueNumber}`,
        headers,
      }),
      providesTags: ['Issue'],
    }),
    updateIssue: builder.mutation<IssueType, any>({
      query: ({ number, body }) => ({
        url: `/issues/${number}`,
        method: 'PATCH',
        body: JSON.stringify(body),
        headers,
      }),
      invalidatesTags: ['Issue'],
    }),
    timeline: builder.query<Timeline[], string>({
      query: (issueNumber) => ({
        url: `/issues/${issueNumber}/timeline`,
        headers,
      }),
      providesTags: ['Comment'],
    }),
    updateComment: builder.mutation<void, any>({
      query: ({ commentId, body }) => ({
        url: `/issues/comments/${commentId}`,
        method: 'PATCH',
        body: JSON.stringify(body),
        headers,
      }),
    }),
    createComment: builder.mutation<void, any>({
      query: ({ issueNumber, body }) => ({
        url: `/issues/${issueNumber}/comments`,
        method: 'POST',
        body: JSON.stringify(body),
        headers,
      }),
      invalidatesTags: ['Comment'],
    }),
    deleteComment: builder.mutation<void, number>({
      query: (commentId) => ({
        url: `/issues/comments/${commentId}`,
        method: 'DELETE',
        headers,
      }),
      invalidatesTags: ['Comment'],
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
  // Isssue List Page
  useIssueListQuery,
  useAssigneeListQuery,
  useCreateIssueMutation,
  // Issue Page
  useIssueQuery,
  useUpdateIssueMutation,
  useTimelineQuery,
  useUpdateCommentMutation,
  useCreateCommentMutation,
  useDeleteCommentMutation,
} = labelsApi;
