const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const config = {
    entry: "./src/scripts/index.js",

    output: {
      filename: "bundle.js",
    },

    module: {
      rules: [
        {
          test: /\.js|jsx$/i,
          use: ["babel-loader"],
        },
        {
          test: /\.s?css$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            {
              loader: "css-loader",
              options: {
                url: false,
              },
            },
            "sass-loader",
          ],
        },

        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          loader: "file-loader",
          options: {
            name: "images/[name].[ext]",
          },
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/template.html",
      }),
    ],
    devServer: {
      hot: true,
      port: 5000,
    },
  };

  if (isProduction) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "[name].css",
      })
    );
  }

  return config;
};
