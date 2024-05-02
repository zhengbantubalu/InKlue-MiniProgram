// pages/camera/camera.js

import {
  getPracticeDataById,
  getCharsDataByIds
} from "../../data/api"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    practiceId: "",
    chars: [],
    photos: [],
    index: 0
  },

  onClickShot() {
    if (this.data.index < this.data.chars.length) {
      wx.createCameraContext().takePhoto({
        quality: "medium",
        success: (res) => {
          let tempFilePath = res.tempImagePath;
          let photos = this.data.photos;
          photos.push(tempFilePath);
          this.setData({
            photos,
            index: this.data.index + 1
          })
          if (this.data.index == this.data.chars.length) {
            wx.setStorageSync("photos", this.data.photos);
            wx.getStorageInfo({
              success(res) {
                console.log(res.keys)
                console.log(res.currentSize)
                console.log(res.limitSize)
              }
            });
            for (let i = 0; i < this.data.photos.length; i++) {
              console.log(this.data.photos[i])
            }
            wx.redirectTo({
              url: "/pages/confirm/confirm?practiceId=" + this.data.practiceId
            })
          }
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let practiceId = options.practiceId;
    let chars = [];
    if (practiceId) {
      let practice = getPracticeDataById(practiceId);
      chars = getCharsDataByIds(practice.charIds);
    }
    this.setData({
      practiceId,
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