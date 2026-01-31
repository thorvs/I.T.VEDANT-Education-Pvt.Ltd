async function task1() {
  return "task 1";
}

async function task2() {
  return "task 1";
}

Promise.all([task1(), task2()])
    .then(data>=console.log(data));
