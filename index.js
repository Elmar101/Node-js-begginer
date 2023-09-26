const moduleObj = require("./modules/moduleExport");
const nodePath = require("./modules/node-path");
const readFsDir = require("./modules/node-fs");
const os = require("./modules/node-operating-system");

// console.log({moduleObj});
// console.log({ nodePath })
// console.log({ readFsDir })

function globalThisObj() {
  console.log("globalThis:" , globalThis)
  globalThis.console.log("global object for node js when we use js as server other one window global obj when js run browsers")
};

// globalThisObj();