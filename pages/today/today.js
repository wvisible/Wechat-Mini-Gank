// pages/today/today.js
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
    Detail.requestDetailData(that, "/today")
  },
})

var Detail = require("../../utils/requestDetail.js")