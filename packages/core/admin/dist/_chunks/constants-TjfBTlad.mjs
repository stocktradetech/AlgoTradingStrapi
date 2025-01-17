import { k as useAdminUsers, l as getDisplayName, o as getTranslation } from "./index-kIIXqMj8.mjs";
import { S as STAGE_ATTRIBUTE_NAME, A as ASSIGNEE_ATTRIBUTE_NAME } from "./constants-q1-_l5GM.mjs";
import { jsx, jsxs } from "react/jsx-runtime";
import { Combobox, ComboboxOption, SingleSelect, Flex, Typography, Loader, SingleSelectOption } from "@strapi/design-system";
import { useIntl } from "react-intl";
import { u as useReviewWorkflows } from "./useReviewWorkflows-lhQFpo83.mjs";
import { g as getStageColorByHex } from "./colors-YeFa2BnS.mjs";
import "@strapi/helper-plugin";
import "react-dom/client";
import "invariant";
import "lodash/isFunction";
import "lodash/merge";
import "lodash/pick";
import "react-helmet";
import "react-router-dom";
import "react";
import "react-redux";
import "use-context-selector";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query/react";
import "axios";
import "@radix-ui/react-context";
import "@strapi/design-system/v2";
import "@strapi/icons";
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
import "./reviewWorkflows-j4Kc7L6G.mjs";
import "./constants-8sAt6dKz.mjs";
const AssigneeFilter = ({ value, onChange }) => {
  const { formatMessage } = useIntl();
  const { data, isLoading } = useAdminUsers();
  const users = data?.users || [];
  return /* @__PURE__ */ jsx(
    Combobox,
    {
      value,
      "aria-label": formatMessage({
        id: "content-manager.components.Filters.usersSelect.label",
        defaultMessage: "Search and select an user to filter"
      }),
      onChange,
      loading: isLoading,
      children: users.map((user) => {
        return /* @__PURE__ */ jsx(ComboboxOption, { value: user.id.toString(), children: getDisplayName(user, formatMessage) }, user.id);
      })
    }
  );
};
const StageFilter = ({ value, onChange, uid }) => {
  const { formatMessage } = useIntl();
  const { workflows, isLoading } = useReviewWorkflows({ filters: { contentTypes: uid } });
  const [workflow] = workflows ?? [];
  return /* @__PURE__ */ jsx(
    SingleSelect,
    {
      "aria-label": formatMessage({
        id: "content-manager.components.Filters.reviewWorkflows.label",
        defaultMessage: "Search and select an workflow stage to filter"
      }),
      value,
      onChange,
      loading: isLoading,
      customizeContent: () => /* @__PURE__ */ jsxs(Flex, { as: "span", justifyContent: "space-between", alignItems: "center", width: "100%", children: [
        /* @__PURE__ */ jsx(Typography, { textColor: "neutral800", ellipsis: true, children: value }),
        isLoading ? /* @__PURE__ */ jsx(Loader, { small: true, style: { display: "flex" } }) : null
      ] }),
      children: (workflow?.stages ?? []).map(({ id, color, name }) => {
        const { themeColorName } = getStageColorByHex(color) ?? {};
        return /* @__PURE__ */ jsx(
          SingleSelectOption,
          {
            startIcon: /* @__PURE__ */ jsx(
              Flex,
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
    key: `__${STAGE_ATTRIBUTE_NAME}_temp_key__`,
    name: STAGE_ATTRIBUTE_NAME,
    fieldSchema: {
      type: "relation",
      relation: "oneToMany",
      target: "admin::review-workflow-stage"
    },
    metadatas: {
      // formatMessage() will be applied when the column is rendered
      label: {
        id: getTranslation(`containers.ListPage.table-headers.reviewWorkflows.stage`),
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
    key: `__${ASSIGNEE_ATTRIBUTE_NAME}_temp_key__`,
    name: ASSIGNEE_ATTRIBUTE_NAME,
    fieldSchema: {
      type: "relation",
      target: "admin::user",
      relation: "oneToMany"
    },
    metadatas: {
      label: {
        id: getTranslation(`containers.ListPage.table-headers.reviewWorkflows.assignee`),
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
        id: getTranslation(`containers.ListPage.table-headers.reviewWorkflows.stage`),
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
        id: getTranslation(`containers.ListPage.table-headers.reviewWorkflows.assignee.label`),
        defaultMessage: "Assignee"
      }
    },
    name: "strapi_assignee"
  }
];
export {
  REVIEW_WORKFLOW_COLUMNS_EE,
  REVIEW_WORKFLOW_FILTERS
};
//# sourceMappingURL=constants-TjfBTlad.mjs.map
