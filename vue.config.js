const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
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
});