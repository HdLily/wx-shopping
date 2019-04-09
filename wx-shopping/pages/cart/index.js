
Page({
    data: {
        carts: [],               // 购物车列表
        hasList: false,          // 列表是否有数据
        carNum: 5,
        totalPrice: 0,           // 总价，初始为0
        selectAllStatus: true,    // 全选状态，默认全选
        obj: {
            name: "hello"
        }
    },
    onShow() {
        this.setData({
            hasList: true,
            carts: [
                { id: 1, title: 'cec卫衣2019新款女韩版宽松春秋套头薄款潮ins黄色连帽上衣超火', image: 'http://img.alicdn.com/imgextra/i2/1599675055/TB2yeShDFmWBuNjSspdXXbugXXa_!!1599675055.jpg_430x430q90.jpg', num: 4, price: 69, selected: true },
                { id: 2, title: 'cec卫衣2019新款女韩版宽松春秋套头薄款潮ins黄色连帽上衣超火', image: 'http://img.alicdn.com/imgextra/i4/1599675055/TB2DYS0DKGSBuNjSspbXXciipXa_!!1599675055.jpg_430x430q90.jpg', num: 1, price: 69, selected: true }
            ]
        });
        this.getTotalPrice();
        this.getTotalNum();
    },
    /**
     * 当前商品选中事件
     */
    selectList(e) {
        let selectAllStatus = this.data.selectAllStatus;
        const index = e.currentTarget.dataset.index;
        let carts = this.data.carts;
        // console.log(cart_list[index].selected);
        const selected = carts[index].selected;
        carts[index].selected = !selected;
        console.log(selected);
        //购物车列表里的条目只要有一个取消，全选就取消
        const symbol = carts.some(cart => {
            return cart.selected === false;
        });
        if (symbol) {
            this.data.selectAllStatus = false;
        } else {
            this.data.selectAllStatus = true;
        }

        this.setData({
            carts,
            selectAllStatus: this.data.selectAllStatus
        });
        this.getTotalPrice();
        this.getTotalNum();
    },

    /**
     * 删除购物车当前商品
     */
    deleteList(e) {
        const index = e.currentTarget.dataset.index;
        let carts = this.data.carts;
        carts.splice(index, 1);
        this.setData({
            carts: carts
        });
        if (!carts.length) {
            this.setData({
                hasList: false
            });
        } else {
            this.getTotalPrice();
            this.getTotalNum();
        }
    },

    /**
     * 购物车全选事件
     */
    selectAll(e) {
        let selectAllStatus = this.data.selectAllStatus;
        selectAllStatus = !selectAllStatus;
        let carts = this.data.carts;

        for (let i = 0; i < carts.length; i++) {
            carts[i].selected = selectAllStatus;
        }
        this.setData({
            selectAllStatus: selectAllStatus,
            carts: carts
        });
        this.getTotalPrice();
        this.getTotalNum();
    },

    /**
     * 绑定加数量事件
     */
    addCount(e) {
        const index = e.currentTarget.dataset.index;
        let carts = this.data.carts;
        let num = carts[index].num;
        num = num + 1;
        carts[index].num = num;
        this.setData({
            carts: carts
        });
        this.getTotalPrice();
        this.getTotalNum();
    },

    /**
     * 绑定减数量事件
     */
    minusCount(e) {
        const index = e.currentTarget.dataset.index;
        const obj = e.currentTarget.dataset.obj;
        let carts = this.data.carts;
        let num = carts[index].num;
        if (num <= 1) {
            return false;
        }
        num = num - 1;
        carts[index].num = num;
        this.setData({
            carts: carts
        });
        this.getTotalPrice();
        this.getTotalNum();
    },

    /**
     * 计算总价
     */
    getTotalPrice() {
        let carts = this.data.carts;                  // 获取购物车列表
        let total = 0;
        for (let i = 0; i < carts.length; i++) {         // 循环列表得到每个数据
            if (carts[i].selected) {                     // 判断选中才会计算价格
                total += carts[i].num * carts[i].price;   // 所有价格加起来
            }
        }
        this.setData({                                // 最后赋值到data中渲染到页面
            carts: carts,
            totalPrice: total.toFixed(2)
        });
    },
    getTotalNum(e) {
        let carts = this.data.carts;
        let total = 0;
        for (let i = 0; i < carts.length; i++) {
            if (carts[i].selected) {
                total += carts[i].num;
            }
        }
        this.setData({
            carNum: total,
        })
    }

})
