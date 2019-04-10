const path = require("path");

module.exports = {
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        loader:"babel-loader"
      }
    ]
  },
  mode: "development"
};
