const path = require('path')
const crypto = require('crypto')

const KEY = 'f2f57e95f1284f5099b8950878ccb28d'
const USER_ID = 'HE1811232056471255'

module.exports = {
  testData: 1
}

const $ = {
  generateSignature: (params) => {
    params.username = USER_ID
    let data =
      Object.keys(params)
        .filter((key) => {
          return params[key] !== '' && key !== 'sign' && key !== 'key'
        })
        .sort()
        .map((key) => {
          return `${key}=${params[key]}`
        })
        .join('&') + KEY
    return crypto.createHash('md5').update(data).digest('base64')
  },
}

module.exports = $