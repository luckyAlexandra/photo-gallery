/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1560913339378_5336';

  // add your middleware config here
  config.middleware = ['log'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.jsonp = {
    csrf: false
  }

  // 关闭csrf
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    // 白名单
    domainWhiteList: [ 'http://localhost:8080' ]
  };

  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  config.logger = {
    level: 'DEBUG',
  };
  

  return {
    ...config,
    ...userConfig,
  };
};
