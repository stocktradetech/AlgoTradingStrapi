"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const React = require("react");
const designSystem = require("@strapi/design-system");
const v2 = require("@strapi/design-system/v2");
const helperPlugin = require("@strapi/helper-plugin");
const Icons = require("@strapi/icons");
const formik = require("formik");
const reactIntl = require("react-intl");
const reactRouterDom = require("react-router-dom");
const yup = require("yup");
const index = require("./index-1g9GBMjI.js");
const useAdminRoles = require("./useAdminRoles-d6D5V2FI.js");
const Permissions = require("./Permissions-6X4HRzSy.js");
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
require("lodash/has");
require("lodash/groupBy");
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
const RoleForm = ({ disabled, role, values, errors, onChange, onBlur }) => {
  const { formatMessage } = reactIntl.useIntl();
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 4, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { justifyContent: "space-between", children: [
      /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "bold", children: role ? role.name : formatMessage({
          id: "global.details",
          defaultMessage: "Details"
        }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "neutral500", variant: "pi", children: role ? role.description : formatMessage({
          id: "Settings.roles.form.description",
          defaultMessage: "Name and description of the role"
        }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { disabled: true, variant: "secondary", children: formatMessage(
        {
          id: "Settings.roles.form.button.users-with-role",
          defaultMessage: "{number, plural, =0 {# users} one {# user} other {# users}} with this role"
        },
        { number: role.usersCount }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Grid, { gap: 4, children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: 6, children: /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.TextInput,
        {
          disabled,
          name: "name",
          error: errors.name && formatMessage({ id: errors.name }),
          label: formatMessage({
            id: "global.name",
            defaultMessage: "Name"
          }),
          onChange,
          onBlur,
          required: true,
          value: values.name || ""
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: 6, children: /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.Textarea,
        {
          disabled,
          label: formatMessage({
            id: "global.description",
            defaultMessage: "Description"
          }),
          id: "description",
          error: errors.name && formatMessage({ id: errors.name }),
          onChange,
          onBlur,
          children: values.description || ""
        }
      ) })
    ] })
  ] }) });
};
const EDIT_ROLE_SCHEMA = yup__namespace.object().shape({
  name: yup__namespace.string().required(helperPlugin.translatedErrors.required),
  description: yup__namespace.string().optional()
});
const EditPage = () => {
  const toggleNotification = helperPlugin.useNotification();
  const { formatMessage } = reactIntl.useIntl();
  const match = reactRouterDom.useRouteMatch("/settings/roles/:id");
  const id = match?.params.id;
  const permissionsRef = React__namespace.useRef(null);
  const { lockApp, unlockApp } = helperPlugin.useOverlayBlocker();
  const { trackUsage } = helperPlugin.useTracking();
  const {
    _unstableFormatAPIError: formatAPIError,
    _unstableFormatValidationErrors: formatValidationErrors
  } = helperPlugin.useAPIErrorHandler();
  const { isLoading: isLoadingPermissionsLayout, data: permissionsLayout } = index.useGetRolePermissionLayoutQuery({
    /**
     * Role here is a query param so if there's no role we pass an empty string
     * which returns us a default layout.
     */
    role: id ?? ""
  });
  const {
    roles,
    isLoading: isRoleLoading,
    refetch: refetchRole
  } = useAdminRoles.useAdminRoles(
    { id },
    {
      refetchOnMountOrArgChange: true
    }
  );
  const role = roles[0] ?? {};
  const { data: permissions, isLoading: isLoadingPermissions } = index.useGetRolePermissionsQuery(
    {
      id
    },
    {
      skip: !id,
      refetchOnMountOrArgChange: true
    }
  );
  const [updateRole] = index.useUpdateRoleMutation();
  const [updateRolePermissions] = index.useUpdateRolePermissionsMutation();
  if (!id) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Redirect, { to: "/settings/roles" });
  }
  const handleEditRoleSubmit = async (data, formik2) => {
    try {
      lockApp();
      const { permissionsToSend, didUpdateConditions } = permissionsRef.current?.getPermissions() ?? {};
      const res = await updateRole({
        id,
        ...data
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
      if (role.code !== "strapi-super-admin" && permissionsToSend) {
        const updateRes = await updateRolePermissions({
          id: res.data.id,
          permissions: permissionsToSend
        });
        if ("error" in updateRes) {
          if (index.isBaseQueryError(updateRes.error) && updateRes.error.name === "ValidationError") {
            formik2.setErrors(formatValidationErrors(updateRes.error));
          } else {
            toggleNotification({
              type: "warning",
              message: formatAPIError(updateRes.error)
            });
          }
          return;
        }
        if (didUpdateConditions) {
          trackUsage("didUpdateConditions");
        }
      }
      permissionsRef.current?.setFormAfterSubmit();
      await refetchRole();
      toggleNotification({
        type: "success",
        message: { id: "notification.success.saved" }
      });
    } catch (error) {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    } finally {
      unlockApp();
    }
  };
  const isFormDisabled = !isRoleLoading && role.code === "strapi-super-admin";
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.SettingsPageTitle, { name: "Roles" }),
    /* @__PURE__ */ jsxRuntime.jsx(
      formik.Formik,
      {
        enableReinitialize: true,
        initialValues: {
          name: role.name ?? "",
          description: role.description ?? ""
        },
        onSubmit: handleEditRoleSubmit,
        validationSchema: EDIT_ROLE_SCHEMA,
        validateOnChange: false,
        children: ({ handleSubmit, values, errors, handleChange, handleBlur, isSubmitting }) => /* @__PURE__ */ jsxRuntime.jsxs("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.HeaderLayout,
            {
              primaryAction: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { gap: 2, children: /* @__PURE__ */ jsxRuntime.jsx(
                designSystem.Button,
                {
                  type: "submit",
                  disabled: role.code === "strapi-super-admin",
                  loading: isSubmitting,
                  size: "L",
                  children: formatMessage({
                    id: "global.save",
                    defaultMessage: "Save"
                  })
                }
              ) }),
              title: formatMessage({
                id: "Settings.roles.edit.title",
                defaultMessage: "Edit a role"
              }),
              subtitle: formatMessage({
                id: "Settings.roles.create.description",
                defaultMessage: "Define the rights given to the role"
              }),
              navigationAction: (
                // @ts-expect-error – the props from the component passed as `as` are not correctly inferred.
                /* @__PURE__ */ jsxRuntime.jsx(v2.Link, { as: reactRouterDom.NavLink, startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.ArrowLeft, {}), to: "/settings/roles", children: formatMessage({
                  id: "global.back",
                  defaultMessage: "Back"
                }) })
              )
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.ContentLayout, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 6, children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              RoleForm,
              {
                disabled: isFormDisabled,
                errors,
                values,
                onChange: handleChange,
                onBlur: handleBlur,
                role
              }
            ),
            !isLoadingPermissionsLayout && !isRoleLoading && !isLoadingPermissions && permissionsLayout ? /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { shadow: "filterShadow", hasRadius: true, children: /* @__PURE__ */ jsxRuntime.jsx(
              Permissions.Permissions,
              {
                isFormDisabled,
                permissions,
                ref: permissionsRef,
                layout: permissionsLayout
              }
            ) }) : /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true, children: /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.LoadingIndicatorPage, {}) })
          ] }) })
        ] })
      }
    )
  ] });
};
const ProtectedEditPage = () => {
  const permissions = index.useTypedSelector((state) => state.admin_app.permissions.settings?.roles);
  const {
    isLoading,
    allowedActions: { canRead, canUpdate }
  } = helperPlugin.useRBAC(permissions);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.LoadingIndicatorPage, {});
  }
  if (!canRead && !canUpdate) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Redirect, { to: "/" });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(EditPage, {});
};
exports.EditPage = EditPage;
exports.ProtectedEditPage = ProtectedEditPage;
//# sourceMappingURL=EditPage-7z0ORMYh.js.map
