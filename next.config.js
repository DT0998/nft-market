const withLess = require("next-with-less");
const path = require("path");

// config less antd
const themeVariables = path.resolve("./styles/variables.less");
// config for lessToJS
module.exports = withLess({
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true,
      additionalData: (content) => `${content}\n\n@import '${themeVariables}';`,
    },
  },
});
