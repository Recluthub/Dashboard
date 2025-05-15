const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.js$/,
          include: /node_modules\/@ckeditor/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: ['@babel/plugin-transform-class-static-block']
            }
          }
        }
      ]
    }
  }
};