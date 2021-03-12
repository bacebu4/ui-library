const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./example/index.js"),
  output: {
    path: path.resolve(__dirname, "./example/dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-typescript"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js", ".ts", ".tsx"],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./example/dist"),
  },
};
