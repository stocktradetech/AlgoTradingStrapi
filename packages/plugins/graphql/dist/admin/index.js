"use strict";
const helperPlugin = require("@strapi/helper-plugin");
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const name$1 = "@strapi/plugin-graphql";
const version = "4.23.0";
const description = "Adds GraphQL endpoint with default API methods.";
const repository = {
  type: "git",
  url: "https://github.com/strapi/strapi.git",
  directory: "packages/plugins/graphql"
};
const license = "SEE LICENSE IN LICENSE";
const author = {
  name: "Strapi Solutions SAS",
  email: "hi@strapi.io",
  url: "https://strapi.io"
};
const maintainers = [
  {
    name: "Strapi Solutions SAS",
    email: "hi@strapi.io",
    url: "https://strapi.io"
  }
];
const exports$1 = {
  "./strapi-admin": {
    types: "./dist/admin/src/index.d.ts",
    source: "./admin/src/index.ts",
    "import": "./dist/admin/index.mjs",
    require: "./dist/admin/index.js",
    "default": "./dist/admin/index.js"
  },
  "./strapi-server": {
    types: "./dist/server/src/index.d.ts",
    source: "./server/src/index.ts",
    "import": "./dist/server/index.mjs",
    require: "./dist/server/index.js",
    "default": "./dist/server/index.js"
  },
  "./package.json": "./package.json"
};
const files = [
  "./dist",
  "strapi-server.js"
];
const scripts = {
  build: "strapi plugin:build --force",
  clean: "run -T rimraf ./dist",
  lint: "run -T eslint .",
  watch: "strapi plugin:watch"
};
const dependencies = {
  "@graphql-tools/schema": "8.5.1",
  "@graphql-tools/utils": "^8.13.1",
  "@strapi/design-system": "1.16.0",
  "@strapi/helper-plugin": "4.23.0",
  "@strapi/icons": "1.16.0",
  "@strapi/utils": "4.23.0",
  "apollo-server-core": "3.12.1",
  "apollo-server-koa": "3.10.0",
  graphql: "^15.5.1",
  "graphql-depth-limit": "^1.1.0",
  "graphql-playground-middleware-koa": "^1.6.21",
  "graphql-scalars": "1.22.2",
  "graphql-upload": "^13.0.0",
  "koa-compose": "^4.1.0",
  lodash: "4.17.21",
  nexus: "1.3.0",
  pluralize: "8.0.0"
};
const devDependencies = {
  "@strapi/strapi": "4.23.0",
  "@strapi/types": "4.23.0",
  "@types/graphql-depth-limit": "1.1.5",
  "@types/graphql-upload": "8.0.12",
  "cross-env": "^7.0.3",
  "eslint-config-custom": "4.23.0",
  koa: "2.13.4",
  react: "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "5.3.4",
  "styled-components": "5.3.3",
  tsconfig: "4.23.0",
  typescript: "5.2.2"
};
const peerDependencies = {
  "@strapi/strapi": "^4.0.0",
  react: "^17.0.0 || ^18.0.0",
  "react-dom": "^17.0.0 || ^18.0.0",
  "react-router-dom": "^5.2.0",
  "styled-components": "^5.2.1"
};
const engines = {
  node: ">=18.0.0 <=20.x.x",
  npm: ">=6.0.0"
};
const strapi = {
  displayName: "GraphQL",
  name: "graphql",
  description: "Adds GraphQL endpoint with default API methods.",
  kind: "plugin"
};
const pluginPkg = {
  name: name$1,
  version,
  description,
  repository,
  license,
  author,
  maintainers,
  exports: exports$1,
  files,
  scripts,
  dependencies,
  devDependencies,
  peerDependencies,
  engines,
  strapi
};
const pluginId = "graphql";
const name = pluginPkg.strapi.name;
const index = {
  // TODO: we need to have the type for StrapiApp done from `@strapi/admin` package.
  register(app) {
    app.registerPlugin({
      id: pluginId,
      name
    });
  },
  bootstrap() {
  },
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./translations/dk.json": () => Promise.resolve().then(() => require("../_chunks/dk-SLrLqAtl.js")), "./translations/en.json": () => Promise.resolve().then(() => require("../_chunks/en-WmmC2MW8.js")), "./translations/es.json": () => Promise.resolve().then(() => require("../_chunks/es-4tl6ikyU.js")), "./translations/fr.json": () => Promise.resolve().then(() => require("../_chunks/fr-cJXSt55N.js")), "./translations/pl.json": () => Promise.resolve().then(() => require("../_chunks/pl-wKw9Xgkw.js")), "./translations/ru.json": () => Promise.resolve().then(() => require("../_chunks/ru-CYAnXR6L.js")), "./translations/sv.json": () => Promise.resolve().then(() => require("../_chunks/sv-XNOe1ctV.js")), "./translations/tr.json": () => Promise.resolve().then(() => require("../_chunks/tr-POFbAHUC.js")), "./translations/zh-Hans.json": () => Promise.resolve().then(() => require("../_chunks/zh-Hans-pnigVFnS.js")), "./translations/zh.json": () => Promise.resolve().then(() => require("../_chunks/zh-kJ_DkSIe.js")) }), `./translations/${locale}.json`).then(({ default: data }) => {
          return {
            data: helperPlugin.prefixPluginTranslations(data, pluginId),
            locale
          };
        }).catch(() => {
          return {
            data: {},
            locale
          };
        });
      })
    );
    return Promise.resolve(importedTrads);
  }
};
module.exports = index;
//# sourceMappingURL=index.js.map
