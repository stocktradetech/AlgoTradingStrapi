"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const index = require("./index-1g9GBMjI.js");
const constants = require("./constants-jzEsxOxr.js");
const jsxRuntime = require("react/jsx-runtime");
const designSystem = require("@strapi/design-system");
const reactIntl = require("react-intl");
const useReviewWorkflows = require("./useReviewWorkflows-RQCVev0o.js");
const colors = require("./colors-6VKZqnio.js");
require("@strapi/helper-plugin");
require("react-dom/client");
require("invariant");
require("lodash/isFunction");
require("lodash/merge");
require("lodash/pick");
require("react-helmet");
require("react-router-dom");
require("react");
require("react-redux");
require("use-context-selector");
require("@reduxjs/toolkit");
require("@reduxjs/toolkit/query/react");
require("axios");
require("@radix-ui/react-context");
require("@strapi/design-system/v2");
require("@strapi/icons");
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
require("./reviewWorkflows-yKe0U-yJ.js");
require("./constants-L1I-Y-RJ.js");
const AssigneeFilter = ({ value, onChange }) => {
  const { formatMessage } = reactIntl.useIntl();
  const { data, isLoading } = index.useAdminUsers();
  const users = data?.users || [];
  return /* @__PURE__ */ jsxRuntime.jsx(
    designSystem.Combobox,
    {
      value,
      "aria-label": formatMessage({
        id: "content-manager.components.Filters.usersSelect.label",
        defaultMessage: "Search and select an user to filter"
      }),
      onChange,
      loading: isLoading,
      children: users.map((user) => {
        return /* @__PURE__ */ jsxRuntime.jsx(designSystem.ComboboxOption, { value: user.id.toString(), children: index.getDisplayName(user, formatMessage) }, user.id);
      })
    }
  );
};
const StageFilter = ({ value, onChange, uid }) => {
  const { formatMessage } = reactIntl.useIntl();
  const { workflows, isLoading } = useReviewWorkflows.useReviewWorkflows({ filters: { contentTypes: uid } });
  const [workflow] = workflows ?? [];
  return /* @__PURE__ */ jsxRuntime.jsx(
    designSystem.SingleSelect,
    {
      "aria-label": formatMessage({
        id: "content-manager.components.Filters.reviewWorkflows.label",
        defaultMessage: "Search and select an workflow stage to filter"
      }),
      value,
      onChange,
      loading: isLoading,
      customizeContent: () => /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { as: "span", justifyContent: "space-between", alignItems: "center", width: "100%", children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "neutral800", ellipsis: true, children: value }),
        isLoading ? /* @__PURE__ */ jsxRuntime.jsx(designSystem.Loader, { small: true, style: { display: "flex" } }) : null
      ] }),
      children: (workflow?.stages ?? []).map(({ id, color, name }) => {
        const { themeColorName } = colors.getStageColorByHex(color) ?? {};
        return /* @__PURE__ */ jsxRuntime.jsx(
          designSystem.SingleSelectOption,
          {
            startIcon: /* @__PURE__ */ jsxRuntime.jsx(
              designSystem.Flex,
              {
                height: 2,
                background: color,
                borderColor: themeColorName === "neutral0" ? "neutral150" : void 0,
                hasRadius: true,
                shrink: 0,
                width: 2
              }
            ),
            value: name,
            children: name
          },
          id
        );
      })
    }
  );
};
const REVIEW_WORKFLOW_COLUMNS_EE = [
  {
    key: `__${constants.STAGE_ATTRIBUTE_NAME}_temp_key__`,
    name: constants.STAGE_ATTRIBUTE_NAME,
    fieldSchema: {
      type: "relation",
      relation: "oneToMany",
      target: "admin::review-workflow-stage"
    },
    metadatas: {
      // formatMessage() will be applied when the column is rendered
      label: {
        id: index.getTranslation(`containers.ListPage.table-headers.reviewWorkflows.stage`),
        defaultMessage: "Review stage"
      },
      searchable: false,
      sortable: true,
      mainField: {
        name: "name",
        type: "string"
      }
    }
  },
  {
    key: `__${constants.ASSIGNEE_ATTRIBUTE_NAME}_temp_key__`,
    name: constants.ASSIGNEE_ATTRIBUTE_NAME,
    fieldSchema: {
      type: "relation",
      target: "admin::user",
      relation: "oneToMany"
    },
    metadatas: {
      label: {
        id: index.getTranslation(`containers.ListPage.table-headers.reviewWorkflows.assignee`),
        defaultMessage: "Assignee"
      },
      searchable: false,
      sortable: true,
      mainField: {
        name: "firstname",
        type: "string"
      }
    }
  }
];
const REVIEW_WORKFLOW_FILTERS = [
  {
    fieldSchema: {
      type: "relation",
      mainField: {
        name: "name",
        type: "string"
      }
    },
    metadatas: {
      customInput: StageFilter,
      label: {
        id: index.getTranslation(`containers.ListPage.table-headers.reviewWorkflows.stage`),
        defaultMessage: "Review stage"
      }
    },
    name: "strapi_stage"
  },
  {
    fieldSchema: {
      type: "relation",
      mainField: {
        name: "id",
        type: "integer"
      }
    },
    metadatas: {
      customInput: AssigneeFilter,
      customOperators: [
        {
          intlLabel: {
            id: "components.FilterOptions.FILTER_TYPES.$eq",
            defaultMessage: "is"
          },
          value: "$eq"
        },
        {
          intlLabel: {
            id: "components.FilterOptions.FILTER_TYPES.$ne",
            defaultMessage: "is not"
          },
          value: "$ne"
        }
      ],
      label: {
        id: index.getTranslation(`containers.ListPage.table-headers.reviewWorkflows.assignee.label`),
        defaultMessage: "Assignee"
      }
    },
    name: "strapi_assignee"
  }
];
exports.REVIEW_WORKFLOW_COLUMNS_EE = REVIEW_WORKFLOW_COLUMNS_EE;
exports.REVIEW_WORKFLOW_FILTERS = REVIEW_WORKFLOW_FILTERS;
//# sourceMappingURL=constants-vdlOJp0b.js.map
