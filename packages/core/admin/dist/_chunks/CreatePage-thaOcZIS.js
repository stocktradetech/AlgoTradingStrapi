"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const React = require("react");
const designSystem = require("@strapi/design-system");
const v2 = require("@strapi/design-system/v2");
const helperPlugin = require("@strapi/helper-plugin");
const Icons = require("@strapi/icons");
const dateFns = require("date-fns");
const formik = require("formik");
const reactIntl = require("react-intl");
const reactRouterDom = require("react-router-dom");
const styled = require("styled-components");
const yup = require("yup");
const index = require("./index-1g9GBMjI.js");
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
const styled__default = /* @__PURE__ */ _interopDefault(styled);
const yup__namespace = /* @__PURE__ */ _interopNamespace(yup);
const CREATE_SCHEMA = yup__namespace.object().shape({
  name: yup__namespace.string().required(helperPlugin.translatedErrors.required),
  description: yup__namespace.string().required(helperPlugin.translatedErrors.required)
});
const CreatePage = () => {
  const match = reactRouterDom.useRouteMatch("/settings/roles/duplicate/:id");
  const toggleNotification = helperPlugin.useNotification();
  const { lockApp, unlockApp } = helperPlugin.useOverlayBlocker();
  const { formatMessage } = reactIntl.useIntl();
  const { replace } = reactRouterDom.useHistory();
  const permissionsRef = React__namespace.useRef(null);
  const { trackUsage } = helperPlugin.useTracking();
  const {
    _unstableFormatAPIError: formatAPIError,
    _unstableFormatValidationErrors: formatValidationErrors
  } = helperPlugin.useAPIErrorHandler();
  const id = match?.params.id ?? null;
  const { isLoading: isLoadingPermissionsLayout, data: permissionsLayout } = index.useGetRolePermissionLayoutQuery({
    /**
     * Role here is a query param so if there's no role we pass an empty string
     * which returns us a default layout.
     */
    role: id ?? ""
  });
  const { data: rolePermissions, isLoading: isLoadingRole } = index.useGetRolePermissionsQuery(
    {
      id
    },
    {
      skip: !id,
      refetchOnMountOrArgChange: true
    }
  );
  const [createRole] = index.useCreateRoleMutation();
  const [updateRolePermissions] = index.useUpdateRolePermissionsMutation();
  const handleCreateRoleSubmit = async (data, formik2) => {
    try {
      lockApp();
      if (id) {
        trackUsage("willDuplicateRole");
      } else {
        trackUsage("willCreateNewRole");
      }
      const res = await createRole(data);
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
      const { permissionsToSend } = permissionsRef.current?.getPermissions() ?? {};
      if (res.data.id && Array.isArray(permissionsToSend) && permissionsToSend.length > 0) {
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
      }
      toggleNotification({
        type: "success",
        message: { id: "Settings.roles.created", defaultMessage: "created" }
      });
      replace(`/settings/roles/${res.data.id}`);
    } catch (err) {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    } finally {
      unlockApp();
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.SettingsPageTitle, { name: "Roles" }),
    /* @__PURE__ */ jsxRuntime.jsx(
      formik.Formik,
      {
        initialValues: {
          name: "",
          description: `${formatMessage({
            id: "Settings.roles.form.created",
            defaultMessage: "Created"
          })} ${dateFns.format(/* @__PURE__ */ new Date(), "PPP")}`
        },
        onSubmit: handleCreateRoleSubmit,
        validationSchema: CREATE_SCHEMA,
        validateOnChange: false,
        children: ({ values, errors, handleReset, handleChange, isSubmitting }) => /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.Form, { children: /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.HeaderLayout,
            {
              primaryAction: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 2, children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  designSystem.Button,
                  {
                    variant: "secondary",
                    onClick: () => {
                      handleReset();
                      permissionsRef.current?.resetForm();
                    },
                    size: "L",
                    children: formatMessage({
                      id: "app.components.Button.reset",
                      defaultMessage: "Reset"
                    })
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { type: "submit", loading: isSubmitting, size: "L", children: formatMessage({
                  id: "global.save",
                  defaultMessage: "Save"
                }) })
              ] }),
              title: formatMessage({
                id: "Settings.roles.create.title",
                defaultMessage: "Create a role"
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
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 4, children: [
              /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { justifyContent: "space-between", children: [
                /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { children: [
                  /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "bold", children: formatMessage({
                    id: "global.details",
                    defaultMessage: "Details"
                  }) }) }),
                  /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "pi", textColor: "neutral600", children: formatMessage({
                    id: "Settings.roles.form.description",
                    defaultMessage: "Name and description of the role"
                  }) }) })
                ] }),
                /* @__PURE__ */ jsxRuntime.jsx(UsersRoleNumber, { children: formatMessage(
                  {
                    id: "Settings.roles.form.button.users-with-role",
                    defaultMessage: "{number, plural, =0 {# users} one {# user} other {# users}} with this role"
                  },
                  { number: 0 }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Grid, { gap: 4, children: [
                /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: 6, children: /* @__PURE__ */ jsxRuntime.jsx(
                  designSystem.TextInput,
                  {
                    name: "name",
                    error: errors.name && formatMessage({ id: errors.name }),
                    label: formatMessage({
                      id: "global.name",
                      defaultMessage: "Name"
                    }),
                    onChange: handleChange,
                    required: true,
                    value: values.name
                  }
                ) }),
                /* @__PURE__ */ jsxRuntime.jsx(designSystem.GridItem, { col: 6, children: /* @__PURE__ */ jsxRuntime.jsx(
                  designSystem.Textarea,
                  {
                    label: formatMessage({
                      id: "global.description",
                      defaultMessage: "Description"
                    }),
                    id: "description",
                    error: errors.description && formatMessage({ id: errors.description }),
                    onChange: handleChange,
                    children: values.description
                  }
                ) })
              ] })
            ] }) }),
            !isLoadingPermissionsLayout && !isLoadingRole && permissionsLayout ? /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { shadow: "filterShadow", hasRadius: true, children: /* @__PURE__ */ jsxRuntime.jsx(
              Permissions.Permissions,
              {
                isFormDisabled: false,
                ref: permissionsRef,
                permissions: rolePermissions,
                layout: permissionsLayout
              }
            ) }) : /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true, children: /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.LoadingIndicatorPage, {}) })
          ] }) })
        ] }) })
      }
    )
  ] });
};
const UsersRoleNumber = styled__default.default.div`
  border: 1px solid ${({ theme }) => theme.colors.primary200};
  background: ${({ theme }) => theme.colors.primary100};
  padding: ${({ theme }) => `${theme.spaces[2]} ${theme.spaces[4]}`};
  color: ${({ theme }) => theme.colors.primary600};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${12 / 16}rem;
  font-weight: bold;
`;
const ProtectedCreatePage = () => {
  const permissions = index.useTypedSelector(
    (state) => state.admin_app.permissions.settings?.roles.create
  );
  return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.CheckPagePermissions, { permissions, children: /* @__PURE__ */ jsxRuntime.jsx(CreatePage, {}) });
};
exports.CreatePage = CreatePage;
exports.ProtectedCreatePage = ProtectedCreatePage;
//# sourceMappingURL=CreatePage-thaOcZIS.js.map
