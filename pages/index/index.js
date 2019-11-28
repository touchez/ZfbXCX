Page({
  request() {
    var data = this.data;
    my.request({
      url: 'https://touchez.cn:8090/pyapi/openlock',
      dataType: 'json',
      success: function(res) {
        my.alert({content: "开锁成功"});
      },
      fail: function(res) {
        my.alert({content: JSON.stringify(res)});
      },
      complete: function(res) {
        // my.alert({title: 'complete'});
      }
    });
  }
});
