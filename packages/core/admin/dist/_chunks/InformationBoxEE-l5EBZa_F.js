"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const helperPlugin = require("@strapi/helper-plugin");
const index = require("./index-1g9GBMjI.js");
const designSystem = require("@strapi/design-system");
const reactIntl = require("react-intl");
const reviewWorkflows = require("./reviewWorkflows-yKe0U-yJ.js");
const constants = require("./constants-jzEsxOxr.js");
const React = require("react");
const LimitsModal = require("./LimitsModal-gq7jwfap.js");
const constants$1 = require("./constants-L1I-Y-RJ.js");
const colors = require("./colors-6VKZqnio.js");
require("react-dom/client");
require("invariant");
require("lodash/isFunction");
require("lodash/merge");
require("lodash/pick");
require("react-helmet");
require("react-router-dom");
require("react-redux");
require("use-context-selector");
require("@reduxjs/toolkit");
require("@reduxjs/toolkit/query/react");
require("axios");
require("@radix-ui/react-context");
require("@strapi/design-system/v2");
require("@strapi/icons");
require("formik");
require("lodash/camelCase");
require("styled-components");
require("yup");
require("lodash/omit");
require("qs");
require("react-query");
require("immer");
require("lodash/get");
require("lodash/set");
require("lodash/defaultsDeep");
require("lodash/isEqual");
require("lodash/throttle");
require("lodash/isBoolean");
require("lodash/isEmpty");
require("lodash/isNaN");
require("lodash/toNumber");
require("react-dnd");
require("react-dnd-html5-backend");
require("react-window");
require("lodash/cloneDeep");
require("lodash/upperFirst");
require("prop-types");
require("lodash/fp");
require("lodash/take");
require("slate");
require("slate-history");
require("slate-react");
require("@radix-ui/react-toolbar");
require("codemirror5");
require("sanitize-html");
require("highlight.js");
require("markdown-it");
require("markdown-it-abbr");
require("markdown-it-container");
require("markdown-it-deflist");
require("markdown-it-emoji");
require("markdown-it-footnote");
require("markdown-it-ins");
require("markdown-it-mark");
require("markdown-it-sub");
require("markdown-it-sup");
require("highlight.js/styles/solarized-dark.css");
require("codemirror5/addon/display/placeholder");
require("lodash/toString");
require("react-dom");
require("fractional-indexing");
require("lodash/uniqBy");
require("lodash/unset");
require("lodash/isArray");
require("date-fns/parseISO");
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__namespace = /* @__PURE__ */ _interopNamespace(React);
const AssigneeSelect = () => {
  const { initialData, layout, isSingleType, onChange } = helperPlugin.useCMEditViewDataManager();
  const permissions = index.useTypedSelector((state) => state.admin_app.permissions);
  const { formatMessage } = reactIntl.useIntl();
  const { _unstableFormatAPIError: formatAPIError } = helperPlugin.useAPIErrorHandler();
  const toggleNotification = helperPlugin.useNotification();
  const {
    allowedActions: { canRead },
    isLoading: isLoadingPermissions
  } = helperPlugin.useRBAC(permissions.settings?.users);
  const { data, isLoading, isError } = index.useAdminUsers(
    {},
    {
      skip: isLoadingPermissions || !canRead
    }
  );
  const users = data?.users || [];
  const currentAssignee = initialData?.[constants.ASSIGNEE_ATTRIBUTE_NAME] ?? null;
  const [updateAssignee, { error, isLoading: isMutating }] = reviewWorkflows.useUpdateAssigneeMutation();
  const handleChange = async (assigneeId) => {
    const res = await updateAssignee({
      slug: isSingleType ? "single-types" : "collection-types",
      model: layout.uid,
      id: initialData.id,
      data: {
        id: assigneeId ? parseInt(assigneeId, 10) : null
      }
    });
    if ("data" in res) {
      onChange?.(
        {
          target: {
            type: "",
            name: constants.ASSIGNEE_ATTRIBUTE_NAME,
            value: res.data[constants.ASSIGNEE_ATTRIBUTE_NAME]
          }
        },
        true
      );
      toggleNotification({
        type: "success",
        message: {
          id: "content-manager.reviewWorkflows.assignee.notification.saved",
          defaultMessage: "Assignee updated"
        }
      });
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field, { name: constants.ASSIGNEE_ATTRIBUTE_NAME, id: constants.ASSIGNEE_ATTRIBUTE_NAME, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { direction: "column", gap: 2, alignItems: "stretch", children: /* @__PURE__ */ jsxRuntime.jsx(
    designSystem.Combobox,
    {
      clearLabel: formatMessage({
        id: "content-manager.reviewWorkflows.assignee.clear",
        defaultMessage: "Clear assignee"
      }),
      error: (isError && canRead && formatMessage({
        id: "content-manager.reviewWorkflows.assignee.error",
        defaultMessage: "An error occurred while fetching users"
      }) || error && formatAPIError(error)) ?? void 0,
      disabled: !isLoadingPermissions && !isLoading && users.length === 0,
      name: constants.ASSIGNEE_ATTRIBUTE_NAME,
      id: constants.ASSIGNEE_ATTRIBUTE_NAME,
      value: currentAssignee ? currentAssignee.id.toString() : null,
      onChange: handleChange,
      onClear: () => handleChange(null),
      placeholder: formatMessage({
        id: "content-manager.reviewWorkflows.assignee.placeholder",
        defaultMessage: "Select …"
      }),
      label: formatMessage({
        id: "content-manager.reviewWorkflows.assignee.label",
        defaultMessage: "Assignee"
      }),
      loading: isLoading || isLoadingPermissions || isMutating,
      children: users.map((user) => {
        return /* @__PURE__ */ jsxRuntime.jsx(
          designSystem.ComboboxOption,
          {
            value: user.id.toString(),
            textValue: index.getDisplayName(user, formatMessage),
            children: index.getDisplayName(user, formatMessage)
          },
          user.id
        );
      })
    }
  ) }) });
};
const StageSelect = () => {
  const { initialData, layout: contentType, isSingleType, onChange } = helperPlugin.useCMEditViewDataManager();
  const { formatMessage } = reactIntl.useIntl();
  const { _unstableFormatAPIError: formatAPIError } = helperPlugin.useAPIErrorHandler();
  const toggleNotification = helperPlugin.useNotification();
  const { data, isLoading } = reviewWorkflows.useGetStagesQuery(
    {
      slug: isSingleType ? "single-types" : "collection-types",
      model: contentType.uid,
      id: initialData.id
    },
    {
      skip: !initialData?.id || !contentType?.uid
    }
  );
  const { meta, stages = [] } = data ?? {};
  const { getFeature } = index.useLicenseLimits();
  const [showLimitModal, setShowLimitModal] = React__namespace.useState(null);
  const limits = getFeature("review-workflows") ?? {};
  const activeWorkflowStage = initialData?.[constants.STAGE_ATTRIBUTE_NAME] ?? null;
  const [updateStage, { error }] = reviewWorkflows.useUpdateStageMutation();
  const handleChange = async (stageId) => {
    try {
      if (limits?.[constants$1.CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME] && parseInt(limits[constants$1.CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME], 10) < (meta?.workflowCount ?? 0)) {
        setShowLimitModal("workflow");
      } else if (limits?.[constants$1.CHARGEBEE_STAGES_PER_WORKFLOW_ENTITLEMENT_NAME] && parseInt(limits[constants$1.CHARGEBEE_STAGES_PER_WORKFLOW_ENTITLEMENT_NAME], 10) < stages.length) {
        setShowLimitModal("stage");
      } else {
        if (initialData.id && contentType) {
          const res = await updateStage({
            model: contentType.uid,
            id: initialData.id,
            slug: isSingleType ? "single-types" : "collection-types",
            data: { id: stageId }
          });
          if ("data" in res) {
            onChange?.(
              {
                target: {
                  name: constants.STAGE_ATTRIBUTE_NAME,
                  value: res.data[constants.STAGE_ATTRIBUTE_NAME],
                  type: ""
                }
              },
              true
            );
            toggleNotification({
              type: "success",
              message: {
                id: "content-manager.reviewWorkflows.stage.notification.saved",
                defaultMessage: "Review stage updated"
              }
            });
          }
        }
      }
    } catch (error2) {
    }
  };
  const { themeColorName } = colors.getStageColorByHex(activeWorkflowStage?.color) ?? {};
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.Field,
      {
        hint: stages.length === 0 && formatMessage({
          id: "content-manager.reviewWorkflows.stages.no-transition",
          defaultMessage: "You don’t have the permission to update this stage."
        }),
        name: constants.STAGE_ATTRIBUTE_NAME,
        id: constants.STAGE_ATTRIBUTE_NAME,
        children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", gap: 2, alignItems: "stretch", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.SingleSelect,
            {
              disabled: stages.length === 0,
              error: error && formatAPIError(error) || void 0,
              name: constants.STAGE_ATTRIBUTE_NAME,
              id: constants.STAGE_ATTRIBUTE_NAME,
              value: activeWorkflowStage?.id,
              onChange: handleChange,
              label: formatMessage({
                id: "content-manager.reviewWorkflows.stage.label",
                defaultMessage: "Review stage"
              }),
              startIcon: activeWorkflowStage && /* @__PURE__ */ jsxRuntime.jsx(
                designSystem.Flex,
                {
                  as: "span",
                  height: 2,
                  background: activeWorkflowStage?.color,
                  borderColor: themeColorName === "neutral0" ? "neutral150" : void 0,
                  hasRadius: true,
                  shrink: 0,
                  width: 2,
                  marginRight: "-3px"
                }
              ),
              customizeContent: () => /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { as: "span", justifyContent: "space-between", alignItems: "center", width: "100%", children: [
                /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "neutral800", ellipsis: true, children: activeWorkflowStage?.name ?? "" }),
                isLoading ? /* @__PURE__ */ jsxRuntime.jsx(designSystem.Loader, { small: true, style: { display: "flex" }, "data-testid": "loader" }) : null
              ] }),
              children: stages.map(({ id, color, name }) => {
                const { themeColorName: themeColorName2 } = colors.getStageColorByHex(color) ?? {};
                return /* @__PURE__ */ jsxRuntime.jsx(
                  designSystem.SingleSelectOption,
                  {
                    startIcon: /* @__PURE__ */ jsxRuntime.jsx(
                      designSystem.Flex,
                      {
                        height: 2,
                        background: color,
                        borderColor: themeColorName2 === "neutral0" ? "neutral150" : void 0,
                        hasRadius: true,
                        shrink: 0,
                        width: 2
                      }
                    ),
                    value: id,
                    textValue: name,
                    children: name
                  },
                  id
                );
              })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.FieldHint, {}),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.FieldError, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(
      LimitsModal.LimitsModal.Root,
      {
        isOpen: showLimitModal === "workflow",
        onClose: () => setShowLimitModal(null),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(LimitsModal.LimitsModal.Title, { children: formatMessage({
            id: "content-manager.reviewWorkflows.workflows.limit.title",
            defaultMessage: "You’ve reached the limit of workflows in your plan"
          }) }),
          /* @__PURE__ */ jsxRuntime.jsx(LimitsModal.LimitsModal.Body, { children: formatMessage({
            id: "content-manager.reviewWorkflows.workflows.limit.body",
            defaultMessage: "Delete a workflow or contact Sales to enable more workflows."
          }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(LimitsModal.LimitsModal.Root, { isOpen: showLimitModal === "stage", onClose: () => setShowLimitModal(null), children: [
      /* @__PURE__ */ jsxRuntime.jsx(LimitsModal.LimitsModal.Title, { children: formatMessage({
        id: "content-manager.reviewWorkflows.stages.limit.title",
        defaultMessage: "You have reached the limit of stages for this workflow in your plan"
      }) }),
      /* @__PURE__ */ jsxRuntime.jsx(LimitsModal.LimitsModal.Body, { children: formatMessage({
        id: "content-manager.reviewWorkflows.stages.limit.body",
        defaultMessage: "Try deleting some stages or contact Sales to enable more stages."
      }) })
    ] })
  ] });
};
const InformationBoxEE = () => {
  const { isCreatingEntry, layout } = helperPlugin.useCMEditViewDataManager();
  const hasReviewWorkflowsEnabled = layout?.options?.reviewWorkflows ?? false;
  return /* @__PURE__ */ jsxRuntime.jsxs(index.Information.Root, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(index.Information.Title, {}),
    hasReviewWorkflowsEnabled && !isCreatingEntry && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(StageSelect, {}),
      /* @__PURE__ */ jsxRuntime.jsx(AssigneeSelect, {})
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(index.Information.Body, {})
  ] });
};
exports.InformationBoxEE = InformationBoxEE;
//# sourceMappingURL=InformationBoxEE-l5EBZa_F.js.map
