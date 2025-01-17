"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const React = require("react");
const helperPlugin = require("@strapi/helper-plugin");
const Cookies = require("js-cookie");
const reactIntl = require("react-intl");
const reactRouterDom = require("react-router-dom");
const index = require("./index-1g9GBMjI.js");
require("react-dom/client");
require("@strapi/design-system");
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
require("@strapi/icons");
require("formik");
require("lodash/camelCase");
require("styled-components");
require("yup");
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
const Cookies__default = /* @__PURE__ */ _interopDefault(Cookies);
const AuthResponse = () => {
  const match = reactRouterDom.useRouteMatch("/auth/login/:authResponse");
  const { formatMessage } = reactIntl.useIntl();
  const { push } = reactRouterDom.useHistory();
  const redirectToOops = React__namespace.useCallback(() => {
    push(
      `/auth/oops?info=${encodeURIComponent(
        formatMessage({
          id: "Auth.form.button.login.providers.error",
          defaultMessage: "We cannot connect you through the selected provider."
        })
      )}`
    );
  }, [push, formatMessage]);
  const setToken = index.useAuth("AuthResponse", (state) => state.setToken);
  React__namespace.useEffect(() => {
    if (match?.params.authResponse === "error") {
      redirectToOops();
    }
    if (match?.params.authResponse === "success") {
      const jwtToken = Cookies__default.default.get("jwtToken");
      if (jwtToken) {
        setToken(jwtToken);
        Cookies__default.default.remove("jwtToken");
        push("/auth/login");
      } else {
        redirectToOops();
      }
    }
  }, [match, redirectToOops, setToken, push]);
  return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.LoadingIndicatorPage, {});
};
const ADMIN_PERMISSIONS_EE = {
  settings: {
    auditLogs: {
      main: [{ action: "admin::audit-logs.read", subject: null }],
      read: [{ action: "admin::audit-logs.read", subject: null }],
      update: [{ action: "admin::audit-logs.update", subject: null }]
    },
    "review-workflows": {
      main: [{ action: "admin::review-workflows.read", subject: null }],
      read: [{ action: "admin::review-workflows.read", subject: null }],
      create: [{ action: "admin::review-workflows.create", subject: null }],
      delete: [{ action: "admin::review-workflows.delete", subject: null }],
      update: [{ action: "admin::review-workflows.update", subject: null }]
    },
    sso: {
      main: [{ action: "admin::provider-login.read", subject: null }],
      read: [{ action: "admin::provider-login.read", subject: null }],
      update: [{ action: "admin::provider-login.update", subject: null }]
    }
  }
};
const ROUTES_EE = [
  {
    Component: () => ({ default: AuthResponse }),
    to: "/auth/login/:authResponse",
    exact: true
  }
];
const SETTINGS_LINKS_EE = () => ({
  global: [
    ...window.strapi.features.isEnabled(window.strapi.features.SSO) ? [
      {
        intlLabel: { id: "Settings.sso.title", defaultMessage: "Single Sign-On" },
        to: "/settings/single-sign-on",
        id: "sso"
      }
    ] : [],
    ...window.strapi.features.isEnabled(window.strapi.features.REVIEW_WORKFLOWS) ? [
      {
        intlLabel: {
          id: "Settings.review-workflows.page.title",
          defaultMessage: "Review Workflows"
        },
        to: "/settings/review-workflows",
        id: "review-workflows"
      }
    ] : []
  ],
  admin: [
    ...window.strapi.features.isEnabled(window.strapi.features.AUDIT_LOGS) ? [
      {
        intlLabel: { id: "global.auditLogs", defaultMessage: "Audit Logs" },
        to: "/settings/audit-logs?pageSize=50&page=1&sort=date:DESC",
        id: "auditLogs"
      }
    ] : []
  ]
});
exports.ADMIN_PERMISSIONS_EE = ADMIN_PERMISSIONS_EE;
exports.ROUTES_EE = ROUTES_EE;
exports.SETTINGS_LINKS_EE = SETTINGS_LINKS_EE;
//# sourceMappingURL=constants-Vzz490ny.js.map
