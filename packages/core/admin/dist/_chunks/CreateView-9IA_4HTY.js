"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const helperPlugin = require("@strapi/helper-plugin");
const reactRedux = require("react-redux");
const AuthenticatedApp = require("./AuthenticatedApp-TJmmk67-.js");
const EditViewPage = require("./EditViewPage-3y9CHgUA.js");
require("react");
require("semver/functions/lt");
require("semver/functions/valid");
require("./index-1g9GBMjI.js");
require("react-dom/client");
require("@strapi/design-system");
require("invariant");
require("lodash/isFunction");
require("lodash/merge");
require("lodash/pick");
require("react-helmet");
require("react-router-dom");
require("react-intl");
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
require("./apiTokens-hPBYGHiM.js");
require("./constants-RMqZXSqh.js");
require("./TokenTypeSelect-ERkGLkO2.js");
require("date-fns");
require("date-fns/locale");
require("lodash/map");
require("lodash/tail");
require("lodash/capitalize");
require("lodash/pull");
const ProtectedCreateView = () => {
  const permissions = reactRedux.useSelector(AuthenticatedApp.selectAdminPermissions);
  return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.CheckPagePermissions, { permissions: permissions.settings?.["api-tokens"].create, children: /* @__PURE__ */ jsxRuntime.jsx(EditViewPage.EditView, {}) });
};
exports.ProtectedCreateView = ProtectedCreateView;
//# sourceMappingURL=CreateView-9IA_4HTY.js.map
