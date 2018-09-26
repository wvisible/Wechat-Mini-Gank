// pages/girl/girl.js
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
    that = this
    requestData()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    girlArray.length = 0
    pageIndex = 1
    requestData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    pageIndex++
    requestData()
  },

  previewImage: function (e){  		
    var current= e.target.dataset.src	
    wx.previewImage({
      current: current, 	  	
      urls: girlArray 		
    })
  }  
})


var that
var Network = require("../../utils/network.js")
var Constant = require("../../utils/constant.js")
var pageIndex = 1
var girlArray = []

function requestData(){
  Network.requestLoading(Constant.BASE_URL.concat("/data/福利/" + (pageIndex * 20) + "/1"), function(res){ 
    for (let i = (pageIndex - 1) * 20; i < res.results.length; i++) {
      girlArray.push(res.results[i].url)
    }
    that.setData({
      images: girlArray
    })
  }, function () {
    wx.showToast({
      title: '加载数据失败'
    })
  })
}