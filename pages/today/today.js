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

  previewImage: function (e){  		
    var current= e.target.dataset.src
    var urls = e.currentTarget.dataset.urls
    wx.previewImage({
      current: current, 	  	
      urls: urls 		
    })
  }
})

var Detail = require("../../utils/requestDetail.js")