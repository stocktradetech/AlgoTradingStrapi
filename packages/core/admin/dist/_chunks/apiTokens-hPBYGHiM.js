"use strict";
const index = require("./index-1g9GBMjI.js");
const transferTokenService = index.adminApi.injectEndpoints({
  endpoints: (builder) => ({
    getAPITokens: builder.query({
      query: () => "/admin/api-tokens",
      transformResponse: (response) => response.data,
      providesTags: (res, _err) => [
        ...res?.map(({ id }) => ({ type: "ApiToken", id })) ?? [],
        { type: "ApiToken", id: "LIST" }
      ]
    }),
    getAPIToken: builder.query({
      query: (id) => `/admin/api-tokens/${id}`,
      transformResponse: (response) => response.data,
      providesTags: (res, _err, id) => [{ type: "ApiToken", id }]
    }),
    createAPIToken: builder.mutation({
      query: (body) => ({
        url: "/admin/api-tokens",
        method: "POST",
        data: body
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: [{ type: "ApiToken", id: "LIST" }]
    }),
    deleteAPIToken: builder.mutation({
      query: (id) => ({
        url: `/admin/api-tokens/${id}`,
        method: "DELETE"
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: (_res, _err, id) => [{ type: "ApiToken", id }]
    }),
    updateAPIToken: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/admin/api-tokens/${id}`,
        method: "PUT",
        data: body
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: (_res, _err, { id }) => [{ type: "ApiToken", id }]
    })
  }),
  overrideExisting: false
});
const {
  useGetAPITokensQuery,
  useGetAPITokenQuery,
  useCreateAPITokenMutation,
  useDeleteAPITokenMutation,
  useUpdateAPITokenMutation
} = transferTokenService;
exports.useCreateAPITokenMutation = useCreateAPITokenMutation;
exports.useDeleteAPITokenMutation = useDeleteAPITokenMutation;
exports.useGetAPITokenQuery = useGetAPITokenQuery;
exports.useGetAPITokensQuery = useGetAPITokensQuery;
exports.useUpdateAPITokenMutation = useUpdateAPITokenMutation;
//# sourceMappingURL=apiTokens-hPBYGHiM.js.map
