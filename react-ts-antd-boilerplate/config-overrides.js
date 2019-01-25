module.exports = function override(config, env) {
    // This will tell webpack to show the stack trace if any of our loaders gets deprecation warnings
    // Then we know to update them in the package.json file
    process.traceDeprecation = true;

  // Change public path based on config file (we need this when the app base path is not /)
  // Apparently the env passed into this method is NOT read from the .env file, instead
  // we need to get it from process.env (see https://www.npmjs.com/package/dotenv)
  let clientBasePath = process.env.REACT_APP_CLIENT_BASE_PATH;
  if (clientBasePath && clientBasePath !== '/' && !clientBasePath.endsWith('/')) {
    // if we are using a base path, we have to make sure it ends in / so webpack computes the paths correctly
    clientBasePath = `${clientBasePath}/`;
  }
  config.output.publicPath = clientBasePath;

  // Add random number to the js file to prevent browser from caching it.
  const appDetails = require('./package.json');
  const randomNumber = Date.now();
  config.output.filename = `${appDetails.name}-${appDetails.version}-${randomNumber}.js`

  // Make the babel loader come before the typescript loader to support emotion advanced features
  config.module.rules[1].oneOf[2].use.unshift({
    loader: require.resolve("babel-loader")
  });


  // Uncomment this code if you want to dump the contents of the webpack config
  // into the console when you run 'npm start'
  // console.log(JSON.stringify(config, null, 2));
  // while(true) {
  //   var a = 1;
  // }

  return config;
};
