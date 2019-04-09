import amounts from '../../../lib/data/buycardata.js';
const app = getApp()

Page({
    data: {
        goods: [],
        server: [],
        recommend: [],
        hotSale: [],
        goods_information: [],
        model: '',
        modNum: '',
        image: "http://img.alicdn.com/imgextra/i2/1599675055/TB2yeShDFmWBuNjSspdXXbugXXa_!!1599675055.jpg_430x430q90.jpg",
        amounts,
        num: 1,
        hide: true,
        serHide: true,
        carNum: 0,
        showRecommend: true,
        curIndex: 0,
        current: 1
        // lists: []
    },

    onLoad() {
        const goods = app.globalData.goods,
            server = app.globalData.server,
            recommend = app.globalData.recommend,
            hotSale = app.globalData.hotSale,
            goods_information = app.globalData.goods_information;
        this.setData({
            goods,
            server,
            recommend,
            hotSale,
            goods_information
        })
    },
    previewImage(e) {
        const index = e.currentTarget.dataset.index;	//获取swiper里的图片的下标
        const slide = this.data.goods.goods_slides; //获取商品轮播图
        const imgList = []; //定义一个数组来存放轮播图的url
        // console.log(slide);
        slide.map(item => {
            imgList.push(item.goods_url);
        });
        wx.previewImage({
            current: imgList[index], // 当前显示图片的链接，不填则默认为 urls 的第一张
            urls: imgList
        })
    },
    changeSwiper(e) {
        var current = e.detail.current + 1;
        this.setData({
            current
        })
    },
    switchCategory(e) {
        console.log(e)
        let index = e.currentTarget.dataset.index;
        if (index == 0) {
            this.setData({
                showRecommend: true
            })
        } else {
            this.setData({
                showRecommend: false
            })
        }
        this.setData({
            curIndex: e.currentTarget.dataset.index ? e.currentTarget.dataset.index : 0,
        })
    },
    bindAmountChange(e) {
        // console.log(e)
        let amounts = this.data.amounts;
        let strVal = e.detail.value;
        let image;
        for (let amount of amounts) {
            amount.checked = amount.value == strVal;
            // console.log(amount)
            if (amount.checked == true) {
                image = amount.image;
            }
        }
        this.setData({
            amounts,
            model: '已选择：' + strVal,
            image
        })
    },
    goBuy(e) {
        if (this.data.hide) {
            this.setData({
                hide: false,
            })
        }
        if (this.data.model) {
            wx.showToast({
                title: '购买成功',
            })
            this.setData({
                hide: true,
            })
        }


    },
    goCar(e) {
        wx.switchTab({
            url: "/pages/cart/index",
            success: (res) => {
                wx.setStorage({
                    key: 'carNum',
                    data: this.data.carNum
                })
            }
        })
    },

    addCar(e) {
        let num = this.data.num;
        let carNum = this.data.carNum;
        carNum += num;
        if (this.data.model) {
            this.setData({
                carNum
            })
            wx.showToast({
                title: '加入购物车成功',
                icon: 'success'
            })
        }
        if (this.data.hide) {
            this.setData({
                hide: false
            })
        }
        wx.setStorage({
            key: 'carNum',
            data: this.data.carNum
        })

        num += num;
        let temp = {
            title: 'cec卫衣2019新款女韩版宽松春秋套头薄款潮ins黄色连帽上衣超火',
            price: '69.00',
            model: this.data.model,
            num: this.data.num,
            image: 'http://img.alicdn.com/imgextra/i2/1599675055/TB2yeShDFmWBuNjSspdXXbugXXa_!!1599675055.jpg_430x430q90.jpg',
            selected: true,
            hasCarNum: this.data.carNum,
            isTouchMove: false
        }
        if (this.data.model) {
            const list = [
                temp,
                ...this.data.lists
            ]
            this.setData({
                lists: list
            })
        }

        wx.setStorage({
            key: 'lists',
            data: this.data.lists
        })
        console.log(this.data.lists)


    },


    actionSheet(e) {
        this.setData({
            hide: false,
        })
    },

    upactionSheet(e) {
        if (this.data.model) {
            this.data.modNum = '*' + this.data.num;
        }
        this.setData({
            hide: true,
            modNum: this.data.modNum,
            model: this.data.model
        })
    },
    actionSer(e) {
        this.setData({
            serHide: false
        })
    },

    upactionSer(e) {
        this.setData({
            serHide: true
        })
    },
    dropNum(e) {
        let num = this.data.num;
        let model = this.data.model;
        let modNum = this.data.modNum;
        num--;
        if (num < 1) {
            wx.showToast({
                title: '必须买一件',
                icon: 'none'
            })
            num = 1;
        }
        this.setData({
            num,
        })
    },

    addNum(e) {
        let num = this.data.num;
        let modNum = this.data.modNum;
        let model = this.data.model;
        num++;
        this.setData({
            num,
        })
    },
    onShow: function () {
        wx.getStorage({
            key: 'carNum',
            success: (res) => {
                this.setData({
                    carNum: res.data
                })
                app.globalData.carNum = this.data.carNum;
            }
        })
        // wx.getStorage({
        //     key: 'lists',
        //     success: (res) => {
        //         this.setData({
        //             lists: res.data
        //         })
        //     }
        // })
    }
})
