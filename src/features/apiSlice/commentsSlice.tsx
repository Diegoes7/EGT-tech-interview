import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CommentProps } from './comment.component'

type CommentApiResponse = CommentProps[]

type MarkedCommentPayload = {
	comment: CommentProps
}

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com/comments?',
	}),
	tagTypes: ['Comments'],
	endpoints: (builder) => ({
		getComments: builder.query<CommentApiResponse, void>({
			query: () => 'postId=1',
			transformResponse: (res: CommentApiResponse) =>
				res
					.filter((comment) => Number(comment.id) <= 10)
					.sort((a, b) => Number(b.id) - Number(a.id)),
			providesTags: ['Comments'],
		}),
		markedComment: builder.mutation<
			void,
			MarkedCommentPayload & { id: string }
		>({
			query: (comment) => ({
				url: `/comments/${comment.id}`,
				method: 'PUT',
				body: comment,
			}),
			invalidatesTags: ['Comments'],
		}),
	}),
})

export const { useGetCommentsQuery, useMarkedCommentMutation } = apiSlice
