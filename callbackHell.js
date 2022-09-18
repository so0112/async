const f1 = (callback) => {
  setTimeout(() => {
    console.log("1번 완료");
    callback();
  }, 1000);
};

const f2 = (callback) => {
  setTimeout(() => {
    console.log("2번 완료");
    callback();
  }, 1000);
};

const f3 = (callback) => {
  setTimeout(() => {
    console.log("3번 완료");
    callback();
  }, 1000);
};

// 콜백 지옥
console.log("콜백 지옥 시작");
// f1(() => {
//   f2(() => {
//     f3(() => {
//       console.log("끝");
//     });
//   });
// });
