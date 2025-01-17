"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const designSystem = require("@strapi/design-system");
const helperPlugin = require("@strapi/helper-plugin");
const Icons = require("@strapi/icons");
const formik = require("formik");
const reactIntl = require("react-intl");
const yup = require("yup");
const index = require("./index-1g9GBMjI.js");
const useAdminRoles = require("./useAdminRoles-d6D5V2FI.js");
require("react-dom/client");
require("invariant");
require("lodash/isFunction");
require("lodash/merge");
require("lodash/pick");
require("react-helmet");
require("react-router-dom");
require("react");
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
const yup__namespace = /* @__PURE__ */ _interopNamespace(yup);
const schema = yup__namespace.object().shape({
  autoRegister: yup__namespace.bool().required(helperPlugin.translatedErrors.required),
  defaultRole: yup__namespace.mixed().when("autoRegister", (value, initSchema) => {
    return value ? initSchema.required(helperPlugin.translatedErrors.required) : initSchema.nullable();
  }),
  ssoLockedRoles: yup__namespace.array().nullable().of(
    yup__namespace.mixed().when("ssoLockedRoles", (value, initSchema) => {
      return value ? initSchema.required(helperPlugin.translatedErrors.required) : initSchema.nullable();
    })
  )
});
const SingleSignOnPage = () => {
  helperPlugin.useFocusWhenNavigate();
  const { formatMessage } = reactIntl.useIntl();
  const permissions = index.useTypedSelector((state) => state.admin_app.permissions);
  const { lockApp, unlockApp } = helperPlugin.useOverlayBlocker();
  const toggleNotification = helperPlugin.useNotification();
  const {
    _unstableFormatAPIError: formatAPIError,
    _unstableFormatValidationErrors: formatValidationErrors
  } = helperPlugin.useAPIErrorHandler();
  const { isLoading: isLoadingProviderOptions, data } = index.useGetProviderOptionsQuery();
  const [updateProviderOptions, { isLoading: isSubmittingForm }] = index.useUpdateProviderOptionsMutation();
  const {
    isLoading: isLoadingPermissions,
    allowedActions: { canUpdate, canReadRoles }
  } = helperPlugin.useRBAC({
    ...permissions.settings?.sso,
    readRoles: permissions.settings?.roles.read ?? []
  });
  const { roles, isLoading: isLoadingRoles } = useAdminRoles.useAdminRoles(void 0, {
    skip: !canReadRoles
  });
  const handleSubmit = async (body, formik2) => {
    lockApp();
    try {
      const res = await updateProviderOptions(body);
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
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Layout, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.SettingsPageTitle, { name: "SSO" }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Main, { "aria-busy": isSubmittingForm || isLoadingData, tabIndex: -1, children: /* @__PURE__ */ jsxRuntime.jsx(
      formik.Formik,
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
        children: ({ handleChange, isSubmitting, values, setFieldValue, dirty, errors }) => /* @__PURE__ */ jsxRuntime.jsxs(helperPlugin.Form, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.HeaderLayout,
            {
              primaryAction: /* @__PURE__ */ jsxRuntime.jsx(
                designSystem.Button,
                {
                  disabled: !dirty,
                  loading: isSubmitting,
                  startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Check, {}),
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
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.ContentLayout, { children: isSubmitting || isLoadingData ? /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.LoadingIndicatorPage, {}) : /* @__PURE__ */ jsxRuntime.jsxs(
            designSystem.Flex,
            {
              direction: "column",
              alignItems: "stretch",
              gap: 4,
              background: "neutral0",
              padding: 6,
              shadow: "filterShadow",
              hasRadius: true,
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "delta", as: "h2", children: formatMessage({
                  id: "global.settings",
                  defaultMessage: "Settings"
                }) }),
                /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Grid, { gap: 4, children: [
                  /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: 6, s: 12, children: /* @__PURE__ */ jsxRuntime.jsx(
                    designSystem.ToggleInput,
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
                  /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: 6, s: 12, children: /* @__PURE__ */ jsxRuntime.jsx(
                    designSystem.Select,
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
                      children: roles.map(({ id, name }) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.Option, { value: id.toString(), children: name }, id))
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: 6, s: 12, children: /* @__PURE__ */ jsxRuntime.jsx(
                    designSystem.MultiSelect,
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
                      children: roles.map(({ id, name }) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.MultiSelectOption, { value: id.toString(), children: name }, id))
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
  const permissions = index.useTypedSelector((state) => state.admin_app.permissions.settings?.sso?.main);
  return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.CheckPagePermissions, { permissions, children: /* @__PURE__ */ jsxRuntime.jsx(SingleSignOnPage, {}) });
};
exports.ProtectedSSO = ProtectedSSO;
exports.SingleSignOnPage = SingleSignOnPage;
//# sourceMappingURL=SingleSignOnPage-mgyKKMYv.js.map
