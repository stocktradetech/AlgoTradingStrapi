import { jsxs, jsx } from "react/jsx-runtime";
import * as React from "react";
import { useNotifyAT, Main, HeaderLayout, ContentLayout, Button, Box, Flex, Typography, Grid, GridItem, TextInput, FieldAction, SingleSelect, SingleSelectOption } from "@strapi/design-system";
import { translatedErrors, useTracking, useNotification, useOverlayBlocker, useAPIErrorHandler, useFocusWhenNavigate, LoadingIndicatorPage, Form, pxToRem, GenericInput } from "@strapi/helper-plugin";
import { Check, Eye, EyeStriked } from "@strapi/icons";
import { Formik } from "formik";
import upperFirst from "lodash/upperFirst";
import { Helmet } from "react-helmet";
import { useIntl } from "react-intl";
import styled from "styled-components";
import * as yup from "yup";
import { j as useTypedSelector, s as useTypedDispatch, a as useAuth, t as useUpdateMeMutation, v as useIsSSOLockedQuery, w as setAppTheme, x as isBaseQueryError } from "./index-kIIXqMj8.mjs";
import { g as getFullName } from "./AuthenticatedApp-tGcMdSKz.mjs";
import { C as COMMON_USER_SCHEMA } from "./validation-f9rGWFeU.mjs";
import "react-dom/client";
import "invariant";
import "lodash/isFunction";
import "lodash/merge";
import "lodash/pick";
import "react-router-dom";
import "react-redux";
import "use-context-selector";
import "@reduxjs/toolkit";
import "@reduxjs/toolkit/query/react";
import "axios";
import "@radix-ui/react-context";
import "@strapi/design-system/v2";
import "lodash/camelCase";
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
import "semver/functions/lt";
import "semver/functions/valid";
const PROFILE_VALIDTION_SCHEMA = yup.object().shape({
  ...COMMON_USER_SCHEMA,
  currentPassword: yup.string().when(["password", "confirmPassword"], (password, confirmPassword, passSchema) => {
    return password || confirmPassword ? passSchema.required(translatedErrors.required) : passSchema;
  }),
  preferedLanguage: yup.string().nullable()
});
const ProfilePage = () => {
  const localeNames = useTypedSelector((state) => state.admin_app.language.localeNames);
  const { formatMessage } = useIntl();
  const { trackUsage } = useTracking();
  const toggleNotification = useNotification();
  const { lockApp, unlockApp } = useOverlayBlocker();
  const { notifyStatus } = useNotifyAT();
  const currentTheme = useTypedSelector((state) => state.admin_app.theme.currentTheme);
  const dispatch = useTypedDispatch();
  const {
    _unstableFormatValidationErrors: formatValidationErrors,
    _unstableFormatAPIError: formatApiError
  } = useAPIErrorHandler();
  useFocusWhenNavigate();
  const user = useAuth("ProfilePage", (state) => state.user);
  React.useEffect(() => {
    if (user) {
      notifyStatus(
        formatMessage({
          id: "Settings.profile.form.notify.data.loaded",
          defaultMessage: "Your profile data has been loaded"
        })
      );
    } else {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error", defaultMessage: "An error occured" }
      });
    }
  }, [formatMessage, notifyStatus, toggleNotification, user]);
  const [updateMe, { isLoading: isSubmittingForm }] = useUpdateMeMutation();
  const {
    isLoading,
    data: dataSSO,
    error
  } = useIsSSOLockedQuery(void 0, {
    skip: !(window.strapi.isEE && window.strapi.features.isEnabled("sso"))
  });
  React.useEffect(() => {
    if (error) {
      toggleNotification({
        type: "warning",
        message: { id: "Settings.permissions.users.sso.provider.error" }
      });
    }
  }, [error, toggleNotification]);
  const handleSubmit = async (body, { setErrors }) => {
    lockApp();
    const { confirmPassword: _confirmPassword, currentTheme: currentTheme2, ...bodyRest } = body;
    let dataToSend = bodyRest;
    if (dataToSend.password === "") {
      const {
        password: _password,
        currentPassword: _currentPassword,
        ...passwordRequestBodyRest
      } = dataToSend;
      dataToSend = passwordRequestBodyRest;
    }
    const res = await updateMe(dataToSend);
    if ("data" in res) {
      dispatch(setAppTheme(currentTheme2));
      trackUsage("didChangeMode", { newMode: currentTheme2 });
      toggleNotification({
        type: "success",
        message: { id: "notification.success.saved", defaultMessage: "Saved" }
      });
    }
    if ("error" in res) {
      if (isBaseQueryError(res.error) && (res.error.name === "ValidationError" || res.error.message === "ValidationError")) {
        setErrors(formatValidationErrors(res.error));
      } else if (isBaseQueryError(res.error)) {
        toggleNotification({
          type: "warning",
          message: formatApiError(res.error)
        });
      } else {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: "An error occured" }
        });
      }
    }
    unlockApp?.();
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxs(Main, { "aria-busy": "true", children: [
      /* @__PURE__ */ jsx(
        Helmet,
        {
          title: formatMessage({
            id: "Settings.profile.form.section.helmet.title",
            defaultMessage: "User profile"
          })
        }
      ),
      /* @__PURE__ */ jsx(
        HeaderLayout,
        {
          title: formatMessage({
            id: "Settings.profile.form.section.profile.page.title",
            defaultMessage: "Profile page"
          })
        }
      ),
      /* @__PURE__ */ jsx(ContentLayout, { children: /* @__PURE__ */ jsx(LoadingIndicatorPage, {}) })
    ] });
  }
  const hasLockedRole = dataSSO?.isSSOLocked ?? false;
  const { email, firstname, lastname, username, preferedLanguage } = user ?? {};
  const initialData = {
    email,
    firstname,
    lastname,
    username,
    preferedLanguage,
    currentTheme,
    confirmPassword: "",
    password: ""
  };
  return /* @__PURE__ */ jsxs(Main, { "aria-busy": isSubmittingForm, children: [
    /* @__PURE__ */ jsx(
      Helmet,
      {
        title: formatMessage({
          id: "Settings.profile.form.section.helmet.title",
          defaultMessage: "User profile"
        })
      }
    ),
    /* @__PURE__ */ jsx(
      Formik,
      {
        onSubmit: handleSubmit,
        initialValues: initialData,
        validateOnChange: false,
        validationSchema: PROFILE_VALIDTION_SCHEMA,
        enableReinitialize: true,
        children: ({
          errors,
          values: {
            email: email2,
            firstname: firstname2,
            lastname: lastname2,
            username: username2,
            preferedLanguage: preferedLanguage2,
            currentTheme: currentTheme2,
            ...passwordValues
          },
          handleChange,
          isSubmitting,
          dirty
        }) => {
          return /* @__PURE__ */ jsxs(Form, { children: [
            /* @__PURE__ */ jsx(
              HeaderLayout,
              {
                title: username2 || getFullName(firstname2 ?? "", lastname2),
                primaryAction: /* @__PURE__ */ jsx(
                  Button,
                  {
                    startIcon: /* @__PURE__ */ jsx(Check, {}),
                    loading: isSubmitting,
                    type: "submit",
                    disabled: !dirty,
                    children: formatMessage({ id: "global.save", defaultMessage: "Save" })
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(Box, { paddingBottom: 10, children: /* @__PURE__ */ jsx(ContentLayout, { children: /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "stretch", gap: 6, children: [
              /* @__PURE__ */ jsx(
                UserInfoSection,
                {
                  errors,
                  onChange: handleChange,
                  values: {
                    firstname: firstname2,
                    lastname: lastname2,
                    username: username2,
                    email: email2
                  }
                }
              ),
              !hasLockedRole && /* @__PURE__ */ jsx(
                PasswordSection,
                {
                  errors,
                  onChange: handleChange,
                  values: passwordValues
                }
              ),
              /* @__PURE__ */ jsx(
                PreferencesSection,
                {
                  onChange: handleChange,
                  values: {
                    preferedLanguage: preferedLanguage2,
                    currentTheme: currentTheme2
                  },
                  localeNames
                }
              )
            ] }) }) })
          ] });
        }
      }
    )
  ] });
};
const PasswordSection = ({ errors, onChange, values }) => {
  const { formatMessage } = useIntl();
  const [currentPasswordShown, setCurrentPasswordShown] = React.useState(false);
  const [passwordShown, setPasswordShown] = React.useState(false);
  const [passwordConfirmShown, setPasswordConfirmShown] = React.useState(false);
  return /* @__PURE__ */ jsx(
    Box,
    {
      background: "neutral0",
      hasRadius: true,
      shadow: "filterShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7,
      children: /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "stretch", gap: 4, children: [
        /* @__PURE__ */ jsx(Typography, { variant: "delta", as: "h2", children: formatMessage({
          id: "global.change-password",
          defaultMessage: "Change password"
        }) }),
        /* @__PURE__ */ jsx(Grid, { gap: 5, children: /* @__PURE__ */ jsx(GridItem, { s: 12, col: 6, children: /* @__PURE__ */ jsx(
          TextInput,
          {
            error: errors.currentPassword ? formatMessage({
              id: errors.currentPassword,
              defaultMessage: errors.currentPassword
            }) : "",
            onChange,
            value: values.currentPassword,
            label: formatMessage({
              id: "Auth.form.currentPassword.label",
              defaultMessage: "Current Password"
            }),
            name: "currentPassword",
            type: currentPasswordShown ? "text" : "password",
            endAction: /* @__PURE__ */ jsx(
              FieldActionWrapper,
              {
                onClick: (e) => {
                  e.stopPropagation();
                  setCurrentPasswordShown((prev) => !prev);
                },
                label: formatMessage(
                  currentPasswordShown ? {
                    id: "Auth.form.password.show-password",
                    defaultMessage: "Show password"
                  } : {
                    id: "Auth.form.password.hide-password",
                    defaultMessage: "Hide password"
                  }
                ),
                children: currentPasswordShown ? /* @__PURE__ */ jsx(Eye, {}) : /* @__PURE__ */ jsx(EyeStriked, {})
              }
            )
          }
        ) }) }),
        /* @__PURE__ */ jsxs(Grid, { gap: 5, children: [
          /* @__PURE__ */ jsx(GridItem, { s: 12, col: 6, children: /* @__PURE__ */ jsx(
            PasswordInput,
            {
              error: errors.password ? formatMessage({
                id: errors.password,
                defaultMessage: errors.password
              }) : "",
              onChange,
              value: values.password,
              label: formatMessage({
                id: "global.password",
                defaultMessage: "Password"
              }),
              name: "password",
              type: passwordShown ? "text" : "password",
              autoComplete: "new-password",
              endAction: /* @__PURE__ */ jsx(
                FieldActionWrapper,
                {
                  onClick: (e) => {
                    e.stopPropagation();
                    setPasswordShown((prev) => !prev);
                  },
                  label: formatMessage(
                    passwordShown ? {
                      id: "Auth.form.password.show-password",
                      defaultMessage: "Show password"
                    } : {
                      id: "Auth.form.password.hide-password",
                      defaultMessage: "Hide password"
                    }
                  ),
                  children: passwordShown ? /* @__PURE__ */ jsx(Eye, {}) : /* @__PURE__ */ jsx(EyeStriked, {})
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { s: 12, col: 6, children: /* @__PURE__ */ jsx(
            PasswordInput,
            {
              error: errors.confirmPassword ? formatMessage({
                id: errors.confirmPassword,
                defaultMessage: errors.confirmPassword
              }) : "",
              onChange,
              value: values.confirmPassword,
              label: formatMessage({
                id: "Auth.form.confirmPassword.label",
                defaultMessage: "Confirm Password"
              }),
              name: "confirmPassword",
              type: passwordConfirmShown ? "text" : "password",
              autoComplete: "new-password",
              endAction: /* @__PURE__ */ jsx(
                FieldActionWrapper,
                {
                  onClick: (e) => {
                    e.stopPropagation();
                    setPasswordConfirmShown((prev) => !prev);
                  },
                  label: formatMessage(
                    passwordConfirmShown ? {
                      id: "Auth.form.password.show-password",
                      defaultMessage: "Show password"
                    } : {
                      id: "Auth.form.password.hide-password",
                      defaultMessage: "Hide password"
                    }
                  ),
                  children: passwordConfirmShown ? /* @__PURE__ */ jsx(Eye, {}) : /* @__PURE__ */ jsx(EyeStriked, {})
                }
              )
            }
          ) })
        ] })
      ] })
    }
  );
};
const PasswordInput = styled(TextInput)`
  ::-ms-reveal {
    display: none;
  }
`;
const FieldActionWrapper = styled(FieldAction)`
  svg {
    height: ${pxToRem(16)};
    width: ${pxToRem(16)};
    path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }
`;
const PreferencesSection = ({ onChange, values, localeNames }) => {
  const { formatMessage } = useIntl();
  const themesToDisplay = useTypedSelector((state) => state.admin_app.theme.availableThemes);
  return /* @__PURE__ */ jsx(
    Box,
    {
      background: "neutral0",
      hasRadius: true,
      shadow: "filterShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7,
      children: /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "stretch", gap: 4, children: [
        /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "stretch", gap: 1, children: [
          /* @__PURE__ */ jsx(Typography, { variant: "delta", as: "h2", children: formatMessage({
            id: "Settings.profile.form.section.experience.title",
            defaultMessage: "Experience"
          }) }),
          /* @__PURE__ */ jsx(Typography, { children: formatMessage(
            {
              id: "Settings.profile.form.section.experience.interfaceLanguageHelp",
              defaultMessage: "Preference changes will apply only to you. More information is available {here}."
            },
            {
              here: /* @__PURE__ */ jsx(
                Box,
                {
                  as: "a",
                  color: "primary600",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: "https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#locales",
                  children: formatMessage({
                    id: "Settings.profile.form.section.experience.here",
                    defaultMessage: "here"
                  })
                }
              )
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs(Grid, { gap: 5, children: [
          /* @__PURE__ */ jsx(GridItem, { s: 12, col: 6, children: /* @__PURE__ */ jsx(
            SingleSelect,
            {
              label: formatMessage({
                id: "Settings.profile.form.section.experience.interfaceLanguage",
                defaultMessage: "Interface language"
              }),
              placeholder: formatMessage({
                id: "global.select",
                defaultMessage: "Select"
              }),
              hint: formatMessage({
                id: "Settings.profile.form.section.experience.interfaceLanguage.hint",
                defaultMessage: "This will only display your own interface in the chosen language."
              }),
              onClear: () => {
                onChange({
                  target: { name: "preferedLanguage", value: null }
                });
              },
              clearLabel: formatMessage({
                id: "Settings.profile.form.section.experience.clear.select",
                defaultMessage: "Clear the interface language selected"
              }),
              value: values.preferedLanguage,
              onChange: (e) => {
                onChange({
                  target: { name: "preferedLanguage", value: e }
                });
              },
              children: Object.entries(localeNames).map(([language, langName]) => /* @__PURE__ */ jsx(SingleSelectOption, { value: language, children: langName }, language))
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { s: 12, col: 6, children: /* @__PURE__ */ jsxs(
            SingleSelect,
            {
              label: formatMessage({
                id: "Settings.profile.form.section.experience.mode.label",
                defaultMessage: "Interface mode"
              }),
              placeholder: formatMessage({
                id: "components.Select.placeholder",
                defaultMessage: "Select"
              }),
              hint: formatMessage({
                id: "Settings.profile.form.section.experience.mode.hint",
                defaultMessage: "Displays your interface in the chosen mode."
              }),
              value: values.currentTheme,
              onChange: (e) => {
                onChange({
                  target: { name: "currentTheme", value: e }
                });
              },
              children: [
                /* @__PURE__ */ jsx(SingleSelectOption, { value: "system", children: formatMessage({
                  id: "Settings.profile.form.section.experience.mode.option-system-label",
                  defaultMessage: "Use system settings"
                }) }),
                themesToDisplay.map((theme) => /* @__PURE__ */ jsx(SingleSelectOption, { value: theme, children: formatMessage(
                  {
                    id: "Settings.profile.form.section.experience.mode.option-label",
                    defaultMessage: "{name} mode"
                  },
                  {
                    name: formatMessage({
                      id: theme,
                      defaultMessage: upperFirst(theme)
                    })
                  }
                ) }, theme))
              ]
            }
          ) })
        ] })
      ] })
    }
  );
};
const UserInfoSection = ({ errors, onChange, values }) => {
  const { formatMessage } = useIntl();
  return /* @__PURE__ */ jsx(
    Box,
    {
      background: "neutral0",
      hasRadius: true,
      shadow: "filterShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7,
      children: /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "stretch", gap: 4, children: [
        /* @__PURE__ */ jsx(Typography, { variant: "delta", as: "h2", children: formatMessage({
          id: "global.profile",
          defaultMessage: "Profile"
        }) }),
        /* @__PURE__ */ jsxs(Grid, { gap: 5, children: [
          /* @__PURE__ */ jsx(GridItem, { s: 12, col: 6, children: /* @__PURE__ */ jsx(
            GenericInput,
            {
              intlLabel: {
                id: "Auth.form.firstname.label",
                defaultMessage: "First name"
              },
              error: errors.firstname,
              onChange,
              value: values.firstname,
              type: "text",
              name: "firstname",
              required: true
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { s: 12, col: 6, children: /* @__PURE__ */ jsx(
            GenericInput,
            {
              intlLabel: {
                id: "Auth.form.lastname.label",
                defaultMessage: "Last name"
              },
              error: errors.lastname,
              onChange,
              value: values.lastname,
              type: "text",
              name: "lastname"
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { s: 12, col: 6, children: /* @__PURE__ */ jsx(
            GenericInput,
            {
              intlLabel: { id: "Auth.form.email.label", defaultMessage: "Email" },
              error: errors.email,
              onChange,
              value: values.email,
              type: "email",
              name: "email",
              required: true
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { s: 12, col: 6, children: /* @__PURE__ */ jsx(
            GenericInput,
            {
              intlLabel: {
                id: "Auth.form.username.label",
                defaultMessage: "Username"
              },
              error: errors.username,
              onChange,
              value: values.username,
              type: "text",
              name: "username"
            }
          ) })
        ] })
      ] })
    }
  );
};
export {
  ProfilePage
};
//# sourceMappingURL=ProfilePage-soIw9c6M.mjs.map
