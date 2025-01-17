"use strict";
const index = require("./index-1g9GBMjI.js");
const reviewWorkflowsApi = index.adminApi.injectEndpoints({
  endpoints: (builder) => ({
    getWorkflows: builder.query({
      query: (args) => {
        const { id, ...params } = args ?? {};
        return {
          url: `/admin/review-workflows/workflows/${id ?? ""}`,
          method: "GET",
          config: {
            params
          }
        };
      },
      transformResponse: (res) => {
        let workflows = [];
        if (Array.isArray(res.data)) {
          workflows = res.data;
        } else {
          workflows = [res.data];
        }
        return {
          workflows,
          meta: "meta" in res ? res.meta : void 0
        };
      },
      providesTags: (res, _err, arg) => {
        if (typeof arg === "object" && "id" in arg && arg.id !== "") {
          return [{ type: "ReviewWorkflow", id: arg.id }];
        } else {
          return [
            ...res?.workflows.map(({ id }) => ({ type: "ReviewWorkflow", id })) ?? [],
            { type: "ReviewWorkflow", id: "LIST" }
          ];
        }
      }
    }),
    createWorkflow: builder.mutation({
      query: (data) => ({
        url: "/admin/review-workflows/workflows",
        method: "POST",
        data
      }),
      transformResponse: (res) => res.data,
      invalidatesTags: [{ type: "ReviewWorkflow", id: "LIST" }]
    }),
    updateWorkflow: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/admin/review-workflows/workflows/${id}`,
        method: "PUT",
        data
      }),
      transformResponse: (res) => res.data,
      invalidatesTags: (res, _err, arg) => [{ type: "ReviewWorkflow", id: arg.id }]
    }),
    deleteWorkflow: builder.mutation({
      query: ({ id }) => ({
        url: `/admin/review-workflows/workflows/${id}`,
        method: "DELETE"
      }),
      transformResponse: (res) => res.data,
      invalidatesTags: (res, _err, arg) => [{ type: "ReviewWorkflow", id: arg.id }]
    }),
    getStages: builder.query({
      query: ({ model, slug, id }) => ({
        url: `/admin/content-manager/${slug}/${model}/${id}/stages`,
        method: "GET"
      }),
      transformResponse: (res) => {
        return {
          meta: res.meta ?? { workflowCount: 0 },
          stages: res.data ?? []
        };
      },
      providesTags: (_res, _err, arg) => {
        return [{ type: "ReviewWorkflowStage", id: arg.id }];
      }
    }),
    updateStage: builder.mutation({
      query: ({ model, slug, id, ...data }) => ({
        url: `/admin/content-manager/${slug}/${model}/${id}/stage`,
        method: "PUT",
        data
      }),
      transformResponse: (res) => res.data,
      invalidatesTags: (res, _err, arg) => [{ type: "ReviewWorkflowStage", id: arg.id }]
    }),
    updateAssignee: builder.mutation({
      query: ({ model, slug, id, ...data }) => ({
        url: `/admin/content-manager/${slug}/${model}/${id}/assignee`,
        method: "PUT",
        data
      }),
      transformResponse: (res) => res.data
    })
  }),
  overrideExisting: false
});
const {
  useGetWorkflowsQuery,
  useCreateWorkflowMutation,
  useDeleteWorkflowMutation,
  useUpdateWorkflowMutation,
  useGetStagesQuery,
  useUpdateStageMutation,
  useUpdateAssigneeMutation
} = reviewWorkflowsApi;
exports.useCreateWorkflowMutation = useCreateWorkflowMutation;
exports.useDeleteWorkflowMutation = useDeleteWorkflowMutation;
exports.useGetStagesQuery = useGetStagesQuery;
exports.useGetWorkflowsQuery = useGetWorkflowsQuery;
exports.useUpdateAssigneeMutation = useUpdateAssigneeMutation;
exports.useUpdateStageMutation = useUpdateStageMutation;
exports.useUpdateWorkflowMutation = useUpdateWorkflowMutation;
//# sourceMappingURL=reviewWorkflows-yKe0U-yJ.js.map
