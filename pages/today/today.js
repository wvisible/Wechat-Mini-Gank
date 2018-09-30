// pages/today/today.js
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

var Detail = require("../../utils/requestDetail.js")
var that

function requestData(){
  Detail.requestDetailData(that, "/today")
}