const path = require("path");

const pathObjectDir = path.parse(__dirname);
const pathObjectFile = path.parse(__filename);

// module.exports.nodePath = path;

module.exports = {
  pathObjectDir,
  pathObjectFile
};

