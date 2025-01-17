import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { ModalLayout, ModalHeader, ModalBody, Flex, Loader, Box, Typography, Grid, JSONInput, Tbody, Tr, Td, IconButton, Combobox, ComboboxOption, Layout, ContentLayout, Main, HeaderLayout, ActionLayout } from "@strapi/design-system";
import { useNotification, useAPIErrorHandler, PageSizeURLQuery, PaginationURLQuery, onRowClick, stopPropagation, useQueryParams, CheckPagePermissions, useRBAC, useFocusWhenNavigate, AnErrorOccurred, SettingsPageTitle, DynamicTable } from "@strapi/helper-plugin";
import { useIntl } from "react-intl";
import { n as adminApi, k as useAdminUsers, j as useTypedSelector } from "./index-kIIXqMj8.mjs";
import { F as Filters } from "./Filters-dLXfVnI0.mjs";
import * as React from "react";
import { Breadcrumbs, Crumb } from "@strapi/design-system/v2";
import parseISO from "date-fns/parseISO";
import { Eye } from "@strapi/icons";
import PropTypes from "prop-types";
import "react-dom/client";
import "invariant";
import "lodash/isFunction";
import "lodash/merge";
import "lodash/pick";
import "react-helmet";
import "react-router-dom";
import "react-redux";
import "use-context-selector";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query/react";
import "axios";
import "@radix-ui/react-context";
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
const auditLogsService = adminApi.injectEndpoints({
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
  const { formatDate } = useIntl();
  const formatTimeStamp = (value) => {
    const date = parseISO(value);
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
  const toggleNotification = useNotification();
  const { _unstableFormatAPIError: formatAPIError } = useAPIErrorHandler();
  const { data, error, isLoading } = useGetAuditLogQuery(logId);
  React.useEffect(() => {
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
  return /* @__PURE__ */ jsxs(ModalLayout, { onClose: handleClose, labelledBy: "title", children: [
    /* @__PURE__ */ jsx(ModalHeader, { children: /* @__PURE__ */ jsx(Breadcrumbs, { label: formattedDate, id: "title", children: /* @__PURE__ */ jsx(Crumb, { isCurrent: true, children: formattedDate }) }) }),
    /* @__PURE__ */ jsx(ModalBody, { children: /* @__PURE__ */ jsx(ActionBody, { isLoading, data, formattedDate }) })
  ] });
};
const ActionBody = ({ isLoading, data, formattedDate }) => {
  const { formatMessage } = useIntl();
  if (isLoading) {
    return /* @__PURE__ */ jsx(Flex, { padding: 7, justifyContent: "center", alignItems: "center", children: /* @__PURE__ */ jsx(Loader, { children: "Loading content..." }) });
  }
  const { action, user, payload } = data;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Box, { marginBottom: 3, children: /* @__PURE__ */ jsx(Typography, { variant: "delta", id: "title", children: formatMessage({
      id: "Settings.permissions.auditLogs.details",
      defaultMessage: "Log Details"
    }) }) }),
    /* @__PURE__ */ jsxs(
      Grid,
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
          /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsx(
            ActionItem,
            {
              actionLabel: formatMessage({
                id: "Settings.permissions.auditLogs.date",
                defaultMessage: "Date"
              }),
              actionName: formattedDate
            }
          ),
          /* @__PURE__ */ jsx(
            ActionItem,
            {
              actionLabel: formatMessage({
                id: "Settings.permissions.auditLogs.user",
                defaultMessage: "User"
              }),
              actionName: user?.displayName || "-"
            }
          ),
          /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsx(
      JSONInput,
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
  return /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "baseline", gap: 1, children: [
    /* @__PURE__ */ jsx(Typography, { textColor: "neutral600", variant: "sigma", children: actionLabel }),
    /* @__PURE__ */ jsx(Typography, { textColor: "neutral600", children: actionName })
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
  return /* @__PURE__ */ jsx(Box, { paddingTop: 4, children: /* @__PURE__ */ jsxs(Flex, { alignItems: "flex-end", justifyContent: "space-between", children: [
    /* @__PURE__ */ jsx(PageSizeURLQuery, {}),
    /* @__PURE__ */ jsx(PaginationURLQuery, { pagination })
  ] }) });
};
const TableRows = ({ headers, rows, onOpenModal }) => {
  const { formatMessage } = useIntl();
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
  return /* @__PURE__ */ jsx(Tbody, { children: rows.map((data) => {
    return /* @__PURE__ */ jsxs(
      Tr,
      {
        ...onRowClick({
          fn: () => onOpenModal(data.id)
        }),
        children: [
          headers?.map(({ key, name, cellFormatter }) => {
            const rowValue = data[name];
            return /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(Typography, { textColor: "neutral800", children: getCellValue({
              type: key,
              value: cellFormatter ? cellFormatter(rowValue) : rowValue,
              model: data.payload?.model
            }) }) }, key);
          }),
          /* @__PURE__ */ jsx(Td, { ...stopPropagation, children: /* @__PURE__ */ jsx(Flex, { justifyContent: "end", children: /* @__PURE__ */ jsx(
            IconButton,
            {
              onClick: () => onOpenModal(data.id),
              "aria-label": formatMessage(
                { id: "app.component.table.view", defaultMessage: "{target} details" },
                { target: `${data.action} action` }
              ),
              noBorder: true,
              icon: /* @__PURE__ */ jsx(Eye, {})
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
  headers: PropTypes.array.isRequired,
  rows: PropTypes.array,
  onOpenModal: PropTypes.func.isRequired
};
const useAuditLogsData = ({
  canReadAuditLogs,
  canReadUsers
}) => {
  const toggleNotification = useNotification();
  const { _unstableFormatAPIError: formatAPIError } = useAPIErrorHandler();
  const [{ query }] = useQueryParams();
  const {
    data,
    error,
    isError: isUsersError,
    isLoading: isLoadingUsers
  } = useAdminUsers(
    {},
    {
      skip: !canReadUsers,
      refetchOnMountOrArgChange: true
    }
  );
  React.useEffect(() => {
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
  React.useEffect(() => {
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
  const { formatMessage } = useIntl();
  const ariaLabel = formatMessage({
    id: "Settings.permissions.auditLogs.filter.aria-label",
    defaultMessage: "Search and select an option to filter"
  });
  return /* @__PURE__ */ jsx(Combobox, { "aria-label": ariaLabel, value, onChange, children: options?.map(({ label, customValue }) => {
    return /* @__PURE__ */ jsx(ComboboxOption, { value: customValue, children: label }, customValue);
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
  const { formatMessage } = useIntl();
  const permissions = useTypedSelector((state) => state.admin_app.permissions.settings);
  const {
    allowedActions: { canRead: canReadAuditLogs, canReadUsers },
    isLoading: isLoadingRBAC
  } = useRBAC({
    ...permissions?.auditLogs,
    readUsers: permissions?.users.read || []
  });
  const [{ query }, setQuery] = useQueryParams();
  const {
    auditLogs,
    users,
    isLoading: isLoadingData,
    hasError
  } = useAuditLogsData({
    canReadAuditLogs,
    canReadUsers
  });
  useFocusWhenNavigate();
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
    return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx(ContentLayout, { children: /* @__PURE__ */ jsx(Box, { paddingTop: 8, children: /* @__PURE__ */ jsx(AnErrorOccurred, {}) }) }) });
  }
  const isLoading = isLoadingData || isLoadingRBAC;
  return /* @__PURE__ */ jsxs(Main, { "aria-busy": isLoading, children: [
    /* @__PURE__ */ jsx(
      SettingsPageTitle,
      {
        name: formatMessage({
          id: "global.auditLogs",
          defaultMessage: "Audit Logs"
        })
      }
    ),
    /* @__PURE__ */ jsx(
      HeaderLayout,
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
    /* @__PURE__ */ jsx(ActionLayout, { startActions: /* @__PURE__ */ jsx(Filters, { displayedFilters }) }),
    /* @__PURE__ */ jsxs(ContentLayout, { children: [
      /* @__PURE__ */ jsx(
        DynamicTable,
        {
          contentType: "Audit logs",
          headers,
          rows: auditLogs?.results || [],
          withBulkActions: true,
          isLoading,
          children: /* @__PURE__ */ jsx(
            TableRows,
            {
              headers,
              rows: auditLogs?.results || [],
              onOpenModal: (id) => setQuery({ id: `${id}` })
            }
          )
        }
      ),
      auditLogs?.pagination && /* @__PURE__ */ jsx(PaginationFooter, { pagination: auditLogs.pagination })
    ] }),
    query?.id && /* @__PURE__ */ jsx(Modal, { handleClose: () => setQuery({ id: null }, "remove"), logId: query.id })
  ] });
};
const ProtectedListPage = () => {
  const permissions = useTypedSelector(
    (state) => state.admin_app.permissions.settings?.auditLogs?.main
  );
  return /* @__PURE__ */ jsx(CheckPagePermissions, { permissions, children: /* @__PURE__ */ jsx(ListPage, {}) });
};
export {
  ListPage,
  ProtectedListPage
};
//# sourceMappingURL=ListPage-N4W6zzFi.mjs.map
