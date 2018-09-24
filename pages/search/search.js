// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ["all", "Android", "iOS", "休息视频", "前端", "拓展资源",  "瞎推荐", "App"],
    activeItemIndex: -1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
  },

  onItemClick: function(event){
    category = event.currentTarget.dataset.keywords
    this.setData({
      activeItemIndex: event.currentTarget.dataset.index
    })
    requestData()
  },

  search: function(e){
    keywords = e.detail.value
    requestData()
  },

  bindKeyInput: function(e){
    keywords = e.detail.value
  }
})

var that 
var Network = require("../../utils/network.js")
var Constant = require("../../utils/constant.js")
var keywords = ""
var category = ""

function requestData(){
  console.log(keywords + ":::" + category)
  var url = ""
  if(category === ""){
    wx.showToast({
      title: '请至少选择一种类别'
    })
  } else if(keywords === ""){
    url = Constant.BASE_URL.concat("/data/" + category + "/20/1")
  } else {
    url = Constant.BASE_URL.concat("/search/query/" + keywords + "/category/" + category + "/count/20/page/1")
  }
  console.log(url)
  Network.requestLoading(url, function(res){ 
    var array = []
    var results = res.results
    for (let index = 0; index < results.length; index++) {
      const element = results[index];
      array.push({src: element.src, desc: element.desc, who: "(" + element.who + ")"})
    }
    that.setData({
      data: array
    })
  }, function () {
    wx.showToast({
      title: '加载数据失败'
    })
  })
}
      
