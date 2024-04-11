declare const _default: {
    store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<import("redux").EmptyObject & {
        admin_app: {
            permissions: {};
            status: string;
        };
        'content-manager_app': {
            components: never[];
            status: string;
            models: never[];
            collectionTypeLinks: never[];
            singleTypeLinks: never[];
        };
        'content-manager_listView': {
            data: never[];
            isLoading: boolean;
            components: never[];
            contentType: {};
            initialDisplayedHeaders: never[];
            displayedHeaders: never[];
            pagination: {
                total: number;
            };
        };
        'content-manager_rbacManager': {
            permissions: null;
        };
        'content-manager_editViewLayoutManager': {
            currentLayout: null;
        };
        'content-manager_editViewCrudReducer': {
            componentsDataStructure: {};
            contentTypeDataStructure: {};
            isLoading: boolean;
            data: null;
            setModifiedDataOnly: boolean;
            status: string;
        };
        rbacProvider: {
            allPermissions: null;
            collectionTypesRelatedPermissions: {};
        };
    }, import("redux").AnyAction, any>;
    state: import("redux").EmptyObject & {
        admin_app: {
            permissions: {};
            status: string;
        };
        'content-manager_app': {
            components: never[];
            status: string;
            models: never[];
            collectionTypeLinks: never[];
            singleTypeLinks: never[];
        };
        'content-manager_listView': {
            data: never[];
            isLoading: boolean;
            components: never[];
            contentType: {};
            initialDisplayedHeaders: never[];
            displayedHeaders: never[];
            pagination: {
                total: number;
            };
        };
        'content-manager_rbacManager': {
            permissions: null;
        };
        'content-manager_editViewLayoutManager': {
            currentLayout: null;
        };
        'content-manager_editViewCrudReducer': {
            componentsDataStructure: {};
            contentTypeDataStructure: {};
            isLoading: boolean;
            data: null;
            setModifiedDataOnly: boolean;
            status: string;
        };
        rbacProvider: {
            allPermissions: null;
            collectionTypesRelatedPermissions: {};
        };
    };
};
export default _default;
