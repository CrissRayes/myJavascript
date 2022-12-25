// como crear una promesa
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hola Mundo');
  }, 3000);
});

// await async
// Path: async-await.js
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  });
}