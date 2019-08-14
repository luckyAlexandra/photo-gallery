'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/api/login', controller.login.getLoginInfo)
  router.get('/api/getPhotoList', controller.photo.getPhotoList)
  router.post('/api/upload', controller.photo.upload)
};
