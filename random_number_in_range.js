// generate random number between 1 and 20 with Math.random()
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(random(1, 20)); // 1 - 20

// step by step how to use Math.random()
console.log(Math.random()); // 0.0392156862745098
console.log(Math.floor(Math.random() * (10 - 1 + 1) + 1)); // 1

// generate random number with Math.random()
const random = () => {
  return Math.floor(Math.random() * 10) + 1;
}
console.log(random()); // 1 - 10

//////////////////////////////////////////////////////////////
// Using node crypto module to generate random number
// how to require crypto module
const crypto = require('crypto');
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

// example step by step how to use crypto.randomBytes
const crypto = require('crypto');
const buffer = crypto.randomBytes(1);
console.log(buffer); // <Buffer 0a>
console.log(buffer.readUInt8(0)); // 10
console.log(buffer.readUInt8(0) / (0xff + 1)); // 0.0392156862745098
console.log(Math.floor(0.0392156862745098 * (10 - 1 + 1) + 1)); // 1

