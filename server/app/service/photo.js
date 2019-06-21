'use strict'
const Service = require('egg').Service
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';



class photoService extends Service {
  constructor (ctx) {
    super(ctx)
  }
  async queryPhotoList () {
    const {ctx} = this
    let final
    try {
      MongoClient.connect(url, (err, db) => {
        if (err) throw err
        var _dbo = db.db('photos')
        var _collection = _dbo.collection('photoList')
        _collection.find().toArray((err, result) => {
          if (err) throw err
          console.log(result)
          final = result
          db.close()
          return { success: true, data: final }
        })
      })
    } catch (err) {
      console.log(err)
      return { success: false }
    }
  }
}

module.exports = photoService