#!/usr/bin/env node

const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");
const chalk = require("chalk");
const dim = chalk.dim;
const bold = chalk.bold;
const github = chalk.hex(`#6cc644`).bold.inverse;
const linkedin = chalk.hex(`#0077b5`).bold.inverse;
const purple = chalk.hex(`#EC4899`).bold.inverse;

welcome({
  title: `Valgeir Björnsson`,
  version: pkgJSON.version,
  bgColor: `#EC4899`,
  color: `#000000`,
  bold: true,
  clear: true,
});

console.log(`${bold(`Hello, I’m Valgeir.`)}

I’m a front-end developer at Syndis.
I like designing UIs and building things.

Feel free to reach out!

${github(` GitHub `)}    ${dim(`https://github.com/valgeirb`)}

${purple(` Portfolio `)} ${dim(`https://valgeir.dev/`)}

${linkedin(` LinkedIn `)}  ${dim(`https://www.linkedin.com/in/valgeirb/`)}
`);
