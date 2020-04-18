// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      // 首页轮播图
      'https://mmbiz.qpic.cn/sz_mmbiz_jpg/rKermyft4mkYibWoc8ibQEf3PfxpgFb1Qn38YjPkJRI2rHMr6yzwqrjhKKTJxOLcDFibI5Uwu5icNy4uiaibdoQyZ1uw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/sz_mmbiz_jpg/rKermyft4mkYibWoc8ibQEf3PfxpgFb1QneicQhdoHTVibh6aBo8v4JH0Nib5ePI7mAPIxhWGx19jGRMibyg3I1YUgww/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    currentIndex: 0,
    "firstList": ["LXT", "LXT", "LXT", "LXT", "LXT", "LXT"],
    "secondList": ["LXT", "LXT", "LXT", "LXT", "LXT", "LXT"],
  },
  //swiper切换时会调用
  pagechange: function (e) {
    if ("touch" === e.detail.source) {
      let currentPageIndex = this.data.currentIndex
      currentPageIndex = (currentPageIndex + 1) % 2
      this.setData({
        currentIndex: currentPageIndex
      })
    }
  },
  //用户点击tab时调用
  titleClick: function (e) {
    let currentPageIndex =
      this.setData({
        //拿到当前索引并动态改变
        currentIndex: e.currentTarget.dataset.idx
      })
  },
  //响应点击导航栏
  navbarTap:function (e) {
  var that = this;
  that.setData({
    currentTab: e.currentTarget.dataset.idx,
    TypeItem : that.data.navbar[that.data.currentTab]
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  },
  // 
  
})