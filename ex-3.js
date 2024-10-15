//Exercise #3
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

let onSuccessProfile = (data) => {
  console.log(data);
};

let onSuccessOrder = (data) => {
  console.log(data);
};

getJohnProfile()
  .then(onSuccessProfile)
  .then(getJohnOrders)
  .then(onSuccessOrder);
