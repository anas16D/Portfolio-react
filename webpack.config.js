const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        // test: /\.js$/,
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // CSS files
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },

      // Images: PNG, JPG, JPEG, GIF, SVG
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource", // saves file to dist and gives URL
      },
      // Videos: MP4, WebM
      {
        test: /\.(mp4|webm)$/i,
        type: "asset/resource",
      },

      // Fonts (optional)
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },

    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // or 'public'
    },
    onListening(server) {
    const port = server.server.address().port;
    console.log("Actual dev server port:", port);
  },
    compress: true,
    port: "auto",
    open: true,             // Opens browser automatically
    hot: true,              // Enable Hot Module Replacement (HMR)
    historyApiFallback: true, // Redirect all routes to index.html
  },
  output: {
  publicPath: '/',
  // other options
}

  
}