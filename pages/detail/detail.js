// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      hidden: true,
      imgsrc: "../../images/autorenew.png"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
    timeArray = options.time.split("-")
    requestData()
  },

  previewImage: function (e){  		
    var current= e.target.dataset.src
    var urls = e.currentTarget.dataset.urls
    wx.previewImage({
      current: current, 	  	
      urls: urls 		
    })
  },

  clickRetry: function(event){
    requestData()
  }
})

function requestData(){
  Detail.requestDetailData(that, "/day/" + timeArray[0] + "/" + timeArray[1] + "/" + timeArray[2])
}

var Detail = require("../../utils/requestDetail.js")
var timeArray
var that






