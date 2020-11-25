'use strict';
module.exports = {
    egg: true,
    framework: 'vue', // 使用 easywebpack-vue 构建解决方案
    entry: {
        app: 'app/web/index.js'
    },
    plugins: [
        {imagemini: false},  // 禁用图片压缩插件 imagemin-webpack-plugin 安装
        {
            // copy-webpack-plugin
            /* copy: [{
               from: 'app/web/asset/css/bootstrap.min.css',
               to: 'asset/css/bootstrap.min.css'
             }]*/
        }],
    /*scss: {
      options: { includePaths: ["app/web/style"] }
    },
    module:{
      rules:[
        {
          test: /\.scss$/,
          use: [
            'css-loader',
            'postcss-loader',// 添加css前缀
            'sass-loader',
          ]
        },
      ]
    },*/
};