"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const designSystem = require("@strapi/design-system");
const Icons = require("@strapi/icons");
const isNil = require("lodash/isNil");
const PropTypes = require("prop-types");
const reactIntl = require("react-intl");
const index = require("./index-1g9GBMjI.js");
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
require("date-fns/parseISO");
const _interopDefault = (e) => e && e.__esModule ? e : { default: e };
const isNil__default = /* @__PURE__ */ _interopDefault(isNil);
const PropTypes__default = /* @__PURE__ */ _interopDefault(PropTypes);
const CreateActionEE = ({ onClick }) => {
  const { formatMessage } = reactIntl.useIntl();
  const { license, isError, isLoading } = index.useLicenseLimits();
  const { permittedSeats, shouldStopCreate } = license ?? {};
  if (isError || isLoading) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 2, children: [
    !isNil__default.default(permittedSeats) && shouldStopCreate && /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.Tooltip,
      {
        description: formatMessage({
          id: "Settings.application.admin-seats.at-limit-tooltip",
          defaultMessage: "At limit: add seats to invite more users"
        }),
        position: "left",
        children: /* @__PURE__ */ jsxRuntime.jsx(
          designSystem.Icon,
          {
            width: `${14 / 16}rem`,
            height: `${14 / 16}rem`,
            color: "danger500",
            as: Icons.ExclamationMarkCircle
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.Button,
      {
        "data-testid": "create-user-button",
        onClick,
        startIcon: /* @__PURE__ */ jsxRuntime.jsx(Icons.Envelop, {}),
        size: "S",
        disabled: shouldStopCreate,
        children: formatMessage({
          id: "Settings.permissions.users.create",
          defaultMessage: "Invite new user"
        })
      }
    )
  ] });
};
CreateActionEE.propTypes = {
  onClick: PropTypes__default.default.func.isRequired
};
exports.CreateActionEE = CreateActionEE;
//# sourceMappingURL=CreateActionEE-dEYM0a9M.js.map
