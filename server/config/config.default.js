/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path')

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
      // ignoreJSON: true
    },
    // 白名单
    domainWhiteList: [ '127.0.0.1:8080' ]
  };

  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    // 该属性允许cookie跨域
    credentials: true,
    origin: 'http://127.0.0.1:8080'
  };

  config.logger = {
    level: 'DEBUG',
    outputJSON: true
  };

  // 配置MongoDB 的连接
  config.mongoose = {
    client: {
      url: 'mongodb://localhost:27017/photos',
      options: {}
    }
  }

  config.multipart = {
    mode: 'file',
  }

  // 配置 assets 模板引擎
  config.view = {
    mapping: {
      '.js': 'assets',
    },  
  }

 // static files and cache files
  config.static = {
    // 静态化访问前缀,如：`http://127.0.0.1:7001/static/images/logo.png`
    prefix: '/static', 
    dir: path.join(appInfo.baseDir, 'app/public/dist'), // `String` or `Array:[dir1, dir2, ...]` 静态化目录,可以设置多个静态化目录
    dynamic: true, // 如果当前访问的静态资源没有缓存，则缓存静态文件，和`preload`配合使用；
    preload: false,
    maxAge: 31536000, // in prod env, 0 in other envs
    buffer: true, // in prod env, false in other envs
  };
  

  return {
    ...config,
    ...userConfig,
  };
};
