import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Main, HeaderLayout, Button, ContentLayout, Box, Flex, Typography, Grid, GridItem } from "@strapi/design-system";
import { Link } from "@strapi/design-system/v2";
import { translatedErrors, useNotification, useRBAC, LoadingIndicatorPage, useOverlayBlocker, useAPIErrorHandler, useFocusWhenNavigate, SettingsPageTitle, Form, GenericInput } from "@strapi/helper-plugin";
import { Check, ArrowLeft } from "@strapi/icons";
import { Formik } from "formik";
import pick from "lodash/pick";
import { useIntl } from "react-intl";
import { useLocation, Redirect, useRouteMatch, useHistory, NavLink } from "react-router-dom";
import * as yup from "yup";
import { j as useTypedSelector, p as useEnterprise, M as useUpdateUserMutation, k as useAdminUsers, x as isBaseQueryError } from "./index-kIIXqMj8.mjs";
import { s as selectAdminPermissions, g as getFullName } from "./AuthenticatedApp-tGcMdSKz.mjs";
import { M as MagicLinkCE, S as SelectRoles } from "./SelectRoles-m8yWL1gF.mjs";
import { C as COMMON_USER_SCHEMA } from "./validation-f9rGWFeU.mjs";
import "react-dom/client";
import "invariant";
import "lodash/isFunction";
import "lodash/merge";
import "react-helmet";
import "react-redux";
import "use-context-selector";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query/react";
import "axios";
import "@radix-ui/react-context";
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
import "semver/functions/lt";
import "semver/functions/valid";
import "./useAdminRoles-20_5r44C.mjs";
const EDIT_VALIDATION_SCHEMA = yup.object().shape({
  ...COMMON_USER_SCHEMA,
  isActive: yup.bool(),
  roles: yup.array().min(1, translatedErrors.required).required(translatedErrors.required)
});
const fieldsToPick = ["email", "firstname", "lastname", "username", "isActive", "roles"];
const EditPage = () => {
  const { formatMessage } = useIntl();
  const match = useRouteMatch("/settings/users/:id");
  const id = match?.params?.id ?? "";
  const { push } = useHistory();
  const toggleNotification = useNotification();
  const { lockApp, unlockApp } = useOverlayBlocker();
  const MagicLink = useEnterprise(
    MagicLinkCE,
    async () => (await import("./MagicLinkEE-XTXCIzBY.mjs")).MagicLinkEE
  );
  const {
    _unstableFormatAPIError: formatAPIError,
    _unstableFormatValidationErrors: formatValidationErrors
  } = useAPIErrorHandler();
  const permissions = useTypedSelector(selectAdminPermissions);
  const {
    isLoading: isLoadingRBAC,
    allowedActions: { canUpdate }
  } = useRBAC({
    read: permissions.settings?.users.read ?? [],
    update: permissions.settings?.users.update ?? []
  });
  const [updateUser] = useUpdateUserMutation();
  useFocusWhenNavigate();
  const {
    data,
    error,
    isLoading: isLoadingAdminUsers
  } = useAdminUsers(
    { id },
    {
      refetchOnMountOrArgChange: true
    }
  );
  const [user] = data?.users ?? [];
  React.useEffect(() => {
    if (error) {
      if (error.name === "UnauthorizedError") {
        toggleNotification({
          type: "info",
          message: {
            id: "notification.permission.not-allowed-read",
            defaultMessage: "You are not allowed to see this document"
          }
        });
        push("/");
      } else {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: formatAPIError(error) }
        });
      }
    }
  }, [error, formatAPIError, push, toggleNotification]);
  const isLoading = isLoadingAdminUsers || !MagicLink || isLoadingRBAC;
  if (isLoading) {
    return /* @__PURE__ */ jsxs(Main, { "aria-busy": "true", children: [
      /* @__PURE__ */ jsx(SettingsPageTitle, { name: "Users" }),
      /* @__PURE__ */ jsx(
        HeaderLayout,
        {
          primaryAction: /* @__PURE__ */ jsx(Button, { disabled: true, startIcon: /* @__PURE__ */ jsx(Check, {}), type: "button", size: "L", children: formatMessage({ id: "global.save", defaultMessage: "Save" }) }),
          title: formatMessage({
            id: "app.containers.Users.EditPage.header.label-loading",
            defaultMessage: "Edit user"
          }),
          navigationAction: /* @__PURE__ */ jsx(
            Link,
            {
              as: NavLink,
              startIcon: /* @__PURE__ */ jsx(ArrowLeft, {}),
              to: "/settings/users?pageSize=10&page=1&sort=firstname",
              children: formatMessage({
                id: "global.back",
                defaultMessage: "Back"
              })
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(ContentLayout, { children: /* @__PURE__ */ jsx(LoadingIndicatorPage, {}) })
    ] });
  }
  const initialData = {
    ...pick(user, fieldsToPick),
    roles: user.roles.map(({ id: id2 }) => id2),
    password: "",
    confirmPassword: ""
  };
  const handleSubmit = async (body, actions) => {
    lockApp?.();
    const { confirmPassword, password, ...bodyRest } = body;
    const res = await updateUser({
      id,
      ...bodyRest,
      // The password should not be sent if it wasn't changed,
      // it leads to a validation error if the string is empty
      password: password === "" ? void 0 : password
    });
    if ("error" in res && isBaseQueryError(res.error)) {
      if (res.error.name === "ValidationError") {
        actions.setErrors(formatValidationErrors(res.error));
      }
      toggleNotification({
        type: "warning",
        message: formatAPIError(res.error)
      });
    } else {
      toggleNotification({
        type: "success",
        message: formatMessage({ id: "notification.success.saved", defaultMessage: "Saved" })
      });
      actions.setValues({
        ...pick(body, fieldsToPick),
        password: "",
        confirmPassword: ""
      });
    }
    unlockApp?.();
  };
  return /* @__PURE__ */ jsxs(Main, { children: [
    /* @__PURE__ */ jsx(SettingsPageTitle, { name: "Users" }),
    /* @__PURE__ */ jsx(
      Formik,
      {
        onSubmit: handleSubmit,
        initialValues: initialData,
        validateOnChange: false,
        validationSchema: EDIT_VALIDATION_SCHEMA,
        children: ({ errors, values, handleChange, isSubmitting, dirty }) => {
          return /* @__PURE__ */ jsxs(Form, { children: [
            /* @__PURE__ */ jsx(
              HeaderLayout,
              {
                primaryAction: /* @__PURE__ */ jsx(
                  Button,
                  {
                    disabled: isSubmitting || !canUpdate ? true : !dirty,
                    startIcon: /* @__PURE__ */ jsx(Check, {}),
                    loading: isSubmitting,
                    type: "submit",
                    size: "L",
                    children: formatMessage({ id: "global.save", defaultMessage: "Save" })
                  }
                ),
                title: formatMessage(
                  {
                    id: "app.containers.Users.EditPage.header.label",
                    defaultMessage: "Edit {name}"
                  },
                  {
                    name: initialData.username || getFullName(initialData?.firstname ?? "", initialData.lastname)
                  }
                ),
                navigationAction: /* @__PURE__ */ jsx(
                  Link,
                  {
                    as: NavLink,
                    startIcon: /* @__PURE__ */ jsx(ArrowLeft, {}),
                    to: "/settings/users?pageSize=10&page=1&sort=firstname",
                    children: formatMessage({
                      id: "global.back",
                      defaultMessage: "Back"
                    })
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxs(ContentLayout, { children: [
              user?.registrationToken && /* @__PURE__ */ jsx(Box, { paddingBottom: 6, children: /* @__PURE__ */ jsx(MagicLink, { registrationToken: user.registrationToken }) }),
              /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "stretch", gap: 7, children: [
                /* @__PURE__ */ jsx(
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
                        id: "app.components.Users.ModalCreateBody.block-title.details",
                        defaultMessage: "Details"
                      }) }),
                      /* @__PURE__ */ jsx(Grid, { gap: 5, children: LAYOUT.map(
                        (row) => row.map((input) => {
                          return /* @__PURE__ */ jsx(GridItem, { ...input.size, children: /* @__PURE__ */ jsx(
                            GenericInput,
                            {
                              ...input,
                              disabled: !canUpdate,
                              error: errors[input.name],
                              onChange: handleChange,
                              value: values[input.name]
                            }
                          ) }, input.name);
                        })
                      ) })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsx(
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
                        id: "global.roles",
                        defaultMessage: "User's role"
                      }) }),
                      /* @__PURE__ */ jsx(Grid, { gap: 5, children: /* @__PURE__ */ jsx(GridItem, { col: 6, xs: 12, children: /* @__PURE__ */ jsx(
                        SelectRoles,
                        {
                          disabled: !canUpdate,
                          error: errors.roles,
                          onChange: handleChange,
                          value: values.roles
                        }
                      ) }) })
                    ] })
                  }
                )
              ] })
            ] })
          ] });
        }
      }
    )
  ] });
};
const LAYOUT = [
  [
    {
      intlLabel: {
        id: "Auth.form.firstname.label",
        defaultMessage: "First name"
      },
      name: "firstname",
      placeholder: {
        id: "Auth.form.firstname.placeholder",
        defaultMessage: "e.g. Kai"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      },
      required: true
    },
    {
      intlLabel: {
        id: "Auth.form.lastname.label",
        defaultMessage: "Last name"
      },
      name: "lastname",
      placeholder: {
        id: "Auth.form.lastname.placeholder",
        defaultMessage: "e.g. Doe"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      }
    }
  ],
  [
    {
      intlLabel: {
        id: "Auth.form.email.label",
        defaultMessage: "Email"
      },
      name: "email",
      placeholder: {
        id: "Auth.form.email.placeholder",
        defaultMessage: "e.g. kai.doe@strapi.io"
      },
      type: "email",
      size: {
        col: 6,
        xs: 12
      },
      required: true
    },
    {
      intlLabel: {
        id: "Auth.form.username.label",
        defaultMessage: "Username"
      },
      name: "username",
      placeholder: {
        id: "Auth.form.username.placeholder",
        defaultMessage: "e.g. Kai_Doe"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      }
    }
  ],
  [
    {
      intlLabel: {
        id: "global.password",
        defaultMessage: "Password"
      },
      name: "password",
      type: "password",
      size: {
        col: 6,
        xs: 12
      },
      autoComplete: "new-password"
    },
    {
      intlLabel: {
        id: "Auth.form.confirmPassword.label",
        defaultMessage: "Password confirmation"
      },
      name: "confirmPassword",
      type: "password",
      size: {
        col: 6,
        xs: 12
      },
      autoComplete: "new-password"
    }
  ],
  [
    {
      intlLabel: {
        id: "Auth.form.active.label",
        defaultMessage: "Active"
      },
      name: "isActive",
      type: "bool",
      size: {
        col: 6,
        xs: 12
      }
    }
  ]
];
const ProtectedEditPage = () => {
  const toggleNotification = useNotification();
  const permissions = useTypedSelector(selectAdminPermissions);
  const {
    isLoading,
    allowedActions: { canRead, canUpdate }
  } = useRBAC({
    read: permissions.settings?.users.read ?? [],
    update: permissions.settings?.users.update ?? []
  });
  const { state } = useLocation();
  const from = state?.from ?? "/";
  React.useEffect(() => {
    if (!isLoading) {
      if (!canRead && !canUpdate) {
        toggleNotification({
          type: "info",
          message: {
            id: "notification.permission.not-allowed-read",
            defaultMessage: "You are not allowed to see this document"
          }
        });
      }
    }
  }, [isLoading, canRead, canUpdate, toggleNotification]);
  if (isLoading) {
    return /* @__PURE__ */ jsx(LoadingIndicatorPage, {});
  }
  if (!canRead && !canUpdate) {
    return /* @__PURE__ */ jsx(Redirect, { to: from });
  }
  return /* @__PURE__ */ jsx(EditPage, {});
};
export {
  EditPage,
  ProtectedEditPage
};
//# sourceMappingURL=EditPage-5KhKfTwr.mjs.map
