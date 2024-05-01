// pages/practice_detail/practice_detail.js

import {
  getCharsDataByIds,
  getPracticeDataById
} from "../../data/api"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    practiceId: "",
    practice: {},
    chars: []
  },

  onClickCharDetail: function (event) {
    let index = event.currentTarget.dataset.index;
    wx.navigateTo({
      url: "/pages/char_detail/char_detail?practiceId=" + this.data.practiceId + "&index=" + index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let practiceId = options.practiceId;
    let practice = getPracticeDataById(practiceId);
    let chars = getCharsDataByIds(practice.charIds);
    this.setData({
      practiceId,
      practice,
      chars
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})