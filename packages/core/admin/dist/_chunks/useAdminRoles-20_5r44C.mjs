import * as React from "react";
import { useCollator } from "@strapi/helper-plugin";
import { useIntl } from "react-intl";
import { z as useGetRolesQuery } from "./index-kIIXqMj8.mjs";
const useAdminRoles = (params = {}, queryOptions) => {
  const { locale } = useIntl();
  const formatter = useCollator(locale, {
    sensitivity: "base"
  });
  const { data, error, isError, isLoading, refetch } = useGetRolesQuery(params, queryOptions);
  const roles = React.useMemo(
    () => [...data ?? []].sort(
      (a, b) => formatter.compare(a.name, b.name)
    ),
    [data, formatter]
  );
  return {
    roles,
    error,
    isError,
    isLoading,
    refetch
  };
};
export {
  useAdminRoles as u
};
//# sourceMappingURL=useAdminRoles-20_5r44C.mjs.map
