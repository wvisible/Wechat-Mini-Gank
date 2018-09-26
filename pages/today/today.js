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
    var current= e.currentTarget.dataset.src
    wx.previewImage({
      current: current, 	  	
      urls: todayUrls 		
    })
  },

  handleImages: function (e){
    todayUrls = e.currentTarget.dataset.urls
  }
})

var Detail = require("../../utils/requestDetail.js")
var todayUrls = []