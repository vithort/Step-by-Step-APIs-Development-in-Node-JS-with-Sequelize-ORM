var message = 'Updated message!';
var other = 'Other message!';

// console.log(module);

function sayHello() {
  console.log('This hello is from second.js file!');
}

// module.exports.message = message;
// module.exports.other = other;
// module.exports.sayHello = sayHello;

// ou:

module.exports = {
  message: message,
  other: other,
  sayHello: sayHello,
};
