"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const designSystem = require("@strapi/design-system");
const helperPlugin = require("@strapi/helper-plugin");
const reactIntl = require("react-intl");
const index = require("./index-1g9GBMjI.js");
const Filters = require("./Filters-Gdnt7qft.js");
const React = require("react");
const v2 = require("@strapi/design-system/v2");
const parseISO = require("date-fns/parseISO");
const Icons = require("@strapi/icons");
const PropTypes = require("prop-types");
require("react-dom/client");
require("invariant");
require("lodash/isFunction");
require("lodash/merge");
require("lodash/pick");
require("react-helmet");
require("react-router-dom");
require("react-redux");
require("use-context-selector");
require("@reduxjs/toolkit");
require("@reduxjs/toolkit/query/react");
require("axios");
require("@radix-ui/react-context");
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
const parseISO__default = /* @__PURE__ */ _interopDefault(parseISO);
const PropTypes__default = /* @__PURE__ */ _interopDefault(PropTypes);
const auditLogsService = index.adminApi.injectEndpoints({
  endpoints: (builder) => ({
    getAuditLogs: builder.query({
      query: (params) => ({
        url: `/admin/audit-logs`,
        config: {
          params
        }
      })
    }),
    getAuditLog: builder.query({
      query: (id) => `/admin/audit-logs/${id}`
    })
  }),
  overrideExisting: false
});
const { useGetAuditLogsQuery, useGetAuditLogQuery } = auditLogsService;
const useFormatTimeStamp = () => {
  const { formatDate } = reactIntl.useIntl();
  const formatTimeStamp = (value) => {
    const date = parseISO__default.default(value);
    const formattedDate = formatDate(date, {
      dateStyle: "long"
    });
    const formattedTime = formatDate(date, {
      timeStyle: "medium",
      hourCycle: "h24"
    });
    return `${formattedDate}, ${formattedTime}`;
  };
  return formatTimeStamp;
};
const actionTypes = {
  "entry.create": "Create entry{model, select, undefined {} other { ({model})}}",
  "entry.update": "Update entry{model, select, undefined {} other { ({model})}}",
  "entry.delete": "Delete entry{model, select, undefined {} other { ({model})}}",
  "entry.publish": "Publish entry{model, select, undefined {} other { ({model})}}",
  "entry.unpublish": "Unpublish entry{model, select, undefined {} other { ({model})}}",
  "media.create": "Create media",
  "media.update": "Update media",
  "media.delete": "Delete media",
  "media-folder.create": "Create media folder",
  "media-folder.update": "Update media folder",
  "media-folder.delete": "Delete media folder",
  "user.create": "Create user",
  "user.update": "Update user",
  "user.delete": "Delete user",
  "admin.auth.success": "Admin login",
  "admin.logout": "Admin logout",
  "content-type.create": "Create content type",
  "content-type.update": "Update content type",
  "content-type.delete": "Delete content type",
  "component.create": "Create component",
  "component.update": "Update component",
  "component.delete": "Delete component",
  "role.create": "Create role",
  "role.update": "Update role",
  "role.delete": "Delete role",
  "permission.create": "Create permission",
  "permission.update": "Update permission",
  "permission.delete": "Delete permission"
};
const getDefaultMessage = (value) => {
  return actionTypes[value] || value;
};
const Modal = ({ handleClose, logId }) => {
  const toggleNotification = helperPlugin.useNotification();
  const { _unstableFormatAPIError: formatAPIError } = helperPlugin.useAPIErrorHandler();
  const { data, error, isLoading } = useGetAuditLogQuery(logId);
  React__namespace.useEffect(() => {
    if (error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
      handleClose();
    }
  }, [error, formatAPIError, handleClose, toggleNotification]);
  const formatTimeStamp = useFormatTimeStamp();
  const formattedDate = data && "date" in data ? formatTimeStamp(data.date) : "";
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.ModalLayout, { onClose: handleClose, labelledBy: "title", children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.ModalHeader, { children: /* @__PURE__ */ jsxRuntime.jsx(v2.Breadcrumbs, { label: formattedDate, id: "title", children: /* @__PURE__ */ jsxRuntime.jsx(v2.Crumb, { isCurrent: true, children: formattedDate }) }) }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.ModalBody, { children: /* @__PURE__ */ jsxRuntime.jsx(ActionBody, { isLoading, data, formattedDate }) })
  ] });
};
const ActionBody = ({ isLoading, data, formattedDate }) => {
  const { formatMessage } = reactIntl.useIntl();
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { padding: 7, justifyContent: "center", alignItems: "center", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Loader, { children: "Loading content..." }) });
  }
  const { action, user, payload } = data;
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { marginBottom: 3, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "delta", id: "title", children: formatMessage({
      id: "Settings.permissions.auditLogs.details",
      defaultMessage: "Log Details"
    }) }) }),
    /* @__PURE__ */ jsxRuntime.jsxs(
      designSystem.Grid,
      {
        gap: 4,
        gridCols: 2,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 6,
        paddingRight: 6,
        marginBottom: 4,
        background: "neutral100",
        hasRadius: true,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            ActionItem,
            {
              actionLabel: formatMessage({
                id: "Settings.permissions.auditLogs.action",
                defaultMessage: "Action"
              }),
              actionName: formatMessage(
                {
                  id: `Settings.permissions.auditLogs.${action}`,
                  defaultMessage: getDefaultMessage(action)
                },
                // @ts-expect-error - any
                { model: payload?.model }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            ActionItem,
            {
              actionLabel: formatMessage({
                id: "Settings.permissions.auditLogs.date",
                defaultMessage: "Date"
              }),
              actionName: formattedDate
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            ActionItem,
            {
              actionLabel: formatMessage({
                id: "Settings.permissions.auditLogs.user",
                defaultMessage: "User"
              }),
              actionName: user?.displayName || "-"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            ActionItem,
            {
              actionLabel: formatMessage({
                id: "Settings.permissions.auditLogs.userId",
                defaultMessage: "User ID"
              }),
              actionName: user?.id.toString() || "-"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.JSONInput,
      {
        value: JSON.stringify(payload, null, 2),
        disabled: true,
        label: formatMessage({
          id: "Settings.permissions.auditLogs.payload",
          defaultMessage: "Payload"
        })
      }
    )
  ] });
};
const ActionItem = ({ actionLabel, actionName }) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "baseline", gap: 1, children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "neutral600", variant: "sigma", children: actionLabel }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "neutral600", children: actionName })
  ] });
};
const PaginationFooter = ({ pagination } = {
  pagination: {
    page: 1,
    pageCount: 0,
    pageSize: 50,
    total: 0
  }
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 4, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { alignItems: "flex-end", justifyContent: "space-between", children: [
    /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.PageSizeURLQuery, {}),
    /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.PaginationURLQuery, { pagination })
  ] }) });
};
const TableRows = ({ headers, rows, onOpenModal }) => {
  const { formatMessage } = reactIntl.useIntl();
  const formatTimeStamp = useFormatTimeStamp();
  const getCellValue = ({ type, value, model }) => {
    if (type === "date") {
      return formatTimeStamp(value);
    }
    if (type === "action") {
      return formatMessage(
        {
          id: `Settings.permissions.auditLogs.${value}`,
          defaultMessage: getDefaultMessage(value)
        },
        // @ts-expect-error - Model
        { model }
      );
    }
    return value || "-";
  };
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Tbody, { children: rows.map((data) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      designSystem.Tr,
      {
        ...helperPlugin.onRowClick({
          fn: () => onOpenModal(data.id)
        }),
        children: [
          headers?.map(({ key, name, cellFormatter }) => {
            const rowValue = data[name];
            return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "neutral800", children: getCellValue({
              type: key,
              value: cellFormatter ? cellFormatter(rowValue) : rowValue,
              model: data.payload?.model
            }) }) }, key);
          }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { ...helperPlugin.stopPropagation, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { justifyContent: "end", children: /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.IconButton,
            {
              onClick: () => onOpenModal(data.id),
              "aria-label": formatMessage(
                { id: "app.component.table.view", defaultMessage: "{target} details" },
                { target: `${data.action} action` }
              ),
              noBorder: true,
              icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Eye, {})
            }
          ) }) })
        ]
      },
      data.id
    );
  }) });
};
TableRows.defaultProps = {
  rows: []
};
TableRows.propTypes = {
  headers: PropTypes__default.default.array.isRequired,
  rows: PropTypes__default.default.array,
  onOpenModal: PropTypes__default.default.func.isRequired
};
const useAuditLogsData = ({
  canReadAuditLogs,
  canReadUsers
}) => {
  const toggleNotification = helperPlugin.useNotification();
  const { _unstableFormatAPIError: formatAPIError } = helperPlugin.useAPIErrorHandler();
  const [{ query }] = helperPlugin.useQueryParams();
  const {
    data,
    error,
    isError: isUsersError,
    isLoading: isLoadingUsers
  } = index.useAdminUsers(
    {},
    {
      skip: !canReadUsers,
      refetchOnMountOrArgChange: true
    }
  );
  React__namespace.useEffect(() => {
    if (error) {
      toggleNotification({ type: "warning", message: formatAPIError(error) });
    }
  }, [error, toggleNotification, formatAPIError]);
  const {
    data: auditLogs,
    isLoading: isLoadingAuditLogs,
    isError: isAuditLogsError,
    error: auditLogsError
  } = useGetAuditLogsQuery(query, {
    refetchOnMountOrArgChange: true,
    skip: !canReadAuditLogs
  });
  React__namespace.useEffect(() => {
    if (auditLogsError) {
      toggleNotification({ type: "warning", message: formatAPIError(auditLogsError) });
    }
  }, [auditLogsError, toggleNotification, formatAPIError]);
  return {
    auditLogs,
    users: data?.users ?? [],
    isLoading: isLoadingUsers || isLoadingAuditLogs,
    hasError: isAuditLogsError || isUsersError
  };
};
const ComboboxFilter = ({ value, options, onChange } = {
  value: void 0
}) => {
  const { formatMessage } = reactIntl.useIntl();
  const ariaLabel = formatMessage({
    id: "Settings.permissions.auditLogs.filter.aria-label",
    defaultMessage: "Search and select an option to filter"
  });
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Combobox, { "aria-label": ariaLabel, value, onChange, children: options?.map(({ label, customValue }) => {
    return /* @__PURE__ */ jsxRuntime.jsx(designSystem.ComboboxOption, { value: customValue, children: label }, customValue);
  }) });
};
const customOperators = [
  {
    intlLabel: { id: "components.FilterOptions.FILTER_TYPES.$eq", defaultMessage: "is" },
    value: "$eq"
  },
  {
    intlLabel: { id: "components.FilterOptions.FILTER_TYPES.$ne", defaultMessage: "is not" },
    value: "$ne"
  }
];
const getDisplayedFilters = ({
  formatMessage,
  users,
  canReadUsers
}) => {
  const filters = [
    {
      name: "action",
      metadatas: {
        customOperators,
        label: formatMessage({
          id: "Settings.permissions.auditLogs.action",
          defaultMessage: "Action"
        }),
        customInput: ComboboxFilter,
        // Default return of Object.keys function is string
        options: Object.keys(actionTypes).map((action) => ({
          label: formatMessage(
            {
              id: `Settings.permissions.auditLogs.${action}`,
              defaultMessage: getDefaultMessage(action)
            },
            { model: void 0 }
          ),
          customValue: action
        }))
      },
      fieldSchema: { type: "enumeration" }
    },
    {
      name: "date",
      metadatas: {
        label: formatMessage({
          id: "Settings.permissions.auditLogs.date",
          defaultMessage: "Date"
        })
      },
      fieldSchema: { type: "datetime" }
    }
  ];
  if (canReadUsers && users) {
    const getDisplayNameFromUser = (user) => {
      if (user.username) {
        return user.username;
      }
      if (user.firstname && user.lastname) {
        return formatMessage(
          {
            id: "Settings.permissions.auditLogs.user.fullname",
            defaultMessage: "{firstname} {lastname}"
          },
          {
            firstname: user.firstname,
            lastname: user.lastname
          }
        );
      }
      return user.email;
    };
    return [
      ...filters,
      {
        name: "user",
        metadatas: {
          customOperators,
          label: formatMessage({
            id: "Settings.permissions.auditLogs.user",
            defaultMessage: "User"
          }),
          options: users.map((user) => ({
            label: getDisplayNameFromUser(user),
            // Combobox expects a string value
            customValue: user.id.toString()
          })),
          customInput: ComboboxFilter
        },
        fieldSchema: { type: "relation", mainField: { name: "id" } }
      }
    ];
  }
  return filters;
};
const ListPage = () => {
  const { formatMessage } = reactIntl.useIntl();
  const permissions = index.useTypedSelector((state) => state.admin_app.permissions.settings);
  const {
    allowedActions: { canRead: canReadAuditLogs, canReadUsers },
    isLoading: isLoadingRBAC
  } = helperPlugin.useRBAC({
    ...permissions?.auditLogs,
    readUsers: permissions?.users.read || []
  });
  const [{ query }, setQuery] = helperPlugin.useQueryParams();
  const {
    auditLogs,
    users,
    isLoading: isLoadingData,
    hasError
  } = useAuditLogsData({
    canReadAuditLogs,
    canReadUsers
  });
  helperPlugin.useFocusWhenNavigate();
  const displayedFilters = getDisplayedFilters({ formatMessage, users, canReadUsers });
  const headers = [
    {
      name: "action",
      key: "action",
      metadatas: {
        label: formatMessage({
          id: "Settings.permissions.auditLogs.action",
          defaultMessage: "Action"
        }),
        sortable: true
      }
    },
    {
      name: "date",
      key: "date",
      metadatas: {
        label: formatMessage({
          id: "Settings.permissions.auditLogs.date",
          defaultMessage: "Date"
        }),
        sortable: true
      }
    },
    {
      key: "user",
      name: "user",
      metadatas: {
        label: formatMessage({
          id: "Settings.permissions.auditLogs.user",
          defaultMessage: "User"
        }),
        sortable: false
      },
      // In this case, the passed parameter cannot and shouldn't be something else than User
      cellFormatter: (user) => user ? user.displayName : ""
    }
  ];
  if (hasError) {
    return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Layout, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.ContentLayout, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 8, children: /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.AnErrorOccurred, {}) }) }) });
  }
  const isLoading = isLoadingData || isLoadingRBAC;
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { "aria-busy": isLoading, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      helperPlugin.SettingsPageTitle,
      {
        name: formatMessage({
          id: "global.auditLogs",
          defaultMessage: "Audit Logs"
        })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.HeaderLayout,
      {
        title: formatMessage({
          id: "global.auditLogs",
          defaultMessage: "Audit Logs"
        }),
        subtitle: formatMessage({
          id: "Settings.permissions.auditLogs.listview.header.subtitle",
          defaultMessage: "Logs of all the activities that happened in your environment"
        })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.ActionLayout, { startActions: /* @__PURE__ */ jsxRuntime.jsx(Filters.Filters, { displayedFilters }) }),
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.ContentLayout, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        helperPlugin.DynamicTable,
        {
          contentType: "Audit logs",
          headers,
          rows: auditLogs?.results || [],
          withBulkActions: true,
          isLoading,
          children: /* @__PURE__ */ jsxRuntime.jsx(
            TableRows,
            {
              headers,
              rows: auditLogs?.results || [],
              onOpenModal: (id) => setQuery({ id: `${id}` })
            }
          )
        }
      ),
      auditLogs?.pagination && /* @__PURE__ */ jsxRuntime.jsx(PaginationFooter, { pagination: auditLogs.pagination })
    ] }),
    query?.id && /* @__PURE__ */ jsxRuntime.jsx(Modal, { handleClose: () => setQuery({ id: null }, "remove"), logId: query.id })
  ] });
};
const ProtectedListPage = () => {
  const permissions = index.useTypedSelector(
    (state) => state.admin_app.permissions.settings?.auditLogs?.main
  );
  return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.CheckPagePermissions, { permissions, children: /* @__PURE__ */ jsxRuntime.jsx(ListPage, {}) });
};
exports.ListPage = ListPage;
exports.ProtectedListPage = ProtectedListPage;
//# sourceMappingURL=ListPage-F7pCDOer.js.map
