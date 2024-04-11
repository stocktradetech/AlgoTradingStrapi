declare const SCALARS_ASSOCIATIONS: {
    readonly uid: "String";
    readonly email: "String";
    readonly password: "String";
    readonly text: "String";
    readonly boolean: "Boolean";
    readonly integer: "Int";
    readonly string: "String";
    readonly enumeration: "String";
    readonly richtext: "String";
    readonly blocks: "JSON";
    readonly biginteger: "Long";
    readonly float: "Float";
    readonly decimal: "Float";
    readonly json: "JSON";
    readonly date: "Date";
    readonly time: "Time";
    readonly datetime: "DateTime";
    readonly timestamp: "DateTime";
};
declare const KINDS: {
    readonly type: "type";
    readonly component: "component";
    readonly dynamicZone: "dynamic-zone";
    readonly enum: "enum";
    readonly entity: "entity";
    readonly entityResponse: "entity-response";
    readonly entityResponseCollection: "entity-response-collection";
    readonly relationResponseCollection: "relation-response-collection";
    readonly query: "query";
    readonly mutation: "mutation";
    readonly input: "input";
    readonly filtersInput: "filters-input";
    readonly scalar: "scalar";
    readonly morph: "polymorphic";
    readonly internal: "internal";
};
declare const GRAPHQL_SCALAR_OPERATORS: {
    readonly ID: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
    readonly Boolean: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
    readonly String: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
    readonly Int: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
    readonly Long: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
    readonly Float: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
    readonly Date: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
    readonly Time: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
    readonly DateTime: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
    readonly JSON: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
};
declare const ERROR_CODES: {
    readonly emptyDynamicZone: "dynamiczone.empty";
};
export type Constants = {
    PAGINATION_TYPE_NAME: string;
    RESPONSE_COLLECTION_META_TYPE_NAME: string;
    PUBLICATION_STATE_TYPE_NAME: string;
    GRAPHQL_SCALARS: string[];
    STRAPI_SCALARS: string[];
    GENERIC_MORPH_TYPENAME: string;
    KINDS: typeof KINDS;
    GRAPHQL_SCALAR_OPERATORS: typeof GRAPHQL_SCALAR_OPERATORS;
    SCALARS_ASSOCIATIONS: typeof SCALARS_ASSOCIATIONS;
    ERROR_CODES: typeof ERROR_CODES;
    ERROR_TYPE_NAME: string;
};
declare const _default: () => {
    PAGINATION_TYPE_NAME: string;
    RESPONSE_COLLECTION_META_TYPE_NAME: string;
    PUBLICATION_STATE_TYPE_NAME: string;
    GRAPHQL_SCALARS: readonly ["ID", "Boolean", "Int", "String", "Long", "Float", "JSON", "Date", "Time", "DateTime"];
    STRAPI_SCALARS: readonly ["boolean", "integer", "string", "richtext", "blocks", "enumeration", "biginteger", "float", "decimal", "json", "date", "time", "datetime", "timestamp", "uid", "email", "password", "text"];
    GENERIC_MORPH_TYPENAME: string;
    KINDS: {
        readonly type: "type";
        readonly component: "component";
        readonly dynamicZone: "dynamic-zone";
        readonly enum: "enum";
        readonly entity: "entity";
        readonly entityResponse: "entity-response";
        readonly entityResponseCollection: "entity-response-collection";
        readonly relationResponseCollection: "relation-response-collection";
        readonly query: "query";
        readonly mutation: "mutation";
        readonly input: "input";
        readonly filtersInput: "filters-input";
        readonly scalar: "scalar";
        readonly morph: "polymorphic";
        readonly internal: "internal";
    };
    GRAPHQL_SCALAR_OPERATORS: {
        readonly ID: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
        readonly Boolean: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
        readonly String: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
        readonly Int: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
        readonly Long: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
        readonly Float: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
        readonly Date: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
        readonly Time: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
        readonly DateTime: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
        readonly JSON: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
    };
    SCALARS_ASSOCIATIONS: {
        readonly uid: "String";
        readonly email: "String";
        readonly password: "String";
        readonly text: "String";
        readonly boolean: "Boolean";
        readonly integer: "Int";
        readonly string: "String";
        readonly enumeration: "String";
        readonly richtext: "String";
        readonly blocks: "JSON";
        readonly biginteger: "Long";
        readonly float: "Float";
        readonly decimal: "Float";
        readonly json: "JSON";
        readonly date: "Date";
        readonly time: "Time";
        readonly datetime: "DateTime";
        readonly timestamp: "DateTime";
    };
    ERROR_CODES: {
        readonly emptyDynamicZone: "dynamiczone.empty";
    };
    ERROR_TYPE_NAME: string;
};
export default _default;
//# sourceMappingURL=constants.d.ts.map