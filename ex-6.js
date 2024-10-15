// Exercise #6
let getJohnProfile = async() => {
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

let getJohnOrders = async() => {
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

async function asyncFunction() {
  const JohnProfile = await getJohnProfile()
  console.log(JohnProfile)
  const JohnOrders = await getJohnOrders()
  console.log(JohnOrders) 
}

asyncFunction()
