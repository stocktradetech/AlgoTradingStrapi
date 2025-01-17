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
const apiTokens = require("./apiTokens-hPBYGHiM.js");
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
  helperPlugin.useFocusWhenNavigate();
  const { formatMessage } = reactIntl.useIntl();
  const toggleNotification = helperPlugin.useNotification();
  const permissions = index.useTypedSelector(
    (state) => state.admin_app.permissions.settings?.["api-tokens"]
  );
  const {
    allowedActions: { canCreate, canDelete, canUpdate, canRead }
  } = helperPlugin.useRBAC(permissions);
  const { push } = reactRouterDom.useHistory();
  const { trackUsage } = helperPlugin.useTracking();
  const { startSection } = helperPlugin.useGuidedTour();
  const { _unstableFormatAPIError: formatAPIError } = helperPlugin.useAPIErrorHandler();
  React__namespace.useEffect(() => {
    startSection("apiTokens");
  }, [startSection]);
  React__namespace.useEffect(() => {
    push({ search: qs__default.default.stringify({ sort: "name:ASC" }, { encode: false }) });
  }, [push]);
  const headers = TABLE_HEADERS.map((header) => ({
    ...header,
    metadatas: {
      ...header.metadatas,
      label: formatMessage(header.metadatas.label)
    }
  }));
  index.useOnce(() => {
    trackUsage("willAccessTokenList", {
      tokenType: constants.API_TOKEN_TYPE
    });
  });
  const {
    data: apiTokens$1 = [],
    isLoading,
    error
  } = apiTokens.useGetAPITokensQuery(void 0, {
    skip: !canRead
  });
  React__namespace.useEffect(() => {
    if (error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
    }
  }, [error, formatAPIError, toggleNotification]);
  React__namespace.useEffect(() => {
    trackUsage("didAccessTokenList", { number: apiTokens$1.length, tokenType: constants.API_TOKEN_TYPE });
  }, [apiTokens$1, trackUsage]);
  const [deleteToken] = apiTokens.useDeleteAPITokenMutation();
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
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { "aria-busy": isLoading, children: [
    /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.SettingsPageTitle, { name: "API Tokens" }),
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.HeaderLayout,
      {
        title: formatMessage({ id: "Settings.apiTokens.title", defaultMessage: "API Tokens" }),
        subtitle: formatMessage({
          id: "Settings.apiTokens.description",
          defaultMessage: "List of generated tokens to consume the API"
        }),
        primaryAction: canCreate && /* @__PURE__ */ jsxRuntime.jsx(
          designSystem.LinkButton,
          {
            "data-testid": "create-api-token-button",
            startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Plus, {}),
            size: "S",
            onClick: () => trackUsage("willAddTokenFromList", {
              tokenType: constants.API_TOKEN_TYPE
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
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.ContentLayout, { children: [
      !canRead && /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.NoPermissions, {}),
      canRead && apiTokens$1.length > 0 && /* @__PURE__ */ jsxRuntime.jsx(
        Table.Table,
        {
          permissions: { canRead, canDelete, canUpdate },
          headers,
          contentType: "api-tokens",
          isLoading,
          onConfirmDelete: handleDelete,
          tokens: apiTokens$1,
          tokenType: constants.API_TOKEN_TYPE
        }
      ),
      canRead && canCreate && apiTokens$1.length === 0 && /* @__PURE__ */ jsxRuntime.jsx(
        helperPlugin.NoContent,
        {
          content: {
            id: "Settings.apiTokens.addFirstToken",
            defaultMessage: "Add your first API Token"
          },
          action: /* @__PURE__ */ jsxRuntime.jsx(designSystem.LinkButton, { variant: "secondary", startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Plus, {}), to: "/settings/api-tokens/create", children: formatMessage({
            id: "Settings.apiTokens.addNewToken",
            defaultMessage: "Add new API Token"
          }) })
        }
      ),
      canRead && !canCreate && apiTokens$1.length === 0 && /* @__PURE__ */ jsxRuntime.jsx(
        helperPlugin.NoContent,
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
  const permissions = index.useTypedSelector(
    (state) => state.admin_app.permissions.settings?.["api-tokens"].main
  );
  return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.CheckPagePermissions, { permissions, children: /* @__PURE__ */ jsxRuntime.jsx(ListView, {}) });
};
exports.ListView = ListView;
exports.ProtectedListView = ProtectedListView;
//# sourceMappingURL=ListView-Pneytx6z.js.map
