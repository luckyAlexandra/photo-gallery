'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async getLoginInfo() {
    const { ctx } = this
    // const query = ctx.query
    const query = ctx.request.body
    try {
      if (query.name === 'zp' && query.password === '123') {
        this.ctx.status = 200
        this.ctx.set('Content-Type', 'application/json')
        this.ctx.body = {
          success: true,
          data: {
            userId: 1
          }
        }
      } else {
        this.ctx.status = 200
        this.ctx.set('Content-Type', 'application/json')
        this.ctx.body = {
          success: false,
          message: '用户名或者密码不正确'
        }
      }
    } catch (error) {
      ctx.logger.warn(error.message || error.errors)
    }
  }
}

module.exports = LoginController;