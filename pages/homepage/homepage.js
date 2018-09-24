// pages/homepage/homepage.js
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

  onItemClick: function(event){
    wx.navigateTo({
      url: '../detail/detail?time=' + event.currentTarget.dataset.publishTime
    })
  }
})

var mTitles = []
var mSrcs = []
var mTimes = []
var pageIndex = 1
var that

var Network = require("../../utils/network.js")
var Constant = require("../../utils/constant.js")


function requestData() {
  Network.requestLoading(Constant.BASE_URL.concat("/history/content/" + (pageIndex * 10) + "/1"), function (res) {
    for (let i = 0; i < res.results.length; i++){
      bindData(res.results[i])
    }
    var itemList = []
    for (let i = (pageIndex - 1) * 10; i < mTitles.length; i++){
      itemList.push({ title: mTitles[i], src: mSrcs[i], time: mTimes[i] })
    }
    that.setData({
      items: itemList
    })
  }, function () {
    wx.showToast({
      title: '加载数据失败',
     })
  })
}

function bindData(itemData){
  var re = new RegExp("[a-zA-z]+://[^\"]*")
  var title = itemData.content.split("src=")[1].match(re)[0]
  mTitles.push(itemData.title)
  mTimes.push(itemData.publishedAt.split("T")[0])
  mSrcs.push(title)
}