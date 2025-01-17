import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { a as Events } from "./EditPage-u6acgqTS.mjs";
import "react";
import "@strapi/design-system";
import "@strapi/helper-plugin";
import "react-router-dom";
import "./index-kIIXqMj8.mjs";
import "react-dom/client";
import "invariant";
import "lodash/isFunction";
import "lodash/merge";
import "lodash/pick";
import "react-helmet";
import "react-intl";
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
import "./useContentTypes-F98NBHXS.mjs";
import "./AuthenticatedApp-tGcMdSKz.mjs";
import "semver/functions/lt";
import "semver/functions/valid";
import "./useWebhooks-qxKThuR4.mjs";
const eeTables = {
  "review-workflows": {
    "review-workflows": ["review-workflows.updateEntryStage"]
  },
  releases: {
    releases: ["releases.publish"]
  }
};
const getHeaders = (table) => {
  switch (table) {
    case "review-workflows":
      return () => [{ id: "review-workflows.updateEntryStage", defaultMessage: "Stage Change" }];
    case "releases":
      return () => [{ id: "releases.publish", defaultMessage: "Publish" }];
  }
};
const EventsTableEE = () => {
  return /* @__PURE__ */ jsxs(Events.Root, { children: [
    /* @__PURE__ */ jsx(Events.Headers, {}),
    /* @__PURE__ */ jsx(Events.Body, {}),
    Object.keys(eeTables).map((table) => /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Events.Headers, { getHeaders: getHeaders(table) }),
      /* @__PURE__ */ jsx(Events.Body, { providedEvents: eeTables[table] })
    ] }))
  ] });
};
export {
  EventsTableEE
};
//# sourceMappingURL=EventsTable-o06XWpIO.mjs.map
