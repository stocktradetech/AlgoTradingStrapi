"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const reactIntl = require("react-intl");
const index = require("./index-1g9GBMjI.js");
const SelectRoles = require("./SelectRoles-TA31rsEq.js");
require("@strapi/helper-plugin");
require("react-dom/client");
require("@strapi/design-system");
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
require("./useAdminRoles-d6D5V2FI.js");
const MagicLinkEE = ({ registrationToken }) => {
  const { formatMessage } = reactIntl.useIntl();
  if (registrationToken) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      SelectRoles.MagicLinkWrapper,
      {
        target: `${window.location.origin}${index.getBasename()}/auth/register?registrationToken=${registrationToken}`,
        children: formatMessage({
          id: "app.components.Users.MagicLink.connect",
          defaultMessage: "Copy and share this link to give access to this user"
        })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsx(SelectRoles.MagicLinkWrapper, { target: `${window.location.origin}${index.getBasename()}/auth/login`, children: formatMessage({
    id: "app.components.Users.MagicLink.connect.sso",
    defaultMessage: "Send this link to the user, the first login can be made via a SSO provider."
  }) });
};
exports.MagicLinkEE = MagicLinkEE;
//# sourceMappingURL=MagicLinkEE-3ilEUqJM.js.map
