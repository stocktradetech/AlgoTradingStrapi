"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const React = require("react");
const designSystem = require("@strapi/design-system");
const helperPlugin = require("@strapi/helper-plugin");
const Icons = require("@strapi/icons");
const formik = require("formik");
const reactIntl = require("react-intl");
const reactRouterDom = require("react-router-dom");
const yup = require("yup");
const index = require("./index-1g9GBMjI.js");
const transferTokens = require("./transferTokens-yW7xdvFP.js");
const constants = require("./constants-RMqZXSqh.js");
const TokenTypeSelect = require("./TokenTypeSelect-ERkGLkO2.js");
require("react-dom/client");
require("invariant");
require("lodash/isFunction");
require("lodash/merge");
require("lodash/pick");
require("react-helmet");
require("react-redux");
require("use-context-selector");
require("@reduxjs/toolkit");
require("@reduxjs/toolkit/query/react");
require("axios");
require("@radix-ui/react-context");
require("@strapi/design-system/v2");
require("lodash/camelCase");
require("styled-components");
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
require("date-fns");
require("date-fns/locale");
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
const yup__namespace = /* @__PURE__ */ _interopNamespace(yup);
const schema = yup__namespace.object().shape({
  name: yup__namespace.string().max(100).required(helperPlugin.translatedErrors.required),
  description: yup__namespace.string().nullable(),
  lifespan: yup__namespace.number().integer().min(0).nullable().defined(helperPlugin.translatedErrors.required),
  permissions: yup__namespace.string().required(helperPlugin.translatedErrors.required)
});
const EditView = () => {
  helperPlugin.useFocusWhenNavigate();
  const { formatMessage } = reactIntl.useIntl();
  const { lockApp, unlockApp } = helperPlugin.useOverlayBlocker();
  const toggleNotification = helperPlugin.useNotification();
  const history = reactRouterDom.useHistory();
  const { state: locationState } = reactRouterDom.useLocation();
  const [transferToken, setTransferToken] = React__namespace.useState(
    locationState && "accessKey" in locationState.transferToken ? {
      ...locationState.transferToken
    } : null
  );
  const { trackUsage } = helperPlugin.useTracking();
  const { setCurrentStep } = helperPlugin.useGuidedTour();
  const permissions = index.useTypedSelector(
    (state) => state.admin_app.permissions.settings?.["transfer-tokens"]
  );
  const {
    allowedActions: { canCreate, canUpdate, canRegenerate }
  } = helperPlugin.useRBAC(permissions);
  const match = reactRouterDom.useRouteMatch("/settings/transfer-tokens/:id");
  const id = match?.params?.id;
  const isCreating = id === "create";
  const {
    _unstableFormatAPIError: formatAPIError,
    _unstableFormatValidationErrors: formatValidationErrors
  } = helperPlugin.useAPIErrorHandler();
  React__namespace.useEffect(() => {
    trackUsage(isCreating ? "didAddTokenFromList" : "didEditTokenFromList", {
      tokenType: constants.TRANSFER_TOKEN_TYPE
    });
  }, [isCreating, trackUsage]);
  const { data, error } = transferTokens.useGetTransferTokenQuery(id, {
    skip: isCreating || transferToken !== null || !id
  });
  React__namespace.useEffect(() => {
    if (error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
    }
  }, [error, formatAPIError, toggleNotification]);
  React__namespace.useEffect(() => {
    if (data) {
      setTransferToken(data);
    }
  }, [data]);
  const [createToken] = transferTokens.useCreateTransferTokenMutation();
  const [updateToken] = transferTokens.useUpdateTransferTokenMutation();
  const handleSubmit = async (body, formik2) => {
    trackUsage(isCreating ? "willCreateToken" : "willEditToken", {
      tokenType: constants.TRANSFER_TOKEN_TYPE
    });
    lockApp();
    const permissions2 = body.permissions.split("-");
    const isPermissionsTransferPermission = (permission) => {
      if (permission.length === 1) {
        return permission[0] === "push" || permission[0] === "pull";
      }
      return permission[0] === "push" && permission[1] === "pull";
    };
    if (isPermissionsTransferPermission(permissions2)) {
      try {
        if (isCreating) {
          const res = await createToken({
            ...body,
            // lifespan must be "null" for unlimited (0 would mean instantly expired and isn't accepted)
            lifespan: body?.lifespan || null,
            permissions: permissions2
          });
          if ("error" in res) {
            if (index.isBaseQueryError(res.error) && res.error.name === "ValidationError") {
              formik2.setErrors(formatValidationErrors(res.error));
            } else {
              toggleNotification({
                type: "warning",
                message: formatAPIError(res.error)
              });
            }
            return;
          }
          setTransferToken(res.data);
          toggleNotification({
            type: "success",
            message: formatMessage({
              id: "notification.success.transfertokencreated",
              defaultMessage: "Transfer Token successfully created"
            })
          });
          trackUsage("didCreateToken", {
            type: transferToken?.permissions,
            tokenType: constants.TRANSFER_TOKEN_TYPE
          });
          history.push(`/settings/transfer-tokens/${res.data.id}`, { transferToken: res.data });
          setCurrentStep("transferTokens.success");
        } else {
          const res = await updateToken({
            id,
            name: body.name,
            description: body.description,
            permissions: permissions2
          });
          if ("error" in res) {
            if (index.isBaseQueryError(res.error) && res.error.name === "ValidationError") {
              formik2.setErrors(formatValidationErrors(res.error));
            } else {
              toggleNotification({
                type: "warning",
                message: formatAPIError(res.error)
              });
            }
            return;
          }
          setTransferToken(res.data);
          toggleNotification({
            type: "success",
            message: formatMessage({
              id: "notification.success.transfertokenedited",
              defaultMessage: "Transfer Token successfully edited"
            })
          });
          trackUsage("didEditToken", {
            type: transferToken?.permissions,
            tokenType: constants.TRANSFER_TOKEN_TYPE
          });
        }
      } catch (err) {
        toggleNotification({
          type: "warning",
          message: {
            id: "notification.error",
            defaultMessage: "Something went wrong"
          }
        });
      } finally {
        unlockApp();
      }
    }
  };
  const canEditInputs = canUpdate && !isCreating || canCreate && isCreating;
  const isLoading = !isCreating && !transferToken;
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntime.jsx(LoadingView, {});
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.SettingsPageTitle, { name: "Transfer Tokens" }),
    /* @__PURE__ */ jsxRuntime.jsx(
      formik.Formik,
      {
        validationSchema: schema,
        validateOnChange: false,
        initialValues: {
          name: transferToken?.name || "",
          description: transferToken?.description || "",
          lifespan: transferToken?.lifespan || null,
          /**
           * We need to cast the permissions to satisfy the type for `permissions`
           * in the request body incase we don't have a transferToken and instead
           * use an empty string.
           */
          permissions: transferToken?.permissions.join("-") ?? ""
        },
        enableReinitialize: true,
        onSubmit: (body, actions) => handleSubmit(body, actions),
        children: ({ errors, handleChange, isSubmitting, values }) => {
          return /* @__PURE__ */ jsxRuntime.jsxs(helperPlugin.Form, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              TokenTypeSelect.FormHead,
              {
                backUrl: "/settings/transfer-tokens",
                title: {
                  id: "Settings.transferTokens.createPage.title",
                  defaultMessage: "TokenCreate Transfer Token"
                },
                token: transferToken,
                setToken: setTransferToken,
                canEditInputs,
                canRegenerate,
                isSubmitting,
                regenerateUrl: "/admin/transfer/tokens/"
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.ContentLayout, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 6, children: [
              transferToken && Boolean(transferToken?.name) && "accessKey" in transferToken && /* @__PURE__ */ jsxRuntime.jsx(TokenTypeSelect.TokenBox, { token: transferToken.accessKey, tokenType: constants.TRANSFER_TOKEN_TYPE }),
              /* @__PURE__ */ jsxRuntime.jsx(
                FormTransferTokenContainer,
                {
                  errors,
                  onChange: handleChange,
                  canEditInputs,
                  isCreating,
                  values,
                  transferToken
                }
              )
            ] }) })
          ] });
        }
      }
    )
  ] });
};
const ProtectedEditView = () => {
  const permissions = index.useTypedSelector(
    (state) => state.admin_app.permissions.settings?.["transfer-tokens"].read
  );
  return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.CheckPagePermissions, { permissions, children: /* @__PURE__ */ jsxRuntime.jsx(EditView, {}) });
};
const FormTransferTokenContainer = ({
  errors = {},
  onChange,
  canEditInputs,
  isCreating,
  values,
  transferToken = {}
}) => {
  const { formatMessage } = reactIntl.useIntl();
  const typeOptions = [
    {
      value: "push",
      label: {
        id: "Settings.transferTokens.types.push",
        defaultMessage: "Push"
      }
    },
    {
      value: "pull",
      label: {
        id: "Settings.transferTokens.types.pull",
        defaultMessage: "Pull"
      }
    },
    {
      value: "push-pull",
      label: {
        id: "Settings.transferTokens.types.push-pull",
        defaultMessage: "Full Access"
      }
    }
  ];
  return /* @__PURE__ */ jsxRuntime.jsx(
    designSystem.Box,
    {
      background: "neutral0",
      hasRadius: true,
      shadow: "filterShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7,
      children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 4, children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "delta", as: "h2", children: formatMessage({
          id: "global.details",
          defaultMessage: "Details"
        }) }),
        /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Grid, { gap: 5, children: [
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: 6, xs: 12, children: /* @__PURE__ */ jsxRuntime.jsx(
            TokenTypeSelect.TokenName,
            {
              error: errors["name"],
              value: values["name"],
              canEditInputs,
              onChange
            }
          ) }, "name"),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: 6, xs: 12, children: /* @__PURE__ */ jsxRuntime.jsx(
            TokenTypeSelect.TokenDescription,
            {
              error: errors["description"],
              value: values["description"],
              canEditInputs,
              onChange
            }
          ) }, "description"),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: 6, xs: 12, children: /* @__PURE__ */ jsxRuntime.jsx(
            TokenTypeSelect.LifeSpanInput,
            {
              isCreating,
              error: errors["lifespan"],
              value: values["lifespan"],
              onChange,
              token: transferToken
            }
          ) }, "lifespan"),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: 6, xs: 12, children: /* @__PURE__ */ jsxRuntime.jsx(
            TokenTypeSelect.TokenTypeSelect,
            {
              name: "permissions",
              value: values["permissions"],
              error: errors["permissions"],
              label: {
                id: "Settings.tokens.form.type",
                defaultMessage: "Token type"
              },
              onChange: (value) => {
                onChange({ target: { name: "permissions", value } });
              },
              options: typeOptions,
              canEditInputs
            }
          ) }, "permissions")
        ] })
      ] })
    }
  );
};
const LoadingView = ({ transferTokenName }) => {
  const { formatMessage } = reactIntl.useIntl();
  helperPlugin.useFocusWhenNavigate();
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { "aria-busy": "true", children: [
    /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.SettingsPageTitle, { name: "Transfer Tokens" }),
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.HeaderLayout,
      {
        primaryAction: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { disabled: true, startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Check, {}), type: "button", size: "L", children: formatMessage({ id: "global.save", defaultMessage: "Save" }) }),
        title: transferTokenName || formatMessage({
          id: "Settings.transferTokens.createPage.title",
          defaultMessage: "Create Transfer Token"
        })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.ContentLayout, { children: /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.LoadingIndicatorPage, {}) })
  ] });
};
exports.EditView = EditView;
exports.LoadingView = LoadingView;
exports.ProtectedEditView = ProtectedEditView;
//# sourceMappingURL=EditView-NpIDRf6f.js.map
