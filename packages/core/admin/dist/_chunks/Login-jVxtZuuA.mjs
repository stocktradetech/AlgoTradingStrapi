import { jsx, jsxs } from "react/jsx-runtime";
import { Divider, Box, Flex, Typography } from "@strapi/design-system";
import { useIntl } from "react-intl";
import styled from "styled-components";
import { g as useGetProvidersQuery, L as Login } from "./index-kIIXqMj8.mjs";
import { S as SSOProviders } from "./SSOProviders-GvoeZh35.mjs";
import "@strapi/helper-plugin";
import "react-dom/client";
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
const DividerFull = styled(Divider)`
  flex: 1;
`;
const LoginEE = (loginProps) => {
  const { formatMessage } = useIntl();
  const { isLoading, data: providers = [] } = useGetProvidersQuery(void 0, {
    skip: !window.strapi.features.isEnabled(window.strapi.features.SSO)
  });
  if (!window.strapi.features.isEnabled(window.strapi.features.SSO) || !isLoading && providers.length === 0) {
    return /* @__PURE__ */ jsx(Login, { ...loginProps });
  }
  return /* @__PURE__ */ jsx(Login, { ...loginProps, children: /* @__PURE__ */ jsx(Box, { paddingTop: 7, children: /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "stretch", gap: 7, children: [
    /* @__PURE__ */ jsxs(Flex, { children: [
      /* @__PURE__ */ jsx(DividerFull, {}),
      /* @__PURE__ */ jsx(Box, { paddingLeft: 3, paddingRight: 3, children: /* @__PURE__ */ jsx(Typography, { variant: "sigma", textColor: "neutral600", children: formatMessage({ id: "Auth.login.sso.divider" }) }) }),
      /* @__PURE__ */ jsx(DividerFull, {})
    ] }),
    /* @__PURE__ */ jsx(SSOProviders, { providers, displayAllProviders: false })
  ] }) }) });
};
export {
  LoginEE
};
//# sourceMappingURL=Login-jVxtZuuA.mjs.map
