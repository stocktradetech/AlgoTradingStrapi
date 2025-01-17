"use strict";
const chalk = require("chalk");
const commander = require("commander");
const os = require("os");
const _interopDefault = (e) => e && e.__esModule ? e : { default: e };
const chalk__default = /* @__PURE__ */ _interopDefault(chalk);
const os__default = /* @__PURE__ */ _interopDefault(os);
const version = "4.23.0";
const command = (name) => commander.program.command(name).option("-d, --debug", "Get more logs in debug mode", false).option("-s, --silent", "Don't log anything", false);
command("check").action(async (options) => {
  const { check } = await Promise.resolve().then(() => require("./_chunks/check-bpm5PS_U.js"));
  return check(options);
});
command("build").option("--sourcemap", "produce sourcemaps", true).option("--minify", "minify the output", false).action(async (options) => {
  const { build } = await Promise.resolve().then(() => require("./_chunks/build-Kx1DWL2J.js"));
  return build(options);
});
command("init").argument("<path>", "path to the package").option("--template", "path to a custom template").action(async (path, options) => {
  const { init } = await Promise.resolve().then(() => require("./_chunks/init-OzJckCOr.js"));
  return init({ path, ...options });
});
command("watch").action(async (options) => {
  const { watch } = await Promise.resolve().then(() => require("./_chunks/watch-zQeBJJ3O.js"));
  return watch(options);
});
commander.program.usage("<command> [options]").on("command:*", ([invalidCmd]) => {
  console.error(
    chalk__default.default.red(
      `[ERROR] Invalid command: ${invalidCmd}.${os__default.default.EOL} See --help for a list of available commands.`
    )
  );
  process.exit(1);
}).helpOption("-h, --help", "Print command line options").addHelpCommand("help [command]", "Print options for a specific command").version(version).parse(process.argv);
//# sourceMappingURL=cli.js.map
