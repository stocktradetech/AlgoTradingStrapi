"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const React = require("react");
const designSystem = require("@strapi/design-system");
const helperPlugin = require("@strapi/helper-plugin");
const reactHelmet = require("react-helmet");
const reactIntl = require("react-intl");
const reactRedux = require("react-redux");
const AuthenticatedApp = require("./AuthenticatedApp-TJmmk67-.js");
const index = require("./index-1g9GBMjI.js");
require("semver/functions/lt");
require("semver/functions/valid");
require("immer");
require("lodash/set");
require("react-dnd");
require("react-dnd-html5-backend");
require("react-router-dom");
require("@strapi/design-system/v2");
require("@strapi/icons");
require("lodash/get");
require("styled-components");
require("lodash/cloneDeep");
require("react-dom/client");
require("invariant");
require("lodash/isFunction");
require("lodash/merge");
require("lodash/pick");
require("use-context-selector");
require("@reduxjs/toolkit");
require("@reduxjs/toolkit/query/react");
require("axios");
require("@radix-ui/react-context");
require("formik");
require("lodash/camelCase");
require("yup");
require("lodash/omit");
require("qs");
require("react-query");
require("lodash/defaultsDeep");
require("lodash/isEqual");
require("lodash/throttle");
require("lodash/isBoolean");
require("lodash/isEmpty");
require("lodash/isNaN");
require("lodash/toNumber");
require("react-window");
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
const React__namespace = /* @__PURE__ */ _interopNamespace(React);
const InstalledPluginsPage = () => {
  const { formatMessage } = reactIntl.useIntl();
  const { notifyStatus } = designSystem.useNotifyAT();
  const toggleNotification = helperPlugin.useNotification();
  const { _unstableFormatAPIError: formatAPIError } = helperPlugin.useAPIErrorHandler();
  helperPlugin.useFocusWhenNavigate();
  const { isLoading, data, error } = index.useGetPluginsQuery();
  React__namespace.useEffect(() => {
    if (data) {
      notifyStatus(
        formatMessage(
          {
            id: "app.utils.notify.data-loaded",
            defaultMessage: "The {target} has loaded"
          },
          {
            target: formatMessage({
              id: "global.plugins",
              defaultMessage: "Plugins"
            })
          }
        )
      );
    }
    if (error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
    }
  }, [data, error, formatAPIError, formatMessage, notifyStatus, toggleNotification]);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Layout, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Main, { "aria-busy": true, children: /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.LoadingIndicatorPage, {}) }) });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Layout, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.HeaderLayout,
      {
        title: formatMessage({
          id: "global.plugins",
          defaultMessage: "Plugins"
        }),
        subtitle: formatMessage({
          id: "app.components.ListPluginsPage.description",
          defaultMessage: "List of the installed plugins in the project."
        })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.ContentLayout, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Table, { colCount: 2, rowCount: data?.plugins?.length ?? 0 + 1, children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Thead, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Tr, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Th, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", textColor: "neutral600", children: formatMessage({
          id: "global.name",
          defaultMessage: "Name"
        }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Th, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", textColor: "neutral600", children: formatMessage({
          id: "global.description",
          defaultMessage: "description"
        }) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Tbody, { children: data?.plugins.map(({ name, displayName, description }) => {
        return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Tr, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "neutral800", variant: "omega", fontWeight: "bold", children: formatMessage({
            id: `global.plugins.${name}`,
            defaultMessage: displayName
          }) }) }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "neutral800", children: formatMessage({
            id: `global.plugins.${name}.description`,
            defaultMessage: description
          }) }) })
        ] }, name);
      }) })
    ] }) })
  ] }) });
};
const ProtectedInstalledPluginsPage = () => {
  const { formatMessage } = reactIntl.useIntl();
  const permissions = reactRedux.useSelector(AuthenticatedApp.selectAdminPermissions);
  return /* @__PURE__ */ jsxRuntime.jsxs(helperPlugin.CheckPagePermissions, { permissions: permissions.marketplace?.main, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      reactHelmet.Helmet,
      {
        title: formatMessage({
          id: "global.plugins",
          defaultMessage: "Plugins"
        })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(InstalledPluginsPage, {})
  ] });
};
exports.InstalledPluginsPage = InstalledPluginsPage;
exports.ProtectedInstalledPluginsPage = ProtectedInstalledPluginsPage;
//# sourceMappingURL=InstalledPluginsPage-UebSA4Pu.js.map
