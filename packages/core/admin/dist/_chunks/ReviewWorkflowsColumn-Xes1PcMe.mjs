import { jsxs, jsx } from "react/jsx-runtime";
import { Flex, Box, Typography } from "@strapi/design-system";
import { pxToRem } from "@strapi/helper-plugin";
import { b as STAGE_COLOR_DEFAULT } from "./constants-8sAt6dKz.mjs";
import { g as getStageColorByHex } from "./colors-YeFa2BnS.mjs";
import { useIntl } from "react-intl";
import { l as getDisplayName } from "./index-kIIXqMj8.mjs";
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
const ReviewWorkflowsStageEE = ({
  color = STAGE_COLOR_DEFAULT,
  name
}) => {
  const { themeColorName } = getStageColorByHex(color) ?? {};
  return /* @__PURE__ */ jsxs(Flex, { alignItems: "center", gap: 2, maxWidth: pxToRem(300), children: [
    /* @__PURE__ */ jsx(
      Box,
      {
        height: 2,
        background: color,
        borderColor: themeColorName === "neutral0" ? "neutral150" : void 0,
        hasRadius: true,
        shrink: 0,
        width: 2
      }
    ),
    /* @__PURE__ */ jsx(Typography, { fontWeight: "regular", textColor: "neutral700", ellipsis: true, children: name })
  ] });
};
const ReviewWorkflowsAssigneeEE = ({ user }) => {
  const { formatMessage } = useIntl();
  return /* @__PURE__ */ jsx(Typography, { textColor: "neutral800", children: getDisplayName(user, formatMessage) });
};
export {
  ReviewWorkflowsAssigneeEE,
  ReviewWorkflowsStageEE
};
//# sourceMappingURL=ReviewWorkflowsColumn-Xes1PcMe.mjs.map
