function mockGetPracticeDataByIdx(idx) {
  return idx < mockPracticesData.length ? mockPracticesData[idx] : null;
}

function mockGetPracticeDataById(id) {
  return mockPracticesData.find((item) => item.id === id);
}

export function mockGetPracticesData(args) {
  let baseIdx = 0;
  let length = 9;
  return new Array(length).fill(0).map(
    (_, idx) => mockGetPracticeDataByIdx(idx + baseIdx)
  );
}

let mockPracticesData = [{
  id: "1",
  name: "峄山碑·壹",
  coverImg: "https://s21.ax1x.com/2024/04/29/pkiOFOA.jpg"
}, {
  id: "2",
  name: "峄山碑·贰",
  coverImg: "https://s21.ax1x.com/2024/04/29/pkiOAeI.jpg"
}, {
  id: "3",
  name: "峄山碑·叁",
  coverImg: "https://s21.ax1x.com/2024/04/29/pkiOEwt.jpg"
}, {
  id: "4",
  name: "峄山碑·壹",
  coverImg: "https://s21.ax1x.com/2024/04/29/pkiOFOA.jpg"
}, {
  id: "5",
  name: "峄山碑·贰",
  coverImg: "https://s21.ax1x.com/2024/04/29/pkiOAeI.jpg"
}, {
  id: "6",
  name: "峄山碑·叁",
  coverImg: "https://s21.ax1x.com/2024/04/29/pkiOEwt.jpg"
}, {
  id: "7",
  name: "峄山碑·壹",
  coverImg: "https://s21.ax1x.com/2024/04/29/pkiOFOA.jpg"
}, {
  id: "8",
  name: "峄山碑·贰",
  coverImg: "https://s21.ax1x.com/2024/04/29/pkiOAeI.jpg"
}, {
  id: "9",
  name: "峄山碑·叁",
  coverImg: "https://s21.ax1x.com/2024/04/29/pkiOEwt.jpg"
}]