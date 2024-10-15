// Exercise #5
let getJohnProfile = async () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

async function asynchonousFunction() {
  try {
    const JohnProfile = await getJohnProfile();
    console.log(JohnProfile);
  } catch (error) {
    console.log(error);
  }
}

asynchonousFunction();
