const API_URL = "https://api.github.com/users/NeetuSarkar";

//await can only be used indside async function
async function handlePromise() {
  try {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (err) {
    console.log(err);
  }
}

handlePromise();
