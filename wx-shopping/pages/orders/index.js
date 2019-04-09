// page/component/orders/orders.js
Page({
  data:{
    address:{},
    hasAddress: false,
    total:0,
    orders:[
      { id: 1, title: 'cec卫衣2019新款女韩版宽松春秋套头薄款潮ins黄色连帽上衣超火', image: 'http://img.alicdn.com/imgextra/i2/1599675055/TB2yeShDFmWBuNjSspdXXbugXXa_!!1599675055.jpg_430x430q90.jpg', num: 4, price: 69, selected: true },
      { id: 2, title: 'cec卫衣2019新款女韩版宽松春秋套头薄款潮ins黄色连帽上衣超火', image: 'http://img.alicdn.com/imgextra/i4/1599675055/TB2DYS0DKGSBuNjSspbXXciipXa_!!1599675055.jpg_430x430q90.jpg', num: 1, price: 69, selected: true }
      ]
  },

  onReady() {
    this.getTotalPrice();
  },

  getCarNum (e) {
    let totalNum = this.data.totalNum;
    wx.setStorage({
      key: 'carNum',
      data: totalNum
    })
  },

  PutCarNum (e) {
    wx.getStorage({
      key: 'carNum',
      success: (res) => {
        this.setData({
          hasCarNum: res.data
        })
      }
    })
  },
  
  onShow:function(){
    const self = this;
    wx.getStorage({
      key:'address',
      success(res) {
        self.setData({
          address: res.data,
          hasAddress: true
        })
      }
    })
  },

  /**
   * 计算总价
   */
  getTotalPrice() {
    let orders = this.data.orders;
    let total = 0;
    for(let i = 0; i < orders.length; i++) {
      total += orders[i].num * orders[i].price;
    }
    this.setData({
      total: total
    })
  },

  toPay() {
    wx.showModal({
      title: '提示',
      content: '本系统只做演示，支付系统已屏蔽',
      text:'center',
      complete() {
        wx.switchTab({
          url: '/pages/my/index'
        })
      }
    })
  }
})