'use strict'
const Service = require('egg').Service
// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/photos';

class photoService extends Service {
  constructor (ctx) {
    super(ctx)
  }
  async queryPhotoList () {
    const {ctx} = this
    // console.log('model', ctx.model.Photo)
    // ctx.model.Photo.create({
    //   'photoUrl': 'www.wuage.com'
    // }, () => {
    //   console.log('新增数据：')
    // })
    let res =  await ctx.model.Photo.find()
    console.log('res', res)
    return res
  }
  async upload () {
    
  }
}

module.exports = photoService