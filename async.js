// 1. async 비동기로 동작할 함수에 붙여주는 키워드
// async 키워드가 붙은 함수는 Promise를 반환한다.
// 원래 Promise를 반환하는 함수에 async를 붙여도 같은 결과값 반환함
const fetchUser = async () => {
  return "완료";
};

const user = fetchUser();
user.then(console.log);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getFirst() {
  await delay(1000);
  return "1번";
}

async function getSecond() {
  await delay(1000);
  return "2번";
}

// 직렬 수행 2초 소요
async function foo1() {
  const first = await getFirst();
  const second = await getSecond();
  return `foo1 : ${first} + ${second}`;
}

// 병렬 수행 1초 소요
async function foo2() {
  const firstPromise = getFirst();
  const secondPromise = getSecond();

  const first = await firstPromise;
  const second = await secondPromise;

  return `foo2 : ${first} + ${second}`;
}

foo1().then(console.log);
foo2().then(console.log);
