"use strict";
const React = require("react");
const helperPlugin = require("@strapi/helper-plugin");
const index = require("./index-1g9GBMjI.js");
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__namespace = /* @__PURE__ */ _interopNamespace(React);
const contentManager = index.adminApi.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * Components
     */
    getComponents: builder.query({
      query: () => ({
        url: `/content-manager/components`,
        method: "GET"
      }),
      transformResponse: (res) => res.data
    }),
    /**
     * Content Types
     */
    getContentTypes: builder.query({
      query: () => ({
        url: `/content-manager/content-types`,
        method: "GET"
      }),
      transformResponse: (res) => res.data
    })
  }),
  overrideExisting: false
});
const { useGetComponentsQuery, useGetContentTypesQuery } = contentManager;
function useContentTypes() {
  const { _unstableFormatAPIError: formatAPIError } = helperPlugin.useAPIErrorHandler();
  const toggleNotification = helperPlugin.useNotification();
  const components = useGetComponentsQuery();
  const contentTypes = useGetContentTypesQuery();
  React__namespace.useEffect(() => {
    if (contentTypes.error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(contentTypes.error)
      });
    }
  }, [contentTypes.error, formatAPIError, toggleNotification]);
  React__namespace.useEffect(() => {
    if (components.error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(components.error)
      });
    }
  }, [components.error, formatAPIError, toggleNotification]);
  const isLoading = components.isLoading || contentTypes.isLoading;
  const collectionTypes = React__namespace.useMemo(() => {
    return (contentTypes?.data ?? []).filter(
      (contentType) => contentType.kind === "collectionType" && contentType.isDisplayed
    );
  }, [contentTypes?.data]);
  const singleTypes = React__namespace.useMemo(() => {
    return (contentTypes?.data ?? []).filter(
      (contentType) => contentType.kind !== "collectionType" && contentType.isDisplayed
    );
  }, [contentTypes?.data]);
  return {
    isLoading,
    components: React__namespace.useMemo(() => components?.data ?? [], [components?.data]),
    collectionTypes,
    singleTypes
  };
}
exports.useContentTypes = useContentTypes;
//# sourceMappingURL=useContentTypes-0-qpYy25.js.map
