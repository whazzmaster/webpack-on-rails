module.exports = {
  enforce: "pre",
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: "eslint-loader",
  options: {
    cache: false,
    failOnWarning: true,
  },
};
