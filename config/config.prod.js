/**
 * 生产环境配置
 *
 * 最终生效的配置为 prod + default（前者覆盖后者）
 */


module.exports = app => {
  const exports = {};
  exports.alinode = {
    appid: '87157',
    secret: '44cdfcbcd23feaae86ee767dc5a83a325112a4e0',
  };
  return exports;
};
