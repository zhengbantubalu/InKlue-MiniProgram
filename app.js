// app.js

App({
  async onLaunch() {
    // 初始化云服务
    wx.cloud.init();
    const db = wx.cloud.database();
    // 重置我自己账户的数据集合(仅用于测试)
    // await db.collection("user").doc("obSOH6wRC8I8EDiE9_O5NWDXlF7E").remove();
    // await db.collection("record").where({
    //   _openid: "obSOH6wRC8I8EDiE9_O5NWDXlF7E"
    // }).remove();
    // await db.collection("written-char").where({
    //   _openid: "obSOH6wRC8I8EDiE9_O5NWDXlF7E"
    // }).remove();
    // 获取用户openid
    wx.cloud.callFunction({
      name: "getOpenid"
    }).then(res => {
      // 保存openid到本地
      wx.setStorageSync("openid", res.result);
      // 查询user集合，用户不存在则添加一条记录
      db.collection("user").doc(res.result).get({
        fail: function (err) {
          db.collection("user").add({
            data: {
              _id: res.result,
              recordIds: []
            }
          })
        }
      })
    })
  }
})