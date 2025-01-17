"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const React = require("react");
const designSystem = require("@strapi/design-system");
const helperPlugin = require("@strapi/helper-plugin");
const Icons = require("@strapi/icons");
const qs = require("qs");
const reactIntl = require("react-intl");
const reactRouterDom = require("react-router-dom");
const index = require("./index-1g9GBMjI.js");
const transferTokens = require("./transferTokens-yW7xdvFP.js");
const constants = require("./constants-RMqZXSqh.js");
const Table = require("./Table-T-qYlZ1f.js");
require("react-dom/client");
require("invariant");
require("lodash/isFunction");
require("lodash/merge");
require("lodash/pick");
require("react-helmet");
require("react-redux");
require("use-context-selector");
require("@reduxjs/toolkit");
require("@reduxjs/toolkit/query/react");
require("axios");
require("@radix-ui/react-context");
require("@strapi/design-system/v2");
require("formik");
require("lodash/camelCase");
require("styled-components");
require("yup");
require("lodash/omit");
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
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__namespace = /* @__PURE__ */ _interopNamespace(React);
const qs__default = /* @__PURE__ */ _interopDefault(qs);
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
  helperPlugin.useFocusWhenNavigate();
  const { formatMessage } = reactIntl.useIntl();
  const toggleNotification = helperPlugin.useNotification();
  const permissions = index.useTypedSelector(
    (state) => state.admin_app.permissions.settings?.["transfer-tokens"]
  );
  const {
    isLoading: isLoadingRBAC,
    allowedActions: { canCreate, canDelete, canUpdate, canRead }
  } = helperPlugin.useRBAC(permissions);
  const { push } = reactRouterDom.useHistory();
  const { trackUsage } = helperPlugin.useTracking();
  const { _unstableFormatAPIError: formatAPIError } = helperPlugin.useAPIErrorHandler();
  React__namespace.useEffect(() => {
    push({ search: qs__default.default.stringify({ sort: "name:ASC" }, { encode: false }) });
  }, [push]);
  index.useOnce(() => {
    trackUsage("willAccessTokenList", {
      tokenType: constants.TRANSFER_TOKEN_TYPE
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
    data: transferTokens$1 = [],
    isLoading: isLoadingTokens,
    error
  } = transferTokens.useGetTransferTokensQuery(void 0, {
    skip: !canRead
  });
  React__namespace.useEffect(() => {
    if (transferTokens$1) {
      trackUsage("didAccessTokenList", {
        number: transferTokens$1.length,
        tokenType: constants.TRANSFER_TOKEN_TYPE
      });
    }
  }, [trackUsage, transferTokens$1]);
  React__namespace.useEffect(() => {
    if (error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
    }
  }, [error, formatAPIError, toggleNotification]);
  const [deleteToken] = transferTokens.useDeleteTransferTokenMutation();
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
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { "aria-busy": isLoading, children: [
    /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.SettingsPageTitle, { name: "Transfer Tokens" }),
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.HeaderLayout,
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
        primaryAction: canCreate ? /* @__PURE__ */ jsxRuntime.jsx(
          designSystem.LinkButton,
          {
            "data-testid": "create-transfer-token-button",
            startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Plus, {}),
            size: "S",
            onClick: () => trackUsage("willAddTokenFromList", {
              tokenType: constants.TRANSFER_TOKEN_TYPE
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
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.ContentLayout, { children: [
      !canRead && /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.NoPermissions, {}),
      canRead && transferTokens$1.length > 0 && /* @__PURE__ */ jsxRuntime.jsx(
        Table.Table,
        {
          permissions: { canRead, canDelete, canUpdate },
          headers,
          contentType: "trasfer-tokens",
          isLoading,
          onConfirmDelete: handleDelete,
          tokens: transferTokens$1,
          tokenType: constants.TRANSFER_TOKEN_TYPE
        }
      ),
      canRead && canCreate && transferTokens$1.length === 0 && /* @__PURE__ */ jsxRuntime.jsx(
        helperPlugin.NoContent,
        {
          content: {
            id: "Settings.transferTokens.addFirstToken",
            defaultMessage: "Add your first Transfer Token"
          },
          action: /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.LinkButton,
            {
              variant: "secondary",
              startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Plus, {}),
              to: "/settings/transfer-tokens/create",
              children: formatMessage({
                id: "Settings.transferTokens.addNewToken",
                defaultMessage: "Add new Transfer Token"
              })
            }
          )
        }
      ),
      canRead && !canCreate && transferTokens$1.length === 0 && /* @__PURE__ */ jsxRuntime.jsx(
        helperPlugin.NoContent,
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
  const permissions = index.useTypedSelector(
    (state) => state.admin_app.permissions.settings?.["transfer-tokens"].main
  );
  return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.CheckPagePermissions, { permissions, children: /* @__PURE__ */ jsxRuntime.jsx(ListView, {}) });
};
exports.ListView = ListView;
exports.ProtectedListView = ProtectedListView;
//# sourceMappingURL=ListView-Ql7LERbE.js.map
