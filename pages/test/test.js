Page({
  data: {
    message: '开锁中。。。',
    hidden: true
  },
  onLoad() {
    var that = this;
    my.request({
      url: 'https://touchez.cn:8090/pyapi/openlock',
      dataType: 'json',
      success: function(res) {
        // my.alert({content: JSON.stringify(res)});
        my.alert({
          content: '开锁成功',
          success: () => {
            that.setData({
              'hidden': false,
              'message': '开锁成功'
            });
          }
          });
      },
      fail: function(res) {
        my.alert({content: JSON.stringify(res)});
      },
      complete: function(res) {
        // my.alert({title: 'complete'});
      }
    });
  },
});
