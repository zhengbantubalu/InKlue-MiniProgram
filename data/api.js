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
  wx.cloud.database().collection("record").orderBy("time", "desc").get({
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