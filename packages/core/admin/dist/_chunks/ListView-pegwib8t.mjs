import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Main, HeaderLayout, LinkButton, ContentLayout } from "@strapi/design-system";
import { CheckPagePermissions, useFocusWhenNavigate, useNotification, useRBAC, useTracking, useAPIErrorHandler, SettingsPageTitle, NoPermissions, NoContent } from "@strapi/helper-plugin";
import { Plus } from "@strapi/icons";
import qs__default from "qs";
import { useIntl } from "react-intl";
import { useHistory } from "react-router-dom";
import { j as useTypedSelector, b as useOnce } from "./index-kIIXqMj8.mjs";
import { c as useGetTransferTokensQuery, d as useDeleteTransferTokenMutation } from "./transferTokens-dfBT86WR.mjs";
import { T as TRANSFER_TOKEN_TYPE } from "./constants-fJt30IoY.mjs";
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
const tableHeaders = [
  {
    name: "name",
    key: "name",
    metadatas: {
      label: {
        id: "Settings.tokens.ListView.headers.name",
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
        id: "Settings.tokens.ListView.headers.description",
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
        id: "Settings.tokens.ListView.headers.createdAt",
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
        id: "Settings.tokens.ListView.headers.lastUsedAt",
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
    (state) => state.admin_app.permissions.settings?.["transfer-tokens"]
  );
  const {
    isLoading: isLoadingRBAC,
    allowedActions: { canCreate, canDelete, canUpdate, canRead }
  } = useRBAC(permissions);
  const { push } = useHistory();
  const { trackUsage } = useTracking();
  const { _unstableFormatAPIError: formatAPIError } = useAPIErrorHandler();
  React.useEffect(() => {
    push({ search: qs__default.stringify({ sort: "name:ASC" }, { encode: false }) });
  }, [push]);
  useOnce(() => {
    trackUsage("willAccessTokenList", {
      tokenType: TRANSFER_TOKEN_TYPE
    });
  });
  const headers = tableHeaders.map((header) => ({
    ...header,
    metadatas: {
      ...header.metadatas,
      label: formatMessage(header.metadatas.label)
    }
  }));
  const {
    data: transferTokens = [],
    isLoading: isLoadingTokens,
    error
  } = useGetTransferTokensQuery(void 0, {
    skip: !canRead
  });
  React.useEffect(() => {
    if (transferTokens) {
      trackUsage("didAccessTokenList", {
        number: transferTokens.length,
        tokenType: TRANSFER_TOKEN_TYPE
      });
    }
  }, [trackUsage, transferTokens]);
  React.useEffect(() => {
    if (error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
    }
  }, [error, formatAPIError, toggleNotification]);
  const [deleteToken] = useDeleteTransferTokenMutation();
  const handleDelete = async (id) => {
    try {
      const res = await deleteToken(id);
      if ("error" in res) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(res.error)
        });
      }
    } catch {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error", defaultMessage: "An error occured" }
      });
    }
  };
  const isLoading = isLoadingTokens || isLoadingRBAC;
  return /* @__PURE__ */ jsxs(Main, { "aria-busy": isLoading, children: [
    /* @__PURE__ */ jsx(SettingsPageTitle, { name: "Transfer Tokens" }),
    /* @__PURE__ */ jsx(
      HeaderLayout,
      {
        title: formatMessage({
          id: "Settings.transferTokens.title",
          defaultMessage: "Transfer Tokens"
        }),
        subtitle: formatMessage({
          id: "Settings.transferTokens.description",
          defaultMessage: '"List of generated transfer tokens"'
          // TODO change this message
        }),
        primaryAction: canCreate ? /* @__PURE__ */ jsx(
          LinkButton,
          {
            "data-testid": "create-transfer-token-button",
            startIcon: /* @__PURE__ */ jsx(Plus, {}),
            size: "S",
            onClick: () => trackUsage("willAddTokenFromList", {
              tokenType: TRANSFER_TOKEN_TYPE
            }),
            to: "/settings/transfer-tokens/create",
            children: formatMessage({
              id: "Settings.transferTokens.create",
              defaultMessage: "Create new Transfer Token"
            })
          }
        ) : void 0
      }
    ),
    /* @__PURE__ */ jsxs(ContentLayout, { children: [
      !canRead && /* @__PURE__ */ jsx(NoPermissions, {}),
      canRead && transferTokens.length > 0 && /* @__PURE__ */ jsx(
        Table,
        {
          permissions: { canRead, canDelete, canUpdate },
          headers,
          contentType: "trasfer-tokens",
          isLoading,
          onConfirmDelete: handleDelete,
          tokens: transferTokens,
          tokenType: TRANSFER_TOKEN_TYPE
        }
      ),
      canRead && canCreate && transferTokens.length === 0 && /* @__PURE__ */ jsx(
        NoContent,
        {
          content: {
            id: "Settings.transferTokens.addFirstToken",
            defaultMessage: "Add your first Transfer Token"
          },
          action: /* @__PURE__ */ jsx(
            LinkButton,
            {
              variant: "secondary",
              startIcon: /* @__PURE__ */ jsx(Plus, {}),
              to: "/settings/transfer-tokens/create",
              children: formatMessage({
                id: "Settings.transferTokens.addNewToken",
                defaultMessage: "Add new Transfer Token"
              })
            }
          )
        }
      ),
      canRead && !canCreate && transferTokens.length === 0 && /* @__PURE__ */ jsx(
        NoContent,
        {
          content: {
            id: "Settings.transferTokens.emptyStateLayout",
            defaultMessage: "You don’t have any content yet..."
          }
        }
      )
    ] })
  ] });
};
const ProtectedListView = () => {
  const permissions = useTypedSelector(
    (state) => state.admin_app.permissions.settings?.["transfer-tokens"].main
  );
  return /* @__PURE__ */ jsx(CheckPagePermissions, { permissions, children: /* @__PURE__ */ jsx(ListView, {}) });
};
export {
  ListView,
  ProtectedListView
};
//# sourceMappingURL=ListView-pegwib8t.mjs.map
