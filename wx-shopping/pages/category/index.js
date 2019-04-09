
const app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        cate_nav_list: [
            { name: "手机", id: "phone" },
            { name: "电脑", id: "computer" },
            { name: "女装", id: "clothes" },
            { name: "美妆", id: "beauty" },
            { name: "电器", id: "ele" },
            { name: "鞋包", id: "shoes" },
            { name: "美食", id: "food" },
            { name: "母婴", id: "baby" },
            { name: "家居", id: "jiaju" },
            { name: "运动", id: "sport" },
            { name: "生活", id: "life" }
        ],
        curIndex: 0,
        toView: "new",
        detail: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    switchCategory(e) {
        // console.log(e.currentTarget.dataset.id);
        const curIndex = e.currentTarget.dataset.index ? e.currentTarget.dataset.index : 0;
        this.setData({
            toView: e.currentTarget.dataset.id,
            curIndex
        });
    },
    onLoad: function (options) {
        const detail = app.globalData.category;
        this.setData({
            detail
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})