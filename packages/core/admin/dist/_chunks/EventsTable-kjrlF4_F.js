"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const EditPage = require("./EditPage-_YhI0_F_.js");
require("react");
require("@strapi/design-system");
require("@strapi/helper-plugin");
require("react-router-dom");
require("./index-1g9GBMjI.js");
require("react-dom/client");
require("invariant");
require("lodash/isFunction");
require("lodash/merge");
require("lodash/pick");
require("react-helmet");
require("react-intl");
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
require("./useContentTypes-0-qpYy25.js");
require("./AuthenticatedApp-TJmmk67-.js");
require("semver/functions/lt");
require("semver/functions/valid");
require("./useWebhooks--vWIvDQ3.js");
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
  return /* @__PURE__ */ jsxRuntime.jsxs(EditPage.Events.Root, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(EditPage.Events.Headers, {}),
    /* @__PURE__ */ jsxRuntime.jsx(EditPage.Events.Body, {}),
    Object.keys(eeTables).map((table) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(EditPage.Events.Headers, { getHeaders: getHeaders(table) }),
      /* @__PURE__ */ jsxRuntime.jsx(EditPage.Events.Body, { providedEvents: eeTables[table] })
    ] }))
  ] });
};
exports.EventsTableEE = EventsTableEE;
//# sourceMappingURL=EventsTable-kjrlF4_F.js.map
