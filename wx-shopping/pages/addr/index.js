// page/component/new-pages/user/address/address.js
Page({
    data: {
        address: {
            name: '',
            phone: '',
            detail: '',
            postCode: ''
        }
    },
    onLoad() {
        var self = this;

        wx.getStorage({
            key: 'address',
            success: function (res) {
                self.setData({
                    address: res.data
                })
            }
        })
    },
    formSubmit(e) {
        const value = e.detail.value;
        let { name, phone, detail, postCode} = value;
        if (name == '' || phone == '' || detail == ''|| postCode == '') {
            wx.showModal({
                title: '提示',
                content: '请完善信息',
                showCancel: false
            });
        } else if (!/^[1][3,4,5,7,8]\d{9}$/.test(phone)) {
            wx.showModal({
                title: '提示',
                content: '手机号格式不规范',
                showCancel: false
            });
        } else if (!/^[0-9]{6}$/.test(postCode)) {
            wx.showModal({
                title: "提示",
                content: "邮政编码不规范",
                showCancel: false
            }); 
        } else {
            wx.setStorage({
                key: 'address',
                data: value,
                success() {
                    wx.navigateBack()
                }
            })
        }
    }
   
})