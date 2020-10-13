'use strict';
module.exports = {
  egg: true,
  framework: 'vue', // 使用 easywebpack-vue 构建解决方案
  entry: {
    app: 'app/web/page/app/index.js'
  },
  plugins: [{
    copy: [{
      from: 'app/web/asset/css/bootstrap.min.css',
      to: 'asset/css/bootstrap.min.css'
    }]
  }]
};