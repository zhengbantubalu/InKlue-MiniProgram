// pages/confirm/confirm.js

import {
  getPracticeDataById,
  getStdCharsDataByIds,
  setRecordData
} from "../../data/api"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    practiceId: "",
    practice: {},
    chars: [],
    buttonEnable: false
  },

  async onClickStart() {
    // 按钮锁
    if (!this.data.buttonEnable) {
      return;
    }
    this.setData({
      buttonEnable: false
    })
    // 显示等待信息
    wx.showToast({
      title: "上传中，请稍候",
      icon: "loading",
      duration: 2000
    })
    // 上传图像文件
    const openid = wx.getStorageSync("openid");
    for (let i = 0; i < this.data.chars.length; i++) {
      const timestamp = new Date().getTime();
      const res = await wx.cloud.uploadFile({
        cloudPath: "written-char/" + openid + "_" + timestamp + "_" + this.data.chars[i].name + ".jpg",
        filePath: this.data.chars[i].writtenImg
      })
      this.data.chars[i].writtenImg = res.fileID;
    }
    // 获取时间字符串
    const now = new Date();
    const time = `${now.getFullYear()}.${(now.getMonth() + 1).toString().padStart(2, '0')}.${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
    // 设置记录数据
    await setRecordData({
      name: this.data.practice.name,
      coverImg: this.data.practice.coverImg,
      chars: this.data.chars,
      time
    });
    // 跳转到“我的”页面
    wx.reLaunch({
      url: '/pages/user/user'
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let photos = wx.getStorageSync("photos");
    this.setData({
      practiceId: options.practiceId
    })
    getPracticeDataById(this.data.practiceId, (practice) => {
      this.setData({
        practice
      })
      wx.setNavigationBarTitle({
        title: this.data.practice.name
      })
      getStdCharsDataByIds(this.data.practice.charIds, (chars) => {
        for (let i = 0; i < chars.length; i++) {
          chars[i].writtenImg = photos[i];
        }
        this.setData({
          chars,
          buttonEnable: true
        })
      })
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