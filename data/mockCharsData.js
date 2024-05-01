function mockGetCharDataByIdx(idx) {
  return idx < mockCharsData.length ? mockCharsData[idx] : null;
}

function mockGetCharDataById(id) {
  return mockCharsData.find((item) => item.id === id);
}

export function mockGetCharsData(practiceId) {
  let length = 14;
  return new Array(length).fill(0).map(
    (_, idx) => mockGetCharDataByIdx(idx)
  );
}

export function mockGetCharsDataByIds(ids) {
  return ids.map(id => mockGetCharDataById(id));
}

let mockCharsData = [{
  id: "1",
  name: "土",
  stdImg: "https://s21.ax1x.com/2024/04/05/pFqP31P.jpg"
}, {
  id: "2",
  name: "王",
  stdImg: "https://s21.ax1x.com/2024/04/05/pFqPMtA.jpg"
}, {
  id: "3",
  name: "五",
  stdImg: "https://s21.ax1x.com/2024/04/05/pFqPQfI.jpg"
}, {
  id: "4",
  name: "上",
  stdImg: "https://s21.ax1x.com/2024/04/05/pFq9Z36.jpg"
}, {
  id: "5",
  name: "下",
  stdImg: "https://s21.ax1x.com/2024/04/05/pFqPKkd.jpg"
}, {
  id: "6",
  name: "不",
  stdImg: "https://s21.ax1x.com/2024/04/05/pFq9A41.jpg"
}, {
  id: "7",
  name: "之",
  stdImg: "https://s21.ax1x.com/2024/04/05/pFqP86f.jpg"
}, {
  id: "8",
  name: "山",
  stdImg: "https://s21.ax1x.com/2024/04/05/pFq9FE9.jpg"
}, {
  id: "9",
  name: "廿",
  stdImg: "https://s21.ax1x.com/2024/04/05/pFq9kNR.jpg"
}, {
  id: "10",
  name: "四",
  stdImg: "https://s21.ax1x.com/2024/04/05/pFqFiM6.jpg"
}, {
  id: "11",
  name: "日",
  stdImg: "https://s21.ax1x.com/2024/04/05/pFq9egK.jpg"
}, {
  id: "12",
  name: "石",
  stdImg: "https://s21.ax1x.com/2024/04/05/pFq9mjO.jpg"
}, {
  id: "13",
  name: "六",
  stdImg: "https://s21.ax1x.com/2024/04/05/pFq9V9x.jpg"
}, {
  id: "14",
  name: "天",
  stdImg: "https://s21.ax1x.com/2024/04/05/pFqFFsK.jpg"
}]