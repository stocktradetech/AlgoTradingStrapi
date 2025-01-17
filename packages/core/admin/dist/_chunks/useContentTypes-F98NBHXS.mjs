import * as React from "react";
import { useAPIErrorHandler, useNotification } from "@strapi/helper-plugin";
import { n as adminApi } from "./index-kIIXqMj8.mjs";
const contentManager = adminApi.injectEndpoints({
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
  const { _unstableFormatAPIError: formatAPIError } = useAPIErrorHandler();
  const toggleNotification = useNotification();
  const components = useGetComponentsQuery();
  const contentTypes = useGetContentTypesQuery();
  React.useEffect(() => {
    if (contentTypes.error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(contentTypes.error)
      });
    }
  }, [contentTypes.error, formatAPIError, toggleNotification]);
  React.useEffect(() => {
    if (components.error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(components.error)
      });
    }
  }, [components.error, formatAPIError, toggleNotification]);
  const isLoading = components.isLoading || contentTypes.isLoading;
  const collectionTypes = React.useMemo(() => {
    return (contentTypes?.data ?? []).filter(
      (contentType) => contentType.kind === "collectionType" && contentType.isDisplayed
    );
  }, [contentTypes?.data]);
  const singleTypes = React.useMemo(() => {
    return (contentTypes?.data ?? []).filter(
      (contentType) => contentType.kind !== "collectionType" && contentType.isDisplayed
    );
  }, [contentTypes?.data]);
  return {
    isLoading,
    components: React.useMemo(() => components?.data ?? [], [components?.data]),
    collectionTypes,
    singleTypes
  };
}
export {
  useContentTypes as u
};
//# sourceMappingURL=useContentTypes-F98NBHXS.mjs.map
