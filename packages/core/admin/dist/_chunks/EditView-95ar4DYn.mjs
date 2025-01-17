import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Main, ContentLayout, Flex, Box, Typography, Grid, GridItem, HeaderLayout, Button } from "@strapi/design-system";
import { translatedErrors, CheckPagePermissions, useFocusWhenNavigate, useOverlayBlocker, useNotification, useTracking, useGuidedTour, useRBAC, useAPIErrorHandler, SettingsPageTitle, Form, LoadingIndicatorPage } from "@strapi/helper-plugin";
import { Check } from "@strapi/icons";
import { Formik } from "formik";
import { useIntl } from "react-intl";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import * as yup from "yup";
import { j as useTypedSelector, x as isBaseQueryError } from "./index-kIIXqMj8.mjs";
import { u as useGetTransferTokenQuery, a as useCreateTransferTokenMutation, b as useUpdateTransferTokenMutation } from "./transferTokens-dfBT86WR.mjs";
import { T as TRANSFER_TOKEN_TYPE } from "./constants-fJt30IoY.mjs";
import { F as FormHead, c as TokenBox, T as TokenName, a as TokenDescription, L as LifeSpanInput, b as TokenTypeSelect } from "./TokenTypeSelect-I0w1ccSn.mjs";
import "react-dom/client";
import "invariant";
import "lodash/isFunction";
import "lodash/merge";
import "lodash/pick";
import "react-helmet";
import "react-redux";
import "use-context-selector";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query/react";
import "axios";
import "@radix-ui/react-context";
import "@strapi/design-system/v2";
import "lodash/camelCase";
import "styled-components";
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
import "date-fns";
import "date-fns/locale";
const schema = yup.object().shape({
  name: yup.string().max(100).required(translatedErrors.required),
  description: yup.string().nullable(),
  lifespan: yup.number().integer().min(0).nullable().defined(translatedErrors.required),
  permissions: yup.string().required(translatedErrors.required)
});
const EditView = () => {
  useFocusWhenNavigate();
  const { formatMessage } = useIntl();
  const { lockApp, unlockApp } = useOverlayBlocker();
  const toggleNotification = useNotification();
  const history = useHistory();
  const { state: locationState } = useLocation();
  const [transferToken, setTransferToken] = React.useState(
    locationState && "accessKey" in locationState.transferToken ? {
      ...locationState.transferToken
    } : null
  );
  const { trackUsage } = useTracking();
  const { setCurrentStep } = useGuidedTour();
  const permissions = useTypedSelector(
    (state) => state.admin_app.permissions.settings?.["transfer-tokens"]
  );
  const {
    allowedActions: { canCreate, canUpdate, canRegenerate }
  } = useRBAC(permissions);
  const match = useRouteMatch("/settings/transfer-tokens/:id");
  const id = match?.params?.id;
  const isCreating = id === "create";
  const {
    _unstableFormatAPIError: formatAPIError,
    _unstableFormatValidationErrors: formatValidationErrors
  } = useAPIErrorHandler();
  React.useEffect(() => {
    trackUsage(isCreating ? "didAddTokenFromList" : "didEditTokenFromList", {
      tokenType: TRANSFER_TOKEN_TYPE
    });
  }, [isCreating, trackUsage]);
  const { data, error } = useGetTransferTokenQuery(id, {
    skip: isCreating || transferToken !== null || !id
  });
  React.useEffect(() => {
    if (error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
    }
  }, [error, formatAPIError, toggleNotification]);
  React.useEffect(() => {
    if (data) {
      setTransferToken(data);
    }
  }, [data]);
  const [createToken] = useCreateTransferTokenMutation();
  const [updateToken] = useUpdateTransferTokenMutation();
  const handleSubmit = async (body, formik) => {
    trackUsage(isCreating ? "willCreateToken" : "willEditToken", {
      tokenType: TRANSFER_TOKEN_TYPE
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
            if (isBaseQueryError(res.error) && res.error.name === "ValidationError") {
              formik.setErrors(formatValidationErrors(res.error));
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
            tokenType: TRANSFER_TOKEN_TYPE
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
            if (isBaseQueryError(res.error) && res.error.name === "ValidationError") {
              formik.setErrors(formatValidationErrors(res.error));
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
            tokenType: TRANSFER_TOKEN_TYPE
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
    return /* @__PURE__ */ jsx(LoadingView, {});
  }
  return /* @__PURE__ */ jsxs(Main, { children: [
    /* @__PURE__ */ jsx(SettingsPageTitle, { name: "Transfer Tokens" }),
    /* @__PURE__ */ jsx(
      Formik,
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
          return /* @__PURE__ */ jsxs(Form, { children: [
            /* @__PURE__ */ jsx(
              FormHead,
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
            /* @__PURE__ */ jsx(ContentLayout, { children: /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "stretch", gap: 6, children: [
              transferToken && Boolean(transferToken?.name) && "accessKey" in transferToken && /* @__PURE__ */ jsx(TokenBox, { token: transferToken.accessKey, tokenType: TRANSFER_TOKEN_TYPE }),
              /* @__PURE__ */ jsx(
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
  const permissions = useTypedSelector(
    (state) => state.admin_app.permissions.settings?.["transfer-tokens"].read
  );
  return /* @__PURE__ */ jsx(CheckPagePermissions, { permissions, children: /* @__PURE__ */ jsx(EditView, {}) });
};
const FormTransferTokenContainer = ({
  errors = {},
  onChange,
  canEditInputs,
  isCreating,
  values,
  transferToken = {}
}) => {
  const { formatMessage } = useIntl();
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
  return /* @__PURE__ */ jsx(
    Box,
    {
      background: "neutral0",
      hasRadius: true,
      shadow: "filterShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7,
      children: /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "stretch", gap: 4, children: [
        /* @__PURE__ */ jsx(Typography, { variant: "delta", as: "h2", children: formatMessage({
          id: "global.details",
          defaultMessage: "Details"
        }) }),
        /* @__PURE__ */ jsxs(Grid, { gap: 5, children: [
          /* @__PURE__ */ jsx(GridItem, { col: 6, xs: 12, children: /* @__PURE__ */ jsx(
            TokenName,
            {
              error: errors["name"],
              value: values["name"],
              canEditInputs,
              onChange
            }
          ) }, "name"),
          /* @__PURE__ */ jsx(GridItem, { col: 6, xs: 12, children: /* @__PURE__ */ jsx(
            TokenDescription,
            {
              error: errors["description"],
              value: values["description"],
              canEditInputs,
              onChange
            }
          ) }, "description"),
          /* @__PURE__ */ jsx(GridItem, { col: 6, xs: 12, children: /* @__PURE__ */ jsx(
            LifeSpanInput,
            {
              isCreating,
              error: errors["lifespan"],
              value: values["lifespan"],
              onChange,
              token: transferToken
            }
          ) }, "lifespan"),
          /* @__PURE__ */ jsx(GridItem, { col: 6, xs: 12, children: /* @__PURE__ */ jsx(
            TokenTypeSelect,
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
  const { formatMessage } = useIntl();
  useFocusWhenNavigate();
  return /* @__PURE__ */ jsxs(Main, { "aria-busy": "true", children: [
    /* @__PURE__ */ jsx(SettingsPageTitle, { name: "Transfer Tokens" }),
    /* @__PURE__ */ jsx(
      HeaderLayout,
      {
        primaryAction: /* @__PURE__ */ jsx(Button, { disabled: true, startIcon: /* @__PURE__ */ jsx(Check, {}), type: "button", size: "L", children: formatMessage({ id: "global.save", defaultMessage: "Save" }) }),
        title: transferTokenName || formatMessage({
          id: "Settings.transferTokens.createPage.title",
          defaultMessage: "Create Transfer Token"
        })
      }
    ),
    /* @__PURE__ */ jsx(ContentLayout, { children: /* @__PURE__ */ jsx(LoadingIndicatorPage, {}) })
  ] });
};
export {
  EditView,
  LoadingView,
  ProtectedEditView
};
//# sourceMappingURL=EditView-95ar4DYn.mjs.map
