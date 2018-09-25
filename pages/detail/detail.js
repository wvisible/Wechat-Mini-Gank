// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var timeArray = options.time.split("-")
    Detail.requestDetailData(that, "/day/" + timeArray[0] + "/" + timeArray[1] + "/" + timeArray[2])
  },
})

var Detail = require("../../utils/requestDetail.js")




