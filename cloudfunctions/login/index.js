const cloud = require('wx-server-sdk')

cloud.init({
  env:'xiaochengxu-j3v6j'
})

云函数入口函数备用

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return {
    openid: wxContext.OPENID
  }
}