const app = getApp()
const db = wx.cloud.database()
Page({
  data:{
    userinfo:{},
    openid:"",
    userPhoto:"/images/user.png",
    nickName : "小喵喵",
    logged : false,
    disabled : true
  },
  getUserInfo:function(e){
    console.log(e)
    
  },
  onGotUserInfo(ev){
    let userInfo = ev.detail.userInfo;
    if (!this.data.logged && userInfo);{
      db.collection('users').add({
        data:{
        userPhoto : userInfo.avatarUrl,
        nickName : userInfo.nickName,
        signature : '',
        phonenumber : '',
        links : 0,
        time : new Date()}
      }).then((res) => {
        db.collection('users').doc(res._id).get().then((res)=>{
          // console.log(res.data);
          app.userInfo = Object.assign(app.userInfo,res.data);
          this.setData({
            nickName : app.userInfo.nickName,
            userPhoto : app.userInfo.userPhoto,
            logged : true
          })
        }); 
      });
    };
  },

  onReady:function(){
    wx.cloud.callFunction({
      name : 'login',
      data : {}
    }).then((res)=>{
      // console.log(res);
      db.collection('users').where({
        _openid : res.result.openid
      }).get().then((res)=>{
        if (res.data.length) {
          app.userInfo =Object.assign(app.userInfo,res.data[0]);
          this.setData({
            userPhoto : app.userInfo.userPhoto,
            nickName : app.userInfo.nickName,
            logged : true
        });
        } else {
          this.setData({
            disabled : false
          });
          
        }
        app.userInfo =Object.assign(app.userInfo,res.data[0]);
        // console.log(app.userInfo)
        this.setData({
          userPhoto : app.userInfo.userPhoto,
          nickName : app.userInfo.nickName,
          logged : true
        });
      });
    });
  }
})


//   onGotUserInfo:function(e){
//     const that = this
//     wx.cloud.callFunction({
//       name:"login",
//       success:res =>{
//         console.log('云函数调用成功')
//         that.setData({
//           openid:res.result.openid,
//           userinfo: e.detail.userInfo
//         })
//         that.data.userinfo.openid = that.data.openid
//         console.log("userinfo",that.data.userinfo)
//         wx.setStorageSync('userinfo', that.data.userinfo)
//       },
//       fail:res =>{
//         console.log("云函数调用失败")
//       }
//     })
//  },
//  onLoad:function(options){
//    const ui = wx.getStorageSync('userinfo')
//    this.setData({
//      userinfo:ui,
//      openid:ui.openid
