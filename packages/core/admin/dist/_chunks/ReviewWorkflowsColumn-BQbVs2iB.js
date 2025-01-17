"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const designSystem = require("@strapi/design-system");
const helperPlugin = require("@strapi/helper-plugin");
const constants = require("./constants-L1I-Y-RJ.js");
const colors = require("./colors-6VKZqnio.js");
const reactIntl = require("react-intl");
const index = require("./index-1g9GBMjI.js");
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
const ReviewWorkflowsStageEE = ({
  color = constants.STAGE_COLOR_DEFAULT,
  name
}) => {
  const { themeColorName } = colors.getStageColorByHex(color) ?? {};
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { alignItems: "center", gap: 2, maxWidth: helperPlugin.pxToRem(300), children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.Box,
      {
        height: 2,
        background: color,
        borderColor: themeColorName === "neutral0" ? "neutral150" : void 0,
        hasRadius: true,
        shrink: 0,
        width: 2
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "regular", textColor: "neutral700", ellipsis: true, children: name })
  ] });
};
const ReviewWorkflowsAssigneeEE = ({ user }) => {
  const { formatMessage } = reactIntl.useIntl();
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { textColor: "neutral800", children: index.getDisplayName(user, formatMessage) });
};
exports.ReviewWorkflowsAssigneeEE = ReviewWorkflowsAssigneeEE;
exports.ReviewWorkflowsStageEE = ReviewWorkflowsStageEE;
//# sourceMappingURL=ReviewWorkflowsColumn-BQbVs2iB.js.map
