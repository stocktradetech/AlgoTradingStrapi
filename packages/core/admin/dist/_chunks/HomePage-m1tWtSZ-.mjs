import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Box, Flex, Typography, Button, Layout, Main, Grid, GridItem } from "@strapi/design-system";
import { LinkButton, Link } from "@strapi/design-system/v2";
import { useGuidedTour, useTracking, pxToRem, LoadingIndicatorPage, ContentBox, useAppInfo } from "@strapi/helper-plugin";
import { ArrowRight, InformationSquare, CodeSquare, PlaySquare, FeatherSquare, ExternalLink, Discord, Reddit, Strapi, Twitter, Discourse, Github } from "@strapi/icons";
import { Helmet } from "react-helmet";
import { useIntl } from "react-intl";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import { L as LAYOUT_DATA, N as Number, V as VerticalDivider, S as STATES } from "./AuthenticatedApp-tGcMdSKz.mjs";
import { u as useContentTypes } from "./useContentTypes-F98NBHXS.mjs";
import { p as useEnterprise } from "./index-kIIXqMj8.mjs";
import "semver/functions/lt";
import "semver/functions/valid";
import "immer";
import "lodash/set";
import "react-dnd";
import "react-dnd-html5-backend";
import "lodash/get";
import "lodash/cloneDeep";
import "react-redux";
import "react-dom/client";
import "invariant";
import "lodash/isFunction";
import "lodash/merge";
import "lodash/pick";
import "use-context-selector";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query/react";
import "axios";
import "@radix-ui/react-context";
import "formik";
import "lodash/camelCase";
import "yup";
import "lodash/omit";
import "qs";
import "react-query";
import "lodash/defaultsDeep";
import "lodash/isEqual";
import "lodash/throttle";
import "lodash/isBoolean";
import "lodash/isEmpty";
import "lodash/isNaN";
import "lodash/toNumber";
import "react-window";
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
const GuidedTourHomepage = () => {
  const { guidedTourState, setSkipped } = useGuidedTour();
  const { formatMessage } = useIntl();
  const { trackUsage } = useTracking();
  const sections = Object.entries(LAYOUT_DATA).map(([key, val]) => ({
    key,
    title: val.home.title,
    content: /* @__PURE__ */ jsx(
      LinkButton,
      {
        onClick: () => trackUsage(val.home.trackingEvent),
        as: NavLink,
        to: val.home.cta.target,
        endIcon: /* @__PURE__ */ jsx(ArrowRight, {}),
        children: formatMessage(val.home.cta.title)
      }
    ),
    isDone: Object.entries(
      guidedTourState[key]
    ).every(([, value]) => value)
  }));
  const activeSectionIndex = sections.findIndex((section) => !section.isDone);
  const handleSkip = () => {
    setSkipped(true);
    trackUsage("didSkipGuidedtour");
  };
  return /* @__PURE__ */ jsxs(
    Box,
    {
      hasRadius: true,
      shadow: "tableShadow",
      paddingTop: 7,
      paddingRight: 4,
      paddingLeft: 7,
      paddingBottom: 4,
      background: "neutral0",
      children: [
        /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "stretch", gap: 6, children: [
          /* @__PURE__ */ jsx(Typography, { variant: "beta", as: "h2", children: formatMessage({
            id: "app.components.GuidedTour.title",
            defaultMessage: "3 steps to get started"
          }) }),
          /* @__PURE__ */ jsx(Box, { children: sections.map((section, index) => {
            const state = getState(activeSectionIndex, index);
            return /* @__PURE__ */ jsxs(Box, { children: [
              /* @__PURE__ */ jsxs(Flex, { children: [
                /* @__PURE__ */ jsx(Box, { minWidth: pxToRem(30), marginRight: 5, children: /* @__PURE__ */ jsx(Number, { state, children: index + 1 }) }),
                /* @__PURE__ */ jsx(Typography, { variant: "delta", as: "h3", children: formatMessage(section.title) })
              ] }),
              /* @__PURE__ */ jsxs(Flex, { alignItems: "flex-start", children: [
                /* @__PURE__ */ jsx(
                  Flex,
                  {
                    justifyContent: "center",
                    minWidth: pxToRem(30),
                    marginBottom: 3,
                    marginTop: 3,
                    marginRight: 5,
                    children: index === sections.length - 1 ? null : /* @__PURE__ */ jsx(VerticalDivider, { state })
                  }
                ),
                /* @__PURE__ */ jsx(Box, { marginTop: 2, children: state === STATES.IS_ACTIVE ? section.content : null })
              ] })
            ] }, section.key);
          }) })
        ] }),
        /* @__PURE__ */ jsx(Flex, { justifyContent: "flex-end", children: /* @__PURE__ */ jsx(Button, { variant: "tertiary", onClick: handleSkip, children: formatMessage({ id: "app.components.GuidedTour.skip", defaultMessage: "Skip the tour" }) }) })
      ]
    }
  );
};
const getState = (activeSectionIndex, index) => {
  if (activeSectionIndex === -1) {
    return STATES.IS_DONE;
  }
  if (index < activeSectionIndex) {
    return STATES.IS_DONE;
  }
  if (index > activeSectionIndex) {
    return STATES.IS_NOT_DONE;
  }
  return STATES.IS_ACTIVE;
};
const cornerOrnamentPath = "data:image/svg+xml,%3csvg%20width='148'%20height='148'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='.8'%20fill-rule='evenodd'%20clip-rule='evenodd'%3e%3cpath%20opacity='.15'%20d='M110.81%2037H73.97V74.1h36.84V37Z'%20fill='url(%23a)'/%3e%3cpath%20opacity='.07'%20d='M36.84%200H0v37.08h36.84V0Z'%20fill='url(%23b)'/%3e%3cpath%20opacity='.07'%20d='M73.92%2073.95H37.08v37.08h36.84V73.95Z'%20fill='url(%23c)'/%3e%3cpath%20opacity='.07'%20d='M147.99%20110.92h-37.3V148H148v-37.08Z'%20fill='url(%23d)'/%3e%3cpath%20opacity='.15'%20d='M73.83%2037H36.84L73.83%200v37Z'%20fill='url(%23e)'/%3e%3cpath%20opacity='.15'%20d='M110.6%20111.02v-37h36.98l-36.99%2037Z'%20fill='url(%23f)'/%3e%3cpath%20opacity='.4'%20d='M73.83%200v37h36.98v37.01h37V3a3%203%200%200%200-3-3H73.82Z'%20fill='url(%23g)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='91.31'%20y1='83.31'%20x2='118.24'%20y2='56.59'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%237A92FF'/%3e%3cstop%20offset='1'%20stop-color='%233253EA'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='40.99'%20y1='13.88'%20x2='.01'%20y2='11.64'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23A8B8FF'/%3e%3cstop%20offset='1'%20stop-color='%233253EA'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='54.41'%20y1='120.25'%20x2='81.35'%20y2='93.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23A8B8FF'/%3e%3cstop%20offset='1'%20stop-color='%233253EA'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%20x1='128.24'%20y1='157.22'%20x2='155.17'%20y2='130.17'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23A8B8FF'/%3e%3cstop%20offset='1'%20stop-color='%233253EA'/%3e%3c/linearGradient%3e%3clinearGradient%20id='e'%20x1='54.24'%20y1='46.21'%20x2='81.12'%20y2='19.38'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%237A92FF'/%3e%3cstop%20offset='1'%20stop-color='%233253EA'/%3e%3c/linearGradient%3e%3clinearGradient%20id='f'%20x1='126.28'%20y1='74.05'%20x2='124.94'%20y2='111.07'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%237A92FF'/%3e%3cstop%20offset='1'%20stop-color='%233253EA'/%3e%3c/linearGradient%3e%3clinearGradient%20id='g'%20x1='73.37'%20y1='36.87'%20x2='132.87'%20y2='66.74'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%237A92FF'/%3e%3cstop%20offset='1'%20stop-color='%233858EA'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
const cloudIconBackgroundImage = "data:image/png;base64,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";
const cloudFlagsImage = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='160'%20fill='none'%20viewBox='29.41%2044%20149.09%2050.35'%3e%3cpath%20stroke='%23EAEAEF'%20d='M30.5%2044.5c37%2027%2047.5%2038%20147.499%2032'/%3e%3cg%20filter='url(%23a)'%3e%3cpath%20fill='%23F29D41'%20d='m129.467%2094.085%208.148-14.142a.598.598%200%200%200-.403-.887%2075.099%2075.099%200%200%200-3.045-.536c-1.875-.274-2.936-.44-4.837-.505-1.838-.064-2.873.01-4.698.153a64.05%2064.05%200%200%200-2.692.293.597.597%200%200%200-.462.851l7.042%2014.737c.186.388.732.41.947.036Z'/%3e%3c/g%3e%3cg%20filter='url(%23b)'%3e%3cpath%20fill='%23F29D41'%20d='m46.99%2075.52%2013.813-8.697a.597.597%200%200%200%20.058-.971%2075.191%2075.191%200%200%200-2.442-1.897c-1.53-1.119-2.39-1.761-4.04-2.707-1.595-.915-2.545-1.334-4.226-2.06a64.09%2064.09%200%200%200-2.516-.999.597.597%200%200%200-.806.537l-.66%2016.319a.535.535%200%200%200%20.82.474Z'/%3e%3c/g%3e%3cg%20filter='url(%23c)'%3e%3cpath%20fill='%235CB176'%20d='m29.41%2063.51%202.102-16.186a.597.597%200%200%201%20.858-.46c.748.371%201.905.954%202.745%201.42%201.657.92%202.602%201.433%204.152%202.534%201.5%201.064%202.278%201.75%203.642%202.972a64.026%2064.026%200%200%201%201.962%201.865c.291.286.214.771-.149.957l-14.538%207.443a.535.535%200%200%201-.774-.545Z'/%3e%3c/g%3e%3cmask%20id='d'%20width='17'%20height='19'%20x='29'%20y='46'%20maskUnits='userSpaceOnUse'%20style='mask-type:alpha'%3e%3cpath%20fill='%235CB176'%20d='m29.412%2063.51%202.101-16.186a.597.597%200%200%201%20.858-.46c.749.371%201.905.954%202.746%201.42%201.657.92%202.601%201.433%204.152%202.534%201.5%201.064%202.278%201.75%203.642%202.972a64.148%2064.148%200%200%201%201.962%201.865c.29.286.214.771-.15.957l-14.537%207.443a.535.535%200%200%201-.774-.545Z'/%3e%3c/mask%3e%3cg%20stroke='%23fff'%20stroke-linecap='round'%20stroke-width='.661'%20mask='url(%23d)'%3e%3cpath%20d='M39.755%2051.218c-1.05%201.558-4.606%204.788-10.44%205.247M36.415%2047.816c-1.05%201.558-4.606%204.789-10.44%205.247M42.97%2053.97c-1.457%201.908-6.341%205.902-14.216%206.619M42.15%2058.499c-1.645%201.748-5.29%204.033-13.197%203.939'/%3e%3c/g%3e%3cg%20filter='url(%23e)'%3e%3cpath%20fill='%237B79FF'%20d='m169.813%2092.983%205.927-15.208a.598.598%200%200%200-.531-.815%2075.213%2075.213%200%200%200-3.091-.072c-1.895.01-2.969.007-4.859.228-1.826.214-2.838.442-4.621.859-.815.19-1.893.488-2.617.694a.596.596%200%200%200-.328.91l9.178%2013.51a.536.536%200%200%200%20.942-.106Z'/%3e%3c/g%3e%3cg%20filter='url(%23f)'%3e%3cpath%20fill='%237B79FF'%20d='m87.001%2090.853-4.466-15.699a.597.597%200%200%201%20.606-.761c.835.045%202.127.123%203.084.22%201.886.19%202.956.287%204.816.685%201.797.385%202.784.709%204.519%201.291.794.267%201.839.665%202.54.938.38.148.501.624.24.938L87.929%2091.048a.535.535%200%200%201-.927-.195Z'/%3e%3c/g%3e%3cg%20filter='url(%23g)'%3e%3cpath%20fill='%23EE5E52'%20d='m66.153%2085.122%2012.355-10.665a.597.597%200%200%200-.087-.97%2075.353%2075.353%200%200%200-2.698-1.51c-1.68-.877-2.627-1.383-4.4-2.072-1.714-.666-2.716-.938-4.486-1.404a64.083%2064.083%200%200%200-2.638-.611.597.597%200%200%200-.716.651l1.788%2016.234a.535.535%200%200%200%20.882.347Z'/%3e%3c/g%3e%3ccircle%20cx='70.793'%20cy='74.511'%20r='.992'%20fill='%23fff'%20transform='rotate(8.553%2070.793%2074.51)'/%3e%3ccircle%20cx='65.574'%20cy='78.63'%20r='.992'%20fill='%23fff'%20transform='rotate(8.553%2065.574%2078.63)'/%3e%3ccircle%20cx='65.408'%20cy='74.519'%20r='.992'%20fill='%23fff'%20transform='rotate(8.553%2065.408%2074.519)'/%3e%3ccircle%20cx='67.834'%20cy='81.943'%20r='.992'%20fill='%23fff'%20transform='rotate(8.553%2067.834%2081.943)'/%3e%3ccircle%20cx='67.259'%20cy='69.875'%20r='.992'%20fill='%23fff'%20transform='rotate(8.553%2067.259%2069.875)'/%3e%3ccircle%20cx='74.691'%20cy='72.834'%20r='.992'%20fill='%23fff'%20transform='rotate(8.553%2074.69%2072.834)'/%3e%3ccircle%20cx='71.171'%20cy='78.968'%20r='.992'%20fill='%23fff'%20transform='rotate(8.553%2071.171%2078.968)'/%3e%3cg%20filter='url(%23h)'%3e%3cpath%20fill='%23EE5E52'%20d='m149.911%2093.824%206.521-14.963a.598.598%200%200%200-.499-.836%2075.255%2075.255%200%200%200-3.086-.193c-1.894-.064-2.967-.11-4.863.037-1.833.141-2.854.33-4.651.676-.823.158-1.912.414-2.643.59a.596.596%200%200%200-.364.898l8.64%2013.86a.535.535%200%200%200%20.945-.07Z'/%3e%3c/g%3e%3ccircle%20cx='149.5'%20cy='82.25'%20r='.992'%20fill='%23fff'%20transform='rotate(-17.098%20149.5%2082.25)'/%3e%3ccircle%20cx='146.579'%20cy='88.222'%20r='.992'%20fill='%23fff'%20transform='rotate(-17.098%20146.579%2088.222)'/%3e%3ccircle%20cx='144.65'%20cy='84.588'%20r='.992'%20fill='%23fff'%20transform='rotate(-17.098%20144.65%2084.588)'/%3e%3ccircle%20cx='150.049'%20cy='90.231'%20r='.992'%20fill='%23fff'%20transform='rotate(-17.098%20150.049%2090.231)'/%3e%3ccircle%20cx='144.306'%20cy='79.6'%20r='.992'%20fill='%23fff'%20transform='rotate(-17.098%20144.306%2079.6)'/%3e%3ccircle%20cx='152.287'%20cy='79.051'%20r='.992'%20fill='%23fff'%20transform='rotate(-17.098%20152.287%2079.05)'/%3e%3ccircle%20cx='151.77'%20cy='86.103'%20r='.992'%20fill='%23fff'%20transform='rotate(-17.098%20151.77%2086.103)'/%3e%3cg%20filter='url(%23i)'%3e%3cpath%20fill='%235CB176'%20d='m109.171%2093.4%208.86-13.707a.598.598%200%200%200-.357-.906c-.811-.2-2.07-.503-3.013-.69-1.859-.37-2.911-.59-4.806-.753-1.831-.157-2.869-.136-4.699-.086-.837.023-1.953.098-2.703.154a.597.597%200%200%200-.505.827l6.279%2015.077c.166.398.71.447.944.084Z'/%3e%3c/g%3e%3cmask%20id='j'%20width='18'%20height='17'%20x='101'%20y='77'%20maskUnits='userSpaceOnUse'%20style='mask-type:alpha'%3e%3cpath%20fill='%235CB176'%20d='m109.17%2093.4%208.86-13.707a.598.598%200%200%200-.357-.905c-.811-.201-2.07-.504-3.013-.692-1.859-.37-2.911-.589-4.806-.751-1.831-.158-2.869-.137-4.699-.087-.837.023-1.953.099-2.703.154a.597.597%200%200%200-.505.827l6.279%2015.077c.166.398.71.447.944.085Z'/%3e%3c/mask%3e%3cg%20stroke='%23fff'%20stroke-linecap='round'%20stroke-width='.661'%20mask='url(%23j)'%3e%3cpath%20d='M109.225%2077.335c-.207%201.867.418%206.632%204.573%2010.753M113.972%2076.9c-.207%201.867.418%206.631%204.573%2010.753M104.992%2077.357c-.121%202.397%201.023%208.602%206.568%2014.24M102.69%2081.343c.125%202.397%201.429%206.497%207.522%2011.537'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='a'%20width='21.565'%20height='21.649'%20x='118.775'%20y='76.009'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20result='hardAlpha'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='.661'/%3e%3cfeGaussianBlur%20stdDeviation='1.322'/%3e%3cfeColorMatrix%20values='0%200%200%200%200.129412%200%200%200%200%200.129412%200%200%200%200%200.203922%200%200%200%200.1%200'/%3e%3cfeBlend%20in2='BackgroundImageFix'%20result='effect1_dropShadow_12_39'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow_12_39'%20result='shape'/%3e%3c/filter%3e%3cfilter%20id='b'%20width='20.201'%20height='22.741'%20x='43.526'%20y='56.167'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20result='hardAlpha'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='.661'/%3e%3cfeGaussianBlur%20stdDeviation='1.322'/%3e%3cfeColorMatrix%20values='0%200%200%200%200.129412%200%200%200%200%200.129412%200%200%200%200%200.203922%200%200%200%200.1%200'/%3e%3cfeBlend%20in2='BackgroundImageFix'%20result='effect1_dropShadow_12_39'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow_12_39'%20result='shape'/%3e%3c/filter%3e%3cfilter%20id='c'%20width='20.932'%20height='22.602'%20x='26.761'%20y='44.818'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20result='hardAlpha'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='.661'/%3e%3cfeGaussianBlur%20stdDeviation='1.322'/%3e%3cfeColorMatrix%20values='0%200%200%200%200.129412%200%200%200%200%200.129412%200%200%200%200%200.203922%200%200%200%200.1%200'/%3e%3cfeBlend%20in2='BackgroundImageFix'%20result='effect1_dropShadow_12_39'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow_12_39'%20result='shape'/%3e%3c/filter%3e%3cfilter%20id='e'%20width='21.482'%20height='21.724'%20x='156.944'%20y='74.904'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20result='hardAlpha'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='.661'/%3e%3cfeGaussianBlur%20stdDeviation='1.322'/%3e%3cfeColorMatrix%20values='0%200%200%200%200.129412%200%200%200%200%200.129412%200%200%200%200%200.203922%200%200%200%200.1%200'/%3e%3cfeBlend%20in2='BackgroundImageFix'%20result='effect1_dropShadow_12_39'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow_12_39'%20result='shape'/%3e%3c/filter%3e%3cfilter%20id='f'%20width='21.256'%20height='22.139'%20x='79.868'%20y='72.409'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20result='hardAlpha'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='.661'/%3e%3cfeGaussianBlur%20stdDeviation='1.322'/%3e%3cfeColorMatrix%20values='0%200%200%200%200.129412%200%200%200%200%200.129412%200%200%200%200%200.203922%200%200%200%200.1%200'/%3e%3cfeBlend%20in2='BackgroundImageFix'%20result='effect1_dropShadow_12_39'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow_12_39'%20result='shape'/%3e%3c/filter%3e%3cfilter%20id='g'%20width='20.526'%20height='22.664'%20x='60.835'%20y='65.893'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20result='hardAlpha'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='.661'/%3e%3cfeGaussianBlur%20stdDeviation='1.322'/%3e%3cfeColorMatrix%20values='0%200%200%200%200.129412%200%200%200%200%200.129412%200%200%200%200%200.203922%200%200%200%200.1%200'/%3e%3cfeBlend%20in2='BackgroundImageFix'%20result='effect1_dropShadow_12_39'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow_12_39'%20result='shape'/%3e%3c/filter%3e%3cfilter%20id='h'%20width='21.537'%20height='21.662'%20x='137.59'%20y='75.788'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20result='hardAlpha'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='.661'/%3e%3cfeGaussianBlur%20stdDeviation='1.322'/%3e%3cfeColorMatrix%20values='0%200%200%200%200.129412%200%200%200%200%200.129412%200%200%200%200%200.203922%200%200%200%200.1%200'/%3e%3cfeBlend%20in2='BackgroundImageFix'%20result='effect1_dropShadow_12_39'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow_12_39'%20result='shape'/%3e%3c/filter%3e%3cfilter%20id='i'%20width='21.515'%20height='21.712'%20x='99.257'%20y='75.238'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20result='hardAlpha'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='.661'/%3e%3cfeGaussianBlur%20stdDeviation='1.322'/%3e%3cfeColorMatrix%20values='0%200%200%200%200.129412%200%200%200%200%200.129412%200%200%200%200%200.203922%200%200%200%200.1%200'/%3e%3cfeBlend%20in2='BackgroundImageFix'%20result='effect1_dropShadow_12_39'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow_12_39'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e";
const HomePageCE = () => {
  const { formatMessage } = useIntl();
  const { collectionTypes, singleTypes, isLoading: isLoadingForModels } = useContentTypes();
  const { guidedTourState, isGuidedTourVisible, isSkipped } = useGuidedTour();
  const showGuidedTour = !Object.values(guidedTourState).every(
    (section) => Object.values(section).every((step) => step)
  ) && isGuidedTourVisible && !isSkipped;
  const { push } = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    push("/plugins/content-type-builder/content-types/create-content-type");
  };
  const hasAlreadyCreatedContentTypes = React.useMemo(() => {
    return collectionTypes.filter((c) => c.isDisplayed).length > 1 || singleTypes.filter((c) => c.isDisplayed).length > 0;
  }, [collectionTypes, singleTypes]);
  if (isLoadingForModels) {
    return /* @__PURE__ */ jsx(LoadingIndicatorPage, {});
  }
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      Helmet,
      {
        title: formatMessage({
          id: "HomePage.helmet.title",
          defaultMessage: "Homepage"
        })
      }
    ),
    /* @__PURE__ */ jsxs(Main, { children: [
      /* @__PURE__ */ jsx(LogoContainer, { children: /* @__PURE__ */ jsx("img", { alt: "", "aria-hidden": true, src: cornerOrnamentPath }) }),
      /* @__PURE__ */ jsxs(Box, { padding: 10, children: [
        /* @__PURE__ */ jsx(Grid, { children: /* @__PURE__ */ jsx(GridItem, { col: 8, s: 12, children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Box, { paddingLeft: 6, paddingBottom: 10, children: /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "flex-start", gap: 5, children: [
          /* @__PURE__ */ jsx(Typography, { as: "h1", variant: "alpha", children: hasAlreadyCreatedContentTypes ? formatMessage({
            id: "app.components.HomePage.welcome.again",
            defaultMessage: "Welcome 👋"
          }) : formatMessage({
            id: "app.components.HomePage.welcome",
            defaultMessage: "Welcome on board!"
          }) }),
          /* @__PURE__ */ jsx(WordWrap, { textColor: "neutral600", variant: "epsilon", children: hasAlreadyCreatedContentTypes ? formatMessage({
            id: "app.components.HomePage.welcomeBlock.content.again",
            defaultMessage: "We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."
          }) : formatMessage({
            id: "app.components.HomePage.welcomeBlock.content",
            defaultMessage: "Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"
          }) }),
          hasAlreadyCreatedContentTypes ? /* @__PURE__ */ jsx(Link, { isExternal: true, href: "https://strapi.io/blog", children: formatMessage({
            id: "app.components.HomePage.button.blog",
            defaultMessage: "See more on the blog"
          }) }) : /* @__PURE__ */ jsx(Button, { size: "L", onClick: handleClick, endIcon: /* @__PURE__ */ jsx(ArrowRight, {}), children: formatMessage({
            id: "app.components.HomePage.create",
            defaultMessage: "Create your first Content type"
          }) })
        ] }) }) }) }) }),
        /* @__PURE__ */ jsxs(Grid, { gap: 6, children: [
          /* @__PURE__ */ jsx(GridItem, { col: 8, s: 12, children: showGuidedTour ? /* @__PURE__ */ jsx(GuidedTourHomepage, {}) : /* @__PURE__ */ jsx(ContentBlocks, {}) }),
          /* @__PURE__ */ jsx(GridItem, { col: 4, s: 12, children: /* @__PURE__ */ jsx(SocialLinks, {}) })
        ] })
      ] })
    ] })
  ] });
};
const LogoContainer = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: ${150 / 16}rem;
  }
`;
const WordWrap = styled(Typography)`
  word-break: break-word;
`;
const ContentBlocks = () => {
  const { formatMessage } = useIntl();
  const { trackUsage } = useTracking();
  return /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "stretch", gap: 5, children: [
    /* @__PURE__ */ jsx(
      BlockLink,
      {
        href: "https://cloud.strapi.io",
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        onClick: () => {
          trackUsage("didClickOnTryStrapiCloudSection");
        },
        children: /* @__PURE__ */ jsxs(
          Flex,
          {
            shadow: "tableShadow",
            hasRadius: true,
            padding: 6,
            background: "neutral0",
            position: "relative",
            gap: 6,
            children: [
              /* @__PURE__ */ jsx(CloudCustomWrapper, { hasRadius: true, padding: 3, children: /* @__PURE__ */ jsx(
                CloudIconWrapper,
                {
                  width: "2rem",
                  height: "2rem",
                  justifyContent: "center",
                  hasRadius: true,
                  alignItems: "center",
                  children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "15", fill: "none", children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      fill: "#fff",
                      fillRule: "evenodd",
                      d: "M4.39453 13.8298C1.93859 13.6455 0 11.468 0 8.80884 0 6.0289 2.11876 3.7753 4.73238 3.7753c.46775 0 .91964.07218 1.34638.20664C7.21234 1.62909 9.66469 0 12.5073 0c2.5102 0 4.7161 1.27036 5.9782 3.18766a4.54297 4.54297 0 0 1 .6132-.04144C21.8056 3.14622 24 5.54066 24 8.49436c0 2.89194-2.1036 5.24784-4.7323 5.34504v.0031l-1.8948.278a38.18054 38.18054 0 0 1-11.08354 0l-1.89483-.278v-.0127Z",
                      clipRule: "evenodd"
                    }
                  ) })
                }
              ) }),
              /* @__PURE__ */ jsxs(Flex, { gap: 1, direction: "column", alignItems: "start", children: [
                /* @__PURE__ */ jsx(Typography, { fontWeight: "semiBold", variant: "pi", children: formatMessage({
                  id: "app.components.BlockLink.cloud",
                  defaultMessage: "Strapi Cloud"
                }) }),
                /* @__PURE__ */ jsx(Typography, { textColor: "neutral600", children: formatMessage({
                  id: "app.components.BlockLink.cloud.content",
                  defaultMessage: "A fully composable, and collaborative platform to boost your team velocity."
                }) }),
                /* @__PURE__ */ jsx(Box, { src: cloudFlagsImage, position: "absolute", top: 0, right: 0, as: "img" })
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      BlockLink,
      {
        href: "https://strapi.io/resource-center",
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        onClick: () => trackUsage("didClickonReadTheDocumentationSection"),
        children: /* @__PURE__ */ jsx(
          ContentBox,
          {
            title: formatMessage({
              id: "global.documentation",
              defaultMessage: "Documentation"
            }),
            subtitle: formatMessage({
              id: "app.components.BlockLink.documentation.content",
              defaultMessage: "Discover the essential concepts, guides and instructions."
            }),
            icon: /* @__PURE__ */ jsx(InformationSquare, {}),
            iconBackground: "primary100"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      BlockLink,
      {
        href: "https://strapi.io/starters",
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        onClick: () => trackUsage("didClickonCodeExampleSection"),
        children: /* @__PURE__ */ jsx(
          ContentBox,
          {
            title: formatMessage({
              id: "app.components.BlockLink.code",
              defaultMessage: "Code example"
            }),
            subtitle: formatMessage({
              id: "app.components.BlockLink.code.content",
              defaultMessage: "Learn by using ready-made starters for your projects."
            }),
            icon: /* @__PURE__ */ jsx(CodeSquare, {}),
            iconBackground: "warning100"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      BlockLink,
      {
        href: "https://strapi.io/blog/categories/tutorials",
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        onClick: () => trackUsage("didClickonTutorialSection"),
        children: /* @__PURE__ */ jsx(
          ContentBox,
          {
            title: formatMessage({
              id: "app.components.BlockLink.tutorial",
              defaultMessage: "Tutorials"
            }),
            subtitle: formatMessage({
              id: "app.components.BlockLink.tutorial.content",
              defaultMessage: "Follow step-by-step instructions to use and customize Strapi."
            }),
            icon: /* @__PURE__ */ jsx(PlaySquare, {}),
            iconBackground: "secondary100"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      BlockLink,
      {
        href: "https://strapi.io/blog",
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        onClick: () => trackUsage("didClickonBlogSection"),
        children: /* @__PURE__ */ jsx(
          ContentBox,
          {
            title: formatMessage({
              id: "app.components.BlockLink.blog",
              defaultMessage: "Blog"
            }),
            subtitle: formatMessage({
              id: "app.components.BlockLink.blog.content",
              defaultMessage: "Read the latest news about Strapi and the ecosystem."
            }),
            icon: /* @__PURE__ */ jsx(FeatherSquare, {}),
            iconBackground: "alternative100"
          }
        )
      }
    )
  ] });
};
const BlockLink = styled.a`
  text-decoration: none;
`;
const CloudCustomWrapper = styled(Box)`
  background-image: url(${cloudIconBackgroundImage});
`;
const CloudIconWrapper = styled(Flex)`
  background: rgba(255, 255, 255, 0.3);
`;
const SocialLinks = () => {
  const { formatMessage } = useIntl();
  const { communityEdition } = useAppInfo();
  const socialLinksExtended = [
    ...SOCIAL_LINKS,
    {
      icon: /* @__PURE__ */ jsx(StyledStrapi, {}),
      link: communityEdition ? "https://discord.strapi.io" : "https://support.strapi.io/support/home",
      name: {
        id: "Settings.application.get-help",
        defaultMessage: "Get help"
      }
    }
  ];
  return /* @__PURE__ */ jsxs(
    Flex,
    {
      as: "aside",
      direction: "column",
      "aria-labelledby": "join-the-community",
      background: "neutral0",
      hasRadius: true,
      paddingRight: 5,
      paddingLeft: 5,
      paddingTop: 6,
      paddingBottom: 6,
      shadow: "tableShadow",
      gap: 7,
      children: [
        /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "stretch", gap: 5, children: [
          /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "stretch", gap: 3, children: [
            /* @__PURE__ */ jsx(Typography, { variant: "delta", as: "h2", id: "join-the-community", children: formatMessage({
              id: "app.components.HomePage.community",
              defaultMessage: "Join the community"
            }) }),
            /* @__PURE__ */ jsx(Typography, { textColor: "neutral600", children: formatMessage({
              id: "app.components.HomePage.community.content",
              defaultMessage: "Discuss with team members, contributors and developers on different channels"
            }) })
          ] }),
          /* @__PURE__ */ jsx(Link, { href: "https://feedback.strapi.io/", isExternal: true, endIcon: /* @__PURE__ */ jsx(ExternalLink, {}), children: formatMessage({
            id: "app.components.HomePage.roadmap",
            defaultMessage: "See our road map"
          }) })
        ] }),
        /* @__PURE__ */ jsx(GridGap, { children: socialLinksExtended.map(({ icon, link, name }) => {
          return /* @__PURE__ */ jsx(GridItem, { col: 6, s: 12, children: /* @__PURE__ */ jsx(LinkCustom, { size: "L", startIcon: icon, variant: "tertiary", href: link, isExternal: true, children: formatMessage(name) }) }, name.id);
        }) })
      ]
    }
  );
};
const StyledDiscord = styled(Discord)`
  path {
    fill: #7289da !important;
  }
`;
const StyledReddit = styled(Reddit)`
  > path:first-child {
    fill: #ff4500;
  }
`;
const StyledStrapi = styled(Strapi)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`;
const StyledTwitter = styled(Twitter)`
  path {
    fill: #1da1f2 !important;
  }
`;
const StyledDiscourse = styled(Discourse)`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`;
const LinkCustom = styled(LinkButton)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({ theme }) => theme.spaces[6]};
    height: ${({ theme }) => theme.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`;
const GridGap = styled(Grid)`
  row-gap: ${({ theme }) => theme.spaces[2]};
  column-gap: ${({ theme }) => theme.spaces[4]};
`;
const SOCIAL_LINKS = [
  {
    name: { id: "app.components.HomePage.community.links.github", defaultMessage: "Github" },
    link: "https://github.com/strapi/strapi/",
    icon: /* @__PURE__ */ jsx(Github, { fill: "#7289DA" }),
    alt: "github"
  },
  {
    name: { id: "app.components.HomePage.community.links.discord", defaultMessage: "Discord" },
    link: "https://discord.strapi.io/",
    icon: /* @__PURE__ */ jsx(StyledDiscord, {}),
    alt: "discord"
  },
  {
    name: { id: "app.components.HomePage.community.links.reddit", defaultMessage: "Reddit" },
    link: "https://www.reddit.com/r/Strapi/",
    icon: /* @__PURE__ */ jsx(StyledReddit, {}),
    alt: "reddit"
  },
  {
    name: { id: "app.components.HomePage.community.links.twitter", defaultMessage: "Twitter" },
    link: "https://twitter.com/strapijs",
    icon: /* @__PURE__ */ jsx(StyledTwitter, {}),
    alt: "twitter"
  },
  {
    name: { id: "app.components.HomePage.community.links.forum", defaultMessage: "Forum" },
    link: "https://forum.strapi.io",
    icon: /* @__PURE__ */ jsx(StyledDiscourse, {}),
    alt: "forum"
  },
  {
    name: { id: "app.components.HomePage.community.links.blog", defaultMessage: "Blog" },
    link: "https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",
    icon: /* @__PURE__ */ jsx(StyledStrapi, {}),
    alt: "blog"
  },
  {
    name: {
      id: "app.components.HomePage.community.links.career",
      defaultMessage: "We are hiring!"
    },
    link: "https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",
    icon: /* @__PURE__ */ jsx(StyledStrapi, {}),
    alt: "career"
  }
];
const HomePage = () => {
  const Page = useEnterprise(
    HomePageCE,
    // eslint-disable-next-line import/no-cycle
    async () => (await import("./HomePage-ib7EMCuN.mjs")).HomePageEE
  );
  if (!Page) {
    return null;
  }
  return /* @__PURE__ */ jsx(Page, {});
};
export {
  HomePage,
  HomePageCE
};
//# sourceMappingURL=HomePage-m1tWtSZ-.mjs.map
