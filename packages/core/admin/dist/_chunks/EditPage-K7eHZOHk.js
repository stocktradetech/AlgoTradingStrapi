"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const React = require("react");
const designSystem = require("@strapi/design-system");
const helperPlugin = require("@strapi/helper-plugin");
const Icons = require("@strapi/icons");
const formik = require("formik");
const reactIntl = require("react-intl");
const reactRedux = require("react-redux");
const reactRouterDom = require("react-router-dom");
const useAdminRoles = require("./useAdminRoles-d6D5V2FI.js");
const useContentTypes = require("./useContentTypes-0-qpYy25.js");
const validateWorkflow = require("./validateWorkflow-5vDDfmnm.js");
const AuthenticatedApp = require("./AuthenticatedApp-TJmmk67-.js");
const index = require("./index-1g9GBMjI.js");
const reviewWorkflows = require("./reviewWorkflows-yKe0U-yJ.js");
const Layout = require("./Layout-_tz7eTM6.js");
const LimitsModal = require("./LimitsModal-gq7jwfap.js");
const constants = require("./constants-L1I-Y-RJ.js");
const useReviewWorkflows = require("./useReviewWorkflows-RQCVev0o.js");
require("styled-components");
require("prop-types");
require("@strapi/design-system/v2");
require("react-dnd-html5-backend");
require("./colors-6VKZqnio.js");
require("@reduxjs/toolkit");
require("lodash/isEqual");
require("immer");
require("lodash/set");
require("yup");
require("semver/functions/lt");
require("semver/functions/valid");
require("react-dnd");
require("lodash/get");
require("lodash/cloneDeep");
require("react-dom/client");
require("invariant");
require("lodash/isFunction");
require("lodash/merge");
require("lodash/pick");
require("react-helmet");
require("use-context-selector");
require("@reduxjs/toolkit/query/react");
require("axios");
require("@radix-ui/react-context");
require("lodash/camelCase");
require("lodash/omit");
require("qs");
require("react-query");
require("lodash/defaultsDeep");
require("lodash/throttle");
require("lodash/isBoolean");
require("lodash/isEmpty");
require("lodash/isNaN");
require("lodash/toNumber");
require("react-window");
require("lodash/upperFirst");
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
const ReviewWorkflowsEditPage = () => {
  const { workflowId } = reactRouterDom.useParams();
  const permissions = reactRedux.useSelector(AuthenticatedApp.selectAdminPermissions);
  const { formatMessage } = reactIntl.useIntl();
  const dispatch = reactRedux.useDispatch();
  const {
    _unstableFormatAPIError: formatAPIError,
    _unstableFormatValidationErrors: formatValidationErrors
  } = helperPlugin.useAPIErrorHandler();
  const toggleNotification = helperPlugin.useNotification();
  const { isLoading: isLoadingWorkflow, meta, workflows } = useReviewWorkflows.useReviewWorkflows();
  const { collectionTypes, singleTypes, isLoading: isLoadingContentTypes } = useContentTypes.useContentTypes();
  const serverState = reactRedux.useSelector(validateWorkflow.selectServerState);
  const currentWorkflowIsDirty = reactRedux.useSelector(validateWorkflow.selectIsWorkflowDirty);
  const currentWorkflow = reactRedux.useSelector(validateWorkflow.selectCurrentWorkflow);
  const hasDeletedServerStages = reactRedux.useSelector(validateWorkflow.selectHasDeletedServerStages);
  const roles = reactRedux.useSelector(validateWorkflow.selectRoles);
  const isLoading = reactRedux.useSelector(validateWorkflow.selectIsLoading);
  const {
    allowedActions: { canDelete, canUpdate }
  } = helperPlugin.useRBAC(permissions.settings?.["review-workflows"]);
  const [savePrompts, setSavePrompts] = React__namespace.useState({});
  const { getFeature, isLoading: isLicenseLoading } = index.useLicenseLimits();
  const { isLoading: isLoadingRoles, roles: serverRoles } = useAdminRoles.useAdminRoles(void 0);
  const [showLimitModal, setShowLimitModal] = React__namespace.useState(null);
  const [initialErrors, setInitialErrors] = React__namespace.useState();
  const [saving, setSaving] = React__namespace.useState(false);
  const workflow = workflows?.find((workflow2) => workflow2.id === parseInt(workflowId, 10));
  const contentTypesFromOtherWorkflows = workflows?.filter((workflow2) => workflow2.id !== parseInt(workflowId, 10)).flatMap((workflow2) => workflow2.contentTypes);
  const limits = getFeature("review-workflows");
  const numberOfWorkflows = limits?.[constants.CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME];
  const stagesPerWorkflow = limits?.[constants.CHARGEBEE_STAGES_PER_WORKFLOW_ENTITLEMENT_NAME];
  const [updateWorkflow] = reviewWorkflows.useUpdateWorkflowMutation();
  const submitForm = async () => {
    setInitialErrors(void 0);
    setSaving(true);
    try {
      const res = await updateWorkflow({
        id: workflowId,
        data: {
          ...currentWorkflow,
          // compare permissions of stages and only submit them if at least one has
          // changed; this enables partial updates e.g. for users who don't have
          // permissions to see roles
          stages: currentWorkflow.stages?.map((stage) => {
            let hasUpdatedPermissions = true;
            const serverStage = serverState.workflow?.stages?.find(
              (serverStage2) => serverStage2.id === stage?.id
            );
            if (serverStage) {
              hasUpdatedPermissions = serverStage.permissions?.length !== stage.permissions?.length || !serverStage.permissions?.every(
                (serverPermission) => !!stage.permissions?.find(
                  (permission) => permission.role === serverPermission.role
                )
              );
            }
            return {
              ...stage,
              permissions: hasUpdatedPermissions ? stage.permissions : void 0
            };
          })
        }
      });
      if ("error" in res) {
        if (index.isBaseQueryError(res.error) && res.error.name === "ValidationError") {
          setInitialErrors(formatValidationErrors(res.error));
        }
        toggleNotification({
          type: "warning",
          message: formatAPIError(res.error)
        });
        return;
      }
      toggleNotification({
        type: "success",
        message: { id: "notification.success.saved", defaultMessage: "Saved" }
      });
    } catch (error) {
      toggleNotification({
        type: "warning",
        message: {
          id: "notification.error",
          defaultMessage: "An error occurred"
        }
      });
    } finally {
      setSaving(false);
    }
    setSavePrompts({});
  };
  const handleConfirmDeleteDialog = async () => {
    await submitForm();
  };
  const handleConfirmClose = () => {
    setSavePrompts({});
  };
  const formik$1 = formik.useFormik({
    enableReinitialize: true,
    initialErrors,
    initialValues: currentWorkflow,
    async onSubmit() {
      const isContentTypeReassignment = currentWorkflow.contentTypes?.some(
        (contentType) => contentTypesFromOtherWorkflows?.includes(contentType)
      );
      if (meta && numberOfWorkflows && meta?.workflowCount > parseInt(numberOfWorkflows, 10)) {
        setShowLimitModal("workflow");
      } else if (currentWorkflow.stages && stagesPerWorkflow && currentWorkflow.stages.length > parseInt(stagesPerWorkflow, 10)) {
        setShowLimitModal("stage");
      } else if (hasDeletedServerStages || isContentTypeReassignment) {
        if (hasDeletedServerStages) {
          setSavePrompts((prev) => ({ ...prev, hasDeletedServerStages: true }));
        }
        if (isContentTypeReassignment) {
          setSavePrompts((prev) => ({ ...prev, hasReassignedContentTypes: true }));
        }
      } else {
        submitForm();
      }
    },
    validate(values) {
      return validateWorkflow.validateWorkflow({ values, formatMessage });
    }
  });
  validateWorkflow.useInjectReducer(constants.REDUX_NAMESPACE, validateWorkflow.reducer);
  React__namespace.useEffect(() => {
    if (!isLoadingWorkflow && workflow && workflows) {
      dispatch(validateWorkflow.setWorkflow({ workflow }));
      dispatch(validateWorkflow.setWorkflows({ workflows }));
    }
    if (!isLoadingContentTypes) {
      dispatch(validateWorkflow.setContentTypes({ collectionTypes, singleTypes }));
    }
    if (!isLoadingRoles) {
      dispatch(validateWorkflow.setRoles(serverRoles));
    }
    dispatch(validateWorkflow.setIsLoading(isLoadingWorkflow || isLoadingContentTypes || isLoadingRoles));
    return () => {
      dispatch(validateWorkflow.resetWorkflow());
    };
  }, [
    collectionTypes,
    dispatch,
    isLoadingContentTypes,
    isLoadingWorkflow,
    isLoadingRoles,
    serverRoles,
    singleTypes,
    workflow,
    workflows
  ]);
  React__namespace.useEffect(() => {
    if (!isLoadingWorkflow && !isLicenseLoading) {
      if (meta && numberOfWorkflows && meta?.workflowCount > parseInt(numberOfWorkflows, 10)) {
        setShowLimitModal("workflow");
      } else if (currentWorkflow.stages && stagesPerWorkflow && currentWorkflow.stages.length > parseInt(stagesPerWorkflow, 10)) {
        setShowLimitModal("stage");
      }
    }
  }, [
    currentWorkflow.stages,
    isLicenseLoading,
    isLoadingWorkflow,
    limits,
    meta,
    numberOfWorkflows,
    stagesPerWorkflow
  ]);
  React__namespace.useEffect(() => {
    if (!isLoading && roles?.length === 0) {
      toggleNotification({
        blockTransition: true,
        type: "warning",
        message: formatMessage({
          id: "Settings.review-workflows.stage.permissions.noPermissions.description",
          defaultMessage: "You don’t have the permission to see roles"
        })
      });
    }
  }, [formatMessage, isLoading, roles, toggleNotification]);
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(Layout.DragLayerRendered, {}),
    /* @__PURE__ */ jsxRuntime.jsx(formik.FormikProvider, { value: formik$1, children: /* @__PURE__ */ jsxRuntime.jsxs(formik.Form, { onSubmit: formik$1.handleSubmit, children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Layout.Header,
        {
          navigationAction: /* @__PURE__ */ jsxRuntime.jsx(Layout.Back, { href: "/settings/review-workflows" }),
          primaryAction: canUpdate && /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.Button,
            {
              startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Check, {}),
              type: "submit",
              size: "M",
              disabled: !currentWorkflowIsDirty,
              loading: !Boolean(Object.keys(savePrompts).length > 0) && saving,
              children: formatMessage({
                id: "global.save",
                defaultMessage: "Save"
              })
            }
          ),
          subtitle: !isLoading && formatMessage(
            {
              id: "Settings.review-workflows.page.subtitle",
              defaultMessage: "{count, plural, one {# stage} other {# stages}}"
            },
            { count: currentWorkflow.stages?.length }
          ),
          title: currentWorkflow.name || ""
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Layout.Root, { children: isLoading ? /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { justifyContent: "center", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Loader, { children: formatMessage({
        id: "Settings.review-workflows.page.isLoading",
        defaultMessage: "Workflow is loading"
      }) }) }) : /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { alignItems: "stretch", direction: "column", gap: 7, children: [
        /* @__PURE__ */ jsxRuntime.jsx(validateWorkflow.WorkflowAttributes, { canUpdate }),
        /* @__PURE__ */ jsxRuntime.jsx(
          validateWorkflow.Stages,
          {
            canDelete,
            canUpdate,
            stages: formik$1.values?.stages
          }
        )
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsx(
      helperPlugin.ConfirmDialog.Root,
      {
        isConfirmButtonLoading: isLoading,
        isOpen: Object.keys(savePrompts).length > 0,
        onToggleDialog: handleConfirmClose,
        onConfirm: handleConfirmDeleteDialog,
        children: /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.ConfirmDialog.Body, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", gap: 5, children: [
          savePrompts.hasDeletedServerStages && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textAlign: "center", variant: "omega", children: formatMessage({
            id: "Settings.review-workflows.page.delete.confirm.stages.body",
            defaultMessage: "All entries assigned to deleted stages will be moved to the previous stage."
          }) }),
          savePrompts.hasReassignedContentTypes && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textAlign: "center", variant: "omega", children: formatMessage(
            {
              id: "Settings.review-workflows.page.delete.confirm.contentType.body",
              defaultMessage: "{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."
            },
            {
              count: contentTypesFromOtherWorkflows?.filter(
                (contentType) => currentWorkflow.contentTypes?.includes(contentType)
              ).length
            }
          ) }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textAlign: "center", variant: "omega", children: formatMessage({
            id: "Settings.review-workflows.page.delete.confirm.confirm",
            defaultMessage: "Are you sure you want to save?"
          }) })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(
      LimitsModal.LimitsModal.Root,
      {
        isOpen: showLimitModal === "workflow",
        onClose: () => setShowLimitModal(null),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(LimitsModal.LimitsModal.Title, { children: formatMessage({
            id: "Settings.review-workflows.edit.page.workflows.limit.title",
            defaultMessage: "You’ve reached the limit of workflows in your plan"
          }) }),
          /* @__PURE__ */ jsxRuntime.jsx(LimitsModal.LimitsModal.Body, { children: formatMessage({
            id: "Settings.review-workflows.edit.page.workflows.limit.body",
            defaultMessage: "Delete a workflow or contact Sales to enable more workflows."
          }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(LimitsModal.LimitsModal.Root, { isOpen: showLimitModal === "stage", onClose: () => setShowLimitModal(null), children: [
      /* @__PURE__ */ jsxRuntime.jsx(LimitsModal.LimitsModal.Title, { children: formatMessage({
        id: "Settings.review-workflows.edit.page.stages.limit.title",
        defaultMessage: "You have reached the limit of stages for this workflow in your plan"
      }) }),
      /* @__PURE__ */ jsxRuntime.jsx(LimitsModal.LimitsModal.Body, { children: formatMessage({
        id: "Settings.review-workflows.edit.page.stages.limit.body",
        defaultMessage: "Try deleting some stages or contact Sales to enable more stages."
      }) })
    ] })
  ] });
};
exports.ReviewWorkflowsEditPage = ReviewWorkflowsEditPage;
//# sourceMappingURL=EditPage-K7eHZOHk.js.map
