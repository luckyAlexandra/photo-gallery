'use strict';

const Controller = require('egg').Controller;

class PhotoController extends Controller {
  async getPhotoList() {
    const { ctx } = this
    const query = ctx.query
    try {
      if (query.userId == 1) {
        // this.ctx.status = 200
        const queryResult = this.service.photo.queryPhotoList()
        this.ctx.set('Content-Type', 'application/json')
        // this.ctx.body = {
        //   success: true,
        //   data: {
        //     photoList: [
        //       'a',
        //       'b'
        //     ]
        //   }
        // }
        console.log('for commit')
        this.ctx.body = queryResult
      } else {
        this.ctx.status = 200
        this.ctx.set('Content-Type', 'application/json')
        this.ctx.body = {
          success: false,
          message: '查询错误'
        }
      }
    } catch (error) {
      ctx.logger.warn(error.message || error.errors)
    }
  }
}

module.exports = PhotoController;