import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCMEditViewDataManager, useAPIErrorHandler, useNotification, useRBAC } from "@strapi/helper-plugin";
import { j as useTypedSelector, k as useAdminUsers, l as getDisplayName, m as useLicenseLimits, I as Information } from "./index-kIIXqMj8.mjs";
import { Field, Flex, Combobox, ComboboxOption, SingleSelect, Typography, Loader, SingleSelectOption, FieldHint, FieldError } from "@strapi/design-system";
import { useIntl } from "react-intl";
import { u as useUpdateAssigneeMutation, a as useGetStagesQuery, b as useUpdateStageMutation } from "./reviewWorkflows-j4Kc7L6G.mjs";
import { A as ASSIGNEE_ATTRIBUTE_NAME, S as STAGE_ATTRIBUTE_NAME } from "./constants-q1-_l5GM.mjs";
import * as React from "react";
import { L as LimitsModal } from "./LimitsModal-slvRtty7.mjs";
import { C as CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME, a as CHARGEBEE_STAGES_PER_WORKFLOW_ENTITLEMENT_NAME } from "./constants-8sAt6dKz.mjs";
import { g as getStageColorByHex } from "./colors-YeFa2BnS.mjs";
import "react-dom/client";
import "invariant";
import "lodash/isFunction";
import "lodash/merge";
import "lodash/pick";
import "react-helmet";
import "react-router-dom";
import "react-redux";
import "use-context-selector";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query/react";
import "axios";
import "@radix-ui/react-context";
import "@strapi/design-system/v2";
import "@strapi/icons";
import "formik";
import "lodash/camelCase";
import "styled-components";
import "yup";
import "lodash/omit";
import "qs";
import "react-query";
import "immer";
import "lodash/get";
import "lodash/set";
import "lodash/defaultsDeep";
import "lodash/isEqual";
import "lodash/throttle";
import "lodash/isBoolean";
import "lodash/isEmpty";
import "lodash/isNaN";
import "lodash/toNumber";
import "react-dnd";
import "react-dnd-html5-backend";
import "react-window";
import "lodash/cloneDeep";
import "lodash/upperFirst";
import "prop-types";
import "lodash/fp";
import "lodash/take";
import "slate";
import "slate-history";
import "slate-react";
import "@radix-ui/react-toolbar";
import "codemirror5";
import "sanitize-html";
import "highlight.js";
import "markdown-it";
import "markdown-it-abbr";
import "markdown-it-container";
import "markdown-it-deflist";
import "markdown-it-emoji";
import "markdown-it-footnote";
import "markdown-it-ins";
import "markdown-it-mark";
import "markdown-it-sub";
import "markdown-it-sup";
import "highlight.js/styles/solarized-dark.css";
import "codemirror5/addon/display/placeholder";
import "lodash/toString";
import "react-dom";
import "fractional-indexing";
import "lodash/uniqBy";
import "lodash/unset";
import "lodash/isArray";
import "date-fns/parseISO";
const AssigneeSelect = () => {
  const { initialData, layout, isSingleType, onChange } = useCMEditViewDataManager();
  const permissions = useTypedSelector((state) => state.admin_app.permissions);
  const { formatMessage } = useIntl();
  const { _unstableFormatAPIError: formatAPIError } = useAPIErrorHandler();
  const toggleNotification = useNotification();
  const {
    allowedActions: { canRead },
    isLoading: isLoadingPermissions
  } = useRBAC(permissions.settings?.users);
  const { data, isLoading, isError } = useAdminUsers(
    {},
    {
      skip: isLoadingPermissions || !canRead
    }
  );
  const users = data?.users || [];
  const currentAssignee = initialData?.[ASSIGNEE_ATTRIBUTE_NAME] ?? null;
  const [updateAssignee, { error, isLoading: isMutating }] = useUpdateAssigneeMutation();
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
            name: ASSIGNEE_ATTRIBUTE_NAME,
            value: res.data[ASSIGNEE_ATTRIBUTE_NAME]
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
  return /* @__PURE__ */ jsx(Field, { name: ASSIGNEE_ATTRIBUTE_NAME, id: ASSIGNEE_ATTRIBUTE_NAME, children: /* @__PURE__ */ jsx(Flex, { direction: "column", gap: 2, alignItems: "stretch", children: /* @__PURE__ */ jsx(
    Combobox,
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
      name: ASSIGNEE_ATTRIBUTE_NAME,
      id: ASSIGNEE_ATTRIBUTE_NAME,
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
        return /* @__PURE__ */ jsx(
          ComboboxOption,
          {
            value: user.id.toString(),
            textValue: getDisplayName(user, formatMessage),
            children: getDisplayName(user, formatMessage)
          },
          user.id
        );
      })
    }
  ) }) });
};
const StageSelect = () => {
  const { initialData, layout: contentType, isSingleType, onChange } = useCMEditViewDataManager();
  const { formatMessage } = useIntl();
  const { _unstableFormatAPIError: formatAPIError } = useAPIErrorHandler();
  const toggleNotification = useNotification();
  const { data, isLoading } = useGetStagesQuery(
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
  const { getFeature } = useLicenseLimits();
  const [showLimitModal, setShowLimitModal] = React.useState(null);
  const limits = getFeature("review-workflows") ?? {};
  const activeWorkflowStage = initialData?.[STAGE_ATTRIBUTE_NAME] ?? null;
  const [updateStage, { error }] = useUpdateStageMutation();
  const handleChange = async (stageId) => {
    try {
      if (limits?.[CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME] && parseInt(limits[CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME], 10) < (meta?.workflowCount ?? 0)) {
        setShowLimitModal("workflow");
      } else if (limits?.[CHARGEBEE_STAGES_PER_WORKFLOW_ENTITLEMENT_NAME] && parseInt(limits[CHARGEBEE_STAGES_PER_WORKFLOW_ENTITLEMENT_NAME], 10) < stages.length) {
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
                  name: STAGE_ATTRIBUTE_NAME,
                  value: res.data[STAGE_ATTRIBUTE_NAME],
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
  const { themeColorName } = getStageColorByHex(activeWorkflowStage?.color) ?? {};
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Field,
      {
        hint: stages.length === 0 && formatMessage({
          id: "content-manager.reviewWorkflows.stages.no-transition",
          defaultMessage: "You don’t have the permission to update this stage."
        }),
        name: STAGE_ATTRIBUTE_NAME,
        id: STAGE_ATTRIBUTE_NAME,
        children: /* @__PURE__ */ jsxs(Flex, { direction: "column", gap: 2, alignItems: "stretch", children: [
          /* @__PURE__ */ jsx(
            SingleSelect,
            {
              disabled: stages.length === 0,
              error: error && formatAPIError(error) || void 0,
              name: STAGE_ATTRIBUTE_NAME,
              id: STAGE_ATTRIBUTE_NAME,
              value: activeWorkflowStage?.id,
              onChange: handleChange,
              label: formatMessage({
                id: "content-manager.reviewWorkflows.stage.label",
                defaultMessage: "Review stage"
              }),
              startIcon: activeWorkflowStage && /* @__PURE__ */ jsx(
                Flex,
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
              customizeContent: () => /* @__PURE__ */ jsxs(Flex, { as: "span", justifyContent: "space-between", alignItems: "center", width: "100%", children: [
                /* @__PURE__ */ jsx(Typography, { textColor: "neutral800", ellipsis: true, children: activeWorkflowStage?.name ?? "" }),
                isLoading ? /* @__PURE__ */ jsx(Loader, { small: true, style: { display: "flex" }, "data-testid": "loader" }) : null
              ] }),
              children: stages.map(({ id, color, name }) => {
                const { themeColorName: themeColorName2 } = getStageColorByHex(color) ?? {};
                return /* @__PURE__ */ jsx(
                  SingleSelectOption,
                  {
                    startIcon: /* @__PURE__ */ jsx(
                      Flex,
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
          /* @__PURE__ */ jsx(FieldHint, {}),
          /* @__PURE__ */ jsx(FieldError, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsxs(
      LimitsModal.Root,
      {
        isOpen: showLimitModal === "workflow",
        onClose: () => setShowLimitModal(null),
        children: [
          /* @__PURE__ */ jsx(LimitsModal.Title, { children: formatMessage({
            id: "content-manager.reviewWorkflows.workflows.limit.title",
            defaultMessage: "You’ve reached the limit of workflows in your plan"
          }) }),
          /* @__PURE__ */ jsx(LimitsModal.Body, { children: formatMessage({
            id: "content-manager.reviewWorkflows.workflows.limit.body",
            defaultMessage: "Delete a workflow or contact Sales to enable more workflows."
          }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(LimitsModal.Root, { isOpen: showLimitModal === "stage", onClose: () => setShowLimitModal(null), children: [
      /* @__PURE__ */ jsx(LimitsModal.Title, { children: formatMessage({
        id: "content-manager.reviewWorkflows.stages.limit.title",
        defaultMessage: "You have reached the limit of stages for this workflow in your plan"
      }) }),
      /* @__PURE__ */ jsx(LimitsModal.Body, { children: formatMessage({
        id: "content-manager.reviewWorkflows.stages.limit.body",
        defaultMessage: "Try deleting some stages or contact Sales to enable more stages."
      }) })
    ] })
  ] });
};
const InformationBoxEE = () => {
  const { isCreatingEntry, layout } = useCMEditViewDataManager();
  const hasReviewWorkflowsEnabled = layout?.options?.reviewWorkflows ?? false;
  return /* @__PURE__ */ jsxs(Information.Root, { children: [
    /* @__PURE__ */ jsx(Information.Title, {}),
    hasReviewWorkflowsEnabled && !isCreatingEntry && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(StageSelect, {}),
      /* @__PURE__ */ jsx(AssigneeSelect, {})
    ] }),
    /* @__PURE__ */ jsx(Information.Body, {})
  ] });
};
export {
  InformationBoxEE
};
//# sourceMappingURL=InformationBoxEE-BhC-k3Bz.mjs.map
