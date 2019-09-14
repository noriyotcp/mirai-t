const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (_, argv) => {
  const isProd = argv.mode === "production";

  return {
    entry: "./src/index.ts",
    target: "node",

    mode: isProd ? "production" : "development",

    devtool: isProd ? "source-map" : "inline-source-map",

    resolve: {
      extensions: [".ts", ".js"]
    },

    module: {
      rules: [{ test: /\.ts$/, loader: "ts-loader" }]
    },

    plugins: [
      new CleanWebpackPlugin()
    ]
  };
};
