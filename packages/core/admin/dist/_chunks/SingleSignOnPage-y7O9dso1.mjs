import { jsx, jsxs } from "react/jsx-runtime";
import { Layout, Main, HeaderLayout, Button, ContentLayout, Flex, Typography, Grid, GridItem, ToggleInput, Select, Option, MultiSelect, MultiSelectOption } from "@strapi/design-system";
import { translatedErrors, CheckPagePermissions, useFocusWhenNavigate, useOverlayBlocker, useNotification, useAPIErrorHandler, useRBAC, SettingsPageTitle, Form, LoadingIndicatorPage } from "@strapi/helper-plugin";
import { Check } from "@strapi/icons";
import { Formik } from "formik";
import { useIntl } from "react-intl";
import * as yup from "yup";
import { j as useTypedSelector, W as useGetProviderOptionsQuery, X as useUpdateProviderOptionsMutation, x as isBaseQueryError } from "./index-kIIXqMj8.mjs";
import { u as useAdminRoles } from "./useAdminRoles-20_5r44C.mjs";
import "react-dom/client";
import "invariant";
import "lodash/isFunction";
import "lodash/merge";
import "lodash/pick";
import "react-helmet";
import "react-router-dom";
import "react";
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
const schema = yup.object().shape({
  autoRegister: yup.bool().required(translatedErrors.required),
  defaultRole: yup.mixed().when("autoRegister", (value, initSchema) => {
    return value ? initSchema.required(translatedErrors.required) : initSchema.nullable();
  }),
  ssoLockedRoles: yup.array().nullable().of(
    yup.mixed().when("ssoLockedRoles", (value, initSchema) => {
      return value ? initSchema.required(translatedErrors.required) : initSchema.nullable();
    })
  )
});
const SingleSignOnPage = () => {
  useFocusWhenNavigate();
  const { formatMessage } = useIntl();
  const permissions = useTypedSelector((state) => state.admin_app.permissions);
  const { lockApp, unlockApp } = useOverlayBlocker();
  const toggleNotification = useNotification();
  const {
    _unstableFormatAPIError: formatAPIError,
    _unstableFormatValidationErrors: formatValidationErrors
  } = useAPIErrorHandler();
  const { isLoading: isLoadingProviderOptions, data } = useGetProviderOptionsQuery();
  const [updateProviderOptions, { isLoading: isSubmittingForm }] = useUpdateProviderOptionsMutation();
  const {
    isLoading: isLoadingPermissions,
    allowedActions: { canUpdate, canReadRoles }
  } = useRBAC({
    ...permissions.settings?.sso,
    readRoles: permissions.settings?.roles.read ?? []
  });
  const { roles, isLoading: isLoadingRoles } = useAdminRoles(void 0, {
    skip: !canReadRoles
  });
  const handleSubmit = async (body, formik) => {
    lockApp();
    try {
      const res = await updateProviderOptions(body);
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
      toggleNotification({
        type: "success",
        message: { id: "notification.success.saved" }
      });
    } catch (err) {
      toggleNotification({
        type: "warning",
        message: {
          id: "notification.error",
          defaultMessage: "An error occurred, please try again."
        }
      });
    } finally {
      unlockApp();
    }
  };
  const isLoadingData = isLoadingRoles || isLoadingPermissions || isLoadingProviderOptions;
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(SettingsPageTitle, { name: "SSO" }),
    /* @__PURE__ */ jsx(Main, { "aria-busy": isSubmittingForm || isLoadingData, tabIndex: -1, children: /* @__PURE__ */ jsx(
      Formik,
      {
        onSubmit: handleSubmit,
        initialValues: data || {
          autoRegister: false,
          defaultRole: null,
          ssoLockedRoles: null
        },
        validationSchema: schema,
        validateOnChange: false,
        enableReinitialize: true,
        children: ({ handleChange, isSubmitting, values, setFieldValue, dirty, errors }) => /* @__PURE__ */ jsxs(Form, { children: [
          /* @__PURE__ */ jsx(
            HeaderLayout,
            {
              primaryAction: /* @__PURE__ */ jsx(
                Button,
                {
                  disabled: !dirty,
                  loading: isSubmitting,
                  startIcon: /* @__PURE__ */ jsx(Check, {}),
                  type: "submit",
                  size: "L",
                  children: formatMessage({
                    id: "global.save",
                    defaultMessage: "Save"
                  })
                }
              ),
              title: formatMessage({
                id: "Settings.sso.title",
                defaultMessage: "Single Sign-On"
              }),
              subtitle: formatMessage({
                id: "Settings.sso.description",
                defaultMessage: "Configure the settings for the Single Sign-On feature."
              })
            }
          ),
          /* @__PURE__ */ jsx(ContentLayout, { children: isSubmitting || isLoadingData ? /* @__PURE__ */ jsx(LoadingIndicatorPage, {}) : /* @__PURE__ */ jsxs(
            Flex,
            {
              direction: "column",
              alignItems: "stretch",
              gap: 4,
              background: "neutral0",
              padding: 6,
              shadow: "filterShadow",
              hasRadius: true,
              children: [
                /* @__PURE__ */ jsx(Typography, { variant: "delta", as: "h2", children: formatMessage({
                  id: "global.settings",
                  defaultMessage: "Settings"
                }) }),
                /* @__PURE__ */ jsxs(Grid, { gap: 4, children: [
                  /* @__PURE__ */ jsx(GridItem, { col: 6, s: 12, children: /* @__PURE__ */ jsx(
                    ToggleInput,
                    {
                      disabled: !canUpdate,
                      checked: values.autoRegister,
                      hint: formatMessage({
                        id: "Settings.sso.form.registration.description",
                        defaultMessage: "Create new user on SSO login if no account exists"
                      }),
                      label: formatMessage({
                        id: "Settings.sso.form.registration.label",
                        defaultMessage: "Auto-registration"
                      }),
                      name: "autoRegister",
                      offLabel: formatMessage({
                        id: "app.components.ToggleCheckbox.off-label",
                        defaultMessage: "Off"
                      }),
                      onLabel: formatMessage({
                        id: "app.components.ToggleCheckbox.on-label",
                        defaultMessage: "On"
                      }),
                      onChange: handleChange
                    }
                  ) }),
                  /* @__PURE__ */ jsx(GridItem, { col: 6, s: 12, children: /* @__PURE__ */ jsx(
                    Select,
                    {
                      disabled: !canUpdate,
                      hint: formatMessage({
                        id: "Settings.sso.form.defaultRole.description",
                        defaultMessage: "It will attach the new authenticated user to the selected role"
                      }),
                      error: errors.defaultRole ? formatMessage({
                        id: errors.defaultRole,
                        defaultMessage: errors.defaultRole
                      }) : "",
                      label: formatMessage({
                        id: "Settings.sso.form.defaultRole.label",
                        defaultMessage: "Default role"
                      }),
                      name: "defaultRole",
                      onChange: (value) => handleChange({ target: { name: "defaultRole", value } }),
                      placeholder: formatMessage({
                        id: "components.InputSelect.option.placeholder",
                        defaultMessage: "Choose here"
                      }),
                      value: values.defaultRole,
                      children: roles.map(({ id, name }) => /* @__PURE__ */ jsx(Option, { value: id.toString(), children: name }, id))
                    }
                  ) }),
                  /* @__PURE__ */ jsx(GridItem, { col: 6, s: 12, children: /* @__PURE__ */ jsx(
                    MultiSelect,
                    {
                      disabled: !canUpdate,
                      hint: formatMessage({
                        id: "Settings.sso.form.localAuthenticationLock.description",
                        defaultMessage: "Select the roles for which you want to disable the local authentication"
                      }),
                      error: errors.ssoLockedRoles ? formatMessage({
                        id: errors.ssoLockedRoles,
                        defaultMessage: errors.ssoLockedRoles
                      }) : "",
                      label: formatMessage({
                        id: "Settings.sso.form.localAuthenticationLock.label",
                        defaultMessage: "Local authentication lock-out"
                      }),
                      name: "ssoLockedRoles",
                      onChange: (value) => handleChange({
                        target: {
                          value,
                          name: "ssoLockedRoles"
                        }
                      }),
                      placeholder: formatMessage({
                        id: "components.InputSelect.option.placeholder",
                        defaultMessage: "Choose here"
                      }),
                      onClear: () => setFieldValue("ssoLockedRoles", []),
                      value: values.ssoLockedRoles || [],
                      withTags: true,
                      children: roles.map(({ id, name }) => /* @__PURE__ */ jsx(MultiSelectOption, { value: id.toString(), children: name }, id))
                    }
                  ) })
                ] })
              ]
            }
          ) })
        ] })
      }
    ) })
  ] });
};
const ProtectedSSO = () => {
  const permissions = useTypedSelector((state) => state.admin_app.permissions.settings?.sso?.main);
  return /* @__PURE__ */ jsx(CheckPagePermissions, { permissions, children: /* @__PURE__ */ jsx(SingleSignOnPage, {}) });
};
export {
  ProtectedSSO,
  SingleSignOnPage
};
//# sourceMappingURL=SingleSignOnPage-y7O9dso1.mjs.map
