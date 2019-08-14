module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const PhotoSchema = new Schema({
    photoUrl: {type: String}
  })
  // 在数据库中会自动生成名为photos的collection（复数）
  return mongoose.model('photo', PhotoSchema)
}