/**
 * What is async?
 * What is await?
 * How async await works behind the scenes?
 * Examples of using async/await
 * Error Handaling
 * Interviews
 * Async await vs Promise.them/.catch
 *
 */

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 Resolved Value!");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promive 2 Resolved Value");
  }, 5000);
});

async function handlePromise() {
  console.log("Hello World");
  const val = await p1;
  console.log("Namaste JavaScript");
  console.log(val);

  const val2 = await p2;
  console.log("Namaste JavaScript 2");
  console.log(val2);
}

handlePromise();

// function getData() {
//   //js engine will not wait promise to be resolved
//   p.then((res) => console.log(res));
//   console.log("Namaste javaScript");
// }

// getData();
