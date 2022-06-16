import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com/comments?",
	}),
	tagTypes: ["Comments"],
	endpoints: (builder) => ({
		getComments: builder.query({
			query: () => "postId=1",
			transformResponse: (res) =>
				res.filter((el) => el.id <= 10).sort((a, b) => b.id - a.id),
			providesTags: ["Comments"],
		}),
		markedComment: builder.mutation({
			query: (comment) => ({
				url: `/comments/${comment.id}`,
				method: "PUT",
				body: comment,
			}),
			invalidatesTags: ["Comments"],
		}),
	}),
});

export const { useGetCommentsQuery, useMarkedCommentMutation } = apiSlice;
