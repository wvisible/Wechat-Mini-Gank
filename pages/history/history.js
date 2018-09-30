// pages/homepage/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    imgsrc: "../../images/autorenew.png"
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
    historyArray.length = 0
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

  onItemClick: function(event){
    wx.navigateTo({
      url: '../detail/detail?time=' + event.currentTarget.dataset.publishTime
    })
  },

  clickRetry: function(event){
    requestData()
  }
})

var pageIndex = 1
var that
var historyArray = []

var Network = require("../../utils/network.js")
var Constant = require("../../utils/constant.js")

function requestData() {
  Network.requestLoading(Constant.BASE_URL.concat("/history/content/" + (pageIndex * 10) + "/1"), function (res) {
    for (let i = (pageIndex - 1) * 10; i < res.results.length; i++){
      var itemData = res.results[i]
      var reg = new RegExp("[a-zA-z]+://[^\"]*")
      var src = itemData.content.split("src=")[1].match(reg)[0]
      historyArray.push({ title: itemData.title, src: src, time: itemData.publishedAt.split("T")[0] })
    }
    that.setData({
      items: historyArray,
      hidden: true
    })
  }, function () {
    if(pageIndex !== 1){
      pageIndex--
    }
    wx.showToast({
      title: '加载数据失败',
     })
     that.setData({
      hidden: false
    })
  })
}