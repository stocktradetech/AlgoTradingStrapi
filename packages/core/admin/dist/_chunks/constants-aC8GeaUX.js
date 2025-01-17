"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const designSystem = require("@strapi/design-system");
const v2 = require("@strapi/design-system/v2");
const reactIntl = require("react-intl");
const reactRouterDom = require("react-router-dom");
const styled = require("styled-components");
const index = require("./index-1g9GBMjI.js");
const SSOProviders = require("./SSOProviders-Z6IAEre2.js");
require("@strapi/helper-plugin");
require("react-dom/client");
require("invariant");
require("lodash/isFunction");
require("lodash/merge");
require("lodash/pick");
require("react-helmet");
require("react");
require("react-redux");
require("use-context-selector");
require("@reduxjs/toolkit");
require("@reduxjs/toolkit/query/react");
require("axios");
require("@radix-ui/react-context");
require("@strapi/icons");
require("formik");
require("lodash/camelCase");
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
const styled__default = /* @__PURE__ */ _interopDefault(styled);
const Providers = () => {
  const { push } = reactRouterDom.useHistory();
  const { formatMessage } = reactIntl.useIntl();
  const { isLoading, data: providers = [] } = index.useGetProvidersQuery(void 0, {
    skip: !window.strapi.features.isEnabled(window.strapi.features.SSO)
  });
  const handleClick = () => {
    push("/auth/login");
  };
  if (!window.strapi.features.isEnabled(window.strapi.features.SSO) || !isLoading && providers.length === 0) {
    return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Redirect, { to: "/auth/login" });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(index.UnauthenticatedLayout, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs(index.LayoutContent, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(index.Column, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(index.Logo, {}),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 6, paddingBottom: 1, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { as: "h1", variant: "alpha", children: formatMessage({ id: "Auth.form.welcome.title" }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingBottom: 7, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "epsilon", textColor: "neutral600", children: formatMessage({ id: "Auth.login.sso.subtitle" }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 7, children: [
        isLoading ? /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { justifyContent: "center", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Loader, { children: formatMessage({ id: "Auth.login.sso.loading" }) }) }) : /* @__PURE__ */ jsxRuntime.jsx(SSOProviders.SSOProviders, { providers }),
        /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(DividerFull, {}),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingLeft: 3, paddingRight: 3, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", textColor: "neutral600", children: formatMessage({ id: "or" }) }) }),
          /* @__PURE__ */ jsxRuntime.jsx(DividerFull, {})
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { fullWidth: true, size: "L", onClick: handleClick, children: formatMessage({ id: "Auth.form.button.login.strapi" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { justifyContent: "center", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 4, children: /* @__PURE__ */ jsxRuntime.jsx(v2.Link, { as: reactRouterDom.NavLink, to: "/auth/forgot-password", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "pi", children: formatMessage({ id: "Auth.link.forgot-password" }) }) }) }) })
  ] }) });
};
const DividerFull = styled__default.default(designSystem.Divider)`
  flex: 1;
`;
const FORMS = {
  providers: Providers
};
exports.FORMS = FORMS;
//# sourceMappingURL=constants-aC8GeaUX.js.map
