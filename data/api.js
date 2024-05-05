export function getStdCharsData(callback) {
  wx.cloud.database().collection("std-char").get({
    success: function (res) {
      callback(res.data)
    }
  })
}

export function getStdCharsDataByIds(ids, callback) {
  const db = wx.cloud.database();
  const _ = db.command;
  db.collection("std-char").where({
    _id: _.in(ids)
  }).get({
    success: function (res) {
      callback(res.data)
    }
  })
}

export function getWrittenCharsDataByIds(ids, callback) {
  const db = wx.cloud.database();
  const _ = db.command;
  db.collection("written-char").where({
    _id: _.in(ids)
  }).orderBy("stdId", "asc").get({
    success: function (res) {
      callback(res.data)
    }
  })
}

export function getPracticesData(callback) {
  wx.cloud.database().collection("practice").get({
    success: function (res) {
      callback(res.data)
    }
  })
}

export function getPracticeDataById(id, callback) {
  wx.cloud.database().collection("practice").doc(id).get({
    success: function (res) {
      callback(res.data)
    }
  })
}

export function getRecordsData(callback) {
  const _openid = wx.getStorageSync("openid");
  wx.cloud.database().collection("record").where({
    _openid
  }).orderBy("time", "desc").get({
    success: function (res) {
      callback(res.data)
    }
  })
}

export function getRecordDataById(id, callback) {
  wx.cloud.database().collection("record").doc(id).get({
    success: function (res) {
      callback(res.data)
    }
  })
}

export async function setWrittenCharsData(chars) {
  let charIds = [];
  const db = wx.cloud.database();
  for (let i = 0; i < chars.length; i++) {
    chars[i].stdId = chars[i]._id;
    delete chars[i]._id;
    const res = await db.collection("written-char").add({
      data: chars[i]
    })
    charIds.push(res._id);
  }
  return charIds;
}

export async function setRecordData(data) {
  data.charIds = await setWrittenCharsData(data.chars);
  delete data.chars;
  const db = wx.cloud.database();
  db.collection("record").add({
    data,
    success: function (res) {
      const openid = wx.getStorageSync("openid");
      db.collection("user").doc(openid).update({
        data: {
          recordIds: db.command.push(res._id)
        },
        success: function (res) {
          wx.showToast({
            title: "上传成功",
            icon: "success",
            duration: 2000
          })
        }
      })
    }
  })
}