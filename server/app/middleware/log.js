'use strict';

module.exports = () => {
  return async (ctx, next) => {
    ctx.logger.info(`访问开始`)
    next()
    ctx.logger.info(`访问结束`)
  };
};
