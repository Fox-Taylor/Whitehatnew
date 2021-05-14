const crypto = require('crypto-js');
// encrypt
const ciphertext = crypto.AES.encrypt('this is my message', 'secretkey123').toString();
// decrypt
const bytes = crypto.AES.decrypt(ciphertext, 'secretkey123');
const text = bytes.toString(crypto.enc.Utf8);


console.log(bytes)
console.log(ciphertext)
console.log(text);

