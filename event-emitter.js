//import
const events = require("events");
//assign
const eventEmitter = new events.EventEmitter();
//create {if on ==> once it will trigger for once}
eventEmitter.on("sayHi", (user,arrayim) =>
  console.log(`Hello ${user.name} ${user.surname} ${arrayim.map(it=>it)} !`)
);
const data = {name:'Reyhan',surname:'Turkkal'}
const arrayim = [1,2,3,4]
//trigger
eventEmitter.emit("sayHi", data,arrayim);
