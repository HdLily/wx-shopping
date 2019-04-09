const showDetail=(e)=>{
    const id=e.currentTarget.dataset.pid;
    console.log(id);
    wx.navigateTo({
        url: `/pages/index/goods-detail/index?id=${id}`
    })
};
export default showDetail;