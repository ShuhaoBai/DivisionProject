const { override, fixBabelImports, addLessLoader, addBabelPlugin, addWebpackAlias } = require('customize-cra');
const fs = require('fs') 
const path = require('path');

// This will tell webpack to show the stack trace if any of our loaders gets deprecation warnings
// Then we know to update them in the package.json file
process.traceDeprecation = true;

/**
 * Dumps the content of the webpack config when you run npm start so that you can troubleshoot problems
 */
const logConfig = () => (config) => {
  const data = JSON.stringify(process.env, null, 2) + "\n\n" + JSON.stringify(config, null, 2);
  fs.writeFile('webpack-config-log.json', data, (err) => {
    // In case of a error throw err. 
    if (err) throw err;
  })
  return config;
}

const fixPublicPath = () => (config) => {
    // Change public path based on config file (we need this when the app base path is not /)
    // Apparently the env passed into this method is NOT read from the .env file, instead
    // we need to get it from process.env (see https://www.npmjs.com/package/dotenv)
    let clientBasePath = process.env.REACT_APP_CLIENT_BASE_PATH;
    if (clientBasePath && clientBasePath !== '/' && !clientBasePath.endsWith('/')) {
        // if we are using a base path, we have to make sure it ends in / so webpack computes the paths correctly
        clientBasePath = `${clientBasePath}/`;
    }
    config.output.publicPath = clientBasePath;

  return config;
};

const fixOutputFilename = () => (config) => {
    // Add random number to the js file to prevent browser from caching it.
    const appDetails = require('./package.json');
    const randomNumber = Date.now();
    config.output.filename = `${appDetails.name}-${appDetails.version}-${randomNumber}.js`;

    return config;
};

let extensionModulePath = process.env.EXTENSION_MODULE_PATH;

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { // override antd less theme variables
      '@primary-color': process.env.ANT_PRIMARY_COLOR,
      '@text-color': process.env.ANT_TEXT_COLOR,
      '@text-color-secondary': process.env.ANT_TEXT_COLOR_SECONDARY,
      '@font-family': process.env.ANT_FONT_FAMILY, 
      '@font-size-base': process.env.ANT_FONT_SIZE_BASE
    }
  }),
  addBabelPlugin('emotion'),
  fixPublicPath(),
  fixOutputFilename(),
  addWebpackAlias({
    ['@extensions']: path.resolve(__dirname, extensionModulePath),
    ['@default']: path.resolve(__dirname, 'src/extensions/default/'),
  }),
  logConfig() //<--- uncomment this if you need to log the webpack config for debugging
);
