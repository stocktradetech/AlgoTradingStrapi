"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const React = require("react");
const designSystem = require("@strapi/design-system");
const v2 = require("@strapi/design-system/v2");
const helperPlugin = require("@strapi/helper-plugin");
const Icons = require("@strapi/icons");
const reactIntl = require("react-intl");
const reactRouterDom = require("react-router-dom");
const index = require("./index-1g9GBMjI.js");
const useWebhooks = require("./useWebhooks--vWIvDQ3.js");
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
const ListPage = () => {
  const [showModal, setShowModal] = React__namespace.useState(false);
  const [isDeleting, setIsDeleting] = React__namespace.useState(false);
  const [webhooksToDelete, setWebhooksToDelete] = React__namespace.useState([]);
  const permissions = index.useTypedSelector((state) => state.admin_app.permissions.settings?.webhooks);
  const { formatMessage } = reactIntl.useIntl();
  const { _unstableFormatAPIError: formatAPIError } = helperPlugin.useAPIErrorHandler();
  const toggleNotification = helperPlugin.useNotification();
  helperPlugin.useFocusWhenNavigate();
  const { push } = reactRouterDom.useHistory();
  const { pathname } = reactRouterDom.useLocation();
  const {
    isLoading: isRBACLoading,
    allowedActions: { canCreate, canUpdate, canDelete }
  } = helperPlugin.useRBAC(permissions);
  const { notifyStatus } = designSystem.useNotifyAT();
  const {
    isLoading: isWebhooksLoading,
    webhooks,
    error: webhooksError,
    updateWebhook,
    deleteManyWebhooks
  } = useWebhooks.useWebhooks();
  React__namespace.useEffect(() => {
    if (webhooksError) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(webhooksError)
      });
      return;
    }
    if (webhooks) {
      notifyStatus(
        formatMessage({
          id: "Settings.webhooks.list.loading.success",
          defaultMessage: "Webhooks have been loaded"
        })
      );
    }
  }, [webhooks, webhooksError, toggleNotification, formatMessage, notifyStatus, formatAPIError]);
  const enableWebhook = async (body) => {
    try {
      const res = await updateWebhook(body);
      if ("error" in res) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(res.error)
        });
      }
    } catch {
      toggleNotification({
        type: "warning",
        message: {
          id: "notification.error",
          defaultMessage: "An error occurred"
        }
      });
    }
  };
  const confirmDelete = async () => {
    try {
      setIsDeleting(true);
      const res = await deleteManyWebhooks({
        ids: webhooksToDelete
      });
      if ("error" in res) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(res.error)
        });
        return;
      }
      setWebhooksToDelete([]);
    } catch {
      toggleNotification({
        type: "warning",
        message: {
          id: "notification.error",
          defaultMessage: "An error occurred"
        }
      });
    } finally {
      setIsDeleting(false);
      setShowModal(false);
    }
  };
  const selectAllCheckbox = (selected) => selected ? setWebhooksToDelete(webhooks?.map((webhook) => webhook.id) ?? []) : setWebhooksToDelete([]);
  const selectOneCheckbox = (selected, id) => selected ? setWebhooksToDelete((prev) => [...prev, id]) : setWebhooksToDelete((prev) => prev.filter((webhookId) => webhookId !== id));
  const goTo = (to) => () => push(`${pathname}/${to}`);
  const isLoading = isRBACLoading || isWebhooksLoading;
  const numberOfWebhooks = webhooks?.length ?? 0;
  const webhooksToDeleteLength = webhooksToDelete.length;
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Layout, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.SettingsPageTitle, { name: "Webhooks" }),
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { "aria-busy": isLoading, children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.HeaderLayout,
        {
          title: formatMessage({ id: "Settings.webhooks.title", defaultMessage: "Webhooks" }),
          subtitle: formatMessage({
            id: "Settings.webhooks.list.description",
            defaultMessage: "Get POST changes notifications"
          }),
          primaryAction: canCreate && !isLoading && /* @__PURE__ */ jsxRuntime.jsx(
            v2.LinkButton,
            {
              as: reactRouterDom.NavLink,
              startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Plus, {}),
              variant: "default",
              to: `${pathname}/create`,
              size: "S",
              children: formatMessage({
                id: "Settings.webhooks.list.button.add",
                defaultMessage: "Create new webhook"
              })
            }
          )
        }
      ),
      webhooksToDeleteLength > 0 && canDelete && /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.ActionLayout,
        {
          startActions: /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "epsilon", textColor: "neutral600", children: formatMessage(
              {
                id: "Settings.webhooks.to.delete",
                defaultMessage: "{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"
              },
              { webhooksToDeleteLength }
            ) }),
            /* @__PURE__ */ jsxRuntime.jsx(
              designSystem.Button,
              {
                onClick: () => setShowModal(true),
                startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Trash, {}),
                size: "L",
                variant: "danger-light",
                children: formatMessage({
                  id: "global.delete",
                  defaultMessage: "Delete"
                })
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.ContentLayout, { children: isLoading ? /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true, children: /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.LoadingIndicatorPage, {}) }) : numberOfWebhooks > 0 ? /* @__PURE__ */ jsxRuntime.jsxs(
        designSystem.Table,
        {
          colCount: 5,
          rowCount: numberOfWebhooks + 1,
          footer: /* @__PURE__ */ jsxRuntime.jsx(designSystem.TFooter, { onClick: goTo("create"), icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Plus, {}), children: formatMessage({
            id: "Settings.webhooks.list.button.add",
            defaultMessage: "Create new webhook"
          }) }),
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Thead, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Tr, { children: [
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.Th, { children: /* @__PURE__ */ jsxRuntime.jsx(
                designSystem.BaseCheckbox,
                {
                  "aria-label": formatMessage({
                    id: "global.select-all-entries",
                    defaultMessage: "Select all entries"
                  }),
                  indeterminate: webhooksToDeleteLength > 0 && webhooksToDeleteLength < numberOfWebhooks,
                  value: webhooksToDeleteLength === numberOfWebhooks,
                  onValueChange: selectAllCheckbox
                }
              ) }),
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.Th, { width: "20%", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", textColor: "neutral600", children: formatMessage({
                id: "global.name",
                defaultMessage: "Name"
              }) }) }),
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.Th, { width: "60%", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", textColor: "neutral600", children: formatMessage({
                id: "Settings.webhooks.form.url",
                defaultMessage: "URL"
              }) }) }),
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.Th, { width: "20%", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", textColor: "neutral600", children: formatMessage({
                id: "Settings.webhooks.list.th.status",
                defaultMessage: "Status"
              }) }) }),
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.Th, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.VisuallyHidden, { children: formatMessage({
                id: "Settings.webhooks.list.th.actions",
                defaultMessage: "Actions"
              }) }) })
            ] }) }),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Tbody, { children: webhooks?.map((webhook) => /* @__PURE__ */ jsxRuntime.jsxs(
              designSystem.Tr,
              {
                onClick: canUpdate ? goTo(webhook.id) : void 0,
                style: { cursor: canUpdate ? "pointer" : "default" },
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntime.jsx(
                    designSystem.BaseCheckbox,
                    {
                      "aria-label": `${formatMessage({
                        id: "global.select",
                        defaultMessage: "Select"
                      })} ${webhook.name}`,
                      value: webhooksToDelete?.includes(webhook.id),
                      onValueChange: (selected) => selectOneCheckbox(selected, webhook.id),
                      name: "select"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "semiBold", textColor: "neutral800", children: webhook.name }) }),
                  /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "neutral800", children: webhook.url }) }),
                  /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { children: /* @__PURE__ */ jsxRuntime.jsx(
                    designSystem.Switch,
                    {
                      onLabel: formatMessage({
                        id: "global.enabled",
                        defaultMessage: "Enabled"
                      }),
                      offLabel: formatMessage({
                        id: "global.disabled",
                        defaultMessage: "Disabled"
                      }),
                      label: `${webhook.name} ${formatMessage({
                        id: "Settings.webhooks.list.th.status",
                        defaultMessage: "Status"
                      })}`,
                      selected: webhook.isEnabled,
                      onChange: (e) => {
                        e.stopPropagation();
                        enableWebhook({
                          ...webhook,
                          isEnabled: !webhook.isEnabled
                        });
                      },
                      visibleLabels: true
                    }
                  ) }) }),
                  /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 1, children: [
                    canUpdate && /* @__PURE__ */ jsxRuntime.jsx(
                      designSystem.IconButton,
                      {
                        label: formatMessage({
                          id: "Settings.webhooks.events.update",
                          defaultMessage: "Update"
                        }),
                        icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Pencil, {}),
                        noBorder: true
                      }
                    ),
                    canDelete && /* @__PURE__ */ jsxRuntime.jsx(
                      designSystem.IconButton,
                      {
                        onClick: (e) => {
                          e.stopPropagation();
                          setWebhooksToDelete([webhook.id]);
                          setShowModal(true);
                        },
                        label: formatMessage({
                          id: "Settings.webhooks.events.delete",
                          defaultMessage: "Delete webhook"
                        }),
                        icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Trash, {}),
                        noBorder: true
                      }
                    )
                  ] }) })
                ]
              },
              webhook.id
            )) })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.EmptyStateLayout,
        {
          icon: /* @__PURE__ */ jsxRuntime.jsx(Icons.EmptyDocuments, { width: "160px" }),
          content: formatMessage({
            id: "Settings.webhooks.list.empty.description",
            defaultMessage: "No webhooks found"
          }),
          action: /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.Button,
            {
              variant: "secondary",
              startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Plus, {}),
              disabled: !canCreate,
              onClick: canCreate ? goTo("create") : void 0,
              children: formatMessage({
                id: "Settings.webhooks.list.button.add",
                defaultMessage: "Create new webhook"
              })
            }
          )
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(
      helperPlugin.ConfirmDialog,
      {
        isOpen: showModal,
        onToggleDialog: () => setShowModal((prev) => !prev),
        onConfirm: confirmDelete,
        isConfirmButtonLoading: isDeleting
      }
    )
  ] });
};
const ProtectedListPage = () => {
  const permissions = index.useTypedSelector(
    (state) => state.admin_app.permissions.settings?.webhooks.main
  );
  return /* @__PURE__ */ jsxRuntime.jsx(helperPlugin.CheckPagePermissions, { permissions, children: /* @__PURE__ */ jsxRuntime.jsx(ListPage, {}) });
};
exports.ListPage = ListPage;
exports.ProtectedListPage = ProtectedListPage;
//# sourceMappingURL=ListPage-cjE9lEF3.js.map
