const path = require('path');
const webpackCommon = require('./../.webpack/webpack.base.js');
const SRC_DIR = path.join(__dirname, './');
const DIST_DIR = path.join(__dirname, './dist');

const ENTRY = {
  app: `${SRC_DIR}/index.ts`,
};

module.exports = (env, argv) => {
  return webpackCommon(env, argv, { SRC_DIR, DIST_DIR, ENTRY });
};
