const events = require("events");
const event = new events.EventEmitter();


function firstGreeting(seconds){
  console.log("Bonjour");
  setTimeout(()=>{event.emit('dopahar')}, seconds*1000);
}

function secondGreeting(){
  console.log("Bon-apres-midi");
}
event.on('subah', firstGreeting);
event.on('dopahar', secondGreeting);

event.emit('subah', 2);
