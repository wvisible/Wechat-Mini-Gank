function requestLoading(url, success, fail){
  wx.showLoading({
    title: '加载中...',
  })
  wx.request({
    url: url,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'get',
    success: function(res){
      wx.hideLoading()
      if(res.statusCode == 200){
        success(res.data)
      } else {
        fail()
      }
    },
    fail: function(){
      wx.hideNavigationBarLoading()
      fail()
    },
    complete: function(){
      wx.stopPullDownRefresh()
      wx.hideNavigationBarLoading()
    }
  })
}

function request(url, success, fail) {
  this.requestLoading(url, success, fail)
}

module.exports = {
  request: request,
  requestLoading: requestLoading
}