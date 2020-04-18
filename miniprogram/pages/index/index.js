const db = wx.cloud.database()
const indexCol = db.collection('index')
Page({
  setTabIndex(e){
    let activeIndex =parseInt(e.currentTarget.dataset.i)
    this.setData({activeIndex})
  },
  toInfo(e){
    const id = e.currentTarget.id
    wx.navigateTo({
      url: '../../pages/models/models?id=' + id,
    })
    console.log(e)
  },
  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图
    imgUrls:[
      // 首页轮播图
      'https://mmbiz.qpic.cn/sz_mmbiz_jpg/rKermyft4mkYibWoc8ibQEf3PfxpgFb1Qn38YjPkJRI2rHMr6yzwqrjhKKTJxOLcDFibI5Uwu5icNy4uiaibdoQyZ1uw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/sz_mmbiz_jpg/rKermyft4mkYibWoc8ibQEf3PfxpgFb1QneicQhdoHTVibh6aBo8v4JH0Nib5ePI7mAPIxhWGx19jGRMibyg3I1YUgww/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    // tab栏
    activeIndex:1, 
    // 模特列表
    index:[]
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    indexCol.get({
      success:(res)=>{
        this.setData({
          index:res.data
        })
        console.log(res.data)
      }
    })
    // 数据库获取首页

    // db.collection('index').field({
    //   name:true,
    //   indexsrc:true
    // }).get().then(res=>{
    //   // console.log(res.data)
    //   this.setData({
    //     index:res.data
    //   })
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    db.collection('users').field({
      userPhoto : true,
      nickName : true,
      links : true
    }).get().then((res)=>{
      // console.log(res.data)
      this.setData({
        listData:res.data
      });
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})