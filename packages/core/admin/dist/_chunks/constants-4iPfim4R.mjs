import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { LoadingIndicatorPage } from "@strapi/helper-plugin";
import Cookies from "js-cookie";
import { useIntl } from "react-intl";
import { useRouteMatch, useHistory } from "react-router-dom";
import { a as useAuth } from "./index-kIIXqMj8.mjs";
import "react-dom/client";
import "@strapi/design-system";
import "invariant";
import "lodash/isFunction";
import "lodash/merge";
import "lodash/pick";
import "react-helmet";
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
const AuthResponse = () => {
  const match = useRouteMatch("/auth/login/:authResponse");
  const { formatMessage } = useIntl();
  const { push } = useHistory();
  const redirectToOops = React.useCallback(() => {
    push(
      `/auth/oops?info=${encodeURIComponent(
        formatMessage({
          id: "Auth.form.button.login.providers.error",
          defaultMessage: "We cannot connect you through the selected provider."
        })
      )}`
    );
  }, [push, formatMessage]);
  const setToken = useAuth("AuthResponse", (state) => state.setToken);
  React.useEffect(() => {
    if (match?.params.authResponse === "error") {
      redirectToOops();
    }
    if (match?.params.authResponse === "success") {
      const jwtToken = Cookies.get("jwtToken");
      if (jwtToken) {
        setToken(jwtToken);
        Cookies.remove("jwtToken");
        push("/auth/login");
      } else {
        redirectToOops();
      }
    }
  }, [match, redirectToOops, setToken, push]);
  return /* @__PURE__ */ jsx(LoadingIndicatorPage, {});
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
export {
  ADMIN_PERMISSIONS_EE,
  ROUTES_EE,
  SETTINGS_LINKS_EE
};
//# sourceMappingURL=constants-4iPfim4R.mjs.map
