// como crear una promesa
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hola Mundo');
  }, 3000);
});
