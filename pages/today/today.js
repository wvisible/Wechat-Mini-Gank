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
    that = this
    requestData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
})

var that
var Network = require("../../utils/network.js")
var Constant = require("../../utils/constant.js")

function requestData(){
  Network.requestLoading(Constant.BASE_URL.concat("/today"), function(res){ 
    var tags = Object.keys(res.results)
    var array = []
    for (let i = 0; i < tags.length; i++) {
      var singItems = []
      for(var item in res.results[tags[i]]){
        var data = res.results[tags[i]][item]
        if(i === tags.length - 1){
          singItems.push({desc: data.desc, src: data.src, who: "(" + data.who + ")", images: [data.url]})
        } else {
          singItems.push({desc: data.desc, src: data.url, who: "(" + data.who + ")", images: data.images})
        }
      }
      array.push({tag: tags[i], singleItems: singItems})
    }
    // array.pop()
    that.setData({
      data: array
    })
  }, function () {
    wx.showToast({
      title: '加载数据失败'
    })
  })
}