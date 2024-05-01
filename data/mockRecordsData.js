function mockGetRecordDataByIdx(idx) {
  return idx < mockRecordsData.length ? mockRecordsData[idx] : null;
}

export function mockGetRecordDataById(id) {
  return mockRecordsData.find((item) => item.id === id);
}

export function mockGetRecordsData() {
  let length = 9;
  return new Array(length).fill(0).map(
    (_, idx) => mockGetRecordDataByIdx(idx)
  );
}

let mockRecordsData = [{
  id: "1",
  name: "峄山碑·壹",
  time: "2024.04.30 08:30",
  coverImg: "https://s21.ax1x.com/2024/04/29/pkiOFOA.jpg",
  charIds: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "1", "2", "3", "4", "5"]
}, {
  id: "2",
  name: "峄山碑·贰",
  time: "2024.04.30 08:31",
  coverImg: "https://s21.ax1x.com/2024/04/29/pkiOAeI.jpg",
  charIds: ["6", "7", "8", "9"]
}, {
  id: "3",
  name: "峄山碑·叁",
  time: "2024.04.30 08:32",
  coverImg: "https://s21.ax1x.com/2024/04/29/pkiOEwt.jpg",
  charIds: ["10", "11", "12", "13", "14"]
}, {
  id: "4",
  name: "峄山碑·壹",
  time: "2024.04.30 08:33",
  coverImg: "https://s21.ax1x.com/2024/04/29/pkiOFOA.jpg",
  charIds: ["1", "2", "3", "4", "5"]
}, {
  id: "5",
  name: "峄山碑·贰",
  time: "2024.04.30 08:34",
  coverImg: "https://s21.ax1x.com/2024/04/29/pkiOAeI.jpg",
  charIds: ["6", "7", "8", "9"]
}, {
  id: "6",
  name: "峄山碑·叁",
  time: "2024.04.30 08:35",
  coverImg: "https://s21.ax1x.com/2024/04/29/pkiOEwt.jpg",
  charIds: ["10", "11", "12", "13", "14"]
}, {
  id: "7",
  name: "峄山碑·壹",
  time: "2024.04.30 08:36",
  coverImg: "https://s21.ax1x.com/2024/04/29/pkiOFOA.jpg",
  charIds: ["1", "2", "3", "4", "5"]
}, {
  id: "8",
  name: "峄山碑·贰",
  time: "2024.04.30 08:37",
  coverImg: "https://s21.ax1x.com/2024/04/29/pkiOAeI.jpg",
  charIds: ["6", "7", "8", "9"]
}, {
  id: "9",
  name: "峄山碑·叁",
  time: "2024.04.30 08:38",
  coverImg: "https://s21.ax1x.com/2024/04/29/pkiOEwt.jpg",
  charIds: ["10", "11", "12", "13", "14"]
}]