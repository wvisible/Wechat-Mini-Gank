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
    that = this
    requestData(options.time.split("-"))
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
})

var that
var Network = require("../../utils/network.js")
var Constant = require("../../utils/constant.js")

function requestData(timeArray) {
  Network.requestLoading(Constant.BASE_URL.concat("/history/content/day/" + timeArray[0] + "/" + timeArray[1] + "/" + timeArray[2]), function (res) {
    var data = res.results[0]
    var re = new RegExp("[a-zA-z]+://[^\"]*")
    var imageSrc = data.content.split("src=")[1].match(re)[0]
    var reg = /<h3[^>]*>(.*?)<\/h3>/g;
    var title = []
    while (reg.exec(data.content) != null) {
      title.push(RegExp.$1);
    }

    var reg1 = /(?:\().+(?:\))/g
    var reg2 = /<a[^>]*href=['"]([^"]*)['"][^>]*>(.*?)<\/a>/g
    var singleItem = []
    var temp = data.content.split('<ul>')
    temp.forEach(element => {
      var itemContent = []
      var whos = element.match(reg1)
      var i = 0
      while (reg2.exec(element) != null) {
        if (whos != null && i < whos.length) {
          itemContent.push({ src: RegExp.$1, title: RegExp.$2, who: whos[i] })
        } else {
          itemContent.push({ src: RegExp.$1, title: RegExp.$2 })
        }
        i++
      }
      if (itemContent.length !== 0) {
        singleItem.push(itemContent)
      }
    })


    var array = []
    for (var i = 0; i < title.length; i++) {
      array.push({ tag: title[i], singleItems: singleItem[i] })
    }
    console.log(singleItem[singleItem.length - 1][0].src)
    that.setData({
      imagesrc: imageSrc,
      data: array
    })
  }, function () {
    wx.showToast({
      title: '加载数据失败'
    })
  })
}


