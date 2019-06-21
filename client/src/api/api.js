import axios from 'axios'
import querystring from 'querystring'

const urls = {
  login: 'http://127.0.0.1:7001/api/login',
  getPhotos: 'http://127.0.0.1:7001/api/getPhotoList'
}

const get = (url, params) => {
  return axios.get(url, {
    params: params
  })
}

const post = (url, params) => {
  return axios.post(
    url,
    querystring.stringify(params),
    {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }
  )
}

const login = (params) => {
  return post(urls.login, params)
}

const getPhotos = (params) => {
  console.log(params)
  return get('http://127.0.0.1:7001/api/getPhotoList', params)
}

export const api = {
  login,
  getPhotos
}
