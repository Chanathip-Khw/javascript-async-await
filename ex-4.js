// Exercise #4
let getJohnProfile = async () => {
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

async function asynchonousFunction() {
  const JohnProfile = await getJohnProfile();
  console.log(JohnProfile);
}

asynchonousFunction();
