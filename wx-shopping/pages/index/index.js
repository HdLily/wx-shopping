//index.js

//获取应用实
const app = getApp()

Page({
  data: {
    index_slides: [],
    nav_data: [],
    index_activity: [],
    index_block: [],
    isTap: false,
    isLoading: false
  },
  onLoad() {
    const index_slides = app.globalData.index_slides,
      nav_data = app.globalData.nav_data,
      index_activity = app.globalData.index_activity,
      index_block = app.globalData.index_block,
      sectionList = index_block.map((section) => {
        return section.section;
      })
    console.log(sectionList);
    this.setData({
      index_slides,
      nav_data,
      index_activity,
      index_block,
    });

  },
  onShow: function () {
    wx.getStorage({
      key: 'carNum',
      success: (res) => {
        app.globalData.carNum = res.data;
        // console.log(app.globalData.carNum)
      }
    })
  },
  //事件处理函数
  toSearch(e) {
    this.setData({
      isTap: true
    });
    wx.navigateTo({
      url: "../search/index"
    })
  }
})
