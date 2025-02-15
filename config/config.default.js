const path = require('path');
const fs = require('fs');
module.exports = app => {
    const exports = {};

    exports.siteFile = {
        '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/framework/favicon.ico'))
    };

    exports.view = {
        cache: false
    };

    exports.vuessr = {
        layout: path.join(app.baseDir, 'app/web/framework/layout.html'), // 指定渲染模板位置。
        renderOptions: {
            // 告诉 vue-server-renderer 去 app/view 查找异步 chunk 文件
            basedir: path.join(app.baseDir, 'app/view')
        }
    };

    exports.logger = {
        consoleLevel: 'DEBUG',
        dir: path.join(app.baseDir, 'logs')
    };

    exports.static = {
        prefix: '/public/',
        dir: path.join(app.baseDir, 'public')
    };

    exports.keys = '123456';

    exports.middleware = [
        'locals',
        'access'
    ];

    return exports;
};
