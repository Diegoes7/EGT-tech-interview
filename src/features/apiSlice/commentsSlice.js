import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/comments?" }),
	// tagTypes: ["Todos"],
	endpoints: (builder) => ({
		getComments: builder.query({
			query: () => "postId=1",
			transformResponse: (res) => res.sort((a, b) => a.id - b.id),
			// providesTags: ["Comments"],
		}),
	}),
});

export const { useGetCommentsQuery } = apiSlice;
