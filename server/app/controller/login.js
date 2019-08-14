'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async getLoginInfo() {
    const { ctx } = this
    // const query = ctx.query
    const query = ctx.request.body
    try {
      if (query.name === 'zp' && query.password === '123') {
        let userId = ctx.cookies.get('userId', {httpOnly: false, secure: false})
        userId = userId ? userId : 'zt';
        // 通过 ctx.cookies，我们可以在 Controller 中便捷、安全的设置和读取 Cookie。

        // httpOnly: 设置键值对是否可以被 js 访问，默认为 true，不允许被 js 访问
        // signed：设置是否对 Cookie 进行签名，如果设置为 true，则设置键值对的时候会同时对这个键值对的值进行签名，后面取的时候做校验，可以防止前端对这个值进行篡改。默认为 true。
        ctx.cookies.set('userId', userId, {httpOnly: false, secure: false})

        this.ctx.status = 200
        this.ctx.set('Content-Type', 'application/json')
        this.ctx.body = {
          success: true,
          data: {
            userId: 1
          }
        }
        console.log('resp', this.ctx.response)
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