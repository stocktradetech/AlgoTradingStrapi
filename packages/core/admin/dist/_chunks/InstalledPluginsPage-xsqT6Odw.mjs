import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useNotifyAT, Layout, Main, HeaderLayout, ContentLayout, Table, Thead, Tr, Th, Typography, Tbody, Td } from "@strapi/design-system";
import { useNotification, useAPIErrorHandler, useFocusWhenNavigate, LoadingIndicatorPage, CheckPagePermissions } from "@strapi/helper-plugin";
import { Helmet } from "react-helmet";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import { s as selectAdminPermissions } from "./AuthenticatedApp-tGcMdSKz.mjs";
import { q as useGetPluginsQuery } from "./index-kIIXqMj8.mjs";
import "semver/functions/lt";
import "semver/functions/valid";
import "immer";
import "lodash/set";
import "react-dnd";
import "react-dnd-html5-backend";
import "react-router-dom";
import "@strapi/design-system/v2";
import "@strapi/icons";
import "lodash/get";
import "styled-components";
import "lodash/cloneDeep";
import "react-dom/client";
import "invariant";
import "lodash/isFunction";
import "lodash/merge";
import "lodash/pick";
import "use-context-selector";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query/react";
import "axios";
import "@radix-ui/react-context";
import "formik";
import "lodash/camelCase";
import "yup";
import "lodash/omit";
import "qs";
import "react-query";
import "lodash/defaultsDeep";
import "lodash/isEqual";
import "lodash/throttle";
import "lodash/isBoolean";
import "lodash/isEmpty";
import "lodash/isNaN";
import "lodash/toNumber";
import "react-window";
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
const InstalledPluginsPage = () => {
  const { formatMessage } = useIntl();
  const { notifyStatus } = useNotifyAT();
  const toggleNotification = useNotification();
  const { _unstableFormatAPIError: formatAPIError } = useAPIErrorHandler();
  useFocusWhenNavigate();
  const { isLoading, data, error } = useGetPluginsQuery();
  React.useEffect(() => {
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
    return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx(Main, { "aria-busy": true, children: /* @__PURE__ */ jsx(LoadingIndicatorPage, {}) }) });
  }
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsxs(Main, { children: [
    /* @__PURE__ */ jsx(
      HeaderLayout,
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
    /* @__PURE__ */ jsx(ContentLayout, { children: /* @__PURE__ */ jsxs(Table, { colCount: 2, rowCount: data?.plugins?.length ?? 0 + 1, children: [
      /* @__PURE__ */ jsx(Thead, { children: /* @__PURE__ */ jsxs(Tr, { children: [
        /* @__PURE__ */ jsx(Th, { children: /* @__PURE__ */ jsx(Typography, { variant: "sigma", textColor: "neutral600", children: formatMessage({
          id: "global.name",
          defaultMessage: "Name"
        }) }) }),
        /* @__PURE__ */ jsx(Th, { children: /* @__PURE__ */ jsx(Typography, { variant: "sigma", textColor: "neutral600", children: formatMessage({
          id: "global.description",
          defaultMessage: "description"
        }) }) })
      ] }) }),
      /* @__PURE__ */ jsx(Tbody, { children: data?.plugins.map(({ name, displayName, description }) => {
        return /* @__PURE__ */ jsxs(Tr, { children: [
          /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(Typography, { textColor: "neutral800", variant: "omega", fontWeight: "bold", children: formatMessage({
            id: `global.plugins.${name}`,
            defaultMessage: displayName
          }) }) }),
          /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(Typography, { textColor: "neutral800", children: formatMessage({
            id: `global.plugins.${name}.description`,
            defaultMessage: description
          }) }) })
        ] }, name);
      }) })
    ] }) })
  ] }) });
};
const ProtectedInstalledPluginsPage = () => {
  const { formatMessage } = useIntl();
  const permissions = useSelector(selectAdminPermissions);
  return /* @__PURE__ */ jsxs(CheckPagePermissions, { permissions: permissions.marketplace?.main, children: [
    /* @__PURE__ */ jsx(
      Helmet,
      {
        title: formatMessage({
          id: "global.plugins",
          defaultMessage: "Plugins"
        })
      }
    ),
    /* @__PURE__ */ jsx(InstalledPluginsPage, {})
  ] });
};
export {
  InstalledPluginsPage,
  ProtectedInstalledPluginsPage
};
//# sourceMappingURL=InstalledPluginsPage-xsqT6Odw.mjs.map
