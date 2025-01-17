import { jsx } from "react/jsx-runtime";
import { useIntl } from "react-intl";
import { K as getBasename } from "./index-kIIXqMj8.mjs";
import { a as MagicLinkWrapper } from "./SelectRoles-m8yWL1gF.mjs";
import "@strapi/helper-plugin";
import "react-dom/client";
import "@strapi/design-system";
import "invariant";
import "lodash/isFunction";
import "lodash/merge";
import "lodash/pick";
import "react-helmet";
import "react-router-dom";
import "react";
import "react-redux";
import "use-context-selector";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query/react";
import "axios";
import "@radix-ui/react-context";
import "@strapi/design-system/v2";
import "@strapi/icons";
import "formik";
import "lodash/camelCase";
import "styled-components";
import "yup";
import "lodash/omit";
import "qs";
import "react-query";
import "immer";
import "lodash/get";
import "lodash/set";
import "lodash/defaultsDeep";
import "lodash/isEqual";
import "lodash/throttle";
import "lodash/isBoolean";
import "lodash/isEmpty";
import "lodash/isNaN";
import "lodash/toNumber";
import "react-dnd";
import "react-dnd-html5-backend";
import "react-window";
import "lodash/cloneDeep";
import "lodash/upperFirst";
import "prop-types";
import "lodash/fp";
import "lodash/take";
import "slate";
import "slate-history";
import "slate-react";
import "@radix-ui/react-toolbar";
import "codemirror5";
import "sanitize-html";
import "highlight.js";
import "markdown-it";
import "markdown-it-abbr";
import "markdown-it-container";
import "markdown-it-deflist";
import "markdown-it-emoji";
import "markdown-it-footnote";
import "markdown-it-ins";
import "markdown-it-mark";
import "markdown-it-sub";
import "markdown-it-sup";
import "highlight.js/styles/solarized-dark.css";
import "codemirror5/addon/display/placeholder";
import "lodash/toString";
import "react-dom";
import "fractional-indexing";
import "lodash/uniqBy";
import "lodash/unset";
import "lodash/isArray";
import "date-fns/parseISO";
import "./useAdminRoles-20_5r44C.mjs";
const MagicLinkEE = ({ registrationToken }) => {
  const { formatMessage } = useIntl();
  if (registrationToken) {
    return /* @__PURE__ */ jsx(
      MagicLinkWrapper,
      {
        target: `${window.location.origin}${getBasename()}/auth/register?registrationToken=${registrationToken}`,
        children: formatMessage({
          id: "app.components.Users.MagicLink.connect",
          defaultMessage: "Copy and share this link to give access to this user"
        })
      }
    );
  }
  return /* @__PURE__ */ jsx(MagicLinkWrapper, { target: `${window.location.origin}${getBasename()}/auth/login`, children: formatMessage({
    id: "app.components.Users.MagicLink.connect.sso",
    defaultMessage: "Send this link to the user, the first login can be made via a SSO provider."
  }) });
};
export {
  MagicLinkEE
};
//# sourceMappingURL=MagicLinkEE-XTXCIzBY.mjs.map
