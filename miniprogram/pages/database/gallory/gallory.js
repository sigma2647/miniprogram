var util = require("../../../utils/util.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  chooseImage:function(){
    // 选择图片函数
    wx.chooseImage({
      complete: (res) => {
        console.log(res)
        // 上传文件修改文件名，时间戳（年月日时分秒）+编号+文件后缀
        var dataStr=util.formatTime(new Date());
        console.log(dataStr);

        // 批量上传文件
        var tempFilePaths=res.tempFilePaths;
        for(var i=0;i<tempFilePaths.length;i++){
          var tempFile=res.tempFilePaths[i];
          var type=tempFile.substring(tempFile.lastIndexOf('.'));
          console.log(type);
          var fileName=dataStr+i+type;
          console.log(fileName); 


          // 往数据库上传图片
          wx.cloud.uploadFile({
          cloudPath: fileName, // 上传至云端的路径
          filePath: res.tempFilePaths[i], // 小程序临时文件路径
          success: res => {
            // 返回文件 ID
            console.log(res.fileID)
            wx.showToast({
              title: '上传成功！',
            })
          },
          fail: console.error
        })
        }
        
      },
    })
  },


  onLoad: function (options) {
    
  },
})