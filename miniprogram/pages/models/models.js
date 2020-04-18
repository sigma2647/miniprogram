const db = wx.cloud.database()
const indexCol =db.collection('index')
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    name:'',
    list:'',
    // infoswiper:[]
  },
  infoToSnap(e){
    const id = e.currentTarget.id
    wx.navigateTo({
      url: '../../pages/modelpic/modelpic?id=' + id,
    })
    console.log(id)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id,
      name:options.name
    })
    // console.log(options.id)
  
    indexCol.doc(options.id).get({
      success:(res)=>{
        this.setData({
          model:res.data,
          // infoswiper:res.data.infoswiper
          
        })
        console.log(res.data)
      }
    })
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
    
  }
})