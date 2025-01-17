import { jsxs, jsx } from "react/jsx-runtime";
import { Flex, Tooltip, Icon, Button } from "@strapi/design-system";
import { ExclamationMarkCircle, Envelop } from "@strapi/icons";
import isNil from "lodash/isNil";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";
import { m as useLicenseLimits } from "./index-kIIXqMj8.mjs";
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
import "date-fns/parseISO";
const CreateActionEE = ({ onClick }) => {
  const { formatMessage } = useIntl();
  const { license, isError, isLoading } = useLicenseLimits();
  const { permittedSeats, shouldStopCreate } = license ?? {};
  if (isError || isLoading) {
    return null;
  }
  return /* @__PURE__ */ jsxs(Flex, { gap: 2, children: [
    !isNil(permittedSeats) && shouldStopCreate && /* @__PURE__ */ jsx(
      Tooltip,
      {
        description: formatMessage({
          id: "Settings.application.admin-seats.at-limit-tooltip",
          defaultMessage: "At limit: add seats to invite more users"
        }),
        position: "left",
        children: /* @__PURE__ */ jsx(
          Icon,
          {
            width: `${14 / 16}rem`,
            height: `${14 / 16}rem`,
            color: "danger500",
            as: ExclamationMarkCircle
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        "data-testid": "create-user-button",
        onClick,
        startIcon: /* @__PURE__ */ jsx(Envelop, {}),
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
  onClick: PropTypes.func.isRequired
};
export {
  CreateActionEE
};
//# sourceMappingURL=CreateActionEE-tjD9fhke.mjs.map
