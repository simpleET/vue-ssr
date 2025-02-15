const path = require('path');
module.exports = app => {
    const exports = {};

    exports.static = {
        maxAge: 0 // maxAge 缓存，默认 1 年
    };

    exports.development = {
        watchDirs: ['build'], // 指定监视的目录（包括子目录），当目录下的文件变化的时候自动重载应用，路径从项目根目录开始写
        ignoreDirs: ['app/web', 'public', 'config/manifest.json'] // 指定过滤的目录（包括子目录）
    };

    exports.logview = {
        dir: path.join(app.baseDir, 'logs')
    };
    // 代理使用nginx.exe来做,否则 post 请求会报错 403  invalid csrf token
   /* exports.httpProxy = {
        '/api': {
            // target: 'https://rcdata.com.cn',
            target: 'http://192.168.20.116:1998',
            pathRewrite: {
                '^/api': ''
            }
        }
    };*/

    return exports;
};
