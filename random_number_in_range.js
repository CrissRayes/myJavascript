// generate random number between 1 and 10 with Math.random()
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(random(1, 10)); // 1 - 10

// how to use crypto.randomBytes() to generate a random number
const random = () => {
  return crypto.randomBytes(1).readUInt8(0);
}

// generate random number in a range with crypto.randomBytes
const crypto = require('crypto');
const random = (min, max) => {
  const buffer = crypto.randomBytes(1);
  const randomNumber = buffer.readUInt8(0) / (0xff + 1);
  return Math.floor(randomNumber * (max - min + 1) + min);
}
console.log(random(1, 10)); // 1 - 10

// how to use crypto.randomBytes
const crypto = require('crypto');
const buffer = crypto.randomBytes(1);
console.log(buffer); // <Buffer 0a>
console.log(buffer.readUInt8(0)); // 10
console.log(buffer.readUInt8(0) / (0xff + 1)); // 0.0392156862745098
console.log(Math.floor(0.0392156862745098 * (10 - 1 + 1) + 1)); // 1

// how to use Math.random()
console.log(Math.random()); // 0.0392156862745098
console.log(Math.floor(Math.random() * (10 - 1 + 1) + 1)); // 1

// como usar Math.random() para generar un numero aleatorio entre 1 y 10
const random = () => {
  return Math.floor(Math.random() * (10 - 1 + 1) + 1);
}
console.log(random()); // 1 - 10
