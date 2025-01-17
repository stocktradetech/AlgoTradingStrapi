import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { Button, ModalLayout, ModalHeader, ModalBody, Flex, Box, Typography, Grid, GridItem, ModalFooter, Tbody, Tr, Td, BaseCheckbox, IconButton, Main, HeaderLayout, ActionLayout, ContentLayout } from "@strapi/design-system";
import { translatedErrors, useNotification, useOverlayBlocker, useAPIErrorHandler, Form, GenericInput, onRowClick, stopPropagation, CheckPagePermissions, useRBAC, useFocusWhenNavigate, SettingsPageTitle, SearchURLQuery, NoPermissions, DynamicTable, PageSizeURLQuery, PaginationURLQuery, Status } from "@strapi/helper-plugin";
import * as qs from "qs";
import { useIntl } from "react-intl";
import { useHistory, useLocation } from "react-router-dom";
import { p as useEnterprise, H as useCreateUserMutation, x as isBaseQueryError, j as useTypedSelector, k as useAdminUsers, J as useDeleteManyUsersMutation } from "./index-kIIXqMj8.mjs";
import { F as Filters } from "./Filters-dLXfVnI0.mjs";
import { Envelop, Pencil, Trash } from "@strapi/icons";
import { Breadcrumbs, Crumb } from "@strapi/design-system/v2";
import { Formik } from "formik";
import * as yup from "yup";
import { M as MagicLinkCE, S as SelectRoles } from "./SelectRoles-m8yWL1gF.mjs";
import { g as getFullName } from "./AuthenticatedApp-tGcMdSKz.mjs";
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
import "lodash/camelCase";
import "styled-components";
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
import "./useAdminRoles-20_5r44C.mjs";
import "semver/functions/lt";
import "semver/functions/valid";
const CreateActionCE = ({ onClick }) => {
  const { formatMessage } = useIntl();
  return /* @__PURE__ */ jsx(Button, { onClick, startIcon: /* @__PURE__ */ jsx(Envelop, {}), size: "S", children: formatMessage({
    id: "Settings.permissions.users.create",
    defaultMessage: "Invite new user"
  }) });
};
const ModalForm = ({ onToggle }) => {
  const [currentStep, setStep] = React.useState("create");
  const [registrationToken, setRegistrationToken] = React.useState("");
  const { formatMessage } = useIntl();
  const toggleNotification = useNotification();
  const { lockApp, unlockApp } = useOverlayBlocker();
  const {
    _unstableFormatAPIError: formatAPIError,
    _unstableFormatValidationErrors: formatValidationErrors
  } = useAPIErrorHandler();
  const roleLayout = useEnterprise(
    ROLE_LAYOUT,
    async () => (await import("./ModalForm-W9-dHdzq.mjs")).ROLE_LAYOUT,
    {
      combine(ceRoles, eeRoles) {
        return [...ceRoles, ...eeRoles];
      },
      defaultValue: []
    }
  );
  const initialValues = useEnterprise(
    FORM_INITIAL_VALUES,
    async () => (await import("./ModalForm-W9-dHdzq.mjs")).FORM_INITIAL_VALUES,
    {
      combine(ceValues, eeValues) {
        return {
          ...ceValues,
          ...eeValues
        };
      },
      defaultValue: FORM_INITIAL_VALUES
    }
  );
  const MagicLink = useEnterprise(
    MagicLinkCE,
    async () => (await import("./MagicLinkEE-XTXCIzBY.mjs")).MagicLinkEE
  );
  const [createUser] = useCreateUserMutation();
  const headerTitle = formatMessage({
    id: "Settings.permissions.users.create",
    defaultMessage: "Invite new user"
  });
  const handleSubmit = async (body, { setErrors }) => {
    lockApp();
    const res = await createUser({
      ...body,
      roles: body.roles ?? []
    });
    if ("data" in res) {
      if (res.data.registrationToken) {
        setRegistrationToken(res.data.registrationToken);
        goNext();
      } else {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: "An error occured" }
        });
      }
    } else {
      toggleNotification({
        type: "warning",
        message: formatAPIError(res.error)
      });
      if (isBaseQueryError(res.error) && res.error.name === "ValidationError") {
        setErrors(formatValidationErrors(res.error));
      }
    }
    unlockApp();
  };
  const goNext = () => {
    if (next) {
      setStep(next);
    } else {
      onToggle();
    }
  };
  const { buttonSubmitLabel, isDisabled, next } = STEPPER[currentStep];
  if (!MagicLink) {
    return null;
  }
  return /* @__PURE__ */ jsxs(ModalLayout, { onClose: onToggle, labelledBy: "title", children: [
    /* @__PURE__ */ jsx(ModalHeader, { children: /* @__PURE__ */ jsx(Breadcrumbs, { label: headerTitle, children: /* @__PURE__ */ jsx(Crumb, { isCurrent: true, children: headerTitle }) }) }),
    /* @__PURE__ */ jsx(
      Formik,
      {
        enableReinitialize: true,
        initialValues: initialValues ?? {},
        onSubmit: handleSubmit,
        validationSchema: FORM_SCHEMA,
        validateOnChange: false,
        children: ({ errors, handleChange, values, isSubmitting }) => {
          return /* @__PURE__ */ jsxs(Form, { children: [
            /* @__PURE__ */ jsx(ModalBody, { children: /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "stretch", gap: 6, children: [
              currentStep !== "create" && /* @__PURE__ */ jsx(MagicLink, { registrationToken }),
              /* @__PURE__ */ jsxs(Box, { children: [
                /* @__PURE__ */ jsx(Typography, { variant: "beta", as: "h2", children: formatMessage({
                  id: "app.components.Users.ModalCreateBody.block-title.details",
                  defaultMessage: "User details"
                }) }),
                /* @__PURE__ */ jsx(Box, { paddingTop: 4, children: /* @__PURE__ */ jsx(Flex, { direction: "column", alignItems: "stretch", gap: 1, children: /* @__PURE__ */ jsx(Grid, { gap: 5, children: FORM_LAYOUT.map((row) => {
                  return row.map((input) => {
                    return /* @__PURE__ */ jsx(GridItem, { ...input.size, children: /* @__PURE__ */ jsx(
                      GenericInput,
                      {
                        ...input,
                        disabled: isDisabled,
                        error: errors[input.name],
                        onChange: handleChange,
                        value: values[input.name]
                      }
                    ) }, input.name);
                  });
                }) }) }) })
              ] }),
              /* @__PURE__ */ jsxs(Box, { children: [
                /* @__PURE__ */ jsx(Typography, { variant: "beta", as: "h2", children: formatMessage({
                  id: "global.roles",
                  defaultMessage: "User's role"
                }) }),
                /* @__PURE__ */ jsx(Box, { paddingTop: 4, children: /* @__PURE__ */ jsxs(Grid, { gap: 5, children: [
                  /* @__PURE__ */ jsx(GridItem, { col: 6, xs: 12, children: /* @__PURE__ */ jsx(
                    SelectRoles,
                    {
                      disabled: isDisabled,
                      error: errors.roles,
                      onChange: handleChange,
                      value: values.roles ?? []
                    }
                  ) }),
                  roleLayout.map((row) => {
                    return row.map((input) => {
                      return /* @__PURE__ */ jsx(GridItem, { ...input.size, children: /* @__PURE__ */ jsx(
                        GenericInput,
                        {
                          ...input,
                          disabled: isDisabled,
                          onChange: handleChange,
                          value: values[input.name]
                        }
                      ) }, input.name);
                    });
                  })
                ] }) })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx(
              ModalFooter,
              {
                startActions: /* @__PURE__ */ jsx(Button, { variant: "tertiary", onClick: onToggle, type: "button", children: formatMessage({
                  id: "app.components.Button.cancel",
                  defaultMessage: "Cancel"
                }) }),
                endActions: currentStep === "create" ? /* @__PURE__ */ jsx(Button, { type: "submit", loading: isSubmitting, children: formatMessage(buttonSubmitLabel) }) : /* @__PURE__ */ jsx(Button, { type: "button", loading: isSubmitting, onClick: onToggle, children: formatMessage(buttonSubmitLabel) })
              }
            )
          ] });
        }
      }
    )
  ] });
};
const FORM_INITIAL_VALUES = {
  firstname: "",
  lastname: "",
  email: "",
  roles: []
};
const ROLE_LAYOUT = [];
const FORM_LAYOUT = [
  [
    {
      intlLabel: {
        id: "Auth.form.firstname.label",
        defaultMessage: "First name"
      },
      name: "firstname",
      placeholder: {
        id: "Auth.form.firstname.placeholder",
        defaultMessage: "e.g. Kai"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      },
      required: true
    },
    {
      intlLabel: {
        id: "Auth.form.lastname.label",
        defaultMessage: "Last name"
      },
      name: "lastname",
      placeholder: {
        id: "Auth.form.lastname.placeholder",
        defaultMessage: "e.g. Doe"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      }
    }
  ],
  [
    {
      intlLabel: {
        id: "Auth.form.email.label",
        defaultMessage: "Email"
      },
      name: "email",
      placeholder: {
        id: "Auth.form.email.placeholder",
        defaultMessage: "e.g. kai.doe@strapi.io"
      },
      type: "email",
      size: {
        col: 6,
        xs: 12
      },
      required: true
    }
  ]
];
const FORM_SCHEMA = yup.object().shape({
  firstname: yup.string().trim().required(translatedErrors.required),
  lastname: yup.string(),
  email: yup.string().email(translatedErrors.email).required(translatedErrors.required),
  roles: yup.array().min(1, translatedErrors.required).required(translatedErrors.required)
});
const STEPPER = {
  create: {
    buttonSubmitLabel: {
      id: "app.containers.Users.ModalForm.footer.button-success",
      defaultMessage: "Invite user"
    },
    isDisabled: false,
    next: "magic-link"
  },
  "magic-link": {
    buttonSubmitLabel: { id: "global.finish", defaultMessage: "Finish" },
    isDisabled: true,
    next: null
  }
};
const TableRows = ({
  canDelete,
  headers = [],
  entriesToDelete = [],
  onClickDelete,
  onSelectRow,
  withMainAction,
  withBulkActions,
  rows = []
}) => {
  const {
    push,
    location: { pathname }
  } = useHistory();
  const { formatMessage } = useIntl();
  return /* @__PURE__ */ jsx(Tbody, { children: rows.map((data) => {
    const isChecked = entriesToDelete.findIndex((id) => id === data.id) !== -1;
    return /* @__PURE__ */ jsxs(
      Tr,
      {
        ...onRowClick({
          fn: () => push(`${pathname}/${data.id}`),
          condition: withBulkActions
        }),
        children: [
          withMainAction && /* @__PURE__ */ jsx(Td, { ...stopPropagation, children: /* @__PURE__ */ jsx(
            BaseCheckbox,
            {
              "aria-label": formatMessage(
                {
                  id: "app.component.table.select.one-entry",
                  defaultMessage: `Select {target}`
                },
                { target: getFullName(data?.firstname ?? "", data.lastname) }
              ),
              checked: isChecked,
              onChange: () => {
                if (onSelectRow) {
                  onSelectRow({ name: data.id, value: !isChecked });
                }
              }
            }
          ) }),
          headers.map(({ key, cellFormatter, name, ...rest }) => {
            return /* @__PURE__ */ jsx(Td, { children: typeof cellFormatter === "function" ? cellFormatter(data, { key, name, formatMessage, ...rest }) : (
              // @ts-expect-error – name === "roles" has the data value of `AdminRole[]` but the header has a cellFormatter value so this shouldn't be called.
              /* @__PURE__ */ jsx(Typography, { textColor: "neutral800", children: data[name] || "-" })
            ) }, key);
          }),
          withBulkActions && /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsxs(Flex, { justifyContent: "end", children: [
            /* @__PURE__ */ jsx(
              IconButton,
              {
                onClick: () => push(`${pathname}/${data.id}`),
                label: formatMessage(
                  { id: "app.component.table.edit", defaultMessage: "Edit {target}" },
                  { target: getFullName(data.firstname ?? "", data.lastname) }
                ),
                noBorder: true,
                icon: /* @__PURE__ */ jsx(Pencil, {})
              }
            ),
            canDelete && /* @__PURE__ */ jsx(Box, { paddingLeft: 1, ...stopPropagation, children: /* @__PURE__ */ jsx(
              IconButton,
              {
                onClick: () => {
                  if (onClickDelete) {
                    onClickDelete(data.id);
                  }
                },
                label: formatMessage(
                  { id: "global.delete-target", defaultMessage: "Delete {target}" },
                  { target: getFullName(data.firstname ?? "", data.lastname) }
                ),
                noBorder: true,
                icon: /* @__PURE__ */ jsx(Trash, {})
              }
            ) })
          ] }) })
        ]
      },
      data.id
    );
  }) });
};
const ListPageCE = () => {
  const { _unstableFormatAPIError: formatAPIError } = useAPIErrorHandler();
  const [isModalOpened, setIsModalOpen] = React.useState(false);
  const permissions = useTypedSelector((state) => state.admin_app.permissions);
  const {
    allowedActions: { canCreate, canDelete, canRead }
  } = useRBAC(permissions.settings?.users);
  const toggleNotification = useNotification();
  const { formatMessage } = useIntl();
  const { search } = useLocation();
  useFocusWhenNavigate();
  const { data, isError, isLoading } = useAdminUsers(
    qs.parse(search, { ignoreQueryPrefix: true }),
    {
      skip: !canRead
    }
  );
  const { pagination, users } = data ?? {};
  const CreateAction = useEnterprise(
    CreateActionCE,
    async () => (await import("./CreateActionEE-tjD9fhke.mjs")).CreateActionEE
  );
  const headers = TABLE_HEADERS.map((header) => ({
    ...header,
    metadatas: {
      ...header.metadatas,
      label: formatMessage(header.metadatas.label)
    }
  }));
  const title = formatMessage({
    id: "global.users",
    defaultMessage: "Users"
  });
  const handleToggle = () => {
    setIsModalOpen((prev) => !prev);
  };
  const [deleteAll] = useDeleteManyUsersMutation();
  if (!CreateAction) {
    return null;
  }
  return /* @__PURE__ */ jsxs(Main, { "aria-busy": isLoading, children: [
    /* @__PURE__ */ jsx(SettingsPageTitle, { name: "Users" }),
    /* @__PURE__ */ jsx(
      HeaderLayout,
      {
        primaryAction: canCreate && /* @__PURE__ */ jsx(CreateAction, { onClick: handleToggle }),
        title,
        subtitle: formatMessage({
          id: "Settings.permissions.users.listview.header.subtitle",
          defaultMessage: "All the users who have access to the Strapi admin panel"
        })
      }
    ),
    canRead && /* @__PURE__ */ jsx(
      ActionLayout,
      {
        startActions: /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            SearchURLQuery,
            {
              label: formatMessage(
                { id: "app.component.search.label", defaultMessage: "Search for {target}" },
                { target: title }
              )
            }
          ),
          /* @__PURE__ */ jsx(Filters, { displayedFilters: DISPLAYED_HEADERS })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs(ContentLayout, { children: [
      !canRead && /* @__PURE__ */ jsx(NoPermissions, {}),
      isError && /* @__PURE__ */ jsx("div", { children: "TODO: An error occurred" }),
      canRead && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          DynamicTable,
          {
            contentType: "Users",
            isLoading,
            onConfirmDeleteAll: async (ids) => {
              const res = await deleteAll({ ids });
              if ("error" in res) {
                toggleNotification({
                  type: "warning",
                  message: formatAPIError(res.error)
                });
              }
            },
            onConfirmDelete: async (id) => {
              const res = await deleteAll({ ids: [id] });
              if ("error" in res) {
                toggleNotification({
                  type: "warning",
                  message: formatAPIError(res.error)
                });
              }
            },
            headers,
            rows: users,
            withBulkActions: true,
            withMainAction: canDelete,
            children: /* @__PURE__ */ jsx(TableRows, { canDelete })
          }
        ),
        pagination && /* @__PURE__ */ jsx(Box, { paddingTop: 4, children: /* @__PURE__ */ jsxs(Flex, { alignItems: "flex-end", justifyContent: "space-between", children: [
          /* @__PURE__ */ jsx(PageSizeURLQuery, {}),
          /* @__PURE__ */ jsx(PaginationURLQuery, { pagination })
        ] }) })
      ] })
    ] }),
    isModalOpened && /* @__PURE__ */ jsx(ModalForm, { onToggle: handleToggle })
  ] });
};
const TABLE_HEADERS = [
  {
    name: "firstname",
    key: "firstname",
    metadatas: {
      label: {
        id: "Settings.permissions.users.firstname",
        defaultMessage: "Firstname"
      },
      sortable: true
    }
  },
  {
    name: "lastname",
    key: "lastname",
    metadatas: {
      label: {
        id: "Settings.permissions.users.lastname",
        defaultMessage: "Lastname"
      },
      sortable: true
    }
  },
  {
    key: "email",
    name: "email",
    metadatas: {
      label: { id: "Settings.permissions.users.email", defaultMessage: "Email" },
      sortable: true
    }
  },
  {
    key: "roles",
    name: "roles",
    metadatas: {
      label: {
        id: "Settings.permissions.users.roles",
        defaultMessage: "Roles"
      },
      sortable: false
    },
    cellFormatter({ roles }, { formatMessage }) {
      return /* @__PURE__ */ jsx(Typography, { textColor: "neutral800", children: roles.map(
        (role) => formatMessage({
          id: `Settings.permissions.users.${role.code}`,
          defaultMessage: role.name
        })
      ).join(",\n") });
    }
  },
  {
    key: "username",
    name: "username",
    metadatas: {
      label: {
        id: "Settings.permissions.users.username",
        defaultMessage: "Username"
      },
      sortable: true
    }
  },
  {
    key: "isActive",
    name: "isActive",
    metadatas: {
      label: {
        id: "Settings.permissions.users.user-status",
        defaultMessage: "User status"
      },
      sortable: false
    },
    cellFormatter({ isActive }, { formatMessage }) {
      return /* @__PURE__ */ jsxs(Flex, { children: [
        /* @__PURE__ */ jsx(Status, { variant: isActive ? "success" : "danger" }),
        /* @__PURE__ */ jsx(Typography, { textColor: "neutral800", children: formatMessage({
          id: isActive ? "Settings.permissions.users.active" : "Settings.permissions.users.inactive",
          defaultMessage: isActive ? "Active" : "Inactive"
        }) })
      ] });
    }
  }
];
const DISPLAYED_HEADERS = [
  {
    name: "firstname",
    metadatas: { label: "Firstname" },
    fieldSchema: { type: "string" }
  },
  {
    name: "lastname",
    metadatas: { label: "Lastname" },
    fieldSchema: { type: "string" }
  },
  {
    name: "email",
    metadatas: { label: "Email" },
    fieldSchema: { type: "email" }
  },
  {
    name: "username",
    metadatas: { label: "Username" },
    fieldSchema: { type: "string" }
  },
  {
    name: "isActive",
    metadatas: { label: "Active user" },
    fieldSchema: { type: "boolean" }
  }
];
const ListPage = () => {
  const UsersListPage = useEnterprise(
    ListPageCE,
    async () => (
      // eslint-disable-next-line import/no-cycle
      (await import("./ListPage-q9Cqg05-.mjs")).UserListPageEE
    )
  );
  if (!UsersListPage) {
    return null;
  }
  return /* @__PURE__ */ jsx(UsersListPage, {});
};
const ProtectedListPage = () => {
  const permissions = useTypedSelector((state) => state.admin_app.permissions.settings?.users.main);
  return /* @__PURE__ */ jsx(CheckPagePermissions, { permissions, children: /* @__PURE__ */ jsx(ListPage, {}) });
};
export {
  ListPage,
  ListPageCE,
  ProtectedListPage
};
//# sourceMappingURL=ListPage-HUm4UB9V.mjs.map
