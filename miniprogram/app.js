//app.js
App({
  onLaunch: function () {
    // 云开发环境初始化
    wx.cloud.init({
      env:"xiaochengxu-j3v6j",
      traceUser:true
    })
    this.globalData = {}
    this.userInfo = {}
  },
  user:{}

})
