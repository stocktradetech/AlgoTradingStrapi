"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const designSystem = require("@strapi/design-system");
const reactIntl = require("react-intl");
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
require("react-router-dom");
require("react");
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
const DividerFull = styled__default.default(designSystem.Divider)`
  flex: 1;
`;
const LoginEE = (loginProps) => {
  const { formatMessage } = reactIntl.useIntl();
  const { isLoading, data: providers = [] } = index.useGetProvidersQuery(void 0, {
    skip: !window.strapi.features.isEnabled(window.strapi.features.SSO)
  });
  if (!window.strapi.features.isEnabled(window.strapi.features.SSO) || !isLoading && providers.length === 0) {
    return /* @__PURE__ */ jsxRuntime.jsx(index.Login, { ...loginProps });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(index.Login, { ...loginProps, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 7, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 7, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(DividerFull, {}),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingLeft: 3, paddingRight: 3, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", textColor: "neutral600", children: formatMessage({ id: "Auth.login.sso.divider" }) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(DividerFull, {})
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(SSOProviders.SSOProviders, { providers, displayAllProviders: false })
  ] }) }) });
};
exports.LoginEE = LoginEE;
//# sourceMappingURL=Login-QXEGh1iV.js.map
