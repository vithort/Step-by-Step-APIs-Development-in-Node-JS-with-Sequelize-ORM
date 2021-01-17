function sayHello() {
  // console.log('Welcome to the course of Sequelize ORM with NodeJS');
  // console.log(global);
  // global.console.log('Global Object');
  globalThis.setTimeout(function () {
    console.log('Message will run after 2 seconds!');
  }, 2000);
}

sayHello();
