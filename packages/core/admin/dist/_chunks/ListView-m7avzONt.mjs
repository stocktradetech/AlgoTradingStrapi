import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Main, HeaderLayout, LinkButton, ContentLayout } from "@strapi/design-system";
import { CheckPagePermissions, useFocusWhenNavigate, useNotification, useRBAC, useTracking, useGuidedTour, useAPIErrorHandler, SettingsPageTitle, NoPermissions, NoContent } from "@strapi/helper-plugin";
import { Plus } from "@strapi/icons";
import qs__default from "qs";
import { useIntl } from "react-intl";
import { useHistory } from "react-router-dom";
import { j as useTypedSelector, b as useOnce } from "./index-kIIXqMj8.mjs";
import { u as useGetAPITokensQuery, a as useDeleteAPITokenMutation } from "./apiTokens-QHDTD2vz.mjs";
import { A as API_TOKEN_TYPE } from "./constants-fJt30IoY.mjs";
import { T as Table } from "./Table-nKuv1TlJ.mjs";
import "react-dom/client";
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
import "formik";
import "lodash/camelCase";
import "styled-components";
import "yup";
import "lodash/omit";
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
const TABLE_HEADERS = [
  {
    name: "name",
    key: "name",
    metadatas: {
      label: {
        id: "Settings.apiTokens.ListView.headers.name",
        defaultMessage: "Name"
      },
      sortable: true
    }
  },
  {
    name: "description",
    key: "description",
    metadatas: {
      label: {
        id: "Settings.apiTokens.ListView.headers.description",
        defaultMessage: "Description"
      },
      sortable: false
    }
  },
  {
    name: "createdAt",
    key: "createdAt",
    metadatas: {
      label: {
        id: "Settings.apiTokens.ListView.headers.createdAt",
        defaultMessage: "Created at"
      },
      sortable: false
    }
  },
  {
    name: "lastUsedAt",
    key: "lastUsedAt",
    metadatas: {
      label: {
        id: "Settings.apiTokens.ListView.headers.lastUsedAt",
        defaultMessage: "Last used"
      },
      sortable: false
    }
  }
];
const ListView = () => {
  useFocusWhenNavigate();
  const { formatMessage } = useIntl();
  const toggleNotification = useNotification();
  const permissions = useTypedSelector(
    (state) => state.admin_app.permissions.settings?.["api-tokens"]
  );
  const {
    allowedActions: { canCreate, canDelete, canUpdate, canRead }
  } = useRBAC(permissions);
  const { push } = useHistory();
  const { trackUsage } = useTracking();
  const { startSection } = useGuidedTour();
  const { _unstableFormatAPIError: formatAPIError } = useAPIErrorHandler();
  React.useEffect(() => {
    startSection("apiTokens");
  }, [startSection]);
  React.useEffect(() => {
    push({ search: qs__default.stringify({ sort: "name:ASC" }, { encode: false }) });
  }, [push]);
  const headers = TABLE_HEADERS.map((header) => ({
    ...header,
    metadatas: {
      ...header.metadatas,
      label: formatMessage(header.metadatas.label)
    }
  }));
  useOnce(() => {
    trackUsage("willAccessTokenList", {
      tokenType: API_TOKEN_TYPE
    });
  });
  const {
    data: apiTokens = [],
    isLoading,
    error
  } = useGetAPITokensQuery(void 0, {
    skip: !canRead
  });
  React.useEffect(() => {
    if (error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
    }
  }, [error, formatAPIError, toggleNotification]);
  React.useEffect(() => {
    trackUsage("didAccessTokenList", { number: apiTokens.length, tokenType: API_TOKEN_TYPE });
  }, [apiTokens, trackUsage]);
  const [deleteToken] = useDeleteAPITokenMutation();
  const handleDelete = async (id) => {
    try {
      const res = await deleteToken(id);
      if ("error" in res) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(res.error)
        });
        return;
      }
      trackUsage("didDeleteToken");
    } catch {
      toggleNotification({
        type: "warning",
        message: {
          id: "notification.error",
          defaultMessage: "Something went wrong"
        }
      });
    }
  };
  return /* @__PURE__ */ jsxs(Main, { "aria-busy": isLoading, children: [
    /* @__PURE__ */ jsx(SettingsPageTitle, { name: "API Tokens" }),
    /* @__PURE__ */ jsx(
      HeaderLayout,
      {
        title: formatMessage({ id: "Settings.apiTokens.title", defaultMessage: "API Tokens" }),
        subtitle: formatMessage({
          id: "Settings.apiTokens.description",
          defaultMessage: "List of generated tokens to consume the API"
        }),
        primaryAction: canCreate && /* @__PURE__ */ jsx(
          LinkButton,
          {
            "data-testid": "create-api-token-button",
            startIcon: /* @__PURE__ */ jsx(Plus, {}),
            size: "S",
            onClick: () => trackUsage("willAddTokenFromList", {
              tokenType: API_TOKEN_TYPE
            }),
            to: "/settings/api-tokens/create",
            children: formatMessage({
              id: "Settings.apiTokens.create",
              defaultMessage: "Create new API Token"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs(ContentLayout, { children: [
      !canRead && /* @__PURE__ */ jsx(NoPermissions, {}),
      canRead && apiTokens.length > 0 && /* @__PURE__ */ jsx(
        Table,
        {
          permissions: { canRead, canDelete, canUpdate },
          headers,
          contentType: "api-tokens",
          isLoading,
          onConfirmDelete: handleDelete,
          tokens: apiTokens,
          tokenType: API_TOKEN_TYPE
        }
      ),
      canRead && canCreate && apiTokens.length === 0 && /* @__PURE__ */ jsx(
        NoContent,
        {
          content: {
            id: "Settings.apiTokens.addFirstToken",
            defaultMessage: "Add your first API Token"
          },
          action: /* @__PURE__ */ jsx(LinkButton, { variant: "secondary", startIcon: /* @__PURE__ */ jsx(Plus, {}), to: "/settings/api-tokens/create", children: formatMessage({
            id: "Settings.apiTokens.addNewToken",
            defaultMessage: "Add new API Token"
          }) })
        }
      ),
      canRead && !canCreate && apiTokens.length === 0 && /* @__PURE__ */ jsx(
        NoContent,
        {
          content: {
            id: "Settings.apiTokens.emptyStateLayout",
            defaultMessage: "You don’t have any content yet..."
          }
        }
      )
    ] })
  ] });
};
const ProtectedListView = () => {
  const permissions = useTypedSelector(
    (state) => state.admin_app.permissions.settings?.["api-tokens"].main
  );
  return /* @__PURE__ */ jsx(CheckPagePermissions, { permissions, children: /* @__PURE__ */ jsx(ListView, {}) });
};
export {
  ListView,
  ProtectedListView
};
//# sourceMappingURL=ListView-m7avzONt.mjs.map
