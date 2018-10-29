// 云函数入口文件
const AppId = "1257917926";
const SecretId = "AKIDd6LOCldUYO0OZXsvISO5YnnX1HH28tzs";
const SecretKey = "nMjsmRq1xhCWbR2NVUFoBMJ1Tlob9SVI";

const cloud = require('wx-server-sdk');
const fs = require('fs'); 
const path = require('path');
const { ImageClient } = require('image-node-sdk');

cloud.init()

let imageClient = new ImageClient({AppId, SecretId,SecretKey});

// 云函数入口函数
exports.main = async (event, context) => {
  return await imageClient.imgPornDetect({
    formData: {
      image: fs.createReadStream(path.join(__dirname,'./test.jpg'))
    },
    headers: {
      'content-type': 'multipart/form-data'
    }
  })
}