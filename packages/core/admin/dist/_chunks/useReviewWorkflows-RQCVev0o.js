"use strict";
const reviewWorkflows = require("./reviewWorkflows-yKe0U-yJ.js");
function useReviewWorkflows(params = {}) {
  const { id = "", ...queryParams } = params;
  const { data, isLoading } = reviewWorkflows.useGetWorkflowsQuery({
    id,
    populate: "stages",
    ...queryParams
  });
  const [createWorkflow] = reviewWorkflows.useCreateWorkflowMutation();
  const [updateWorkflow] = reviewWorkflows.useUpdateWorkflowMutation();
  const [deleteWorkflow] = reviewWorkflows.useDeleteWorkflowMutation();
  const { workflows, meta } = data ?? {};
  return {
    // meta contains e.g. the total of all workflows. we can not use
    // the pagination object here, because the list is not paginated.
    meta,
    workflows,
    isLoading,
    createWorkflow,
    updateWorkflow,
    deleteWorkflow
  };
}
exports.useReviewWorkflows = useReviewWorkflows;
//# sourceMappingURL=useReviewWorkflows-RQCVev0o.js.map
