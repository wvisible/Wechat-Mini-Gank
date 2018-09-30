var Network = require("network.js")
var Constant = require("constant.js")

function requestDetailData(that, url){
  Network.requestLoading(Constant.BASE_URL.concat(url), function(res){ 
    var tags = Object.keys(res.results)
    var array = []
    var src
    for (let i = 0; i < tags.length; i++) {
      var singItems = []
      for(var item in res.results[tags[i]]){
        var data = res.results[tags[i]][item]
        if(i === tags.length - 1){
          src = data.url
        } else {
          singItems.push({desc: data.desc, src: data.url, who: "(" + data.who + ")", images: data.images})
        }
      }
      array.push({tag: tags[i], singleItems: singItems})
    }
    array.pop()
    that.setData({
      item: {
        imagesrc: src,
        data: array,
        hidden: true
      }   
    })
  }, function () {
    that.setData({
      item: {
        hidden: false
      }  
    })
    wx.showToast({
      title: '加载数据失败'
    })
  })
}

module.exports = {
  requestDetailData: requestDetailData
}