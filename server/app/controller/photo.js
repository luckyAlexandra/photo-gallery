'use strict';

const Controller = require('egg').Controller;
const qiniu = require('qiniu');

class PhotoController extends Controller {
  async getPhotoList() {
    const { ctx, service } = this
    const query = ctx.query
    try {
      if (query.userId == 1) {
        // this.ctx.status = 200
        const queryResult = await service.photo.queryPhotoList()
        console.log('****', queryResult)
        ctx.set('Content-Type', 'application/json')
        ctx.body = queryResult
      } else {
        ctx.status = 200
        ctx.set('Content-Type', 'application/json')
        ctx.body = {
          success: false,
          message: '查询错误'
        }
      }
    } catch (error) {
      ctx.logger.warn(error.message || error.errors)
    }
  }

  async upload () {
    const {ctx, service} = this
    let accessKey = 'm1iZPhaCH3cFdCbhLCfApxSdPxD4fFC_6mveig2Z'
    let secretKey = 'z1rODiaGPk-vDmGwj-t-SP6_qmMBHUfjPeFgrW03'
    // 创建各种上传凭证之前，我们需要定义好其中鉴权对象mac：
    var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    // 最简单的上传凭证只需要AccessKey，SecretKey和Bucket就可以。

    // 要上传的空间
    var bucket = 'photo-gallery';
    // 七牛默认的返回给上传端的回复格式为hash和key，可以通过设置returnBody参数来自定义返回的JSON格式的内容
    var options = {
      scope: bucket,
      returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}'
    };
    var putPolicy = new qiniu.rs.PutPolicy(options);
    var uploadToken=putPolicy.uploadToken(mac);
    
    var config = new qiniu.conf.Config();
    config.zone = qiniu.zone.Zone0_z2;
    var formUploader = new qiniu.form_up.FormUploader(config)
    var putExtra = new qiniu.form_up.PutExtra();
    let filePath = ctx.request.files[0].filepath
    let fileName = ctx.request.files[0].filename
    var key = fileName

    const uploadFileToQiniu = (uploadToken, key, filePath, putExtra) => {
      return new Promise((resolve, reject) => {
        formUploader.putFile(uploadToken, key, filePath, putExtra, (respErr, respBody, respInfo) => {
          if (respErr ) {
            reject({
              success: false,
              message: respErr
            })
          }
          if (respInfo.statusCode === 200) {
            let url = '//zp.hellozt.com/' + respBody.key
            // 存数据库
            // console.log(ctx.model.Photo)  // Photo大写
            ctx.model.Photo.create({
              photoUrl: url
            })
            // 返回结果
            resolve({
              success: true,
              data: {
                url: url,
                name: respBody.name
              }
            })
          } else {
            reject({
              success: false,
              code: respInfo.statusCode,
              body: respBody
            })
          }
        })
      })
    }

    let res = await uploadFileToQiniu(uploadToken, key, filePath)
    ctx.body = res
  }
}

module.exports = PhotoController;