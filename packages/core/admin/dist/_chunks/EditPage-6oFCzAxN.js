"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const React = require("react");
const designSystem = require("@strapi/design-system");
const v2 = require("@strapi/design-system/v2");
const helperPlugin = require("@strapi/helper-plugin");
const Icons = require("@strapi/icons");
const formik = require("formik");
const pick = require("lodash/pick");
const reactIntl = require("react-intl");
const reactRouterDom = require("react-router-dom");
const yup = require("yup");
const index = require("./index-1g9GBMjI.js");
const AuthenticatedApp = require("./AuthenticatedApp-TJmmk67-.js");
const SelectRoles = require("./SelectRoles-TA31rsEq.js");
const validation = require("./validation-j25hbp81.js");
require("react-dom/client");
require("invariant");
require("lodash/isFunction");
require("lodash/merge");
require("react-helmet");
require("react-redux");
require("use-context-selector");
require("@reduxjs/toolkit");
require("@reduxjs/toolkit/query/react");
require("axios");
require("@radix-ui/react-context");
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
require("semver/functions/lt");
require("semver/functions/valid");
require("./useAdminRoles-d6D5V2FI.js");
const _interopDefault = (e) => e && e.__esModule ? e : { default: e };
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
const pick__default = /* @__PURE__ */ _interopDefault(pick);
const yup__namespace = /* @__PURE__ */ _interopNamespace(yup);
const EDIT_VALIDATION_SCHEMA = yup__namespace.object().shape({
  ...validation.COMMON_USER_SCHEMA,
  isActive: yup__namespace.bool(),
  roles: yup__namespace.array().min(1, helperPlugin.translatedErrors.required).required(helperPlugin.translatedErrors.required)
});
const fieldsToPick = ["email", "firstname", "lastname", "username", "isActive", "roles"];
const EditPage = () => {
  const { formatMessage } = reactIntl.useIntl();
  const match = reactRouterDom.useRouteMatch("/settings/users/:id");
  const id = match?.params?.id ?? "";
  const { push } = reactRouterDom.useHistory();
  const toggleNotification = helperPlugin.useNotification();
  const { lockApp, unlockApp } = helperPlugin.useOverlayBlocker();
  const MagicLink = index.useEnterprise(
    SelectRoles.MagicLinkCE,
    async () => (await Promise.resolve().then(() => require("./MagicLinkEE-3ilEUqJM.js"))).MagicLinkEE
  );
  const {
    _unstableFormatAPIError: formatAPIError,
    _unstableFormatValidationErrors: formatValidationErrors
  } = helperPlugin.useAPIErrorHandler();
  const permissions = index.useTypedSelector(AuthenticatedApp.selectAdminPermissions);
  const {
    isLoading: isLoadingRBAC,
    allowedActions: { canUpdate }
  } = helperPlugin.useRBAC({
    read: permissions.settings?.users.read ?? [],
    update: permissions.settings?.users.update ?? []
  });
  const [updateUser] = index.useUpdateUserMutation();
  helperPlugin.useFocusWhenNavigate();
  const {
    data,
    error,
    isLoading: isLoadingAdminUsers
  } = index.useAdminUsers(
    { id },
    {
      refetchOnMountOrArgChange: true
    }
  );
  const [user] = data?.users ?? [];
  React__namespace.useEffect(() => {
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
    return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { "aria-busy": "true", children: [
      /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.SettingsPageTitle, { name: "Users" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.HeaderLayout,
        {
          primaryAction: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { disabled: true, startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Check, {}), type: "button", size: "L", children: formatMessage({ id: "global.save", defaultMessage: "Save" }) }),
          title: formatMessage({
            id: "app.containers.Users.EditPage.header.label-loading",
            defaultMessage: "Edit user"
          }),
          navigationAction: /* @__PURE__ */ jsxRuntime.jsx(
            v2.Link,
            {
              as: reactRouterDom.NavLink,
              startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.ArrowLeft, {}),
              to: "/settings/users?pageSize=10&page=1&sort=firstname",
              children: formatMessage({
                id: "global.back",
                defaultMessage: "Back"
              })
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.ContentLayout, { children: /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.LoadingIndicatorPage, {}) })
    ] });
  }
  const initialData = {
    ...pick__default.default(user, fieldsToPick),
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
    if ("error" in res && index.isBaseQueryError(res.error)) {
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
        ...pick__default.default(body, fieldsToPick),
        password: "",
        confirmPassword: ""
      });
    }
    unlockApp?.();
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.SettingsPageTitle, { name: "Users" }),
    /* @__PURE__ */ jsxRuntime.jsx(
      formik.Formik,
      {
        onSubmit: handleSubmit,
        initialValues: initialData,
        validateOnChange: false,
        validationSchema: EDIT_VALIDATION_SCHEMA,
        children: ({ errors, values, handleChange, isSubmitting, dirty }) => {
          return /* @__PURE__ */ jsxRuntime.jsxs(helperPlugin.Form, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              designSystem.HeaderLayout,
              {
                primaryAction: /* @__PURE__ */ jsxRuntime.jsx(
                  designSystem.Button,
                  {
                    disabled: isSubmitting || !canUpdate ? true : !dirty,
                    startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Check, {}),
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
                    name: initialData.username || AuthenticatedApp.getFullName(initialData?.firstname ?? "", initialData.lastname)
                  }
                ),
                navigationAction: /* @__PURE__ */ jsxRuntime.jsx(
                  v2.Link,
                  {
                    as: reactRouterDom.NavLink,
                    startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.ArrowLeft, {}),
                    to: "/settings/users?pageSize=10&page=1&sort=firstname",
                    children: formatMessage({
                      id: "global.back",
                      defaultMessage: "Back"
                    })
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsxs(designSystem.ContentLayout, { children: [
              user?.registrationToken && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingBottom: 6, children: /* @__PURE__ */ jsxRuntime.jsx(MagicLink, { registrationToken: user.registrationToken }) }),
              /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 7, children: [
                /* @__PURE__ */ jsxRuntime.jsx(
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
                        id: "app.components.Users.ModalCreateBody.block-title.details",
                        defaultMessage: "Details"
                      }) }),
                      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Grid, { gap: 5, children: LAYOUT.map(
                        (row) => row.map((input) => {
                          return /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { ...input.size, children: /* @__PURE__ */ jsxRuntime.jsx(
                            helperPlugin.GenericInput,
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
                /* @__PURE__ */ jsxRuntime.jsx(
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
                        id: "global.roles",
                        defaultMessage: "User's role"
                      }) }),
                      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Grid, { gap: 5, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: 6, xs: 12, children: /* @__PURE__ */ jsxRuntime.jsx(
                        SelectRoles.SelectRoles,
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
  const toggleNotification = helperPlugin.useNotification();
  const permissions = index.useTypedSelector(AuthenticatedApp.selectAdminPermissions);
  const {
    isLoading,
    allowedActions: { canRead, canUpdate }
  } = helperPlugin.useRBAC({
    read: permissions.settings?.users.read ?? [],
    update: permissions.settings?.users.update ?? []
  });
  const { state } = reactRouterDom.useLocation();
  const from = state?.from ?? "/";
  React__namespace.useEffect(() => {
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
    return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.LoadingIndicatorPage, {});
  }
  if (!canRead && !canUpdate) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Redirect, { to: from });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(EditPage, {});
};
exports.EditPage = EditPage;
exports.ProtectedEditPage = ProtectedEditPage;
//# sourceMappingURL=EditPage-6oFCzAxN.js.map
