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
})


var that
var Network = require("../../utils/network.js")
var Constant = require("../../utils/constant.js")
var pageIndex = 1

function requestData(){
  console.log(pageIndex)
  Network.requestLoading(Constant.BASE_URL.concat("/data/福利/" + (pageIndex * 20) + "/1"), function(res){ 
    var array = []
    for (let i = (pageIndex - 1) * 20; i < res.results.length; i++) {
      array.push(res.results[i].url)
    }
    that.setData({
      images: array
    })
  }, function () {
    wx.showToast({
      title: '加载数据失败'
    })
  })
}