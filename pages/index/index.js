Page({
  data: {
    message: '点击开锁',
    flag: false
  },
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
        this.setData({
          'flag': false,
          'message': '点击开锁'
        });
      }
    });
    this.setData({
      'flag': true,
      'message': '正在开锁'
    });
    console.log('flag is ' + this.data.flag + ' message is : ' + this.data.message);
  }
});
