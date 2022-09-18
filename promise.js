const f1 = () => {
  return new Promise((res, req) => {
    setTimeout(() => {
      res("1번 완료");
    }, 1000);
  });
};

const f2 = (msg) => {
  console.log(msg);
  return new Promise((res, req) => {
    setTimeout(() => {
      res("2번 완료");
    }, 3000);
  });
};

const f3 = (msg) => {
  console.log(msg);
  return new Promise((res, req) => {
    setTimeout(() => {
      res("3번 완료");
    }, 2000);
  });
};

// 콜백 지옥 프로미스 리팩토링
f1()
  .then((res) => f2(res))
  .then((res) => f3(res))
  .then((res) => {
    console.log(res);
  });
